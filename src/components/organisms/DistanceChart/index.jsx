import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { getUserActivity } from '../../../services/dataService'
import { addDays, getWeekStart, todayISO, formatShortDate } from '../../../utils/date'
import { averageWeeklyDistance, groupDistanceByWeek } from '../../../utils/activity'
import Button from  '../../atoms/Button'
import Card from '../../atoms/Card'
import ErrorMessage from '../../atoms/ErrorMessage'
import './DistanceChart.css'


function DistanceTooltip({ active, payload }) {
  if (!active || !payload?.length) {
    return null
  }

  const { start, end, distance } = payload[0].payload

  return (
    <div className='distance-chart__tooltip'>
      <p className='distance-chart__tooltip-dates'>
        {formatShortDate(start)} - {formatShortDate(end)}
      </p>
      <p className='distance-chart__tooltip-value'>
        {distance}km
      </p>
    </div>
  )
}

function DistanceChart({ className= '' }) {

  const currentWeekStart = getWeekStart(todayISO())
  const latestStart = addDays(currentWeekStart, -21)

  const [start, setStart] = useState(latestStart)
  const [sessions, setSessions] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const isLatestPeriod = start === latestStart
  const end = addDays(start, 27)

  useEffect(() => {

    let ignore = false

    async function loadActivity() {
      setIsLoading(true)
      setError(null)
      try {
        const data = await getUserActivity(start, end)
        if (!ignore) {
          setSessions(data)
        }
      } catch (err) {
        if (!ignore) {
          setError(err)
        }
      } finally {
        if (!ignore) {
          setIsLoading(false)
        }
      }
    }

    loadActivity()

    return () => {
      ignore = true
    }
  }, [start, end])

  const handlePrevious = () => {
    setStart(addDays(start, -28))
  }

  const handleNext = () => {
    setStart(addDays(start, 28))
  }

  const cardClassName = `distance-chart ${className}`.trim()

  if (isLoading) {
    return (<Card className={cardClassName}>Chargement...</Card>)
  }

  if (error) {
    return (
      <Card className={cardClassName}>
        <ErrorMessage>Impossible de charger vos distances</ErrorMessage>
      </Card>
    )
  }

  const weeks = groupDistanceByWeek(sessions, start)
  const average = averageWeeklyDistance(weeks)

  return (
    <Card className={cardClassName}>
      <div className="distance-chart__header">
        <div>
          <h3 className="distance-chart__title">{average}km en moyenne</h3>
          <p className="distance-chart__subtitle">Total des kilomètres des 4 dernieres semaines</p>
        </div>

        <div className='distance-chart__nav'>
          <Button variant='icon' onClick={handlePrevious} aria-label="Période précédente">
            ‹
          </Button>

          <span className='distance-chart__range'>
            {formatShortDate(start)} - {formatShortDate(end)}
          </span>

          <Button variant='icon' onClick={handleNext} disabled={isLatestPeriod} aria-label="Période suivante">
            ›
          </Button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={weeks}>
          <CartesianGrid vertical={false} stroke="var(--color-border)" />
          <XAxis
            dataKey="week"
            tickLine={false}
            tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
          />
          <YAxis  
            axisLine={true}
            tickLine={false}
            tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
          />

          <Tooltip content={<DistanceTooltip />} />

          <Legend position="bottom" iconType="circle" />

          <Bar 
            dataKey="distance"
            name="km"
            fill="var(--color-primary-soft)"
            barSize={14}
            radius={[30,30,30,30]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default DistanceChart
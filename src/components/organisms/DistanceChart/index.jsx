import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { getUserActivity } from '../../../services/dataService'
import { addDays, getWeekStart, todayISO, formatShortDate } from '../../../utils/date'
import { averageWeeklyDistance, groupDistanceByWeek } from '../../../utils/activity'
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
  const [sessions, setSessions] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const currentMonday = getWeekStart(todayISO())
  const start = addDays(currentMonday, -21)
  const end = addDays(currentMonday, 6)

  useEffect(() => {
    async function loadActivity() {
      try {
        const data = await getUserActivity(start, end)
        setSessions(data)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadActivity()
  }, [start, end])

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
        <h3 className="distance-chart__title">{average}km en moyenne</h3>
        <p className="distance-chart__subtitle">Total des kilomètres des 4 dernieres semaines</p>
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

          <Legend verticalAlign="bottom" align="left" iconType="circle" />

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
import { useEffect, useState } from 'react'
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { getUserActivity } from '../../../services/dataService'
import { addDays, formatShortDate, getWeekStart, todayISO } from '../../../utils/date'
import { averageHeartRate, groupHeartRateByDay } from '../../../utils/activity'
import Button from '../../atoms/Button'
import Card from '../../atoms/Card'
import ErrorMessage from '../../atoms/ErrorMessage'
import './HeartRateChart.css'


function HeartRateChart({ className='' }) {

    const currentWeekStart = getWeekStart(todayISO())

    const [weekStart, setWeekStart] = useState(currentWeekStart)
    const [sessions, setSessions] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const weekEnd = addDays(weekStart, 6)
    const isCurrentWeek = weekStart === currentWeekStart

    useEffect(() => {

        let ignore = false

        async function loadActivity() {
            setIsLoading(true)
            setError(null)
            try {
                const data = await getUserActivity(weekStart, weekEnd)
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

    }, [weekStart, weekEnd])

    const handlePrevious = () => {
        setWeekStart(addDays(weekStart, -7))
    }

    const handleNext = () => {
        setWeekStart(addDays(weekStart, 7))
    }

    const cardClassName = `heart-rate-chart ${className}`.trim()

    if (isLoading) {
        return (<Card className={cardClassName}>Chargement...</Card>)
    }

    if (error) {
        return (
            <Card className={cardClassName}>
                <ErrorMessage>Impossible de charger vos BPM</ErrorMessage>
            </Card>
        )
    }

    const days = groupHeartRateByDay(sessions, weekStart)
    const average = averageHeartRate(sessions)

    return (
        <Card className={cardClassName}>
            <div className='heart-rate-chart__header'>
                <div>
                    <h3 className='heart-rate-chart__title'>
                        {average === null ? '-' : `${average} BPM`}
                    </h3>
                    
                    <p className='heart-rate-chart__subtitle'>
                        Fréquence cardiaque moyenne
                    </p>
                </div>

                <div className='heart-rate-chart__nav'>
                    <Button variant="icon" onClick={handlePrevious} aria-label="Semaine précédente">
                        ‹
                    </Button>

                    <span className='heart-rate-chart__range'>
                        {formatShortDate(weekStart)} - {formatShortDate(weekEnd)}
                    </span>

                    <Button variant="icon" onClick={handleNext} disabled={isCurrentWeek} aria-label="Semaine suivante">
                        ›
                    </Button>
                </div>
            </div>

            {average === null ? (
                <p className='heart-rate-chart__empty'>
                    Aucune scéance cette semaine
                </p>
            ) : (

                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={days} margin={{ top: 0, right: 0, bottom: 0, left: 0}}>
                        <CartesianGrid vertical={false} stroke="var(--color-border)" />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
                        />
                        <YAxis
                            width={32}
                            domain={['dataMin - 10', 'dataMax +10']}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
                        />

                        <Tooltip />

                        <Legend position="bottom" iconType="circle" />

                        <Bar
                            dataKey="min"
                            name="Min"
                            fill="var(--color-accent-soft)"
                            barSize={10}
                            radius={[30, 30, 30, 30]}
                        />

                        <Bar 
                            dataKey="max"
                            name="Max BPM"
                            fill="var(--color-accent)"
                            barSize={10}
                            radius={[30, 30, 30, 30]}
                        />

                        <Line 
                            dataKey="average"
                            name="Moy BPM"
                            type="monotone"
                            stroke="var(--color-primary-soft)"
                            strokeWidth={2}
                            dot={{ r: 3, fill: 'var(--color-primary)', stroke: 'var(--color-primary)' }}
                            connectNulls
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            )}
        </Card>
    )
}

export default HeartRateChart
import { useEffect, useState } from 'react'
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { getUserActivity } from '../../../services/dataService'
import { addDays, getWeekStart, todayISO } from '../../../utils/date'
import { averageHeartRate, groupHeartRateByDay } from '../../../utils/activity'
import Card from '../../atoms/Card'
import ErrorMessage from '../../atoms/ErrorMessage'
import './HeartRateChart.css'


function HeartRateChart({ className='' }) {
    const [sessions, setSessions] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const weekStart = getWeekStart(todayISO())
    const weekEnd = addDays(weekStart, 6)

    useEffect(() => {
        async function loadActivity() {
            try {
                const data = await getUserActivity(weekStart, weekEnd)
                setSessions(data)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        loadActivity()
    }, [weekStart, weekEnd])

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
                <h3 className='heart-rate-chart__title'>
                    {average === null ? '-' : `${average} BPM`}
                </h3>
                
                <p className='heart-rate-chart__subtitle'>
                    Fréquence cardiaque moyenne
                </p>
            </div>

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
        </Card>
    )
}

export default HeartRateChart
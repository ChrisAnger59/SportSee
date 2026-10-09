import { useEffect, useState } from 'react'
import { Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { getUserActivity } from '../../../services/dataService'
import { addDays, getWeekStart, todayISO } from '../../../utils/date'
import { summarizeWeek, WEEKLY_GOAL } from '../../../utils/activity'
import Card from '../../atoms/Card'
import ErrorMessage from '../../atoms/ErrorMessage'
import StatCard from '../../molecules/StatCard'
import './WeekSummary.css'

function WeekSummary({ className = '' }) {
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

    const rootClassName = `week-summary ${className}`.trim()

    if (isLoading) {
        return (
            <Card className={rootClassName}>Chargement...</Card>
        )
    }

    if (error) {
        return (
            <Card className={rootClassName}>
                <ErrorMessage>Impossible de charger votre semaine</ErrorMessage>
            </Card>
        )
    }

    const {done, remaining, duration, distance} = summarizeWeek(sessions, WEEKLY_GOAL)

    const goalData = [
        {name: `${done} réalisées`, value: done, fill: 'var(--color-primary)' },
        {name: `${remaining} restantes`, value: remaining, fill: 'var(--color-primary-soft)' }
    ]

    return (
        <div className={rootClassName}>
            <Card className='week-summary__goal'>
                <div className='week-summary__header'>
                    <p className='week-summary__count'>
                        x{done} <span className='week-summary__goal-text'>Sur objectif de {WEEKLY_GOAL}</span>
                    </p>
                    <p className='week-summary__subtitle'>
                        Courses hebdomadaires réalisées
                    </p>
                </div>

                <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                        <Pie 
                            data={goalData}
                            dataKey="value"
                            nameKey="name"
                            innerRadius="40%"
                            outerRadius="85%"
                            startAngle={90}
                            endAngle={-270}
                            stroke="none"
                        />
                        <Legend iconType="circle" iconSize={8} position="bottom" />
                    </PieChart>
                </ResponsiveContainer>
            </Card>
            <div className="week-summary__stats">
                <StatCard label="Durée d'activité" value={duration} unit="minutes" tone="primary" />
                <StatCard label="Distance" value={distance} unit="kilomètres" tone="accent" />
            </div>
        </div>
    )
}

export default WeekSummary
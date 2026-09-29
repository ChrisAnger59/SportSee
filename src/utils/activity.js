import { addDays, getWeekStart } from './date'

export function groupDistanceByWeek(sessions, start) {
    return [0, 1, 2, 3].map((index) => {
        const weekStart = addDays(start, index * 7)

        const total = sessions
        .filter((session) => getWeekStart(session.date) === weekStart)
        .reduce((sum, session) => sum + session.distance, 0)

        return {
            week: `S${index + 1}`,
            start: weekStart,
            end: addDays(weekStart, 6),
            distance: Math.round(total * 10) / 10
        }
    })
}

export function averageWeeklyDistance(weeks) {
    const total = weeks.reduce((sum, week) => sum + week.distance, 0)
    return (Math.round(total / weeks.length))
}
import { addDays, getWeekStart } from './date'

const DAY_LABELS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

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

export function averageHeartRate(sessions) {

    if (sessions.length === 0) {
        return null
    }

    const total = sessions.reduce((sum, session) => sum + session.heartRate.average, 0)
    return (Math.round(total / sessions.length))
}

export function groupHeartRateByDay(sessions, weekStart) {
    return DAY_LABELS.map((day, index) => {
        const date = addDays(weekStart, index)
        const daySessions = sessions.filter((session) => session.date === date)

        if (daySessions.length === 0) {
            return {day, date, min: null, max: null, average: null}
        }

        return {
            day,
            date,
            min: Math.min(...daySessions.map((session) => session.heartRate.min)),
            max: Math.max(...daySessions.map((session) => session.heartRate.max)),
            average: averageHeartRate(daySessions)
        }
    })
}
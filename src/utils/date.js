function parseISODate(value) {
    const [year, month, day] = value.split('-').map(Number)
    return new Date(year, month -1, day)
}

export function formatDate(value) {
    return parseISODate(value).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}

export function countDays(startISO, endISO) {
    return Math.round((parseISODate(endISO) - parseISODate(startISO)) / 86400000) + 1
}
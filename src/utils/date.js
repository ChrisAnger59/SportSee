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

export function todayISO() {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')

    return (`${year}-${month}-${day}`)
}
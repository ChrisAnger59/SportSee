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
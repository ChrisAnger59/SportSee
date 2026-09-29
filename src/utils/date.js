function parseISODate(value) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function toISODate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function formatDate(value) {
  return parseISODate(value).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export function formatShortDate(value) {
  return parseISODate(value).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'numeric'
  })
}

export function countDays(startISO, endISO) {
  return Math.round((parseISODate(endISO) - parseISODate(startISO)) / 86400000) + 1
}

export function todayISO() {
  return toISODate(new Date())
}

export function addDays(dateISO, n) {
  const date = parseISODate(dateISO)
  date.setDate(date.getDate() + n)
  return toISODate(date)
}

export function getWeekStart(dateISO) {
  const daysSinceMonday = (parseISODate(dateISO).getDay() + 6) % 7
  return addDays(dateISO, -daysSinceMonday)
}
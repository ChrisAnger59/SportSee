export function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60)
    const rest = minutes % 60

    return {value: `${hours}h`, unit: `${rest}min`}
}
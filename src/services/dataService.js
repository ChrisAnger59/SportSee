import * as mockService from './mockService'
import * as apiService from './apiService'
import { saveSession, clearSession } from './session'

export { isAuthenticated } from './session'
export const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

const service = USE_MOCK ? mockService : apiService

if (import.meta.env.DEV) {
    console.info(`[dataService] source des données : ${USE_MOCK ? 'mock' : 'API'}`)
}

export async function login(username, password) {
    const session = await service.login(username, password)
    saveSession(session)
    return session
}

export function logout() {
    clearSession()
}

export function getUserInfo() {
    return service.getUserInfo()
}

export function getUserActivity(startWeek, endWeek) {
    return service.getUserActivity(startWeek, endWeek)
}
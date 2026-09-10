import { getToken } from "./session"
import { httpError } from "./httpErrors"

const API_URL = 'http://localhost:8000'

async function handleResponse(response) {
    if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw httpError(response.status, body.message ?? `Erreur ${response.status}`)
    }
    return response.json()
}

function authHeaders() {
    const token = getToken()
    if (!token) {
        throw httpError(401, 'Authentication required')
    }
    return { Authorization: `Bearer ${token}` }
}

export async function login(username, password) {
    const response = await fetch(`${API_URL}/api/login` , {
        method: 'POST',
        headers: {'Content-Type' : 'application/json' },
        body: JSON.stringify({ username, password })
    })
    return handleResponse(response)
}

export async function getUserInfo() {
    const response = await fetch(`${API_URL}/api/user-info`, {
        headers: authHeaders()
    })
    return handleResponse(response)
}

export async function getUserActivity(startWeek, endWeek) {
    const query = new URLSearchParams()

    if (startWeek) {
        query.set('startWeek', startWeek)
    }
    if (endWeek) {
        query.set('endWeek', endWeek)
    }


    const response = await fetch(`${API_URL}/api/user-activity?${query}`, {
        headers: authHeaders()
    })
    return handleResponse(response)
}
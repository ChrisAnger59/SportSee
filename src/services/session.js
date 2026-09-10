const TOKEN_KEY = 'sportsee.token'
const USER_ID_KEY = 'sportsee.userId'

export function saveSession({ token, userId }) {
  sessionStorage.setItem(TOKEN_KEY, token)
  sessionStorage.setItem(USER_ID_KEY, userId)
}

export function getToken() {
  return sessionStorage.getItem(TOKEN_KEY)
}

export function getUserId() {
  return sessionStorage.getItem(USER_ID_KEY)
}

export function isAuthenticated() {
  return getToken() !== null
}

export function clearSession() {
  sessionStorage.removeItem(TOKEN_KEY)
  sessionStorage.removeItem(USER_ID_KEY)
}
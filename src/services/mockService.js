import { MOCK_ACCOUNTS, MOCK_LOGIN, MOCK_USER_INFO, MOCK_USER_ACTIVITY} from '../mocks/data'
import { getUserId } from './session'
import { httpError } from './httpErrors'

function getConnectedUserId() {
  const userId = getUserId()

  if (!userId) {
    throw httpError(401, 'Authentication required')
  }

  if (!MOCK_USER_INFO[userId]) {
    throw httpError(404, 'User not found')
  }

  return userId
}

export async function login(username, password) {
  if (!username || !password) {
    throw httpError(400, 'username and password are required')
  }
    
  const account = MOCK_ACCOUNTS.find(
    (user) => user.username === username && user.password === password
  )

  if (!account){
    throw httpError(401, 'Invalid credentials')
  }

  return MOCK_LOGIN[account.userId]
}

export async function getUserInfo() {
  const userId = getConnectedUserId()
  return MOCK_USER_INFO[userId]
}

export async function getUserActivity(startWeek, endWeek) {
  const userId = getConnectedUserId()

  if (!startWeek || !endWeek) {
    throw httpError(400, 'startWeek and endWeek are required')
  }

  return MOCK_USER_ACTIVITY[userId].filter(
    (session) => session.date >= startWeek && session.date <= endWeek
  )
}
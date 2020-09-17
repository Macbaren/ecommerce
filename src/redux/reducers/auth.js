const UPDATE_LOGIN = 'UPDATE_LOGIN'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'

const initialState = {
  login: '',
  password: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, login: action.login}
    }
    case UPDATE_PASSWORD: {
      return { ...state, login: action.login}
    }
    default:
      return state
  }
}

export function updateLoginField(login) {
  return { type: UPDATE_LOGIN, login}
}

export function updatePasswordField(password) {
  return { type: UPDATE_PASSWORD, password}
}

import { combineReducers } from 'redux'
import items from './items'
import basket from './basket'
import auth from './auth'

const createRootReducer = () =>
  combineReducers({
    items,
    basket,
    auth
  })

export default createRootReducer

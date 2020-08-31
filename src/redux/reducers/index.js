import { combineReducers } from 'redux'
import items from './items'

const createRootReducer = () =>
  combineReducers({
    items
  })

export default createRootReducer

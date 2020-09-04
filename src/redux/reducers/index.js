import { combineReducers } from 'redux'
import items from './items'
import basket from './basket'

const createRootReducer = () =>
  combineReducers({
    items,
    basket
  })

export default createRootReducer

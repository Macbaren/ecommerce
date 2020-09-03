import itemsjson from '/JS projects/skillcrucialStudy/ecommerce/src/items.json'

const UPDATE_ITEMCOUNTER = 'UPDATE_ITEMCOUNTER'
const UPDATE_CURRENCY = 'UPDATE_CURRENCY'

const initialState = {
  goods: itemsjson,
  currency: 'USD',
  cartItems: 0,
  itemCounter: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEMCOUNTER: {
      return {
        ...state,
        itemCounter: initialState.itemCounter + 1
      }
    }
    case UPDATE_CURRENCY: {
      return {
        ...state,
        currency: action.currency
      }
    }
    default:
      return state
  }
}

export function updateItemCounter(itemCounter) {
  return { type: UPDATE_ITEMCOUNTER, itemCounter }
}

export function updateCurrency(currency) {
  return { type: UPDATE_CURRENCY, currency }
}

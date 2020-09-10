import itemsjson from '/JS projects/skillcrucialStudy/ecommerce/src/redux/reducers/items.json'

const UPDATE_CURRENCY = 'UPDATE_CURRENCY'
const UPDATE_SORTING = 'UPDATE_SORTING'

const initialState = {
  goods: itemsjson,
  currency: 'USD',
  sortBy: '',
  cartItems: 0,
  itemCounter: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENCY: {
      return {
        ...state,
        currency: action.currency
      }
    }
    case UPDATE_SORTING: {
      return {
        ...state,
        sortBy: action.sortBy
      }
    }
    default:
      return state
  }
}

export function updateCurrency(currency) {
  return { type: UPDATE_CURRENCY, currency }
}

export function updateSorting(sortBy) {
  return { type: UPDATE_SORTING, sortBy }
}

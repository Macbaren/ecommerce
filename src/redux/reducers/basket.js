// import basketjson from '/JS projects/skillcrucialStudy/ecommerce/src/basket-items.json'

const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_CURRENCY = 'UPDATE_CURRENCY'
const UPDATE_SORTING = 'UPDATE_SORTING'
const UPDATE_CART_ITEMS = 'UPDATE_CART_ITEMS'

const initialState = {
  basketGoods: [],
  currency: 'USD',
  sortBy: '',
  cartItems: 0,
  itemCounter: 0
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_ITEM: {
      return {
        ...state,
        basketGoods: [...state.basketGoods, action.newItem]
      }
    }

    case REMOVE_ITEM: {
      const index = state.basketGoods.indexOf(action.oldItem)
      return {
        ...state,
        basketGoods: [...state.basketGoods.filter((it, ind) => ind !== index)]
      }
    }

    case UPDATE_CART_ITEMS: {
      return {
        ...state,
        cartItems: state.basketGoods.filter(it => it === action.sameItems).length
      }
    }

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

export function addItem(newItem) {
  return { type: ADD_ITEM, newItem }
}

export function removeItem(oldItem) {
  return { type: REMOVE_ITEM, oldItem }
}

export function cartItems(sameItems) {
  return { type: UPDATE_CART_ITEMS, sameItems }
}

export function updateCurrency(currency) {
  return { type: UPDATE_CURRENCY, currency }
}

export function updateSorting(sortBy) {
  return { type: UPDATE_SORTING, sortBy }
}

const UPDATE_ITEMCOUNTER = 'UPDATE_ITEMCOUNTER'

const initialState = {
  goods: [
    {pic: '/images/images.png', name: 'phone', prize: '100'},
    {pic: '/pic', name: 'tablet', prize: '200'},
    {pic: '/pic', name: 'camera', prize: '300'},
    {pic: '/pic', name: 'Playstation', prize: '500'},
    {pic: '/pic', name: 'teapot', prize: '50'},
    {pic: '/pic', name: 'tvset', prize: '1000'},
    {pic: '/pic', name: 'scooter', prize: '2000'},
    {pic: '/pic', name: 'pendrive', prize: '10'},
    {pic: '/pic', name: 'laptop', prize: '1500'},
    {pic: '/pic', name: 'cooler', prize: '30'}
  ],
  name: 'phone',
  currency: 'currency-variable',
  cartItems: 'cartItems-variable',
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
    default:
      return state
  }
}

export function updateItemCounter(itemCounter) {
  return { type: UPDATE_ITEMCOUNTER, itemCounter }
}

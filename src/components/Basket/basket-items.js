import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, addItem } from '../../redux/reducers/basket'

const BasketItems = () => {

  const dispatch = useDispatch()

  const addedItems = useSelector((s) => s.basket)
  const sortBy = useSelector((s) => s.items.sortBy)
  const currency = useSelector((s) => s.items.currency)
  const countItems = useSelector((s) => s.basket.basketGoods)

  const totalCost = countItems.reduce((acc, rec) => {
    return acc += currency === 'EUR'
      ? Number.parseInt(rec.price) / 1.2
      : currency === 'CAD'
        ? Number.parseInt(rec.price) * 1.2
        : Number.parseInt(rec.price)
  }, 0).toFixed(2)

  const currencyPrice = (currency, price) => {
    if(currency === 'EUR') return (price * 1.2).toFixed(2)
    else if(currency === 'CAD') return (price / 1.2).toFixed(2)
    else return price
  }

  const sorting = (arr) => {
    return sortBy === 'price'
      ? arr.sort((a, b) => b[sortBy] - a[sortBy])
      : sortBy === ''
        ? arr
        : arr.sort((a, b) => (a[sortBy]).localeCompare(b[sortBy]))
  }

  const sameItems = (arr, id) => {
    return arr.filter(it => it.id === id).length // display same items in one row
  }

  return (
    <div className="flex flex-wrap mt-40 mb-20 ml-6" >
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="product__image w-1/4 px-12 py-2">Pic</th>
            <th className="product__title w-1/2 px-12 py-2">Title</th>
            <th className="product__price w-1/4 px-12 py-2">Price</th>
            <th className="product__amount w-1/4 px-12 py-2">These items amount</th>
            <th className="product__total_price w-1/4 px-12 py-2">Total cost</th>
            <th className="product__remove w-1/4 px-12 py-2">Remove one</th>
          </tr>
        </thead>
        <tbody>
          {sorting(addedItems.basketGoods)
            .filter((item, index) => addedItems.basketGoods.indexOf(item) === index)
            .map((it) => (
            <tr key={it.id}>
              <td className="border px-12 py-2">
                <img className="card__image w-full" src={it.image} alt={it.description} />
              </td>
              <td className="border px-12 py-2">{it.title}</td>
              <td className="border px-12 py-2">{currencyPrice(addedItems.currency, it.price)} {addedItems.currency}</td>
              <td className="border px-12 py-2">{sameItems(addedItems.basketGoods, it.id)}</td>
              <td className="border px-12 py-2">
                {sameItems(addedItems.basketGoods, it.id) * currencyPrice(addedItems.currency, it.price)} {addedItems.currency}
              </td>
              <td className="border px-12 py-2">
                <button
                  className="product__remove bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                  onClick={ (() => dispatch(removeItem(it))) }
                >
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Remove</span>
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
      <nav className="total-amount flex fixed bottom-0 right-0 w-1/5 rounded text-xl text-white bg-indigo-500 bg-opacity-50 p-4 m-4">
        Total amount: {totalCost} {currency}
      </nav>
    </div>
  )
}

export default BasketItems

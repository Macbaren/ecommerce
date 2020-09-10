import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../redux/reducers/basket'

const Items = () => {
  const item = useSelector((s) => s.items)
  const sortBy = useSelector((s) => s.items.sortBy)
  const addedItems = useSelector((s) => s.basket)

  const dispatch = useDispatch()

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
    <div className="flex flex-wrap relative mt-40">
      {sorting(item.goods)
        .map((it) => (
        <div key={it.id} className="card max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="card__image w-full" src={it.image} alt={it.description} />
          <div className="px-6 py-4">
            <div className="card__title font-bold text-xl mb-2">{it.title}</div>
            <p className="card__description text-gray-700 text-base">
              {it.description}
            </p>
            <p className="card__currency text-gray-700 text-base">
              Currency - {item.currency}
            </p>
            <p className="card__price text-gray-700 text-base">
              Price: {currencyPrice(item.currency, it.price)}
            </p>
            <p className="card__product-amount text-gray-700 text-base">
              Items in the cart - {sameItems(addedItems.basketGoods, it.id)}
            </p>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={ (() => dispatch(addItem(it))) }
            >
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span>Add</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Items

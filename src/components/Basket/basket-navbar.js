import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateCurrency } from '../../redux/reducers/items'
import { updateSorting } from '../../redux/reducers/items'

function BasketNavbar() {

  const currency = useSelector((s) => s.items.currency)
  const countItems = useSelector((s) => s.basket.basketGoods)

  const dispatch = useDispatch()

  return (
    <nav className="flex fixed top-0 inset-x-0 rounded items-center justify-between flex-wrap bg-indigo-600 p-4 m-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="2em" width="2em"viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <Link to="/" className="brand-name flex-col font-semibold text-3xl ml-2 tracking-tight">
          e-store
          <br/>
          Basket
        </Link>
      </div>
      <span className="order-count tracking-tight text-xl text-white mr-2">Items in the basket: {countItems.length}</span>
      <button className="bg-indigo-200 hover:bg-indigo-400 text-gray-800 font-bold py-2 px-4 m-4 rounded">
        <Link to="/" className="text-xl text-gray-800 tracking-tight">Back to shopping</Link>
      </button>

      <div className="block float-right lg:flex lg:items-right lg:w-auto">
        <div className="float-right mr-6 text-sm lg:flex-grow">
          <span className="tracking-tight text-xl text-white mr-2">Currency: {currency} / Switch </span>
          <div className="inline-flex my-2">
            <button
              className="bg-indigo-200 hover:bg-indigo-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={ (() => dispatch(updateCurrency('USD'))) }
            >
              USD
            </button>
            <button
              className="bg-indigo-200 hover:bg-indigo-400 text-gray-800 font-bold py-2 px-4"
              onClick={ (() => dispatch(updateCurrency('EUR'))) }
            >
              EUR
            </button>
            <button
              className="bg-indigo-200 hover:bg-indigo-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={ (() => dispatch(updateCurrency('CAD'))) }
              >
              CAD
            </button>
          </div>
        </div>
        <div className="text-sm lg:flex-grow my-2 mr-6">
          <span className="tracking-tight text-xl text-white mr-2">Sort </span>
          <div className="inline-flex">
            <button
              className="sort-price bg-indigo-200 hover:bg-indigo-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={ (() => dispatch(updateSorting('price'))) }
            >
              By price
            </button>
            <button
              className="sort-name bg-indigo-200 hover:bg-indigo-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={ (() => dispatch(updateSorting('title'))) }
            >
              By name
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BasketNavbar

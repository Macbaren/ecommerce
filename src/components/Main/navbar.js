import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateCurrency } from '../../redux/reducers/items'
import { updateSorting } from '../../redux/reducers/items'

function Navbar() {

  const currency = useSelector((s) => s.items.currency)
  const countItems = useSelector((s) => s.basket.basketGoods)

  const totalCost = countItems.reduce((acc, rec) => {
    return acc += currency === 'EUR'
      ? Number.parseInt(rec.price) / 1.2
      : currency === 'CAD'
        ? Number.parseInt(rec.price) * 1.2
        : Number.parseInt(rec.price)
  }, 0).toFixed(2)

  const dispatch = useDispatch()

  return (
    <nav className="flex fixed top-0 inset-x-0 rounded items-center justify-between flex-wrap bg-green-600 p-4 m-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path></svg>
        <Link to="/" className="brand-name font-semibold text-3xl tracking-tight">Macbaren <br/> e-store</Link>
      </div>
      <span className="order-count tracking-tight text-xl text-white mr-2">Items in the basket: {countItems.length}</span>
      <button className="bg-green-200 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 m-4 rounded">
        <Link to="/basket" className="text-xl text-gray-800 tracking-tight">Go to the basket</Link>
      </button>

      <div className="block float-right lg:flex lg:items-right lg:w-auto">
        <div className="float-right mr-6 text-sm lg:flex-grow">
          <span className="tracking-tight text-xl text-white mr-2">Currency: {currency} / Switch </span>
          <div className="inline-flex">
            <button
              className="bg-green-200 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={ (() => dispatch(updateCurrency('USD'))) }
            >
              USD
            </button>
            <button
              className="bg-green-200 hover:bg-green-400 text-gray-800 font-bold py-2 px-4"
              onClick={ (() => dispatch(updateCurrency('EUR'))) }
            >
              EUR
            </button>
            <button
              className="bg-green-200 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={ (() => dispatch(updateCurrency('CAD'))) }
              >
              CAD
            </button>
          </div>
        </div>
        <div className="text-sm lg:flex-grow mr-6">
          <span className="tracking-tight text-xl text-white mr-2">Sort </span>
          <div className="inline-flex">
            <button
              className="sort-price bg-green-200 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={ (() => dispatch(updateSorting('price'))) }
            >
              By price
            </button>
            <button
              className="sort-name bg-green-200 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={ (() => dispatch(updateSorting('title'))) }
            >
              By name
            </button>
          </div>
        </div>
          <span className="tracking-tight text-xl text-white mr-2 ml-2">Total {totalCost} {currency}</span>
        <div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar

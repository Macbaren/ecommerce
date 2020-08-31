import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateItemCounter } from '../redux/reducers/items'
import '../images/maxresdefault.jpg'

const Items = () => {
  const item = useSelector((s) => s.items)

  const dispatch = useDispatch()

  return (
    <div className="flex flex-wrap m-6">
      {item.goods.map((it) => (
        <div key={it.name} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="/src/images/maxresdefault.jpg" alt="phone" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{it.name}</div>
            <p className="text-gray-700 text-base">
              {it.prize}
            </p>
            <p className="text-gray-700 text-base">
              currency -
            </p>
            <p className="text-gray-700 text-base">
              Items in the cart -
            </p>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={() => {
              dispatch(updateItemCounter())}}
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

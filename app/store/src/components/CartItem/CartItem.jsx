import React from 'react'
import { useContext } from 'react'

import {CartContext} from '../../context/CartContext'
import FormatPrice from '../../components/FormatPrice/FormatPrice'

const CartItem = ({item, qty}) => {
    const {deleteProduct, addOne, removeOne} = useContext(CartContext)

  return (
    <li className='list-group-item'>
        <h4>{item.name}</h4>
        <p>qty: {qty} </p>
        <p>Price: {<FormatPrice price={item.price}/>}</p>
        <div className='d-flex gap-1'>
            <button className='btn btn-primary col-1' onClick={() => addOne(item.id)}  disabled={!(item.stock > qty)}  >+</button>
            <button className='btn btn-outline-danger col-0' onClick={() => removeOne(item.id)} disabled={!(0 <= qty)} >-</button>
            <button className='btn btn-outline-danger col-sm-3 col-8' onClick={() => deleteProduct(item.id)}> Remove Product </button>
        </div>
    </li>
  )
}

export default CartItem
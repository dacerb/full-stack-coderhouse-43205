import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../../context/CartContext'

const CartItem = ({item, qty}) => {

    const {deleteProduct, addOne, removeOne} = useContext(CartContext)

  return (
    <div>
        <h4>{item.name}</h4>
        <p>qty: {qty} </p>
        <p>Price: ${item.price} </p>
        <button onClick={() => addOne(item.id)}  disabled={!(item.stock > qty)}  >+</button>
        <button onClick={() => removeOne(item.id)} disabled={!(0 <= qty)} >-</button>
        <button onClick={() => deleteProduct(item.id)}> Remove Product </button>

    </div>
  )
}

export default CartItem
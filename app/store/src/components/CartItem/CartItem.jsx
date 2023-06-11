import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../../context/CartContext'

const CartItem = ({item, qty}) => {

    const {deleteProduct} = useContext(CartContext)

  return (
    <div>

        <h4>{item.name}</h4>
        <p>qty: {qty} </p>
        <p>Price: ${item.price} </p>
        <button>+</button>
        <button>-</button>
        <button onClick={ ()=> deleteProduct(item.id)}> Remove Product </button>

    </div>
  )
}

export default CartItem
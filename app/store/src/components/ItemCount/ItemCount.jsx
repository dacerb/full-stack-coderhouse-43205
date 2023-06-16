import React from 'react'
import { useState, useContext } from 'react'
import toastr from 'toastr';

import { CartContext } from '../../context/CartContext'

import 'toastr/build/toastr.css';

const ItemCount = ({intialValue, stock, functionAddToCart, id}) => {
    const [counter, setCounter] = useState(intialValue);
    const {cart} = useContext(CartContext);




    const increment = () => {
        const productFoundInACart = cart.find(product => product.item.id === id)

        if (productFoundInACart){
            
            const current_qty = productFoundInACart.qty
            if(counter < stock - current_qty) {
                setCounter(counter + 1);
            }else {
                toastr.warning(`There are no more available to add to your cart!!!. 🚨`, `${productFoundInACart.item.name}`);
            }

        }else {
            if(counter < stock) {
                setCounter(counter + 1);
            }
        }
        
    }

    const decrease = () => {
        if(counter > 1){
            setCounter(counter - 1);
        }
    }

  return (
    <>
        <div className='d-flex gap-3'>
            <button className='col-2 btn btn-outline-primary' onClick={ decrease } disabled={stock ? false: true}> - </button>
            <button className='col-2 btn btn-outline-primary' onClick={ increment } disabled={stock ? false: true}> + </button>
            {stock ? <button className='col-6 btn btn-primary' onClick={ () => functionAddToCart(counter) }> Add to cart <span className="badge">{counter}</span></button> : <button disabled={stock ? false: true} className='col-6 btn btn-danger'> Out of Stock <span className="badge">{0}</span></button>}
        </div>
        
    </>
  )
}

export default ItemCount
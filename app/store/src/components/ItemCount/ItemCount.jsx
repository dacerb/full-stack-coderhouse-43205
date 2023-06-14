import React from 'react'
import { useState } from 'react'

const ItemCount = ({intialValue, stock, functionAddToCart, id}) => {
    const [counter, setCounter] = useState(intialValue);

    const increment = () => {
        if(counter < stock) {
            setCounter(counter + 1);
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
            <button className='col-2 btn btn-outline-primary' onClick={ decrease }> - </button>
            <button className='col-2 btn btn-outline-primary' onClick={ increment }> + </button>
            {stock > 0 && <button className='col-6 btn btn-primary' onClick={ () => functionAddToCart(counter) }> Add to cart <span class="badge">{counter}</span></button>}
        </div>
        
    </>
  )
}

export default ItemCount
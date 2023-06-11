import React from 'react'
import { useState } from 'react'

const ItemCount = ({intialValue, stock, functionAddToCart}) => {
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
        <div>
            <button onClick={ decrease }> - </button>
            <p> {counter} </p>
            <button onClick={ increment }> + </button>
        </div>
        {stock > 0 && <button onClick={ () => functionAddToCart(counter) }> Add To Cart </button>}
    </>
  )
}

export default ItemCount
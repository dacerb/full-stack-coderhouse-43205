import React from 'react'
import "./Producto.css"

function Producto({props}) {
  return (
    <div className='container_products'>
        <div>IMG</div>
        <div>
            <h4>{props.title}</h4>
            <h5>Bulto xX</h5>
            <p>$123.123</p>
            <input type="text" value={1}/>
        </div>
    </div>
  )
}

export default Producto
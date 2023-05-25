import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, name, price, img, stock}) => {

  const [addQty, setAddQty] = useState(0)

  const handlerQty = (qty) => {
    setAddQty(qty);
    console.log("Productos agregados "+ qty)
  }

  return (
      <div className='itemContainer col-lg-10 col-sm-12'>
          <h3>Name: {name}</h3>
          <h3>Price: ${price}</h3>
          <h3>ID: {id} </h3>
          <p>stock {stock}</p>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi praesentium ducimus hic alias? Odio nihil laudantium atque quasi voluptatibus laboriosam nam repudiandae incidunt hic, deserunt fugit quo esse qui.</p>
          <img className="imgProduct" src={img} alt={name} />
          <hr />
          
          {
            addQty > 0 ? (<Link to={"/cart"}> checkout </Link>) :  (<ItemCount intialValue={1} stock={stock} functionAddToCart={handlerQty}/>)
          }

      </div>
  )
}

export default ItemDetail
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const ItemDetail = ({id, name, price, img, stock, description}) => {

  const [addQty, setAddQty] = useState(0)

  const {addProduct} = useContext(CartContext);

  const handlerQty = (qty) => {
    setAddQty(qty);

    const item = {id, name, price};
    addProduct(item, qty);

  }

  return (
      <div className='itemContainer col-lg-10 col-sm-12'>
          <h3>Name: {name}</h3>
          <h3>Price: ${price}</h3>
          <h3>ID: {id} </h3>
          <p>stock {stock}</p>
          <p>Description: {description}</p>
          <img className="imgProduct" src={img} alt={name} />
          <hr />
          
          {
            addQty > 0 ? (<Link to={"/cart"}> checkout </Link>) :  (<ItemCount intialValue={1} stock={stock} functionAddToCart={handlerQty}/>)
          }

      </div>
  )
}

export default ItemDetail
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import PriceFormat from '../PriceFormat/PriceFormat'



const ItemDetail = ({id, name, price, img, stock, description}) => {

  const [addQty, setAddQty] = useState(0)
  const {addProduct, cart} = useContext(CartContext);

  const handlerQty = (qty) => {
    setAddQty(qty);

    const item = {id, name, price, stock};
    addProduct(item, qty);

  }
  
  return (
      
      <div className='container  d-flex  justify-content-center flex-wrap gap-4 mt-4 pt-4 itemContainer pt-5 pb-5'>
        
          <div className='row position-relative'>
          <Link 
              to={"/"}
              className='btn-close position-absolute top-0 start-100 translate-middle '
              type="button" 
              aria-label="Close"> 
              </Link>
         
            <div className="col-12" style={{ width: "30rem" }}>
            <img src={img} className="card-img-top" alt={name}/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">Price:  <span>{price}</span> 
                </p> 
              
              <p className="card-text"><small className="text-body-secondary">Updated stock: {stock}, Product id <strong>#{id}</strong></small></p>
             
              {
                addQty > 0 ? (
                <div className='d-flex gap-3'>
                  <Link 
                    to={"/"}
                    className='col-6 btn btn-outline-primary'> 
                    Show more products </Link>
                  <Link 
                    to={"/cart"}
                    className='col-4 btn btn-primary'> 
                    Go to cart </Link>
                </div>
                ) :  (<ItemCount intialValue={1} stock={stock} id={id} functionAddToCart={handlerQty}/>)
              }
            </div>
            </div>
        </div>
      </div>
  )
}

export default ItemDetail
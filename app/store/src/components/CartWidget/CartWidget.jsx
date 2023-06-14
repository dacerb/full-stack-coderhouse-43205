import './CartWidget.css'
import { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'

function CartWidget() {

  const {totalQty} = useContext(CartContext)
  return (
       <>
        <Link to={'/cart'}>
          <div className='position-relative'>
              <img className='cart-icon mt-3 mb-3 mb-sm-0 mt-sm-0' src="../../src/assets/cart.png" alt="Shopping Cart" /> 
              <span className="position-absolute top-0 start-10 translate-middle  text-dark">
                    {
                      totalQty > 0 && <span> {totalQty} </span>
                    }
                </span>
          </div>
        </Link>

       </>
  )
}

export default CartWidget
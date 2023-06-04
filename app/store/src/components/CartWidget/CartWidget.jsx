import './CartWidget.css'
import { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'

function CartWidget() {

  const {totalQty} = useContext(CartContext)
  return (
       <>
        <Link to={'/cart'}>
          <div className='cart-container'>
            <img className='cart-icon' src="../../src/assets/cart.png" alt="Shopping Cart" />
            <div>
              <p>
                
                  {
                    totalQty > 0 && <span> {totalQty} </span>
                  }
                
              </p>
            </div>
          </div>
        </Link>
       </>
  )
}

export default CartWidget
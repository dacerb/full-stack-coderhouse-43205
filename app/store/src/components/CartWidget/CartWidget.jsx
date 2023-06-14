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
            <div>
              <p>
                <span className="position-absolute top-0 start-100 translate-middle p-1 text-dark   rounded-5 ">
                
                    {
                      totalQty > 0 && <span> {totalQty} </span>
                    }
                </span>
              </p>
            </div>
          </div>
        </Link>

       </>
  )
}

export default CartWidget
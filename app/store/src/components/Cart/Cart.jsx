import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Link} from 'react-router-dom'

function Cart() {
    const {cart, totalPrice, totalQty, deleteCart} = useContext(CartContext)

    if(totalQty  === 0) {
        return (
            <>
                <h2>there are no products in the cart!!</h2>
                <Link to={'/'}> Show Products</Link>
            </>
        )
    }
  return (
    
    <div>
        { cart.map( product => <CartItem key={product.item.id} {...product}/> ) }
        <hr />
        <h3> Total to pay: ${totalPrice}</h3>
        <h3> Total Qty: {totalQty} </h3>
        <button onClick={() => deleteCart()}>Empty your shopping cart</button>
        <Link to={'/checkout'}> Proceed to checkout</Link>
    </div>
    
  )
}

export default Cart
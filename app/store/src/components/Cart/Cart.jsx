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
                <button><Link to={'/'}> Show Products</Link></button>
            </>
        )
    }


  return (
    
    <div className='container mt-5 pt-5'>
        <ul className='list-group list-group-flush'>
            { cart.map( product => {
                return <CartItem key={product.item.id} {...product}/>
            })}
        </ul>
        <hr />
        <strong className='font-monospace fs-3'> Total qty: {totalQty} </strong>
        <h2 className='font-monospace'> Total to pay: <strong>${totalPrice}</strong></h2>
        

        <div className='d-flex gap-1'>
            <button className="btn btn-outline-danger col-2" onClick={() => deleteCart()}>Empty your shopping cart</button>
            <Link 
                to={'/'}
                className='btn btn-secondary'>
                Explore more products</Link>
            <Link 
                to={'/checkout'}
                className='btn btn-primary'> 
                Proceed to checkout</Link>
        </div>
    </div>
    
  )
}

export default Cart
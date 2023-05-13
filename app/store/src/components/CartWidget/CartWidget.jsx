import './CartWidget.css'
function CartWidget() {
  return (
       <>
        <div className='cart-container'>
          <img className='cart-icon' src="../../src/assets/cart.png" alt="Shopping Cart" />
          <div>
            <p>
              <span>10</span>
            </p>
          </div>
        </div>
       </>
  )
}

export default CartWidget
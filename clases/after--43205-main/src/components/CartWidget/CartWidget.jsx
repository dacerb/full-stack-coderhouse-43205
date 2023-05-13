import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://st2.depositphotos.com/1114422/5830/v/600/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg";
  return (
    <div>
        <img src={imgCarrito} alt="Carrito de compras" />
        <p>10</p>
    </div>
  )
}

export default CartWidget
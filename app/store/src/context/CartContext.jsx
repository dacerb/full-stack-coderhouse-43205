import { useState, createContext } from "react";


// contexto de carrito
export const CartContext = createContext({
    cart: [],
    total: 0,
    qty:0
});

// componente cart provider
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);

    // Metodos del carrito
    const addProduct = (item, qty) => {

        const productWasFound = cart.find( product => product.item.id === item.id)

        if(!productWasFound) {
            setCart(prev => [...prev, {item, qty}]);
            setTotalQty(prev => prev + qty )
            setTotalPrice(prev => prev + (item.price * qty))
            
        } else {
            const cartUpdated = cart.map(product => {
                if(product.item.id === item.id) {
                    return {...product, qty: product.qty + qty};
                }else {
                    return product;
                }
            });
            setCart(cartUpdated);
            setCart(prev => [...prev, {item, qty}]);
            setTotalQty(prev => prev + qty )
            setTotalPrice(prev => prev + (item.price * qty))
        };
    }   

    const deleteProduct = (id) => {
        const productToRemove = cart.find(product => product.item.id === id);
        const cartUpdate = cart.filter(product => product.item.id !== id);

        setCart(cartUpdate);
        setTotalQty(prev => prev - productToRemove.qty )
        setTotalPrice(prev => prev - (productToRemove.item.price * productToRemove.qty))
    }

    const deleteCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalQty(0);
    }

    console.log(cart)
    console.log("totalPrice "+ totalPrice)
    console.log("totalQty "+totalQty)
    
    return (
        <CartContext.Provider value={{cart, totalPrice, totalQty, addProduct, deleteCart, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
}

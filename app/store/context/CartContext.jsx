import { useState, createContext } from "react";


// contexto de carrito
export const CartContext = createContext({cart: []})

// componente cart provider
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    // Metodos del carrito
    const addProduct = (item, qty) => {

        const productWasFound = cart.find( product => product.item.id === item.id)

        if(!productWasFound) {
            setCart(prev => [...prev, {item, qty}]);
        } else {
            const cartUpdated = cart.map(product => {
                if(product.item.id === item.id) {
                    return {...product, qty: product.qty + qty};
                }else {
                    return product;
                }
            });
            setCart(cartUpdated);
            
        };
    }   

    const deleteProduct = (id) => {
        const cartUpdate = cart.filter(product => product.id !== id);
        setCart(cartUpdate);
    }

    const deleteCart = () => {
        setCart([]);
    }

    console.log(cart)
    
    return (
        <CartContext.Provider value={{cart, addProduct, deleteCart, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
}

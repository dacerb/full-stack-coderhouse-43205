import { useState, createContext } from "react";
import toastr from 'toastr';
import 'toastr/build/toastr.css';

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


    const addOne = (id) => {
        const productWasFound = cart.find( product => product.item.id === id)
        console.log(productWasFound)

        if (productWasFound) {
            const cartUpdate = cart.map( product => {
                if (product.item.id === id) {
                    toastr.success(`You added one more in your cart!.. 🙂`, `${product.item.name}`);
                    return {...product, qty: product.qty + 1};
                }else {
                    return product;
                }
            });
            setCart(cartUpdate);
            setTotalQty(prev => prev + 1 )
            setTotalPrice(prev => prev + productWasFound.item.price)
        }
        
    }

    const removeOne = (id) => {
        const productWasFound = cart.find( product => product.item.id === id)
        console.log("LTA")

        if (productWasFound && productWasFound.qty > 1) {
            console.log("ACA")
            const cartUpdate = cart.map( product => {
                if (product.item.id === id) {
                    toastr.warning(`You removed one in your cart!.. 😞`, `${product.item.name}`);
                    return {...product, qty: product.qty - 1};
                }else {
                    return product;
                }
            });
            setCart(cartUpdate);
            setTotalQty(prev => prev - 1 )
            setTotalPrice(prev => prev - productWasFound.item.price)
        }else {
            deleteProduct(id)
        }
    }
    // Metodos del carrito
    const addProduct = (item, qty) => {

        const productWasFound = cart.find( product => product.item.id === item.id)
        console.log("cart ", cart)
        console.log("productWasFound", productWasFound)
        if(!productWasFound) {
            setCart(prev => [...prev, {item, qty}]);
            setTotalQty(prev => prev + qty )
            setTotalPrice(prev => prev + (item.price * qty))
            toastr.success(`You add ${qty} in your cart!.. 🥰`, `${item.name}`);
            
        } else {
            console.log("Encontre voy a actualizar")
            const cartUpdated = cart.map(product => {
                if(product.item.id === item.id) {
                    console.log(" Encotre y lo actualizo ")
                    toastr.success(`You add ${qty} in your cart!.. 🥰`, `${item.name}`);
                    return {...product, qty: product.qty + qty};
                }else {
                    return product;
                }
            });
            setCart(cartUpdated);
            //setCart(prev => [...prev, {item, qty}]);
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
        toastr.error(`We are sad that you do not want to buy it 😫`, `${productToRemove.item.name}`);
    }

    const deleteCart = () => {
        
        setCart([]);
        setTotalPrice(0);
        setTotalQty(0);
        toastr.error(`We're sorry you emptied your cart. 😫`, `Your Cart!!`);
        
    }
    
    return (
        <CartContext.Provider value={{cart, totalPrice, totalQty, addProduct, deleteCart, deleteProduct, addOne, removeOne}}>
            {children}
        </CartContext.Provider>
    )
}

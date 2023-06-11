import {useState, useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {db} from '../../services/config';
import {collection, addDoc } from 'firebase/firestore';
import './Checkout.css';

const Checkout = () => {
    const {cart, deleteCart} = useContext(CartContext);

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [emailConfirmation, setEmailConfirmation] = useState(""); 

    const [formError, setFormError] = useState("");
    const [orderId, setOrderId] = useState("");


    const handlerCheckoutForm = (event) => {
        event.preventDefault()
        // verificaciones
        if (!firstName || !lastName || !phone || !email || !emailConfirmation){
            setFormError("Please you must complete the fields.");
            return;
        }

        if (email !== emailConfirmation) {
            setFormError("The fields email and confirmation email must match.");
            return;
        }

        // generacion de objecto orden
        console.log(cart)
        const order = {
            items: cart.map(product => ({
                id: product.item.id,
                name: product.item.name,
                qty: product.qty
            })),
            total: cart.reduce((total, product) => total + product.item.price * product.qty, 0),
            firstName,
            lastName,
            phone,
            email
        };

        // guardar orden..
        addDoc(collection(db, "orders"), order)
            .then(docRef => {
                setOrderId(docRef.id);
                deleteCart();
            })
            .catch(error => {
                console.error("could not create order: ", error);
                setFormError("Oops! There are problems creating your order, please try again later!");
            })

    }

  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={handlerCheckoutForm}>
            {cart.map(product => (
                <div key={product.item.id}>
                    <p>
                        {product.item.name} x {product.qty}
                    </p>
                    <p>Price: ${product.item.price}</p>
                    <hr />
                </div>
            ))}

            <div>
                <label htmlFor="">FirstName</label>
                <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
            </div>

            <div>
                <label htmlFor="">LastName</label>
                <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Phone</label>
                <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Confirm Email</label>
                <input type="text" value={emailConfirmation} onChange={(event) => setEmailConfirmation(event.target.value)}/>
            </div>

            {formError && <p> {formError} </p>}
            <button type='submit'>Confirm Purchase</button>
        </form>
        {
            orderId && (
                <strong>Thanks For you Purchace, your order id is: {orderId}</strong>
            )
        }
    </div>
  )
}

export default Checkout
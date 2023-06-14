import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import FormatPrice from '../FormatPrice/FormatPrice';
import {CartContext} from '../../context/CartContext';
import {db} from '../../services/config';
import {collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import './Checkout.css';


const Checkout = () => {

    
    const {cart, deleteCart, totalPrice} = useContext(CartContext);

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
        const order = {
            items: cart.map(product => ({
                id: product.item.id,
                name: product.item.name,
                qty: product.qty
            })),
            total: totalPrice,
            firstName,
            lastName,
            phone,
            email,
            date: new Date()
        };


        // guardar orden.. y descontar el stock
        Promise.all(
            order.items.map(async (orderProduct) => {
                const productRef = doc(db, "products", orderProduct.id);
                const productDocument = await getDoc(productRef);
                const currentStock = productDocument.data().stock;
                await updateDoc(productRef, {
                    stock: currentStock - orderProduct.qty
                });
            })
        )
        .then(() => {
            addDoc(collection(db, "orders"), order)
            .then((docRef) => {
                setOrderId(docRef.id);
                deleteCart();
            })
            .catch(error => {
                console.error("could not create order: ", error);
                setFormError("Oops! There are problems creating your order, please try again later!");
            })
        }).catch(error => {
            console.error("could not update the stock: ", error);
            setFormError("Oops! There are problems to update the stock!!.");
        })

        
        

        /*/ guardar orden..
        addDoc(collection(db, "orders"), order)
            .then(docRef => {
                setOrderId(docRef.id);
                deleteCart();
            })
            .catch(error => {
                console.error("could not create order: ", error);
                setFormError("Oops! There are problems creating your order, please try again later!");
            })
        */
    }

    

  return (
    <div className='container mt-5 pt-5'>
        <h2>Checkout</h2>
        <div>
            <ul className='list-group list-group-flush'>
            {cart.map(product => (
                        <li className='list-group-item' key={product.item.id}>
                            <p>
                                {product.item.name} <br />
                                Qty: <small className="">{product.qty} <br />
                                Price: {<FormatPrice price={price}/> }</small> <br />
                                SubTotal: {(product.item.price * product.qty).toLocaleString("en", {style: "currency",currency: "USD"})}
                            </p>
                        </li>
                    ))}
                <li className='list-group-item'>Total: {totalPrice.toLocaleString("en", {style: "currency",currency: "USD"})}</li>
            </ul>
            
        </div>
        <div>
        <form onSubmit={handlerCheckoutForm}>

            <div className="mb-2">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input id='firstname' type="text" className="form-control" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
            </div>
            
            <div className="mb-2">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input id='lastname' type="text" className="form-control" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            </div>

            <div className="mb-2">
                <label htmlFor="phone" className="form-label" >Phone</label>
                <input id='phone' type="text"  className="form-control" value={phone} onChange={(event) => setPhone(event.target.value)}/>
            </div>

            <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input id='email' type="text"  className="form-control" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>

            <div className="mb-4">
                <label htmlFor="emailconfirm" className="form-label">Confirm Email</label>
                <input id='emailconfirm'  className="form-control" type="text" aria-describedby="emailHelp" value={emailConfirmation} onChange={(event) => setEmailConfirmation(event.target.value)}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

        
            {formError && <p> {formError} </p>}
            
            <div className='d-flex gap-1'>
                <Link 
                    to={'/'}
                    className='btn btn-secondary'>
                    Explore more products</Link>
                    
                <button className='btn btn-primary' type='submit'>Confirm Purchase</button>
            </div>
        </form>
        </div>
        {
            orderId && (
                <>
                    <div className="alert alert-success mt-5" role="alert">
                        <strong>Thanks For you Purchace, your order id is: {orderId}</strong>
                    </div>
                </>
            )
        }
    </div>
  )
}

export default Checkout
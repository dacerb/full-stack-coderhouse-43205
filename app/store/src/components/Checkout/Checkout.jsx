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

    const [place_holder_firstName, setFirstNamePH] = useState("Manuel"); 
    const [place_holder_lastName, setLastNamePH] = useState("Sonor"); 
    const [place_holder_phone, setPhonePH] = useState("52123451"); 
    const [place_holder_email, setEmailPH] = useState("manuel@sonor.com"); 
    const [place_holder_emailConfirmation, setEmailConfirmationPH] = useState("manuel@sonor.com"); 

    const [formError, setFormError] = useState("");
    const [orderId, setOrderId] = useState("");

    const regexValidatorEmail = (value) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value);
      };

    const regexValidatorString = (value) => {
    const pattern = /^\D{3,15}$/;
    return pattern.test(value);
    };

    const regexValidatorNumber = (value) => {
    const pattern = /^\d{8,15}$/;
    return pattern.test(value);
    };

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


        if (!regexValidatorString(firstName)) {
            setFormError("The first name is not valid, must be letters... (3 - 15 characters)");
            return;
        }

        if (!regexValidatorString(lastName)) {
            setFormError("The last name is not valid, must be letters... (3 - 15 characters)");
            return;
        }

        if (!regexValidatorNumber(phone)) {
            setFormError("The phone is not valid, must be numbers...(8  - 15 characters)");
            return;
        }

        if (!regexValidatorEmail(email)) {
            setFormError("The email is not valid.");
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
    }

    

  return (
    <div className='container mt-5 pt-5'>
        <h2 className='fs-1 fw-lighter '>Checkout</h2>
        <div>
        { Boolean(cart.length) && (
                <>
                    <div>
                        <ul className='list-group list-group-flush'>
                        {cart.map(product => (
                                    <li className='list-group-item' key={product.item.id}>
                                        <p>
                                            {product.item.name} <br />
                                            Qty: <small className="">{product.qty} <br />
                                            Price: {<FormatPrice price={product.item.price}/>}</small> <br />
                                            SubTotal: {<FormatPrice price={(product.item.price * product.qty)}/>}
                                        </p>
                                    </li>
                                ))}
                            <li className='list-group-item'>Total: {<FormatPrice price={totalPrice}/>}</li>
                        </ul>
                    </div>

                    <form onSubmit={handlerCheckoutForm}>
                    <div className="mb-2">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input id='firstname' placeholder={place_holder_firstName} type="text" className="form-control" value={firstName} onChange={(event) => setFirstName(event.target.value)} required/>
                    </div>
                    
                    <div className="mb-2">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input id='lastname' type="text" placeholder={place_holder_lastName} className="form-control" value={lastName} onChange={(event) => setLastName(event.target.value)} required/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="phone" className="form-label" >Phone</label>
                        <input id='phone' type="text" placeholder={place_holder_phone} className="form-control" value={phone} onChange={(event) => setPhone(event.target.value)} required/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input id='email' type="text" placeholder={place_holder_email} className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="emailconfirm" className="form-label">Confirm Email</label>
                        <input id='emailconfirm' placeholder={place_holder_emailConfirmation} className="form-control" type="text" aria-describedby="emailHelp" value={emailConfirmation} onChange={(event) => setEmailConfirmation(event.target.value)} required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                
                    {
                        formError && <div className="alert alert-danger mt-5" role="alert">
                            <strong>{formError}</strong>
                            </div>
                    }
                    
                    <div className='d-flex gap-1'>
                        <Link 
                            to={'/'}
                            className='btn btn-secondary'>
                            Explore more products</Link>
                            
                        <button className='btn btn-primary' type='submit'>Confirm Purchase</button>
                    </div>
                    </form>
                </>
            ) 
        }
        </div>

        { orderId && (
            <>
                <div className='row d-flex flex-column'>
                    <div className="alert alert-success mt-5 col-12" role="alert">
                            <strong className='col-8 offset-1'>Thanks For you Purchace, your order id is: {orderId}</strong>
                    </div>
                </div>
            </>
            )
        }

        { !(!orderId && Boolean(cart.length)) && (
                <>
                    <div className='p-2 d-flex flex-column'>
                        <Link className="btn btn-primary mt-3  col-12 col-sm-5 col-lg-3 align-self-end" to={`/`}> Go to home  </Link>
                    </div>
                </>
            )   
        }
    </div>
  )
}

export default Checkout
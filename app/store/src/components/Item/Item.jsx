import "./Item.css"
import { Link } from "react-router-dom"


const Item = ({id, name, price, img}) => {
  return (
    <div className="cardProduct col-12  col-md-3 col-lg-4">
         <div className="imgProductContainer">
          <img className="imgProduct" src={img} alt={name} />
         </div>
         <div className="cardProductInformation">
          <h3>Name: {name}</h3>
          <p>Price: ${price}</p>
          <p>ID: {id} </p>
          <Link className="btnProduct" to={`/item/${id}`}> Show details  </Link>
         </div>
    </div>
  )
}

export default Item
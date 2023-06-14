import "./Item.css"
import { Link } from "react-router-dom"
import PriceFormat from "../PriceFormat/PriceFormat"


const Item = ({id, name, price, img, stock}) => {
  return (
    <div className="card col-md-4" style={{ width: "18rem" }}>
          <img className="card-img-top" src={img} alt={name} />
         <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: <strong>
          <PriceFormat value={price}/>
          </strong></p>
          <Link className="btn btn-primary" to={`/item/${id}`}> Show details </Link>
         </div>
    </div>
  )
}

export default Item
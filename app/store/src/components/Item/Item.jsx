import "./Item.css"
import { Link } from "react-router-dom"


const Item = ({id, name, price, img, stock}) => {
  return (
    <div className="card col-md-4" style={{ width: "18rem" }}>
          <img className="card-img-top" src={img} alt={name} />
         <div className="card-body">
          <h5 class="card-title">{name}</h5>
          <p className="card-text">Price: <strong>${price}</strong></p>
          <Link className="btn btn-primary" to={`/item/${id}`}> Show details </Link>
         </div>
    </div>
  )
}

export default Item
import { Link } from "react-router-dom"

import FormatPrice from "../FormatPrice/FormatPrice"

const Item = ({id, name, price, img, stock}) => {
  return (
    <div className="card col-md-4" style={{ width: "18rem" }}>
          <img className="card-img-top" src={img} alt={name} />
         <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {<FormatPrice price={price}/>}<strong>
          </strong></p>
          <Link className="btn btn-primary" to={`/item/${id}`}> Show details </Link>
         </div>
    </div>
  )
}

export default Item
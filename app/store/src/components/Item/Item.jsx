import "./Item.css"

const Item = ({id, name, price, img}) => {
  return (
    <div className="cardProduct">
         <img className="imgProduct" src={img} alt={name} />
         <h3>Name: {name}</h3>
         <p>Price: ${price}</p>
         <p>ID: {id} </p>
         <button className="btnProduct"> Show details </button>
    </div>
  )
}

export default Item
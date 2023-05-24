import './ItemDetail.css'

const ItemDetail = ({id, name, price, img}) => {
  return (
    <div className='itemContainer col-lg-10 col-sm-12'>
        <h3>Name: {name}</h3>
        <h3>Price: ${price}</h3>
        <h3>ID: {id} </h3>
        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi praesentium ducimus hic alias? Odio nihil laudantium atque quasi voluptatibus laboriosam nam repudiandae incidunt hic, deserunt fugit quo esse qui.</p>
        <img className="imgProduct" src={img} alt={name} />
    </div>
  )
}

export default ItemDetail
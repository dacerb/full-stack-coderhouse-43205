import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({productList}) => {
  return (
    <div className='productContainer'>
        { productList.map(product => <Item key={product.id} {...product}/>) }
    </div>
  )
}

export default ItemList
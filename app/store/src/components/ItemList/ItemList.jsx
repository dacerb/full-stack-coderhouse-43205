import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({productList}) => {
  return (
    <div className='productContainer row pt-5 pb-5'>
        { productList.map(product => <Item key={product.id} {...product}/>) }
    </div>
  )
}

export default ItemList
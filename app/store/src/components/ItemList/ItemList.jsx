import Item from '../Item/Item'

const ItemList = ({productList}) => {
  return (
    <>
      <div className='container  d-flex text-center mt-4 mb-4 justify-content-center flex-wrap gap-4 mt-5'>
          { productList.map(product => <Item key={product.id} {...product}/>) }
      </div>
    </>
  )
}

export default ItemList
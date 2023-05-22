import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import  {getProducts} from '../../asyncmock'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <h2 className="title">{greeting}</h2>
      <ItemList productList={products}/>
    </>
  )
}

export default ItemListContainer
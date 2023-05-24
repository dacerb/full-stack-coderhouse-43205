import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import  {getProducts, getProductsByCategoryID} from '../../asyncmock'
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams();

  useEffect(() => {


    console.log(categoryId ? "getProductsByCategoryID" : "getProducts" )
    
    const functionGetProductsSelected = categoryId ? getProductsByCategoryID : getProducts;

    functionGetProductsSelected(categoryId)
    .then(response => setProducts(response))
    .catch(error => console.error(error))

    console.log(products)

  }, [categoryId])

  return (
    <>
      <h2 className="title">{greeting}</h2>
      <ItemList productList={products}/>
    </>
  )
}

export default ItemListContainer
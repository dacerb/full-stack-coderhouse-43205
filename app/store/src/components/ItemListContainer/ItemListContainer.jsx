import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
// import  {getProducts, getProductsByCategoryID} from '../../asyncmock'
import { useParams } from "react-router-dom"

// Implementamos FireBase
import { collection, getDocs, where, query } from 'firebase/firestore'
import {db} from '../../services/config'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams();

 /*
    useEffect(() => {


    console.log(categoryId ? "getProductsByCategoryID" : "getProducts" )
    
    const functionGetProductsSelected = categoryId ? getProductsByCategoryID : getProducts;

    functionGetProductsSelected(categoryId)
    .then(response => setProducts(response))
    .catch(error => console.error(error))

    console.log(products)

  }, [categoryId])
 */

  useEffect( () => {

    const functionGetProductsSelected = categoryId ? query(collection(db, "products"), where("categoryId", "==", categoryId)) : collection(db, "products");
    getDocs(functionGetProductsSelected)
      .then( response => {

        const newProducs = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })

        setProducts(newProducs)
      })
      .catch(error => console.error(error))

  }, [categoryId])

  return (
    <>
      <h2 className="title">{greeting}</h2>
      <ItemList productList={products}/>
    </>
  )
}

export default ItemListContainer
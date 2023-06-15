import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query } from 'firebase/firestore'

import ItemList from "../ItemList/ItemList"
import {db} from '../../services/config'



const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams();

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
      <div className="container text-center">
        <ItemList productList={products}/>
      </div>
    </>
  )
}

export default ItemListContainer
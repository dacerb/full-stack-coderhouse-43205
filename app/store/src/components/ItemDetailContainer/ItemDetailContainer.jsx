import {useState, useEffect} from "react"
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from "react-router-dom"

import {db} from '../../services/config'
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const {itemId} = useParams();

    useEffect( () => {

      const newDoc = doc(db, "products", itemId)  
      getDoc(newDoc)
        .then( response => {
          const data = response.data()
          const newProduct = {id: response.id, ...data}
          setProduct(newProduct)
        })
        .catch(error => console.error(error))
     }, [itemId])

     
  return (
    
    <div>
                  
        <Loader>
            <ItemDetail {...product}/>
        </Loader>
        
    </div>

  )
}

export default ItemDetailContainer
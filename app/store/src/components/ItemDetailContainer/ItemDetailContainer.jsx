import {useState, useEffect} from "react"
//import { getProductsByID } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

// Firebase
import { doc, getDoc } from 'firebase/firestore'
import {db} from '../../services/config'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const {itemId} = useParams();

    console.log(itemId)

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

    /*
    useEffect( () => {

        getProductsByID(itemId)
            .then(response => setProduct(response))

    }, [itemId])
 */

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
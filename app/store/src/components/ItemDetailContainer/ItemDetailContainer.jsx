import {useState, useEffect} from "react"
import { getProductsByID } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const {itemId} = useParams();

    useEffect( () => {

        getProductsByID(itemId)
            .then(response => setProduct(response))

    }, [itemId])

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
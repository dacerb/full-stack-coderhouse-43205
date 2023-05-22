// userParam hook que permite acceder a los prametros de las urls en los componentes funcionales.

// ejemplo: hhtps://cellshop.com/silla/10   
// podemos obtener el 10 y almacenarlo
// debemos cambiar en el Route de sillas para trabajar con direccion dinamica  implementando en el path /:id

import {useParams} from "react-router-dom"

const Sillagamer = () => {

  // Obtengo el valor desestructurado del objeto useParame que es el Hook para realziar este tipo de acciones..
  const {id} = useParams();

  console.log(id)

  return (
    <div>
      <h2>Seccion Sillas Gamer</h2>
      <p>Producto ID: {id}</p>
    </div>
  )
}

export default Sillagamer
import Producto from "../Producto/Producto"

//Las "props" son objetos que los componentes padres le pasan a sus hijos con información importante para ser renderizada. 
//Se pasan como parámetros en una función. 
//Esto favorece a la reutilización de componentes. 



const ContenedorProductos = () => {
    const props = {
        nombre: "Pan",
        precio: 500
    };

  return (
    <div>
        <Producto nombre="Arroz" precio={100} />
        <Producto nombre="Fideos" precio={180} />
        <Producto {...props} />
    </div>
  )
}

export default ContenedorProductos
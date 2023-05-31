//En Linea con Fragment. 
//La usamos cuando queremos renderizar un elemento condicional en función de una expresión booleana. 

const TecnicaDos = ({ booleano }) => {
  return (
    <>
        {booleano && <h2>Usuario autorizado</h2>}
        {!booleano && <h2>Usuario NO autorizado</h2>}
    
    </>
  )
}
//Recibo un booleano, si el booleano es true, renderizo el elemento. 
// ! = niega el valor. 

export default TecnicaDos
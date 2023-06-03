//3) Trabajamos el renderizado condicional con un OPERADOR TERNARIO: 

const TecnicaTres = ({booleano}) => {
  return (
    <div>
        {
            booleano ? <h3> Acceso Permitido </h3> : <h4>Acceso Denegado Rata!</h4>
        }
    </div>
  )
}

export default TecnicaTres
import './Vista.css'
import { useState } from 'react'

const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }

    const estilo = modoOscuro ? "oscuro" : "claro";

  return (
    <div className={estilo}>
        <button onClick={ cambiarModo } > {modoOscuro ? "Claro" : "Oscuro"} </button>
        <h2>Componente Vista</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem incidunt, non maxime officiis quo nemo velit consectetur quibusdam nulla iusto corrupti blanditiis itaque mollitia, eum accusamus assumenda dignissimos aliquid.</p>
    </div>
  )
}

export default Vista
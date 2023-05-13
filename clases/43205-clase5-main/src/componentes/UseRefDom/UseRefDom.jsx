import {useRef} from 'react'

const UseRefDom = () => {
    const ref = useRef(null);

    const jandelClick = () => {
        if(ref.current) {
            ref.current.textContent= "Este texto fue modificado con useRef";
        }
    }
  return (
    <div>
        <h3> UseRef DOM</h3>
        <p ref={ref}>Este Hook nos permite acceder a elementos del DOM y modificarlos. </p>
        
        <button onClick={ jandelClick }> Hace click para modificar el DOM </button>

    </div>
  )
}

export default UseRefDom
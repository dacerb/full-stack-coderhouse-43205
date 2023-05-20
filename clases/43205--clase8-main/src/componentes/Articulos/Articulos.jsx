
const Articulos = ({ img, titulo, children }) => {
    return (
        <article>
            {children}
            <img src={img} alt={titulo} />
            <h2> {titulo} </h2>
            <button> Leer artículo </button>
        </article>
    )
}

export default Articulos
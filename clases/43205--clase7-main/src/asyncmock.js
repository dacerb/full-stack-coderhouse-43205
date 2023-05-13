const productos = [
    { nombre: "Yerba", precio: 500, id: 1, img: "./img/yerba.jpg" },
    { nombre: "Fideos", precio: 180, id: 2, img: "./img/fideos.jpg" },
    { nombre: "Arroz", precio: 200, id: 3, img: "./img/arroz.jpg" },
    { nombre: "Aceite", precio: 400, id: 4, img: "./img/aceite.jpg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}
const products = [
    {
        name: "One Of A Kind - Mango",
        price: 2000,
        id: "1",
        img:"../img/mango-sonor.png",
        stock: 6,
        category: "snare",
        categoryId: "1"
    },
    {
        name: "Sonor SQ1",
        price: 3000,
        id: "2",
        img:"../img/sq1.jpg",
        stock: 3,
        category: "drums",
        categoryId: "2"
    },
    {
        name: "Sonor SQ2",
        price: 6000,
        id: "3",
        img:"../img/sq2.jpg",
        stock: 2,
        category: "drums",
        categoryId: "2"
    },
    {
        name: "One Of A Kind - White Ebony",
        price: 2000,
        id: "4",
        img:"../img/webony-sonor.png",
        stock: 4,
        category: "snare",
        categoryId: "1"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1)
    })
}

// nueva funcion que retorna un iten filtrado por el ID
export const getProductsByID = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find( product => product.id === id);
            resolve(product);
        }, 1)
    })
}

// nueva funcion que retorna los items por categoria
export const getProductsByCategoryID = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFoundByCatergoryId = products.filter( product => product.categoryId === categoryId);
            resolve(productsFoundByCatergoryId);
        }, 1)
    })
}
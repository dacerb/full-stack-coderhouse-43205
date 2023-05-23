const products = [
    {
        name: "One Of A Kind - Mango",
        price: 2000,
        id: 1,
        img:"./img/mango-sonor.png",
        stock: 1,
        category: "snare"
    },
    {
        name: "Sonor SQ1",
        price: 3000,
        id: 2,
        img:"./img/sq1.jpg",
        stock: 1,
        category: "drums"
    },
    {
        name: "Sonor SQ2",
        price: 6000,
        id: 3,
        img:"./img/sq2.jpg",
        stock: 1,
        category: "drums"
    },
    {
        name: "One Of A Kind - White Ebony",
        price: 2000,
        id: 4,
        img:"./img/webony-sonor.png",
        stock: 1,
        category: "snare"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1)
    })
}
const products = [
    { name: 'Laptop', price: 2499, fragil: true },
    { name: 'Ipad Pro', price: 4199, fragil: true },
    { name: 'Cup', price: 12.49, fragil: true },
    { name: 'Glas Wather', price: 18.49, fragil: false },
]

const fragilProducts = product => product.fragil
const isExpensive = product => product.price > 500

const filteredProducts = products.filter(fragilProducts).filter(isExpensive)
console.log(filteredProducts)
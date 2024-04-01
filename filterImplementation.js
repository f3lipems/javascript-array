Array.prototype.filter2 = function (fn) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const products = [
    { name: 'Laptop', price: 2499, fragil: true },
    { name: 'Ipad Pro', price: 4199, fragil: true },
    { name: 'Cup', price: 12.49, fragil: true },
    { name: 'Glas Wather', price: 18.49, fragil: false },
]

const fragilProducts = product => product.fragil
const isExpensive = product => product.price > 500

const filteredProducts = products.filter2(fragilProducts).filter2(isExpensive)
console.log(filteredProducts)
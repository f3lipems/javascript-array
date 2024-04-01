Array.prototype.map2 = function (fn) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(fn(this[i], i, this))
    }
    return newArray
}

const cart = [
    '{ "name": "Rubber", "price": 3.45 }',
    '{ "name": "Notebook", "price": 13.90 }',
    '{ "name": "Pen Kit", "price": 41.22 }',
    '{ "name": "Pencil", "price": 7.50 }',
]

const strToObject = el => JSON.parse(el)
const priceOnly = el => el.price

const prices = cart.map2(strToObject).map2(priceOnly)

console.log(prices)
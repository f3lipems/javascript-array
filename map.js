const nums = [1, 2, 3, 4, 5]

const double = nums.map(function (el) {
    return el + el
})

console.log(double)

const add10 = el => el + 10
const triple = el => el * 3
const toReal = el => `${parseFloat(el).toFixed(2).replace('.', ',')}`

const result = nums.map(add10).map(triple).map(toReal)
console.log(result)
console.log('**********************')

const cart = [
    '{ "name": "Rubber", "price": 3.45 }',
    '{ "name": "Notebook", "price": 13.90 }',
    '{ "name": "Pen Kit", "price": 41.22 }',
    '{ "name": "Pencil", "price": 7.50 }',
]

const strToObject = el => JSON.parse(el)
const priceOnly = el => el.price

const prices = cart.map(strToObject).map(priceOnly)

console.log(prices)
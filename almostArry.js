const almostArray = { 0: 'Felipe', 1: 'Daiane', 2: 'Samuel', 3: 'Alice' }
console.log(almostArray)

Object.defineProperty(almostArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(almostArray.toString())
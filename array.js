// console.log(typeof Array)
// console.log(typeof new Array())

let approved = new Array('Felipe', 'Daiane', 'Samuel', 'Alice')

console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])
console.log(approved[4]) // undefined

approved[4] = 'New person'
approved.push('Other person')

console.log(approved.length)

approved[9] = 'Special person'
console.log(approved.length)

console.log(approved)

approved.sort() // Change the original array
console.log(approved)

delete approved[3]
delete approved[4]
console.log(approved)

approved.splice(3, 2)
console.log(approved)
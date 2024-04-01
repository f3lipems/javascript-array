const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilots.pop() // Remove the last element
console.log(pilots)

pilots.push('Verstappen') // Add a new element
console.log(pilots)

pilots.shift() // Remove the first element
console.log(pilots)

pilots.unshift('Hamilton') // Add a new element in the first position
console.log(pilots)

pilots.splice(2, 0, 'Bottas', 'Massa') // Add Botas and Massa in the position 2
console.log(pilots)

pilots.splice(3, 1) // Remove 1 elemente in the position 3
console.log(pilots)

const somePilots = pilots.slice(2) // Return a new array from position 2 to end of array
console.log(pilots)
console.log(somePilots)

const somePilots2 = pilots.slice(1, 4) // Return a new array from position 1 to position 3
console.log(pilots)
console.log(somePilots2)
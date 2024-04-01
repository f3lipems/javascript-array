const approved = ['Felipe', 'Daiane', 'Samuel', 'Alice']

approved.forEach(function (element, index, array) {
    console.log(`${index + 1}) ${element}`)
    console.log(array)
})
console.log('*************************');

approved.forEach((name) => {
    console.log(name)
})
console.log('*************************');

const showApproved = name => console.log(name)
approved.forEach(showApproved)
console.log('*************************');
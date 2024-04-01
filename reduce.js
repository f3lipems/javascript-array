const students = [
    { name: 'João', grade: 7.3, holder: false },
    { name: 'Maria', grade: 9.2, holder: true },
    { name: 'Pedro', grade: 9.8, holder: false },
    { name: 'Ana', grade: 8.7, holder: true },
]

const result = students.map(s => s.grade).reduce(function (acc, el) {
    console.log(acc, el);
    return acc + el
}, 0)
console.log(result)
console.log('**********************')

const holderStatus = students.map(s => s.holder)
console.log(holderStatus)

const allHolder = (acc, el) => {
    return acc && el
}
const resultAllHolder = holderStatus.reduce(allHolder)
console.log(resultAllHolder)

const thereIsHolder = (acc, el) => {
    return acc || el
}
const resultThereIsHolder = holderStatus.reduce(thereIsHolder)
console.log(resultThereIsHolder)
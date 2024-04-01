Array.prototype.reduce2 = function (fn, acc) {
    let i = 0
    if (!acc) {
        acc = this[0]
        i++
    }
    for (i; i < this.length; i++) {
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

const students = [
    { name: 'João', grade: 7.3, holder: false },
    { name: 'Maria', grade: 9.2, holder: true },
    { name: 'Pedro', grade: 9.8, holder: false },
    { name: 'Ana', grade: 8.7, holder: true },
]

const result = students.map(s => s.grade).reduce2(function (acc, el) {
    console.log(acc, el);
    return acc + el
}, 0)
console.log(result)
Array.prototype.forEach2 = function (fn) {
    for (let i = 0; i < this.length; i++) {
        fn(this[i], i, this)
    }
}

const approved = ['Felipe', 'Daiane', 'Samuel', 'Alice']

approved.forEach2(function (element, index, array) {
    console.log(`${index + 1}) ${element}`)
    console.log(array)
})

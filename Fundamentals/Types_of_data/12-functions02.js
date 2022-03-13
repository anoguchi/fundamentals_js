function myFunction() {
    return `hello`
}

// Other ways to declare functions

// Anonymous function
const myFunction02 = function(params) {
    return `hello ${params}`
}

// Arrow function
const myFunction03 = (params) => {
    return `hello ${params}`
}

const myFunction04 = params => `hello ${params}`

// Inside objects
const object01 = {
    myFunction: params => `hello ${params}`
}

console.log(object01.myFunction('Beto'))

const object02 = {
    myFunction(params) {
        return `Hello ${params}`
    }
}

console.log(object02.myFunction('Beto')) 
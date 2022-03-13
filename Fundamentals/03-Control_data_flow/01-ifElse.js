// Work with booleans

// Get terminal value
const args = process.argv
const balance = args[args.length - 1]
console.log('args', args)
console.log('balance', balance)

if (isNaN(balance)) {
    console.log('Invalid value');
}

let clientType = 'premium'
if (balance < 9) {
    clientType = 'basic'
}
else if(balance >= 10 && balance < 20) {
    clientType = 'gold'
}
else {
    clientType = null
}

// null, undefined, empty, 0 === false

if(!clientType) {
    clientType = 'undefined'
}

console.log('Client type', clientType)

const age = 18

const result = age >= 18 ? "Can drive" : "Can't drive"
console.log('Resultado:', result)

let value = 5

if (value < 2 || value > 4) {
    console.log('a');
} else if (value < 5) {
    console.log('b');
} else {
    console.log('c');
}

const item = (!0 ? '2a' : '3b')

console.log(item)

const item02 = 'abc';
console.log(isNaN(item02) ? 'Hey Jude' : 'Hey Julia')

const result02 = 1 ? (null || ((1 != '1')? 'Hello World' : 'Hackerzao')):"Not Zero";
console.log(result02)

const item03 = "0"
console.log(!!item03)
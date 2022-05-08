const MathOperations = require('./math')
console.log(MathOperations)

console.log(MathOperations.add(2, 2)) 

const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insert first value\n', value01 => {
    terminal.question('Insert second value\n', value02 => {
        console.log('Value01: ', value01, 'Value02: ', value02)
            terminal.question('Insert math operation\n', operationType => {
                const result = MathOperations[operationType](
                    Number(value01), Number(value02)
                )
                console.log(
                    `Operation: ${operationType} of ${value01} and ${value02} is ${result }`
                );
                terminal.close()
            })
    })
})
  
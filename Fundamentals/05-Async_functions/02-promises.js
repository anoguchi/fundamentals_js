const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// No promises
/* terminal.question('What is your name?\n', name => {
    terminal.question('What is your phone number?\n', phoneNumber => {
        console.log(
            `
                Name: ${name},
                Phone Number: ${phoneNumber}
            `
        );
        terminal.close()
    })
}) */

// With promises

function questionAsync(text) {
    return new Promise((resolve, rejetc) => {
        terminal.question(`${text}\n`, resolve)
    })
}

let name = ""
let phoneNumber = ""

Promise.resolve()
    .then(() => questionAsync('What is your name?'))
    .then(responseName => {
        if(!responseName) throw new Error('Empty field')
        name = responseName
    }) 
    .then(() => questionAsync('What is your phone number?'))
    .then(responePhoneNumber => {
        if(!responePhoneNumber) throw new Error('Empty field')
        phoneNumber = responePhoneNumber
    })
    .then(() => {
        console.log(`Name: ${name}, Phone: ${phoneNumber}`);
    })
    .catch(error => {
        console.error('Fuck!', error.stack)
    })
    .finally(() => terminal.close())
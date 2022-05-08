const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function questionAsync(text) {
    return new Promise((resolve, rejetc) => {
        terminal.question(`${text}\n`, msg => {
            !!msg ? resolve(msg) : rejetc(new Error('Field cannot be empty'))
        })
    })
}


async function main() {
    try {
        const name =  await questionAsync('What is your name?')
        const phoneNumber = await questionAsync('What is your phone number?')
        console.log(`Name: ${name}, Phone Number: ${phoneNumber}`)
    } catch (error) {
        console.log('Fuck!', error.stack);
    }
    finally {
        terminal.close()
    }
}

main()
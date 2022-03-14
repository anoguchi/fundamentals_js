// Estrutura de decisão

const readLine = require('readline')
const terminal = readLine.createInterface({
    // definir o modo de entrada via terminal
    input: process.stdin,

    // todo texto de saida será no terminal
    output: process.stdout
})

const textMenu = `
    \nHello, welcome to media system\n
    Type 1 to access the main menu
    Type 2 to acess hero menu 
    Type 3 to acess warrior menu
    Type 0 to exit 
`

// console.log('textMenu: ', textMenu)

// const option = 2
// switch (option) {
//     case 1:
//         console.log('Pressed 1');
//         break;
//     case 2:
//         console.log('Pressed 2');
//         break;
//     case 3:
//         console.log('Pressed 3');
//         break;
//     default:
//         console.log('Invalid');
//         break;
// }

// terminal.question('What is your name? ', (msg) => {
//     console.log('You typed: ', msg)
//     terminal.close()
// })

const questions = {
    homeMenu: {
        text: textMenu,
        fn: homeMenu
    },
    option01: {
        text: 'SubMenu! Press enter to select more options',
        fn: option01
    }
}

function option01(msg) {
    console.log('No more options')
    terminal.close()
}

function homeMenu(msg) {
    const option = Number(msg)
    if (isNaN(option)) {
        throw new Error('Is not a number', msg)
    }
    switch(option) {
        case 0:
            console.log('Leaving...')
            terminal.close()
            break;
        case 1:
            console.log('Home Menu')
            terminal.question(
                questions.option01.text,
                questions.option01.fn
            )
            break;
        default:
            console.log('Invalid option!')
            terminal.close()
            break;
    }
}

terminal.question(questions.homeMenu.text, questions.homeMenu.fn)

switch (0) {
    default:
        console.log('It works without case!');
}

switch (true) {
    case 1 > 2:
        console.log('1 > 2');
        break;
    case 1 === 1:
        console.log('1 === 1');
        break;
    default:
        console.log('None of them!');
        break;
}

switch (0) {
    case 0:
        console.log('Hello World')
    case 1:
        console.log('Second option')
}

switch (true) {
    case 1 < 2:
        console.log('1 < 2')
    case 1 === 1:
        console.log('1 === 1')
    default:
        console.log('Can have more than one option')
}
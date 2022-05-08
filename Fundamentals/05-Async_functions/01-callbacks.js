// Imagina que você está na fila do banco e precisar esperar cada pessoa pagar as suas contas. Isso é chamado de sincronia.
/* Callback: Imagina você no fast food, paga pelo lanche e espera ele ficar pronto, enquanto isso você pode fazer outras coisas, 
   eventLopp, padrão tem error como primeiro parametro e result como segundo parametro.
   JavaScript is like Mr. Robot. It can only do one thing at a time. It cannot do anything else in the meantime, 
   until the one thing gets completed. This behavior is called single threading. If you ask JavaScript to do something else in the meantime, it doesn’t respond. 
   This behavior is called blocking. To see blocking operations in action, run the following JavaScript:
        while (true) {
            console.log('stuck')
        }
        console.log('This log never happens')
*/

const fs = require('fs')
fs.readFile('./file01.txt', (error, response) => {
    if(error) {
        console.log('This is too bad!', error.stack)
        return
    }

    console.log('Response: ', response.toString())
})

fs.readFile('./file01.txt', (errorfile01, response01) => {
    if(errorfile01) {
        console.log('Oh fuck!', errorfile01)
        return;
    }
    fs.readFile('./file02.txt', (errorfile02, response02) => {
        if(errorfile02) {
            console.log('Oh fuck 02!', errorfile02)
            return;
        }
        fs.readFile('./file03.txt', (errorfile03, response03) => {
            if(errorfile03) {
                console.log('Oh fuck 03!', errorfile03)
                return;
            }
            const content = `${response01}\n${response02}\n${response03}`
            console.log(content)
            fs.writeFile('./final.txt', content, (errorWrite, responseWrite) => {
                if(errorWrite) {
                    console.log('Oh fuck!')
                    return
                }

                console.log('Saved!')
            })
        })
    })
})
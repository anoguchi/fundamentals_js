// Enquanto não mudar, não para!

let stopTerm = true
let i = 0
while (stopTerm) {
    stopTerm = i < 10
    if (i % 2 === 0) {
        console.log('Even number', i)
    }
    i += 1
    // i = i + 1
}

// Do: executa primeiro e verifica depois
do {
    console.log('One time!', stopTerm)
} while (stopTerm)

while(stopTerm) {
    // não vai executar
    console.log('Will not run!');
}
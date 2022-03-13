// Um dos conceitos mais difíceis
// Para o js é tudo milisegundos
// Meses começam do zero!

const birthday = new Date(1986, 10, 26)
console.log(birthday)

// Década do Unix
const firstJsDate = new Date(0)
console.log(firstJsDate)
console.log(firstJsDate.getTime())

const today = new Date()
console.log(today.toString())
console.log(today.toLocaleDateString())

// Recommended
console.log(today.toISOString())

const day = today.getDate()
today.setDate(day + 5)  // Plus 5 days
today.setHours(10, 40, 0)
console.log(today) 

console.log(`
    Day: ${today.getDate()}
    Month: ${today.getMonth()}
    Year: ${today.getFullYear()}
    Hour: ${today.getHours()}
    Minute: ${today.getMinutes()}
    Seconds: ${today.getSeconds()}
    Miliseconds: ${today.getMilliseconds()}
`);

console.log(
    new Date(2020, 1, 10) > new Date(2000, 1, 1)
);
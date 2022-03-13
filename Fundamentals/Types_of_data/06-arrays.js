// Vetor ou Matriz

const myList = []
const myPokemonList = [
    'Bulbassaur',
    'Ivysaur',
    'Venusaur',
    'Charmander',
    'Charmeleon',
    'Charizard',
    'Squirtle',
    'Wartortle',
    'Blastoise'
]

console.log(myPokemonList[4])
console.log(myPokemonList[10])
console.log(myPokemonList.length)
myPokemonList.push('Caterpie')

console.log(myPokemonList[myPokemonList.length - 1])

// Remove last
const removeLast = myPokemonList.pop()

// Remove first
const removeFirst = myPokemonList.shift()

console.log(myPokemonList)

// Remove specific from
myPokemonList.splice(3, 1)
console.log(myPokemonList)

const itens = [
    1, 'computer', 0.22
]

// Verify type of array
console.log(typeof(itens))

// Verify if it's an array correctly
console.log(Array.isArray(itens))

// Order
const someNumbers = [3, 0, 1, 2]
console.log(someNumbers.sort())

const someCharacters = ['z', 'a', 'd', 'p']
console.log(someCharacters.sort())

const someNames = ['Alberto', 'André', 'Zé', 'Mario', 'Amanda']
console.log(someNames.sort())

// Join arrays
const joinNewArray = itens.concat([2, 3, 4, 'Beto'])
console.log(joinNewArray)

// Join arrays in a string
console.log(itens.join(','))

// Verify array index
const index = itens.indexOf('computer')
console.log(index)
console.log(itens[index])

const noExistIndex = itens.indexOf('Nokia')
console.log(noExistIndex)








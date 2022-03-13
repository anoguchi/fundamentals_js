const hero = {
    name: 'Spider Man',
    age: 19,
    power: 'Super Strength'
}

console.log('Name:', hero.name)
console.log('Age:', hero['age'])
console.log('Age:', hero.power)
console.log('noExist:', hero.lenght)

hero.id = 0001

console.log(hero)

// Get keys
console.log(Object.keys(hero))

// Get values
console.log(Object.values(hero))

// Join two objects
const person = {
    height: '1.68m'
}

const newHeroObj = Object.assign(hero, person)
console.log(newHeroObj)

// Delete Key
delete newHeroObj.name
console.log(newHeroObj)
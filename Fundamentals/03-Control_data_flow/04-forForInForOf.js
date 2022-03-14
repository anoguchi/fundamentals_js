const evenText = 'even'
const oddText = 'odd'
for (let index = 0; index <= 10; index++) {
    const decision = index % 2 === 0 ? evenText : oddText
    console.log(`Number: ${index} is ${decision}`) 
}

const myList = [
    {
        id: parseInt(Math.random() * 10),
        name: 'Beto',
        superPower: 'none'
    },

    {
        id: parseInt(Math.random() * 10),
        name: 'Denis',
        superPower: 'Intelligence'
    }

]

console.log(myList)

for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    console.log(`
        id: ${element.id}
        name: ${element.name}
    `);
}

// Não precisa de um contador
for (const value in myList) {
        const element = myList[value];
        console.log('Name: ', element.name);
}

// Não precisa usar index, se precisar usar index use o for
for(const item of myList) {
    console.log('Name: ', item.name);
}
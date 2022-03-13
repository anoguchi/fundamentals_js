// 

function name(params) {
    
}

function todayDate() {
    const date = new Date()
    console.log(`The day today is: ${date.getDate()}`)
}

todayDate()

function sum(value01, value02) {
    console.log(`Sum of ${value01} + ${value02} is:`, value01 + value02)
}

sum(10, 30)
sum(30, 40)

// Function can return values
function multiplication(value01, value02) {
    return value01 * value02
}

const age = 35
const herAge = 32
// Não é uma boa prática passar o valores direto para a função
const result = multiplication(age, herAge)

console.log(result)

function divide(value01, value02) {
    const result = value01 / value02
    return result
}

const divideValue01 = 100
const divideValue02 = 10

console.log(divide(divideValue01, divideValue02))


// Coisa mais legal
const employee01 = {
    name: 'Beto',
    discount: 0.2,
    grossSalary: 7000,
    netSalary: 0
}

const employee02 = {
    name: 'Maria',
    discount: 0.2,
    grossSalary: 12000,
    netSalary: 0
}

function calculateDiscount(grossSalary, discount){
    return grossSalary - (grossSalary * discount)
}

employee01.netSalary = calculateDiscount(employee01.grossSalary, employee01.discount)
employee02.netSalary = calculateDiscount(employee02.grossSalary, employee02.discount)

console.log(
    `
    Salary ${employee01.name}: ${employee01.netSalary}  
    Salary ${employee02.name}: ${employee02.netSalary}  
    `
);









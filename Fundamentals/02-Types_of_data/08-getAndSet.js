// Usados quando obter um valor fazer algo ou setar algo fazer algo
// _name: considerado propriedade privada(convenção)

const person = {
    _name: '',
    _age: 35,
    get name() {
        return this._name
    },
    set name(value) {
        this._name = value.toUpperCase() 
    },

    get canDrive() {
        return this._age > 18
    },

    set age(value) {
        this._age = value;
    }

}

person.name = 'alberto hideyo noguchi filho'
console.log(person.name)

console.log(person.canDrive)

person.age = 12
console.log(person.canDrive)

console.log(person.age)
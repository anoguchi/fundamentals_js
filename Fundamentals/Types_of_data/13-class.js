class Hero {
    attack() {
        console.log(`Attacked!`);
    }
    defense() {
        console.log(`Defended!`);
    }
}

const hero = new Hero
hero.attack()
hero.defense()


class Hero02 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    attack(){
        console.log(`${this.name} attacked!`);
    }
}

const hero02 = new Hero02('Spider Man', 19)
hero02.attack()

class Hero03 {

    // Static: só quero fazer um cálculo e retornar.
    // Também chamada como funções helpers, que não envolve o seu contexto atual.
    // Para valores que não se alteram, ele é criado dentro da função e morre logo após que a função é criada.
    static getYearOfBirthday(age) {
        return 2021 - age
    }
}

const yearOfBirthday = Hero03.getYearOfBirthday(35)
console.log(yearOfBirthday)
let pet = {
    nameOfPet: "marlo",
    typeOfPet: "dog",
    ageOfPet: 2,
    colour:"purple",

    eat: () => {
        return (`${pet.nameOfPet} is eating`);
    },
    drink: () => {
        return (`${pet.nameOfPet} is drinking`);
    },

};



console.log(pet.eat());
console.log(pet.drink());
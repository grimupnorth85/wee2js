let newPerson = {
    name: "whitesheep",
    age: 23,
    sayHi(){
        console.log (this.name)
        return `my name is ${this.name} and i am ${this.age} years old`
    }
}

// person.eyeCol = "blue"
// person.team = "everton"
// person.sockCol = "purple"

//let chosenKey = "name"
console.log (newPerson.sayHi())
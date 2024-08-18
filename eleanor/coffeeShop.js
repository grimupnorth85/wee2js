let coffeeShop = {

    branch: "huyton",
    drinksList: ["water", 2, "tea", 3],
    foodList: ["toast", 1, "porridge", 9],
    
    drinksOrdered(drink){
        console.log(drink)

        console.log(this.drinksList.indexOf("tea"))

        console.log(this.drinksList[this,this.drinksList.indexOf("tea")+1])

        for (let i=0; i < drink.length; i++){
            
            let indexOfItem = this.drinksList.indexOf(drink[i])
            
        console.log(indexOfItem)

        }
    }
}





   //             {name: "water", price: 2},
    //             {name: "milk", price: 4},
    //             {name: "juice", price: 6},
    //             {name: "pop", price: 8}
    // 
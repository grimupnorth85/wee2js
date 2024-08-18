const coffeeShop = {
    branch: "costa",
    menu:{
        coffee: 2,
        tea: 3,
        cake: 4
    },
    order(orderedItems){
        let total = 0;
        console.log(`${this.branch} receipt\n`)

for (const item of orderedItems){
    console.log(item,this.menu[item])
}
}
}

coffeeShop.order(["coffee", "tea", "cake"])
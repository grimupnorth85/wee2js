let orderCount = [];
let topping = [
    "peppers",
    "pineapple",
]


let takeOrder = (topping) => {
    console.log(`pizza with ${topping}`);
    orderCount++;
}
takeOrder("pineapple");
takeOrder("pineapple");
takeOrder("peppers");
console.log (orderCount)


const pin = 8080;
let balance = 100;

let withdrawal = (balance) => {
    console.log (`${balance} taken from account`)

    if (pin != 8080 || (balance) <= (withdrawal())){
    console.log("wrong pin, please try again..")}


else {console.log ("pin incorrect or insufficient funds")};
};



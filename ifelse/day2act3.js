let password = ("tatterskkp")

if (password.length < 8){
    console.log("too short")
}

else if (password.length % 3 || password % 5) {
    console.log (`${password} this number is divisible by 3 or 5`)
} 

else {
    console.log(password)
}




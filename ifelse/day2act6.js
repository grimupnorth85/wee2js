let time = (18);
let placeOfWork = ("at work");
let townOfHome = ("at home");

if (time <8 || time >18) {
    console.log(`im ${townOfHome} `)
}
else if (time >8 && time <17){
    console.log(`im ${placeOfWork}`)
}

else {
    console.log(`im commuting`)
}

//needs improvement 
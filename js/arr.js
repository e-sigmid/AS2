
//array
const mealbutton = document.getElementById('Meal');

var randomName = null;

let random = [];

var firstName = [" tomato", " mushroom", " beef", " chicken", " pork", " vegetarian", " dog", " cat"];

var lastName = [" soup", " sauce", " flavored", " stew", " icecream", " milk", " bread"];

//randomizes the meals
mealbutton.addEventListener("click", function() {
    var userQty = document.querySelector('.glock9').value;
    document.getElementById('nameList').innerHTML = '';

 //if more than 10 meals the text will be changed
 if (userQty > 10) {
    document.querySelector('.nameList').innerHTML = 'ONLY 10 MEALS CAN BE GENERATED';
}

   //
    else {
    for (var i = 0; i < userQty; i++) {
        randomName = firstName[Math.floor(Math.random()*firstName.length)];
        document.getElementById('nameList').innerHTML += randomName;
    }
    }
})

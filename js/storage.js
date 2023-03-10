let myObj = {
    name: "Signe",
    age: 16,
};
//serialized = converted into readable data
let myObj_serialized = JSON.stringify(myObj);
console.log(myObj_serialized)

localStorage.setItem("myObj_serialized" , myObj);

let myObj_deserialized = JSON.parse (localStorage.getItem("myObj"));

console.log(myObj_deserialized);
//will have the weekdays in order

const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
    
let text = "";
for (let i = 0; i < days.length; i++) {

  text += days[i] + "<br>";
}

//will make the weekend days in order

const ends = ["Friday", "Saturday", "Sunday"];
    
let i = 0;
while (ends[i]) {
  text += ends[i] + "<br>";
  i++;
}

document.getElementById("demo").innerHTML = text;

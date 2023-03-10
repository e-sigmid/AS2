//function
//will make the time go by hours, minutes and seconds
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("Klokke").innerHTML = "The time is: "+ h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  //function when 
  //make sthe time actually go
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // Legger inn null når kl. er mindre < 10
    return i;
  }
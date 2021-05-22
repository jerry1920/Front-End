setInterval(() =>{
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = "AM";
    if(hours > 12){
        period = "PM";
        hours = hours - 12;
    }
    if(hours < 10){
       hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    time.textContent = hours + ":" + minutes + " " + period; 
});
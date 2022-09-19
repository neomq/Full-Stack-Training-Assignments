let d = new Date();//createign object for date.
//console.log(d);
console.log(d.getFullYear() + " " + d.getDate() + " " + d.getMonth());
console.log(d.getHours() + " " + d.getMinutes() + " " + d.getSeconds());
console.log(d.getDay())
setInterval(() => {
    let d = new Date();//createign object for date.
    let hours = d.getHours();
    let mins = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    document.getElementById("result").innerHTML = hours + ":" + mins + ":" + seconds;
}, 1000)
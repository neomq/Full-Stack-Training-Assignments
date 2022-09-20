setInterval(() => {
    let d = new Date();
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
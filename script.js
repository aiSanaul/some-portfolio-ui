function date_time() {
    var currentDate = new Date(),

        day = currentDate.getDate(),
        month = currentDate.getMonth() + 1,
        year = currentDate.getFullYear();

        hour = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById("date").innerHTML = (day + "/" + month + "/" + year);
    document.getElementById("time").innerHTML = (hour + ":" + minutes + ":" + seconds);

}

setInterval(date_time, 100)

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 1000);

    var currentTime = new Date().getHours();
    if (7 <= currentTime && currentTime < 20) {
        if (document.body) {
            document.body.style.backgroundImage = "url('clouds.jpg')";
            document.getElementById("clock").style.color = "black";
            document.getElementById("date").style.color = "black";
            document.getElementById("clockdate-wrapper").style.backgroundColor = 'rgba(255,255,255,0.5)';
    }
        } else {
    if (document.body) {
            document.body.style.backgroundImage = "url('night.jpg')";
            document.getElementById("clock").style.color = "white";
            document.getElementById("date").style.color = "white";
            document.getElementById("clockdate-wrapper").style.backgroundColor = 'rgba(0,0,0,0.5)';
        }
    }

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
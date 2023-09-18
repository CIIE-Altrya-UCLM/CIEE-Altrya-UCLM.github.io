function makeTimer() {

    var now = new Date();
    var now = Date.parse(now) / 1000;

    var endTime = new Date(Date.UTC(2023, 8, 19, 13, 30, 0));
    var endTime = Date.parse(endTime) / 1000;

    var timeLeft = endTime - now

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    document.getElementById("days").innerHTML = days + "<span> días,</span>";
    document.getElementById("hours").innerHTML = hours + "<span> horas,</span>";
    document.getElementById("minutes").innerHTML = minutes + "<span> minutos y</span>";
    document.getElementById("seconds").innerHTML = seconds + "<span> segundos</span>";

}

setInterval(function () {
    makeTimer();
}, 1000);
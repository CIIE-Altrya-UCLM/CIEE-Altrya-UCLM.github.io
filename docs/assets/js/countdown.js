function getDay() {

    var now = new Date();
    var now = Date.parse(now) / 1000;

    var day_28_B = new Date(Date.UTC(2023, 7, 28, 4, 0, 0));
    var day_28_B = Date.parse(day_28_B) / 1000;

    var day_28_E = new Date(Date.UTC(2023, 7, 28, 20, 10, 0));
    var day_28_E = Date.parse(day_28_E) / 1000;

    var day_2_B = new Date(Date.UTC(2023, 8, 2, 4, 45, 0));
    var day_2_B = Date.parse(day_2_B) / 1000;

    var day_2_E = new Date(Date.UTC(2023, 8, 2, 20, 50, 0));
    var day_2_E = Date.parse(day_2_E) / 1000;

    var day_3_B = new Date(Date.UTC(2023, 8, 3, 4, 30, 0));
    var day_3_B = Date.parse(day_3_B) / 1000;

    var day_3_E = new Date(Date.UTC(2023, 8, 3, 19, 30, 0));
    var day_3_E = Date.parse(day_3_E) / 1000;

    var day_7_B = new Date(Date.UTC(2023, 8, 7, 15, 10, 0));
    var day_7_B = Date.parse(day_3_B) / 1000;

    var day_7_E = new Date(Date.UTC(2023, 8, 7, 23, 0, 0));
    var day_7_E = Date.parse(day_3_E) / 1000;

    var day_8_B = new Date(Date.UTC(2023, 8, 8, 8, 45, 0));
    var day_8_B = Date.parse(day_3_B) / 1000;

    var day_8_E = new Date(Date.UTC(2023, 8, 8, 13, 30, 0));
    var day_8_E = Date.parse(day_3_E) / 1000;

    var day_16_B = new Date(Date.UTC(2023, 8, 16, 8, 20, 0));
    var day_16_B = Date.parse(day_3_B) / 1000;

    var day_16_E = new Date(Date.UTC(2023, 8, 17, 0, 30, 0));
    var day_16_E = Date.parse(day_3_E) / 1000;

    var day_2024 = new Date(Date.UTC(2024, 7, 28, 4, 0, 0));
    var day_2024 = Date.parse(day_2024) / 1000;

    var name = ""

    if (now > day_16_E) {
        endTime = day_2024
        name = "¡Nos vemos en San Agustín 2024! Aún quedan:"
        document.getElementById("fireworks").remove();
    } else if (now > day_16_B) {
        endTime = day_16_E
        name = "¡Es el día de la octava! Último día con las alabardas en la calle:"
        document.getElementById("fireworks").style.display = "block";
    } else if (now > day_8_E) {
        endTime = day_16_B
        name = "¡Nos vemos el día de la octava! Quedan:"
        document.getElementById("fireworks").remove();
    } else if (now > day_8_B) {
        endTime = day_8_E
        name = "¡Hoy es el día de la Virgen! Las alabardas estarán en la calle hasta dentro de:"
        document.getElementById("fireworks").style.display = "block";
    } else if (now > day_7_E) {
        endTime = day_8_B
        name = "Sólo quedan unas horas para los actos del día grande:"
        document.getElementById("fireworks").remove();
    } else if (now > day_7_B) {
        endTime = day_7_E
        name = "¡Es la víspera del día de la Virgen! A las alabardas les quedan en la calle:"
        document.getElementById("fireworks").style.display = "block";
    } else if (now > day_3_E) {
        endTime = day_7_B
        name = "¡Nos vemos para los días grandes! Aún quedan:"
        document.getElementById("fireworks").remove();
    } else if (now > day_3_B) {
        endTime = day_3_E
        name = "¡Las alabardas están en la calle! Les quedan:"
        document.getElementById("fireworks").style.display = "block";
    } else if (now > day_2_E) {
        endTime = day_3_B
        name = "Volvemos el domingo 3 de septiembre, quedan:"
        document.getElementById("fireworks").remove();
    } else if (now > day_2_B) {
        endTime = day_2_E
        name = "¡Las alabardas están en la calle! Les quedan:"
        document.getElementById("fireworks").style.display = "block";
    } else if (now > day_28_E) {
        endTime = day_2_B
        name = "Volvemos el sábado 2 de septiembre, quedan:"
        document.getElementById("fireworks").remove();
    } else if (now > day_28_B) {
        endTime = day_28_E
        name = "¡Las alabardas están celebrando San Agustín! Les quedan:"
        document.getElementById("fireworks").style.display = "block";
    } else {
        endTime = day_28_B
        name = "¡Ya casi es San Agustín!"
        document.getElementById("fireworks").remove();
    }

    document.getElementById("day_name").innerHTML = name;

    return endTime
}

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

    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    document.getElementById("days").innerHTML = days + "<span> días,</span>";
    document.getElementById("hours").innerHTML = hours + "<span> horas,</span>";
    document.getElementById("minutes").innerHTML = minutes + "<span> minutos y</span>";
    document.getElementById("seconds").innerHTML = seconds + "<span> segundos</span>";

}

setInterval(function () {
    makeTimer();
}, 1000);
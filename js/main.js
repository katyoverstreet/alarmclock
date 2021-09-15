const display = document.getElementById('clock'); //reference div with clock id and save in display
let alarmTime;
let alarmTimeout;

function updateTime() { //update clock div with current time
    const date = new Date(); //new date objects holds current date and time

    const hour = formatTime(date.getHours());
    const min = formatTime(date.getMinutes());
    const sec = formatTime(date.getSeconds());



    display.innerText = hour + " : " + min + " : " + sec;
}

function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
    console.log(alarmTime);
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => alert('Timeout'), timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);//calling update function at this interval so it updates without refreshing page
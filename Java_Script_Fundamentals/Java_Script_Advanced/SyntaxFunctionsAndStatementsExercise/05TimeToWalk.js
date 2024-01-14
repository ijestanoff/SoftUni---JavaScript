function timeToWalk(step, len, speed) {
    let path = step * len;
    let totalSeconds = (path / (speed * 1000)) * 3600 + Math.floor(path / 500) * 60;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds -= hours * 3600;
    let minutes = Math.floor(totalSeconds / 60);
    seconds = Math.round(totalSeconds - minutes * 60);
    if (hours < 10 ) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5); //00:32:48
timeToWalk(2564, 0.70, 5.5);
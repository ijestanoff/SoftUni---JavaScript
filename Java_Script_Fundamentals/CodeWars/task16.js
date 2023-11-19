function solve(seconds) {
    let time = [];
    if (!seconds) return 'now';

    let yy = Math.floor(seconds / (3600 * 24 * 365))
    let dd = Math.floor(seconds / (3600 * 24) % 365);
    let hh = Math.floor(seconds / 3600 % 24);
    let mm = Math.floor(seconds / 60 % 60);
    let ss = seconds % 60;

    if (yy && yy > 1) time.push(yy + ' years');
    else if (yy == 1) time.push(yy + ' year');
    if (dd && dd > 1) time.push(dd + ' days');
    else if (dd == 1) time.push(dd + ' day');
    if (hh && hh > 1) time.push(hh + ' hours');
    else if (hh == 1) time.push(hh + ' hour');
    if (mm && mm > 1) time.push(mm + ' minutes');
    else if (mm == 1) time.push(mm + ' minute');
    if (ss && ss > 1) time.push(ss + ' seconds');
    else if (ss == 1) time.push(ss + ' second');
    let [concat, out] = [', ',''];
    for (let i = 0; i < time.length; i++) {
        if (i == time.length - 2) concat = ' and ';
        if (i == time.length - 1) concat = '';
        out += time[i] + concat;
    }
    return out;
}

console.log(solve(1));
console.log(solve(62));
console.log(solve(120));
console.log(solve(3600));
console.log(solve(3662));
console.log(solve(2585913));
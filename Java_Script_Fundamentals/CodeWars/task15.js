function solve (seconds) {
    let yy = Math.floor(seconds/(3600*24*365))
    let dd = Math.floor(seconds/(3600*24) %365);
    let hh = Math.floor(seconds/3600 %24);
    let mm = Math.floor(seconds/60 %60);
    let ss = seconds % 60;
    return `${yy} ${dd} ${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}

console.log(solve(0));
console.log(solve(59));
console.log(solve(60));
console.log(solve(90));
console.log(solve(3599));
console.log(solve(3600));
console.log(solve(45296));
console.log(solve(86399));
console.log(solve(2585913));
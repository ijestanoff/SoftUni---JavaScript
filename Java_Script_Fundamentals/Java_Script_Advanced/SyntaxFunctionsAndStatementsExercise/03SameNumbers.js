function sameNumbers(input) {
    let data = String(input).split('');
    let first = data[0];
    let out = true;
    data.forEach(elem => { if (elem != first) out = false });
    console.log(out);
    console.log(data.reduce((acc, val) => acc + +val, 0));
}

sameNumbers(2222222);
sameNumbers(1234);
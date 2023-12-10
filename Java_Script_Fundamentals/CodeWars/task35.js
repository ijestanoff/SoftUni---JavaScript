function findPosition(num) {
    let idx = '12345678910111213141516'.indexOf(num);
    if (idx != -1) return idx;
    for (let step = 2; step < num.length; step++) {
        for (let offset = 0; offset < step; offset++) {
            let n = [];
            let init = num.slice(0, offset);
            if (init.length) n.push(init);
            for (let idx = offset; idx < num.length; idx += step) {
                n.push(num.slice(idx, idx + step));
            }
        }
    }
}

const position = (number) => {
    let len = Number(String(number).length);
    let offset = {
        2: 8, 3: 188, 4: 2888, 5: 38888, 6: 488888, 7: 5888888, 8: 68888888,
        9: 788888888, 10: 8888888888, 11: 98888888888, 12: 1088888888888,
        13: 11888888888888, 14: 128888888888888, 15: 1388888888888888
    };
    return offset[len] + (number - 1 - Number('9'.repeat(len - 1))) * len + 1;
}

console.log(findPosition('12345670899'));
console.log(position(119855589995974));

//"555899959741198" , 1686722738828503
function findPosition(num) {


}

const position = (number) => {
    let len = Number(String(number).length);
    let offset = {
        2: 8, 3: 188, 4: 2888, 5: 38888, 6: 488888, 7: 5888888, 8: 68888888,
        9: 788888888, 10: 8888888888, 11: 98888888888, 12: 1088888888888,
        13: 11888888888888, 14: 128888888888888, 15: 1388888888888888
    };
    let out = offset[len];
    let mid = (number - Number('9'.repeat(len - 1))) * len
    return out + mid;
}

console.log(position(99));
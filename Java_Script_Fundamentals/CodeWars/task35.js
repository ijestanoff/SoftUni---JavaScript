function findPosition(num) {
    let idx = '12345678910111213141516'.indexOf(num);
    if (idx != -1) return idx;
    for (let step = 2; step <= num.length; step++) {
        let find = [];
        for (let offset = 0; offset < step; offset++) {
            let n = [];
            let init = num.slice(0, offset);
            if (init.length) n.push(init);
            for (let idx = offset; idx < num.length; idx += step) {
                n.push(num.slice(idx, idx + step));
            }
            let fit = false;
            if (n.length == 1) find.push(n[0]);
            else {
                for (let i = 1; i < n.length; i++) {
                    if (n[i - 1].length == step && n[i].length == step) { //two compared numbers are with full length
                        if (+n[i - 1] + 1 == +n[i]) fit = true; 
                        else {
                            fit = false;
                            break;
                        }
                    }
                }
                if (fit) {
                    if (n[0].length == step) return [position(n[0]),n[0]];
                }
            }
            console.log(n);
        }
    }
    return 99999;
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

console.log(findPosition('99100'));
console.log(position(4949));

//"555899959741198" , 1686722738828503
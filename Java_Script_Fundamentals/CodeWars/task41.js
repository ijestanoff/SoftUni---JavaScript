function createPhoneNumber(n) {
    return `(${n[0] * 100 + n[1] * 10 + n[2]}) ${n[3] * 100 + n[4] * 10 + n[5]}-${n[6] * 1000 + n[7] * 100 + n[8] * 10 + n[9]}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));// "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));// "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));// "(123) 456-7890"

//return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
function test() {
    let arr = ['one', 'two', 'three', 'four', 'five', 'six'];
    let kolio = arr.slice();
    console.log(arr);
    console.log(kolio);
    let newArr = arr.splice(-8);
    let num = [1, 2, 3, 4, 5];
    let sum = 0;
    num.forEach(x => sum+=x);
    console.log(sum);
}

test();
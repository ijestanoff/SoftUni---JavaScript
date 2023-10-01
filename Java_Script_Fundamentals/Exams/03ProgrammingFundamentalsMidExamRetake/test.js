function test () {
    let arr = [0, 1, 2, 3, 4];
    [arr[0], arr[4]] = [arr[4], arr[0]]
    console.log(arr);
}

test();

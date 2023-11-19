function solve (arr,n) {
    let numbers = {};
    let output = [];
    arr.forEach(num => { 
        if (num in numbers) numbers[num] +=1;
        else numbers[num] = 1;
        if (numbers[num] <= n) output.push(num);
    });
    return output;
}

console.log(solve([20,37,20,21],1));
console.log(solve([1,1,3,3,7,2,2,2,2],3));
//console.log(solve());
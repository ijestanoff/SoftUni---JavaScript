function solve(exp) {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    exp.split('').forEach(digit => {
        if (digits.includes(Number(digit))) digits.splice(digits.indexOf(Number(digit)), 1);
    })
    
    let pattern = /(?<num1>[\d\?-][\d\?]*)(?<sign>[-*+])(?<num2>[-\d\?*][\?\d]*)=(?<result>[-\?\d]+)/;
    let match = exp.match(pattern);
    let { num1, sign, num2, result } = match.groups;
    let find = false;
    for (let idx = 0; idx < digits.length; idx++) {
        i = digits[idx];
        if (sign == '*') {
            if (trans(num1, i) * trans(num2, i) === trans(result, i)) {
                find = true;
                break;
            }
        } else if (sign == '-') {
            if (trans(num1, i) - trans(num2, i) === trans(result, i)) {
                find = true;
                break;
            }
        } else if (sign == '+') {
            if (trans(num1, i) + trans(num2, i) === trans(result, i)) {
                find = true;
                break;
            }
        }
    }
    if (find) return i;
    else return -1;

    function trans(number, count) {
        let result = number.split('?').join(count);
        if (result.slice(0, 2) == '00') return NaN;
        if (result.slice(0, 2) == '-0' && result.length > 2) return NaN;
        if (result[0] == '0' && result.length > 1) return NaN;
        return Number(result);
    }
}

console.log(solve('123*45?=5?088')); //6
console.log(solve('-5?*-1=5?')); //0
console.log(solve('19--45=5?')); //-1
console.log(solve('??*??=302?'));//5
console.log(solve('?*11=??')); //2
console.log(solve('??*1=??')); //2
console.log(solve('??+??=??'));//-1
console.log(solve('1+1=?'));//2
console.log(solve('-?56373--9216=-?47157'));//8

function solveExpression(exp) {
    exp = exp.replace('=','==').replace('--','+');
    for(var i = 0; i < 10; i++){
      if(eval(exp.replace(/\?/g,i)) && !exp.includes(i)){
          if(!/^00+$/.test(exp.replace(/\?/g,i).split('==')[1]))  return i;
      }
    }
    return -1;
  }



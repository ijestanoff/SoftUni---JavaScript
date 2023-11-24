function solve(string) {
    string = string.split(' ').filter(a => a != 'and').join(' ');
    let number = 0;
    let numbers = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11,
        'twelve': 12,
        'thirteen': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen': 16,
        'seventeen': 17,
        'eighteen': 18,
        'nineteen': 19,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90,
    }
    if (string.includes('million')) return 1000000;
    if (string.includes('thousand')) {
        let parts = string.split(' thousand');
        parts[1] = parts[1].trim();
        if (parts[0].includes('hundred')) {
            number += hundred(parts[0]) * 1000;
        } else if (parts[0].includes('-')) {
            number += tens(parts[0]) * 1000;
        } else number = numbers[parts[0]] * 1000;
        if (parts[1]) {
            if (parts[1].includes('hundred')) {
                number += hundred(parts[1]);
            } else if (parts[1].includes('-')) {
                number += tens(parts[1]);
            } else number += numbers[parts[1]];
        }
    } else {
        if (string.includes('hundred')) {
            number += hundred(string);
        } else if (string.includes('-')) {
            number += tens(string);
        } else number = numbers[string];
    }

    function tens(str) {
        let num = 0;
        let ten = str.split('-');
        num += numbers[ten[0]] + numbers[ten[1]];
        return num;
    }

    function hundred(str) {
        let num = 0;
        let items = str.split(' hundred');
        if (items[1]) {
            items[1] = items[1].trim();
            if (items[1].includes('-')) num += tens(items[1]);
            else if (items[1]) num += numbers[items[1]];
        } else items[0] = items[0].trim();
        num += numbers[items[0]] * 100;
        return num;
    }

    return number;
}

// console.log(solve('one')); //1
// console.log(solve('twenty')); //20
// console.log(solve('two hundred forty-six')); //246
// console.log(solve('seven hundred eighty-three thousand nine hundred and nineteen')); //783919
// console.log(solve('seven hundred thousand nine hundred and nineteen')); //700919
//console.log(solve('two thousand')); //2000
//console.log(solve('one thousand three hundred thirty-seven')); //1337
console.log(solve('two hundred thousand three')); //200003
console.log(solve('one million')); //200003

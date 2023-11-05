function treasureFinder(input) {
    let numbers = input.shift().split(' ').map(Number);
    for (let part of input) {
        if (part == 'find') break;
        let [output, i] = ['', 0];
        for (let index = 0; index < part.length; index++) {
            output += String.fromCharCode(part.charCodeAt(index) - numbers[i]);
            if (++i == numbers.length) i = 0;
        }
        let type = output.split('&');
        let coordinates = output.split('<');
        console.log(`Found ${type[1]} at ${coordinates[1].slice(0, coordinates[1].length - 1)}`);
    }
}

treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]);
console.log('------');
treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]);
function solve(input, markers) {
    markers.forEach(marker => {
        input.match(new RegExp(` *[/${marker}].*`, 'g'))
            .forEach(p => input = input.slice(0, input.indexOf(p)) + input.slice(input.indexOf(p) + p.length));
    });
    return input;
}

console.log(solve("apples, plums % and bananas\npears\noranges !applesauce\ncoffe !torta", ["%", "!"]));
// console.log(solve());
// console.log(solve());
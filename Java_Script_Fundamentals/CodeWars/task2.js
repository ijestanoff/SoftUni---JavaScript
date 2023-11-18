function solve(text) {
    let output = [];
    text.split('').map(elm => elm.toLowerCase())
        .forEach(elm => {
            if (/[a-z]/.test(elm)) output.push(elm.charCodeAt() - 96);
        });
    return output.join(' ');
}

console.log(solve('The sunset sets at twelve o clock.'));
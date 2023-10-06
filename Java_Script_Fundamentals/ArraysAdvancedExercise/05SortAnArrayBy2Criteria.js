solve = array => console.log(array.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n'))

solve (['alpha', 'beta', 'gamma']);
console.log('=========');
solve (['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
function sortAnArrayBy2Criteria(array) {
    const sortByTwo = (first, next) =>
        first.length - next.length || first.localeCompare(next);
    array.sort(sortByTwo);
    console.log(array.join('\n'));
}

//sortAnArrayBy2Criteria (['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria (['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
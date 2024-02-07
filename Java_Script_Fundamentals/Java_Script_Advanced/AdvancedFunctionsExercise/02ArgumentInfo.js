function argumentInfo (...arg) {
    argumentObj = {};
    arg.forEach(elm => {
        let type = typeof(elm);
        if (!(type in argumentObj)) {
            argumentObj[type] = 0;
        }
        argumentObj[type]++;
        console.log(`${type}: ${elm}`);
    });
    Object.entries(argumentObj).sort((a,b)=>b[1]-a[1]).forEach(part => console.log(`${part[0]} = ${part[1]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
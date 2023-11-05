function deserializeString (input) {
    let string = [];
    input.forEach(part => {
        if (part != 'end') {
            let symbol = part[0];
            part.slice(2).split('/').forEach(index => string[Number(index)] = symbol);
        }
    });
    console.log(string.join(''));
}

deserializeString (['a:0/2/4/6',
'b:1/3/5',
'end']);
deserializeString (['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']);

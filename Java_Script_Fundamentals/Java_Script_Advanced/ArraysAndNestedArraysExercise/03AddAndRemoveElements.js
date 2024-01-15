solve=array=>array.reduce((acc,val,idx)=>(val=='add'?acc.push(idx+1):acc.pop(),acc),[]).join('\n')||'Empty'

// https://pastebin.com/GRxLqiqf
console.log(solve(['add',
    'add',
    'add',
    'add']

));
console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));
console.log(solve(['remove',
    'remove',
    'remove']
));
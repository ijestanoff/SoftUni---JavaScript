function stringLength (a,b,c) {
    let len = a.length + b.length + c.length;
    console.log(`${len}\n${len/3 | 0}`);

}

stringLength ('chocolate', 'ice cream', 'cake');
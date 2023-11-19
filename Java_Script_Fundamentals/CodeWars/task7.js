function solve (dna) {
    let out = dna.split('');
    out.map((elm,inx) => {
        if (elm == 'T') out[inx] = 'A';
        else if (elm == 'A') out[inx] = 'T';
        else if (elm == 'C') out[inx] = 'G';
        else if (elm == 'G') out[inx] = 'C';
    });
    return out.join(''); 
}

console.log(solve("ATTGC"));
console.log(solve("GTAT"));
// console.log(solve());

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

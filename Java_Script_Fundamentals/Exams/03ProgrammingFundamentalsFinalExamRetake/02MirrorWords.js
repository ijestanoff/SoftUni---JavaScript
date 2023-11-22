function mirrorWords(input) {
    let [mirrorWords, pairs, output] = [{}, 0, ''];
    let pattern = /([#@])(?<word1>[A-Za-z]{3}[A-Za-z]*)\1\1(?<word2>[A-Za-z]{3}[A-Za-z]*)\1/g;
    let match = input[0].matchAll(pattern);
    for (let curMatch of match) {
        pairs++;
        if (curMatch.groups.word1.length == curMatch.groups.word2.length) {
            if (curMatch.groups.word1 == curMatch.groups.word2.split('').reverse().join('')) {
                mirrorWords[curMatch.groups.word1] = curMatch.groups.word2;
            }
        }
    }
    if (pairs) console.log(`${pairs} word pairs found!`);
    else console.log("No word pairs found!");
    if (Object.keys(mirrorWords).length) {
        console.log(`The mirror words are:`);
        Object.entries(mirrorWords).forEach(element => output+=`${element[0]} <=> ${element[1]}, ` );
        console.log(output.slice(0, output.length-2));
    } else console.log(`No mirror words!`);
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
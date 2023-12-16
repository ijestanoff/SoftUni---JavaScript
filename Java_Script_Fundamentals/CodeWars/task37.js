// function searchSubstr(fullText, searchText, allowOverlap = true) {
//     if (searchText == '') return 0;
//     if (allowOverlap) {
//         return Array.from(fullText.matchAll(new RegExp(`(?=(${searchText}))`, "g")), x => x[1]).length;
//     } else {
//         return fullText.match(new RegExp(searchText, "g")).length;
//     }
// }

function searchSubstr(fullText, searchText, allowOverlap) {
    return fullText && searchText ? fullText.match(new RegExp(allowOverlap ? `(?=${searchText})` : searchText, `g`) || []).length : 0;
}
console.log(searchSubstr('aa_bb_cc_dd_bb_e', 'bb'));//, 2
console.log(searchSubstr('aaabbbcccc', 'bbb'));//, 1
console.log(searchSubstr('aaa', 'aa'));//, 2
console.log(searchSubstr('aaa', ''));//, 0
console.log(searchSubstr('aaa', 'aa', false));//, 1
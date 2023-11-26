function getAllPermutations(str) {
    const result = [];

    function permute(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const nextCurrent = current + remaining[i];
            const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
            permute(nextCurrent, nextRemaining);
        }
    }

    permute('', str);
    return Array.from(new Set(result));
}

console.log(getAllPermutations('aabb'));

function permutations(str) {
    return (str.length <= 1) ? [str] :
            Array.from(new Set(
              str.split('')
                 .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
                 .reduce((r, x) => r.concat(x), [])
            ));
   }
solve = arr =>arr.sort((a,b) => a.localeCompare(b)).map((elm,idx) => `${idx+1}.${elm}`).join('\n')

console.log(solve(["John", "Bob", "Christina", "Ema"]));

// https://pastebin.com/e89gfR3H
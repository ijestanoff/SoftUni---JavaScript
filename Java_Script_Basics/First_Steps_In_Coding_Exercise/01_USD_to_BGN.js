function usdToBgn(inputArea) {
    let USD_BGN = 1.79549;
    let usd = Number(inputArea[0]);
    let bgn = usd * USD_BGN
    console.log(bgn);
}

// usdToBgn(["22"])
function triplesOfLatinLetters (input) {
    num = Number(input);
    let symbol1 = '';
    let symbol2 = '';
    let symbol3 = '';
    for (let cnt1=0; cnt1<num; cnt1++){
        for (let cnt2=0; cnt2<num; cnt2++){
            for (let cnt3=0; cnt3<num; cnt3++){
                symbol1 = String.fromCharCode(97+cnt1);
                symbol2 = String.fromCharCode(97+cnt2);
                symbol3 = String.fromCharCode(97+cnt3);
                console.log(symbol1+symbol2+symbol3);
            }
        }
    }
}

triplesOfLatinLetters ('2');
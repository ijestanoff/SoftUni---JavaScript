function amazingNumbers (num) {
    let sum = 0;
    let str_num = String(num);
    let state = '';
    for (i=0; i<str_num.length; i++){
        sum += Number(str_num[i]);
    }
    if (String(sum).includes('9')) state = 'True';
    else state = 'False';
    console.log(`${num} Amazing? ${state}`);
}

amazingNumbers (999);
amazingNumbers (1233);
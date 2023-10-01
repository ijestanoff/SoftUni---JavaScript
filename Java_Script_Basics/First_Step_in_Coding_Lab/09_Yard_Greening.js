function YardGreening(input) {
    //Цената на един кв. м. е 7.61 лв със ДДС. Понеже нейният двор е доста голям, фирмата изпълнител предлага 18% отстъпка от крайната цена
    let price = Number(input[0]) * 7.61    
    let discount = price * 0.18
    let finalPrice = price - discount
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

// YardGreening (["550"])
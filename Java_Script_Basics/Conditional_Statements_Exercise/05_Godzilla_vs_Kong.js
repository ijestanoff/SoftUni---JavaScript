function godzillaVsKong (input) {
    let film_budget = Number(input[0]);
    let supernumerary_quantity = Number(input[1]);
    let supernumerary_clothing = Number(input[2]);
    let decor_price = film_budget * 0.10;    
    if (supernumerary_quantity > 150)
        supernumerary_clothing *= 0.90;
    let supernumerary_amount = supernumerary_quantity * supernumerary_clothing;
    let real_budget = decor_price + supernumerary_amount;
    if (real_budget > film_budget) {
        real_budget -= film_budget;
        console.log(`Not enough money!\nWingard needs ${real_budget.toFixed(2)} leva more.`);
    }
    else {
        film_budget -= real_budget;
        console.log(`Action!\nWingard starts filming with ${film_budget.toFixed (2)} leva left.`)
    }
}

// godzillaVsKong (["20000","120","55.5"]);

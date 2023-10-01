function supliesForSchool(inputArea){
    const BOX_PENS_PRICE = 5.80
    const BOX_MARKERS_PRICE = 7.20
    const DETERGENT_PRICE = 1.20
    let boxesPens = Number(inputArea[0]);
    let boxesMarkers = Number(inputArea[1]);
    let litersDetergent = Number(inputArea[2]);
    let discountPercent = Number(inputArea[3]) / 100;
    let sum = BOX_PENS_PRICE * boxesPens + BOX_MARKERS_PRICE * boxesMarkers + DETERGENT_PRICE * litersDetergent;
    let sumWithDiscount = sum - (sum * discountPercent);
    console.log(sumWithDiscount);
}
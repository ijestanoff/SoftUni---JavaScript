function trekkingMania (input) {
    let groups_number = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2_pik = 0;
    let everest = 0;
    let total_elements = 0;
    let element = 0;
    for (count=0; count<groups_number; count++){
        element = Number(input[count + 1]);
        total_elements += element;
        if (element <= 5)
            musala += element;
        else if (element <= 12)
            monblan += element;
        else if (element <= 25)
            kilimandjaro += element;
        else if (element <= 40)
            k2_pik += element;
        else
            everest += element;
    }
    console.log(`${((musala/total_elements)*100).toFixed(2)}%`);
    console.log(`${((monblan/total_elements)*100).toFixed(2)}%`);
    console.log(`${((kilimandjaro/total_elements)*100).toFixed(2)}%`);
    console.log(`${((k2_pik/total_elements)*100).toFixed(2)}%`);
    console.log(`${((everest/total_elements)*100).toFixed(2)}%`);
}

trekkingMania (["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

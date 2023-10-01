function grades(input) {
    let students = Number(input[0]);
    let low_rating = 0;
    let average_rating = 0;
    let good_rating = 0;
    let excellent_rating = 0;
    let all_rating = 0;
    let count = 1;
    for (number=0; number<students; number++) {
        let rating = Number(input[count++]);
        all_rating += rating;
        if (rating >=2 && rating <= 2.99)
            low_rating ++;
        else if (rating >= 3 && rating <= 3.99)
            average_rating ++;
        else if (rating >=4 && rating <= 4.99)
            good_rating ++;
        else if (rating >= 5)
            excellent_rating ++;
    }
    console.log(`Top students: ${(excellent_rating / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(good_rating / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(average_rating / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(low_rating / students * 100).toFixed(2)}%`);
    console.log(`Average: ${(all_rating / students).toFixed(2)}`);
}
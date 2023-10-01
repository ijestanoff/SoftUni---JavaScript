function evenAndOdd (array) {
    sum_even = 0;
    sum_odd = 0;
    for(let num of array ) {
        if (num % 2 == 0) sum_even += num;
        else sum_odd += num;
    }
    console.log(sum_even - sum_odd);
}

evenAndOdd ([1,2,3,4,5,6]);
evenAndOdd ([3,5,7,9]);
evenAndOdd ([2,4,6,8,10]);
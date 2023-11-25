function getNthHammingNumber(n) {
    
    // Initialize array to store Hamming numbers
    const hammingNumbers = [1];

    // Initialize indices for multiples of 2, 3, and 5
    let index2 = 0, index3 = 0, index5 = 0;

    // Generate Hamming numbers up to the nth number
    while (hammingNumbers.length < n) {
        // Calculate next Hamming number
        const nextHammingNumber = Math.min(
            hammingNumbers[index2] * 2,
            hammingNumbers[index3] * 3,
            hammingNumbers[index5] * 5
        );

        // Update indices for multiples of 2, 3, and 5
        if (nextHammingNumber === hammingNumbers[index2] * 2) index2++;
        if (nextHammingNumber === hammingNumbers[index3] * 3) index3++;
        if (nextHammingNumber === hammingNumbers[index5] * 5) index5++;

        // Add the next Hamming number to the array
        hammingNumbers.push(nextHammingNumber);
    }

    // Return the nth Hamming number
    return hammingNumbers[n - 1];
}

console.log(getNthHammingNumber(19));
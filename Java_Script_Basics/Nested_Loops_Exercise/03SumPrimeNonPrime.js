function sumPrimeNonPrime (input) {
    let sum_prime = 0;
    let sum_non_prime = 0;
    let count = 0;
    while (true) {
        let command = input[count++];
        if (command === "stop")
            break;
        let current_number = Number(command);
        if (current_number < 0)
            console.log("Number is negative.");
        else {
            let it_is_prime = true;
            for (let number=2; number<current_number; number++)
                if (current_number % number === 0)
                    it_is_prime = false;
            if (it_is_prime)
                sum_prime += current_number;
            else
                sum_non_prime += current_number;
        }
    }
    console.log(`Sum of all prime numbers is: ${sum_prime}`);
    console.log(`Sum of all non prime numbers is: ${sum_non_prime}`);
}
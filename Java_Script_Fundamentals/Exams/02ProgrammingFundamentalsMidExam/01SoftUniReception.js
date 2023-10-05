function softuniReception (input) {
    let studentsPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let students = Number(input[3]);
    let hour = 0;
    while (students > 0) {
        hour++;
        if (hour % 4 != 0) {
            students -= studentsPerHour;
        }
    }
    console.log(`Time needed: ${hour}h.`);
}

softuniReception (['5','6','4','20']);
softuniReception (['1','2','3','45']);
softuniReception (['3','2','5','40']);
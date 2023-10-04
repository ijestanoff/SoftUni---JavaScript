function companyUsers (input) {
    let companies = {};
    for (let part of input) {
        let [company, employe] = part.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
            companies[company].push(employe);
        } else {
            if (!companies[company].includes(employe)) {
                companies[company].push(employe);
            }
        }
    }
    let keyValueArray = Object.entries(companies);
    keyValueArray.sort((a, b) => a[0].localeCompare(b[0]));
    companies = Object.fromEntries(keyValueArray);

    for (let company in companies) {
        console.log(company);
        for (let employe of companies[company]) {
            console.log(`-- ${employe}`);
        }
    }
}

companyUsers ([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);
// companyUsers ([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
//     ]);
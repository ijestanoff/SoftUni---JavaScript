function companyUsers(input) {
    let companies = {};
    input.forEach(part => {
        let [company, employe] = part.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
            companies[company].push(employe);
        } else if (!companies[company].includes(employe)) companies[company].push(employe);
    });

    Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0])).forEach(company => {
        console.log(company[0]);
        company[1].forEach(employe => console.log(`-- ${employe}`));
    });
}

companyUsers([
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
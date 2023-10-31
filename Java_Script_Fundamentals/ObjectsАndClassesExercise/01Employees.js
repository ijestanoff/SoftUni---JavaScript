function employees (input) {
    let employees = {};
    input.forEach(part => employees[part] = part.length);
    Object.entries(employees).forEach(tuple => console.log(`Name: ${tuple[0]} -- Personal Number: ${tuple[1]}`));
}

employees ([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);
employees ([ 'Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland' ]);
function employees (input) {
    let employees = {};
    for (let part of input) {
        employees[part] = part.length;
    }
    for (let [key,value] of Object.entries(employees)) {
        console.log(`Name: ${key} -- Personal Number: ${value}"`);
    }
}

employees ([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);
employees ([ 'Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland' ]);
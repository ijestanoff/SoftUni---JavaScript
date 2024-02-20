class Company {
 
    constructor() {
        this.departments = {};
        this.aveSalaries = {};
    }
 
    addEmployee(name, salary, position, department) {
 
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!');
        }
 
        let user = {
            name,
            salary,
            position
        };
 
        if (!this.departments.hasOwnProperty(department)) {
 
            this.departments[department] = [];
 
            this.aveSalaries[department] = {
                totalEmployees: 0,
                totalSalaries: 0,
                averageSalary: 0
            };
        } 
 
        this.departments[department].push(user);
        this.aveSalaries[department].totalEmployees += 1;
        this.aveSalaries[department].totalSalaries += salary;
        
        this.aveSalaries[department].averageSalary = 
            this.aveSalaries[department].totalSalaries / 
            this.aveSalaries[department].totalEmployees;
        
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
 
    bestDepartment() {
 
        let result = '';
        let bestDepartment = Object
            .entries(this.aveSalaries)
            .sort((a, b) => b[1].averageSalary - a[1].averageSalary)
            .shift();
 
        result += `Best Department is: ${bestDepartment[0]}`;
        result += `\nAverage salary: ${bestDepartment[1].averageSalary.toFixed(2)}`;
 
        this.departments[bestDepartment[0]]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
 
        this.departments[bestDepartment[0]].forEach(user => {
            result +=`\n${user.name} ${user.salary} ${user.position}`;
        });
 
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

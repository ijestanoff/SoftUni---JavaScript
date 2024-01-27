function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const inputRef = document.getElementById('inputs').children[1];
   const bestRestRef = document.querySelector('#bestRestaurant p');
   const bestWorkersRef = document.querySelector('#workers p');
   function onClick() {
      let restorants = {};
      let matchAll = inputRef.value.matchAll(/"(?<element>[^"]*)"/g);
      for (let match of matchAll) {
         let element = match.groups.element;
         let [restorant, nameSalary] = element.split(' - ');
         if (!(restorant in restorants)) restorants[restorant] = {};
         nameSalary.split(', ').forEach(worker => {
            let [name, salary] = worker.split(' ');
            restorants[restorant][name] = +salary;
         });
      }
      for (let restorant in restorants) {
         let [averageSalary, maxSalary] = [0, 0];
         for (let name in restorants[restorant]) {
            let salary = restorants[restorant][name];
            averageSalary += salary;
            if (salary > maxSalary) maxSalary = salary;
         }
         averageSalary /= Object.values(restorants[restorant]).length;
         let sorted = Object.entries(restorants[restorant]).sort((a, b) => b[1] - a[1]);
         restorants[restorant] = Object.fromEntries(sorted);
         restorants[restorant]['zz_averageSalary'] = averageSalary;
         restorants[restorant]['zz_maxSalary'] = maxSalary;
      }
      let sortRes = Object.entries(restorants).sort((a, b) => b[1].zz_averageSalary - a[1].zz_averageSalary);
      bestRestRef.textContent = `Name: ${sortRes[0][0]} Average Salary: ${sortRes[0][1].zz_averageSalary.toFixed(2)} Best Salary: ${sortRes[0][1].zz_maxSalary.toFixed(2)}`;
      for (let [name, salary] of Object.entries(sortRes[0][1])) {
         if (!name.includes('zz_'))
            bestWorkersRef.textContent += `Name: ${name} With Salary: ${salary} `;
      }
   }
}
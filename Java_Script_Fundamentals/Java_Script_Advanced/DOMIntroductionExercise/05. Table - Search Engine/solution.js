function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const table = document.querySelectorAll('tbody tr');
   const search = document.getElementById('searchField');
   function onClick() {
      for (let tableRow of table) {
         let rowData = tableRow.querySelectorAll('td');
         for (let data of rowData) {
            if (data.textContent.includes(search.value)) {
               tableRow.classList.add('select');
               break; 
            } else {
               tableRow.classList.remove('select');
            }
         }
      }
      search.value = '';
   }
}
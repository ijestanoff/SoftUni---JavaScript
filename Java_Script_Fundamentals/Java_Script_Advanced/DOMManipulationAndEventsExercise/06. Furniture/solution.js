function solve() {
  const textRef = document.querySelectorAll('textarea');
  const [btnGenerate, btnBuy] = document.querySelectorAll('button');
 
  btnGenerate.addEventListener('click', generateClick);
  btnBuy.addEventListener('click', buyClick);

  function generateClick (e) {
    let inputs = JSON.parse(textRef[0].value);
    inputs.forEach(row => {
      let data = `<img src=${row.img}>`;
      data = createTableData(data);
      data += createTableData(`<p>${row.name}</p>`);
      data += createTableData(`<p>${row.price}</p>`);
      data += createTableData(`<p>${row.decFactor}</p>`);
      data += createTableData(`<input type="checkbox" />`);
      
      let tabRow = document.createElement('tr');
      document.querySelector('tbody').appendChild(tabRow);
      tabRow.innerHTML = data;
    });
  }

  function createTableData (item) {
    return `<td>${item}</td>`;
  }

  function buyClick (e) {
    debugger
  }
}
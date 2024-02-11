function solve() {
  const textRef = document.querySelectorAll('textarea');
  const [btnGenerate, btnBuy] = document.querySelectorAll('button');

  btnGenerate.addEventListener('click', generateClick);
  btnBuy.addEventListener('click', buyClick);

  function generateClick(e) {
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
    textRef[0].value = '';
  }

  function createTableData(item) {
    return `<td>${item}</td>`;
  }

  function buyClick(e) {
    const checkboxRef = document.querySelectorAll('input[type="checkbox"]:checked');
    let items = [];
    let totalPrice = 0;
    let averageDecFactor = 0;
    for (let stock of checkboxRef) {
      let name = stock.parentElement.parentElement.children[1].textContent;
      let price = Number(stock.parentElement.parentElement.children[2].textContent);
      let factor = Number(stock.parentElement.parentElement.children[3].textContent);
      items.push(name);
      totalPrice += price;
      averageDecFactor += factor;
    }
    if (items.length) {
      textRef[1].value = `Bought furniture: ${items.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFactor/items.length}`;
    }
  }
}
function solve() {
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  let result = '';
  if (namingConvention == 'Camel Case') {
    let array = text.split(' ');
    result = array[0].toLowerCase();
    for (let i = 1; i<array.length; i++){
      result += array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
    }
  } else if (namingConvention == 'Pascal Case'){
    let array = text.split(' ');
    for (let i = 0; i<array.length; i++){
      result += array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
    }
  } else result = 'Error!';
  document.getElementById('result').textContent = result;
}

// "this is an example", "Camel Case"
// "secOND eXamPLE", "Pascal Case"
// "Invalid Input", "Another Case"

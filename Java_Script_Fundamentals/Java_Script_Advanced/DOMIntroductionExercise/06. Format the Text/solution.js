function solve() {
  const inputText = document.getElementById('input').value;
  const outputRef = document.getElementById('output');
  const sentences = inputText.split('.');
  const sentences3 = [];
  let count = 0;
  let temp = ''
  sentences.forEach(sentence => {
    if (sentence.length) temp += sentence + '.';
    if ((++count) == 3){
      count = 0;
      sentences3.push(temp);
      temp = '';
    }
  });
  if (temp) sentences3.push(temp);
  sentences3.forEach(paragraph => {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = paragraph;
    outputRef.appendChild(newParagraph);
  });
}
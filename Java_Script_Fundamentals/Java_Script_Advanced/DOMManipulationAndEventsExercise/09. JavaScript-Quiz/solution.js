function solve() {
  const sectionRef = document.querySelectorAll('section');
  const buttonsRef = document.querySelectorAll('p.answer-text');
  const resultRef = document.getElementById('results');

  let rightAnswers = 0;

  buttonsRef[0].addEventListener('click', onclickHandler);
  buttonsRef[1].addEventListener('click', onclickHandler);

  function onclickHandler(e) {
    if (e.target.textContent == 'onclick') rightAnswers++;
    //sectionRef[0].classList.add('hidden');
    sectionRef[0].style.display = 'none';
    //sectionRef[1].classList.remove('hidden');
    sectionRef[1].style.display = 'block';
    buttonsRef[2].addEventListener('click', onJSONHandler);
    buttonsRef[3].addEventListener('click', onJSONHandler);
    
  }

  function onJSONHandler(e) {
    if (e.target.textContent == 'JSON.stringify()') rightAnswers++;
    //sectionRef[1].classList.add('hidden');
    sectionRef[1].style.display = 'none';
    //sectionRef[2].classList.remove('hidden');
    sectionRef[2].style.display = 'block';
    buttonsRef[4].addEventListener('click', onDOMHandler);
    buttonsRef[5].addEventListener('click', onDOMHandler);
  }

  function onDOMHandler(e) {
    if (e.target.textContent == 'A programming API for HTML and XML documents') rightAnswers++;
    //sectionRef[2].classList.add('hidden');
    sectionRef[2].style.display = 'none';
    resultRef.style.display = 'block';
    if (rightAnswers == 3) {
      resultRef.children[0].children[0].textContent = 'You are recognized as top JavaScript fan!';
    } else {
      resultRef.children[0].children[0].textContent = `You have ${rightAnswers} right answers`;
    }
  }
}

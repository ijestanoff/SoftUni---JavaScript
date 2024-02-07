function create(words) {
const contentRef = document.getElementById("content");

   for (let word of words) {
      let divEl = document.createElement('div');
      contentRef.appendChild(divEl);
      let pEl = document.createElement('p');
      divEl.appendChild(pEl);
      pEl.textContent = word;
      pEl.style.display = 'none';
      divEl.addEventListener('click', clickHendler);
   }

   function clickHendler (e) {
      e.target.children[0].style.display = 'block';
   }
}
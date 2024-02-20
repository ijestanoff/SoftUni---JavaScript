window.addEventListener("load", solve);

function solve() {
  const snowmanNameRef = document.getElementById('snowman-name');
  const heightRef = document.getElementById('snowman-height');
  const locationNumberRef = document.getElementById('location');
  const creatorNameRef = document.getElementById('creator-name');
  const specialAttributeRef = document.getElementById('special-attribute');
  const addBtnRef = document.querySelector(".add-btn");
  const previewRef = document.querySelector('.snowman-preview');
  const confirmRef = document.querySelector('.snow-list');
  const mainRef = document.getElementById('hero');
  const bodyRef = document.querySelector('.body');
  const imgRef = document.getElementById('back-img');

  const snowmanData = [];
  let innerHtml = '';
  addBtnRef.addEventListener('click', addBtnHandler);

  function addBtnHandler(e) {
      e.preventDefault();
      let snowmanName = snowmanNameRef.value;
      let height = heightRef.value;
      let locationNumber = locationNumberRef.value;
      let creatorName = creatorNameRef.value;
      let specialAttribute = specialAttributeRef.value;

      if (!snowmanName || !height || !locationNumber || !creatorName || !specialAttribute) {
          return;
      }

      snowmanData.push(snowmanName);
      snowmanData.push(height);
      snowmanData.push(locationNumber);
      snowmanData.push(creatorName);
      snowmanData.push(specialAttribute);

      addBtnRef.disabled = true;
      innerHtml = `<li class="snowman-info">` +
          `<article>` +
          `<p>Name: ${snowmanName}</p>` +
          `<p>Height: ${height}</p>` +
          `<p>Location: ${locationNumber}</p>` +
          `<p>Creator: ${creatorName}</p>` +
          `<p>Attribute: ${specialAttribute}</p>`;
      let buttonsHtml = `</article>` +
          `<button class="edit-btn">Edit</button>` +
          `<button class="next-btn">Next</button>` +
          `</li>`;

      previewRef.innerHTML = innerHtml + buttonsHtml;
      const buttonsRef = previewRef.querySelectorAll('button');
      buttonsRef[0].addEventListener('click', editHandler);
      buttonsRef[1].addEventListener('click', nextHandler);
      //Array.from(inputsRef).forEach(elm => elm.value = '');
      addBtnRef.parentElement.reset();
  }

  function editHandler() {
      snowmanNameRef.value = snowmanData.shift();
      heightRef.value = snowmanData.shift();
      locationNumberRef.value = snowmanData.shift();
      creatorNameRef.value = snowmanData.shift();
      specialAttributeRef.value = snowmanData.shift();
      previewRef.innerHTML = '';
      addBtnRef.disabled = false;
  }

  function nextHandler() {
      previewRef.innerHTML = '';
      let buttonsHtml = `<button class="send-btn">Send</button>` +
              `</article>` +
              `</li>`;
      confirmRef.innerHTML = innerHtml + buttonsHtml;
      const buttonsRef = confirmRef.querySelectorAll('button');
      buttonsRef[0].addEventListener('click', sendHandler);
  }

  function sendHandler() {
      mainRef.remove();
      imgRef.hidden = false;
      imgRef.style.visibility='visible'
      bodyRef.innerHTML += `<button id="back-btn">Back</button>`;
      bodyRef.querySelector('button').addEventListener('click', function () {location.reload()} );
  }
}
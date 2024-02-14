window.addEventListener('load', solution);

function solution() {
  const employeeRef = document.getElementById('employee');
  const selectRef = document.querySelectorAll('select');
  const addBtnRef = document.getElementById("add-btn");
  const previewRef = document.querySelector('.preview-list');
  const pendingRef = document.querySelector('.pending-list');
  const resolvedRef = document.querySelector('.resolved-list');
  const descriptionRef = document.getElementById('description');

  const problemData = [];
  let innerHtml = '';
  addBtnRef.addEventListener('click', addBtnHandler);

  function addBtnHandler(e) {
    e.preventDefault();
    let employee = employeeRef.value;
    let category = selectRef[0].value;
    let urgency = selectRef[1].value;
    let assignedTeam = selectRef[2].value;
    let description = descriptionRef.value;

    if (!employee || !category || !urgency || !assignedTeam || !description) {
      return;
    }

    problemData.push(employee);
    problemData.push(category);
    problemData.push(urgency);
    problemData.push(assignedTeam);
    problemData.push(description);

    addBtnRef.disabled = true;
    innerHtml = `<li class="problem-content">` +
      `<article>` +
      `<p>From: ${employee}</p>` +
      `<p>Category: ${category}</p>` +
      `<p>Urgency: ${urgency}</p>` +
      `<p>Assigned to: ${assignedTeam}</p>` +
      `<p>Description: ${description}</p>` +
      `</article>`;
    let buttonsHtml = `<button class="edit-btn">Edit</button>` +
      `<button class="continue-btn">Continue</button>` +
      `</li>`;

    previewRef.innerHTML = innerHtml + buttonsHtml;
    const buttonsRef = previewRef.querySelectorAll('button');
    buttonsRef[0].addEventListener('click', editHandler);
    buttonsRef[1].addEventListener('click', continueHandler);
    //Array.from(inputsRef).forEach(elm => elm.value = '');
    addBtnRef.parentElement.reset();
  }

  function editHandler() {
    employeeRef.value = problemData.shift();
    selectRef[0].value = problemData.shift();
    selectRef[1].value = problemData.shift();
    selectRef[2].value = problemData.shift();
    descriptionRef.value = problemData.shift();

    previewRef.innerHTML = '';
    addBtnRef.disabled = false;
  }

  function continueHandler() {
    previewRef.innerHTML = '';
    let buttonsHtml = `<button class="resolve-btn">Resolved</button>` +
      `</li>`;
    pendingRef.innerHTML = innerHtml + buttonsHtml;
    const buttonsRef = pendingRef.querySelector('button');
    buttonsRef.addEventListener('click', resolvedHandler);
  }

  function resolvedHandler() {
    pendingRef.innerHTML = '';
    let buttonsHtml = `<button class="clear-btn">Clear</button>` +
      `</li>`;
    resolvedRef.innerHTML = innerHtml + buttonsHtml;
    const clearBtnRef = resolvedRef.querySelector('button');
    clearBtnRef.addEventListener('click', clearHandler);
  }

  function clearHandler() {
    addBtnRef.disabled = false;
    resolvedRef.innerHTML = '';
  }
}





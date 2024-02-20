window.addEventListener('load', solve);

function solve() {
    const nameRef = document.getElementById('name');
    const emailRef = document.getElementById('email');
    const contactNumberRef = document.getElementById('contact-number');
    const classTypeNumberRef = document.getElementById('class-type');
    const classTimeNumberRef = document.getElementById('class-time');
    const nextBtnRef = document.getElementById('next-btn');
    const previewRef = document.querySelector('.class-info');
    const confirmRef = document.querySelector('.confirm-class');
    const mainRef = document.getElementById('main');
    const bodyRef = document.getElementById('body');

    const fitnessData = [];
    let innerHtml = '';
    nextBtnRef.addEventListener('click', nextBtnHandler);

    function nextBtnHandler(e) {
        e.preventDefault();
        let name = nameRef.value;
        let email = emailRef.value;
        let contactNumber = contactNumberRef.value;
        let classType = classTypeNumberRef.value;
        let classTime = classTimeNumberRef.value;

        if (!name || !email || !contactNumber || !classType || !classTime) {
            return;
        }

        fitnessData.push(name);
        fitnessData.push(email);
        fitnessData.push(contactNumber);
        fitnessData.push(classType);
        fitnessData.push(classTime);

        nextBtnRef.disabled = true;
        innerHtml = `<li class="info-item">` +
            `<article class="personal-info">` +
            `<p>${name}</p>` +
            `<p>${email}</p>` +
            `<p>${contactNumber}</p>` +
            `<p>${classType}</p>` +
            `<p>${classTime}</p>` +
            `</article>`;
        let buttonsHtml = `<button class="edit-btn">Edit</button>` +
            `<button class="continue-btn">Continue</button>` +
            `</li>`;

        previewRef.innerHTML = innerHtml + buttonsHtml;
        const buttonsRef = previewRef.querySelectorAll('button');
        buttonsRef[0].addEventListener('click', editHandler);
        buttonsRef[1].addEventListener('click', continueHandler);
        //Array.from(inputsRef).forEach(elm => elm.value = '');
        nextBtnRef.parentElement.reset();
    }

    function editHandler() {
        nameRef.value = fitnessData.shift();
        emailRef.value = fitnessData.shift();
        contactNumberRef.value = fitnessData.shift();
        classTypeNumberRef.value = fitnessData.shift();
        classTimeNumberRef.value = fitnessData.shift();
        previewRef.innerHTML = '';
        nextBtnRef.disabled = false;
    }

    function continueHandler() {
        debugger
        previewRef.innerHTML = '';
        let buttonsHtml = `<button class="cancel-btn">Cancel</button>` +
            `<button class="confirm-btn">Confirm</button>` +
            `</li>`;
        confirmRef.innerHTML = innerHtml + buttonsHtml;
        const buttonsRef = confirmRef.querySelectorAll('button');
        buttonsRef[0].addEventListener('click', cancelHandler);
        buttonsRef[1].addEventListener('click', confirmHandler);
    }

    function confirmHandler() {
        // upcomingListRef.innerHTML = '';
        // finishedListRef.innerHTML = innerHtml + `</li>`;
        // clearBtnRef.addEventListener('click', clearHandler);
        mainRef.remove();
        bodyRef.innerHTML += `<h1 id="thank-you">Thank you for scheduling your appointment, we look forward to seeing you!</h1>` +
            `<button id="done-btn">Done</button>`;
        bodyRef.querySelector('button').addEventListener('click', function () { location.reload() });
    }

    function cancelHandler() {
        nextBtnRef.disabled = false;
        confirmRef.innerHTML = '';
    }

}





window.addEventListener('load', solve);

function solve() {
    const inputsRef = document.querySelectorAll('input');
    const nextBtnRef = document.getElementById("next-btn");
    const infoListRef = document.querySelector('.ticket-info-list');
    const confirmListRef = document.querySelector('.confirm-ticket');
    const mainRef = document.getElementById('main');
    const bodyRef = document.getElementById('body');

    const ticketReservation = [];
    let innerHtml = '';
    nextBtnRef.addEventListener('click', nextBtnHandler);

    function nextBtnHandler(e) {
        e.preventDefault();
        let firstName = inputsRef[0].value;
        let lastName = inputsRef[1].value;
        let numberOfPeople = inputsRef[2].value;
        let fromDate = inputsRef[3].value;
        let days = inputsRef[4].value;

        if (!firstName || !lastName || !numberOfPeople || !fromDate || !days || Number(numberOfPeople) < 1 || Number(days) < 1) {
            return;
        }

        ticketReservation.push(firstName);
        ticketReservation.push(lastName);
        ticketReservation.push(numberOfPeople);
        ticketReservation.push(fromDate);
        ticketReservation.push(days);

        nextBtnRef.disabled = true;
        innerHtml = `<li class="ticket">` +
            `<article>` +
            `<h3>Name: ${firstName} ${lastName}</h3>` +
            `<p>From date: ${fromDate}</p>` +
            `<p>For ${days} days</p>` +
            `<p>For ${numberOfPeople} people</p>` +
            `</article>`;
        let buttonsHtml = `<button class="edit-btn">Edit</button>` +
            `<button class="continue-btn">Continue</button>` +
            `</li>`;

        infoListRef.innerHTML = innerHtml + buttonsHtml;
        const buttonsRef = infoListRef.querySelectorAll('button');
        buttonsRef[0].addEventListener('click', editHandler);
        buttonsRef[1].addEventListener('click', continueHandler);
        //Array.from(inputsRef).forEach(elm => elm.value = '');
        nextBtnRef.parentElement.reset();
    }

    function editHandler() {
        Array.from(inputsRef).forEach(elm => elm.value = ticketReservation.shift());
        infoListRef.innerHTML = '';
        nextBtnRef.disabled = false;
    }

    function continueHandler() {
        infoListRef.innerHTML = '';
        let buttonsHtml = `<button class="confirm-btn">Confirm</button>` +
            `<button class="cancel-btn">Cancel</button>` +
            `</li>`;
        confirmListRef.innerHTML = innerHtml + buttonsHtml;
        const buttonsRef = confirmListRef.querySelectorAll('button');
        buttonsRef[0].addEventListener('click', confirmHandler);
        buttonsRef[1].addEventListener('click', cancelHandler);
    }

    function confirmHandler () {
        mainRef.remove();
        bodyRef.innerHTML += `<h1 id="thank-you">Thank you, have a nice day!</h1>`+
                                `<button id="back-btn">Back</button>`;
        bodyRef.querySelector('button').addEventListener('click' , function () {location.reload()});
    }

    function cancelHandler () {
        nextBtnRef.disabled = false;
        confirmListRef.innerHTML = ''; 
    }
}





window.addEventListener('load', solve);

function solve() {
    const inputsRef = document.querySelectorAll('input');
    const nextBtnRef = document.getElementById("next-btn");
    const infoListRef = document.querySelector('.info-list');
    const confirmListRef = document.querySelector('.confirm-list');
    const verificationRef = document.getElementById('verification');
    const dataReservation = [];
    let innerHtml = '';
    nextBtnRef.addEventListener('click', nextBtnHandler);

    function nextBtnHandler(e) {
        e.preventDefault();
        let firstName = inputsRef[0].value;
        let lastName = inputsRef[1].value;
        let checkIn = inputsRef[2].value;
        let checkOut = inputsRef[3].value;
        let numberOfGuests = inputsRef[4].value;
        if (!firstName || !lastName || !checkIn || !checkOut || !numberOfGuests || Number(numberOfGuests)<1) {
            return;
        }
        if (Number(checkIn.split('-').join('')) > Number(checkOut.split('-').join(''))) {
            return;
        }

        dataReservation.push(firstName);
        dataReservation.push(lastName);
        dataReservation.push(checkIn);
        dataReservation.push(checkOut);
        dataReservation.push(numberOfGuests);

        nextBtnRef.disabled = true;
        innerHtml = `<li class="reservation-content">` +
            `<article>` +
            `<h3>Name: ${firstName} ${lastName}</h3>` +
            `<p>From date: ${checkIn}</p>` +
            `<p>To date: ${checkOut}</p>` +
            `<p>For ${numberOfGuests} people</p>` +
            `</article>`;
        let buttonsHtml = `<button class="edit-btn">Edit</button>` +
            `<button class="continue-btn">Continue</button>` +
            `</li>`;
        infoListRef.innerHTML = innerHtml + buttonsHtml;
        const buttonsRef = infoListRef.querySelectorAll('button');
        buttonsRef[0].addEventListener('click', editHandler);
        buttonsRef[1].addEventListener('click', continueHandler);

        /* Two methods for call function on event listener and give it parameters
        buttonsRef[0].addEventListener('click', () => editHandler(firstName, lastName, checkIn, checkOut, numberOfGuests));
        buttonsRef[0].addEventListener('click', editHandler.bind(null, firstName, lastName, checkIn, checkOut, numberOfGuests));

        method for reset form:
        nextBtnRef.parentElement.reset();

        method for create elements with function
        const article = e('article');
        article.appendChild(e('h3', 'Name: ${firstName} ${lastName}'));

        function e (type, content) {
            const element = document.createElement(type);

            if (content) {
                element.textContent = content;
            }
            return element;
        }
        */
        Array.from(inputsRef).forEach(elm => elm.value = '');
    }

    function editHandler() {
        Array.from(inputsRef).forEach(elm => elm.value = dataReservation.shift());
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
        nextBtnRef.disabled = false;
        confirmListRef.innerHTML = '';
        verificationRef.classList.add('reservation-confirmed');
        verificationRef.textContent = 'Confirmed.';
    }

    function cancelHandler () {
        nextBtnRef.disabled = false;
        confirmListRef.innerHTML = ''; 

        // better is:
        // verification.className = 'reservation-cancelled';
        verificationRef.classList.add('reservation-cancelled');

        verificationRef.textContent = 'Cancelled.';
    }
}






window.addEventListener('load', solve);

function solve() {
    const inputsRef = document.querySelectorAll('input');
    const addBtnRef = document.getElementById("add-btn");
    const checkListRef = document.getElementById('check-list');
    const upcomingListRef = document.getElementById('upcoming-list');
    const finishedListRef = document.getElementById('finished-list');
    const clearBtnRef = document.getElementById('clear');

    const eventData = [];
    let innerHtml = '';
    addBtnRef.addEventListener('click', addBtnHandler);

    function addBtnHandler(e) {
        e.preventDefault();
        let time = inputsRef[0].value;
        let date = inputsRef[1].value;
        let place = inputsRef[2].value;
        let event = inputsRef[3].value;
        let contacts = inputsRef[4].value;

        if (!time || !date || !place || !event || !contacts) {
            return;
        }

        eventData.push(time);
        eventData.push(date);
        eventData.push(place);
        eventData.push(event);
        eventData.push(contacts);
        
        addBtnRef.disabled = true;
        innerHtml = `<li class="event-content">` +
            `<article>` +
            `<p>Begins: ${date} at: ${time}</p>` +
            `<p>In: ${place}</p>` +
            `<p>Event: ${event}</p>` +
            `<p>Contact: ${contacts}</p>` +
            `</article>`;
        let buttonsHtml = `<button class="edit-btn">Edit</button>` +
            `<button class="continue-btn">Continue</button>` +
            `</li>`;

        checkListRef.innerHTML = innerHtml + buttonsHtml;
        const buttonsRef = checkListRef.querySelectorAll('button');
        buttonsRef[0].addEventListener('click', editHandler);
        buttonsRef[1].addEventListener('click', continueHandler);
        //Array.from(inputsRef).forEach(elm => elm.value = '');
        addBtnRef.parentElement.reset();
    }

    function editHandler() {
        let dataArray = Array.from(inputsRef);
        dataArray.pop();
        dataArray.forEach(elm => elm.value = eventData.shift());
        checkListRef.innerHTML = '';
        addBtnRef.disabled = false;
    }

    function continueHandler() {
        checkListRef.innerHTML = '';
        let buttonsHtml = `<button class="finished-btn">Move to Finished</button>` +
            `</li>`;
        upcomingListRef.innerHTML = innerHtml + buttonsHtml;
        const buttonsRef = upcomingListRef.querySelectorAll('button');
        buttonsRef[0].addEventListener('click', finishedHandler);
    }

    function finishedHandler() {
        upcomingListRef.innerHTML = '';
        finishedListRef.innerHTML = innerHtml + `</li>`;
        clearBtnRef.addEventListener('click', clearHandler);
    }

    function clearHandler() {
        addBtnRef.disabled = false;
        finishedListRef.innerHTML = '';
    }
}





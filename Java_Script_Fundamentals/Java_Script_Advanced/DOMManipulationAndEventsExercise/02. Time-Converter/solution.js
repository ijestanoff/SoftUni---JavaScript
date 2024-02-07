function attachEventsListeners() {
    const butRefArr = Array.from(document.querySelectorAll('[type="button"]'));
    butRefArr.forEach(but => but.addEventListener('click', butHendlar));

    function butHendlar (e) {
        const dataInputRef = e.target.parentElement.children[1];
        const button = dataInputRef.id;
        const data = Number(dataInputRef.value);

        switch (button) {
            case "days": convertData(data * 24 * 3600); break;
            case "hours": convertData(data * 3600); break;
            case "minutes": convertData(data * 60); break;
            case "seconds": convertData(data); break;
        }
    }

    function convertData (data) {
        const outputRef = Array.from(document.querySelectorAll('input[type="text"]'));
        outputRef[0].value = data / 24 / 3600;
        outputRef[1].value = data / 3600;
        outputRef[2].value = data / 60;
        outputRef[3].value = data;
    }
    
}
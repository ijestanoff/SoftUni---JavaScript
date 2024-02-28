function solve() {
    const spanRef = document.querySelector('div[id="info"] span');
    const departRef = document.getElementById('depart');
    const arriveRef = document.getElementById('arrive');
    const url = 'http://localhost:3030/jsonstore/bus/schedule/';
    let stopId = 'depot';
    let currentStop = '';

    async function depart() {
        departRef.disabled = true;
        arriveRef.disabled = false;
        try {
            const respond = await fetch(url + stopId);
            const data = await respond.json();
            spanRef.textContent = `Next stop ${data.name}`;
            stopId = data.next;
            currentStop = data.name;
        } catch {
            spanRef.textContent = 'Error';
            arriveRef.disabled = true;
        }
    }

    function arrive() {
        departRef.disabled = false;
        arriveRef.disabled = true;
        spanRef.textContent = `Arriving at ${currentStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
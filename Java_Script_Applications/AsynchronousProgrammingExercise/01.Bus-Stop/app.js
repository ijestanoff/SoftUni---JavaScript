async function getInfo() {
    const stopIdRef = document.getElementById('stopId');
    const stopNameRef = document.getElementById('stopName');
    const busesRef = document.getElementById('buses');
    const url = 'http://localhost:3030/jsonstore/bus/businfo/';

    try {
        const result = await fetch(url + stopIdRef.value);
        const data = await result.json();
        stopNameRef.textContent = data.name;
        Object.entries(data.buses).forEach(([busID,time]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${busID} arrives in ${time} minutes`;
            busesRef.appendChild(li);
        });
    } catch {
        busesRef.innerHTML = '';
        stopNameRef.textContent = 'Error';
    }
}
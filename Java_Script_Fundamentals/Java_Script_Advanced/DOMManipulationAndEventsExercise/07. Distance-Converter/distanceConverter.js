function attachEventsListeners() {
    const inputUnitsRef = document.getElementById('inputUnits');
    const outputUnitsRef = document.getElementById('outputUnits');
    const inputDistanceRef = document.getElementById('inputDistance');
    const outputDistanceRef = document.getElementById('outputDistance');
    const convertRef = document.getElementById('convert');
    const units = { km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yrd: 0.9144, ft: 0.3048, in: 0.0254 };

    convertRef.addEventListener('click', convertHandler);

    function convertHandler() {
        let inputUnit = inputUnitsRef.value;
        let input = inputDistanceRef.value;
        let outputUnit = outputUnitsRef.value;

        if (input != '') {
            outputDistanceRef.disabled = false;
            outputDistanceRef.value = Number(input) * units[inputUnit] / units[outputUnit];
        }
    }
}
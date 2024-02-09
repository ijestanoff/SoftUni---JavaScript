function solve() {
    const selectMenuToRef = document.getElementById("selectMenuTo");
    const numberRef = document.getElementById("input");
    const resultRef = document.getElementById("result");
    const buttonRef = document.querySelector("button");

    buttonRef.addEventListener("click", buttonHandler);

    function buttonHandler (e) {
        //const select = selectMenuToRef.selectedOptions[0].innerText;
        const select = selectMenuToRef.value;
        if (select == 'hexadecimal') {
            resultRef.value = String(decimalToHexadecimal(numberRef.value));
        } else if (select == 'binary') {
            //resultRef.value = String(decimalToBinary(numberRef.value));
            resultRef.value = Number(numberRef.value).toString(2);
            //debugger
        }
    }

    // function buttonHandler() {
    //     if (selectMenuToRef.value === 'binary') {
    //         resultRef.value = Number(numberRef.value).toString(2);
    //     } else if (selectMenuToRef.value === 'hexadecimal') {
    //         resultRef.value = Number(numberRef.value).toString(16).toUpperCase();
    //     }
    // }

    let binary = document.createElement("option");
    binary.innerHTML= 'Binary';
    binary.value = 'binary';
    let hexadecimal = document.createElement("option");
    hexadecimal.innerHTML = 'Hexadecimal';
    hexadecimal.value = 'hexadecimal';
    selectMenuToRef.appendChild(hexadecimal);
    selectMenuToRef.appendChild(binary);

    function decimalToBinary(decimal) {
        let binary = '';
        
        while (decimal > 0) {
            const remainder = decimal % 2;
            binary = remainder + binary;
            decimal = Math.floor(decimal / 2);
        }
        
        if (binary === '') {
            return '0';
        }
        
        return binary;
    }

    function decimalToHexadecimal(decimal) {
        let hexadecimal = '';
        const hexDigits = '0123456789ABCDEF';
        
        while (decimal > 0) {
            const remainder = decimal % 16;
            hexadecimal = hexDigits[remainder] + hexadecimal;
            decimal = Math.floor(decimal / 16);
        }
        
        if (hexadecimal === '') {
            return '0';
        }
        
        return hexadecimal;
    }
    
}



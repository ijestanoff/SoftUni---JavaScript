function encodeAndDecodeMessages() {
    const buttonsRef = Array.from(document.querySelectorAll('button'));
    buttonsRef.forEach(button => button.addEventListener('click', buttonClick));
    const textWrite = document.querySelector('textarea[placeholder="Write your message here..."]');
    const textReceive = document.querySelector('textarea[placeholder="No messages..."]');
    
    function buttonClick (event) {
        if (event.target.textContent == 'Encode and send it') {
            textReceive.value = [...textWrite.value].map(x => String.fromCharCode(x.charCodeAt(0) + 1)).join('');
            textWrite.value = '';
        } else {
            textReceive.value = [...textReceive.value].map(x => String.fromCharCode(x.charCodeAt(0) - 1)).join('');
        }
    }
}
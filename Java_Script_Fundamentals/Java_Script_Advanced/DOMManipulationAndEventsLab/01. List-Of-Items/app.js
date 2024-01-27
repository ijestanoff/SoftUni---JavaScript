function addItem() {
    const inputRef = document.getElementById('newItemText');
    if (inputRef.value.length == 0) {
        return;
    }
    const elements = document.getElementById('items');
    const newElm = document.createElement('li');
    newElm.textContent = inputRef.value;
    elements.appendChild(newElm);
    inputRef.value = ''; 
}
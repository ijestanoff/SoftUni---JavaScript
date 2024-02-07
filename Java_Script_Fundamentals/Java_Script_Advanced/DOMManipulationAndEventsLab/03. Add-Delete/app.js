function addItem() {
    const inputRef = document.getElementById('newItemText');
    if (inputRef.value.length == 0) {
        return;
    }
    const elements = document.getElementById('items');
    const newElm = document.createElement('li');
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click' , onClick);

    function onClick (event) {
        const li = event.target.parentElement;
        li.remove();
    }

    newElm.textContent = inputRef.value;
    elements.appendChild(newElm);
    newElm.appendChild(deleteBtn);
    inputRef.value = ''; 
}
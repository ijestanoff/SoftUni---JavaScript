function addItem() {
    const newItemTextRef = document.getElementById('newItemText');
    const newItemValueRef = document.getElementById('newItemValue');
    const option = document.createElement('option');
    option.value = newItemValueRef.value;
    option.text = newItemTextRef.value;
    document.getElementById('menu').appendChild(option);
    newItemValueRef.value = '';
    newItemTextRef.value = ''
}
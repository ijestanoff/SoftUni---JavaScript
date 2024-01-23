function extractText() {
    const list = document.getElementById('items');
    const items = Array.from(list.children);
    const textArea = document.getElementById('result');
    //console.log(textArea);
    textArea.value = items.reduce((acc, item) => acc + item.textContent + '\n','');
}
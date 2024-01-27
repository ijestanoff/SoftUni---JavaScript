function toggle() {
    const textRef = document.getElementById('extra');
    const button = document.getElementsByClassName('button');
    if (button[0].textContent == 'More') {
        button[0].textContent = 'Less';
        textRef.style.display = 'block';
    } else {
        button[0].textContent = 'More';
        textRef.style.display = 'none';
    }
}
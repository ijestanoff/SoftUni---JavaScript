function lockedProfile() {
    const buttonsRef = Array.from(document.querySelectorAll('button'));
    buttonsRef.forEach(buttonRef => buttonRef.addEventListener('click', clickHandler));

    function clickHandler(e) {
        const profileRef = e.target.parentElement;
        const checkRef = profileRef.querySelector('input[type="radio"]:checked');
        
        if (checkRef.value == 'unlock') {
            if (e.target.textContent == 'Show more'){
                profileRef.children[9].style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                profileRef.children[9].style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}
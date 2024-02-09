function validate() {
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    const emailRef = document.getElementById('email');

    emailRef.addEventListener("change", mouseEvent);

    function mouseEvent(e) {
        if (pattern.test(emailRef.value) || emailRef.value == '') {
            emailRef.classList.remove('error');
        } else {
            emailRef.classList.add('error');
        }
    }
}
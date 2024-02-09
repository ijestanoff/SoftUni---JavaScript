function validate() {
    const usernameRef = document.getElementById('username');
    const emailRef = document.getElementById('email');
    const passwordRef = document.getElementById('password');
    const confirmPasswordRef = document.getElementById('confirm-password');
    const companyCheckRef = document.getElementById('company');
    const companyInfoRef = document.getElementById('companyInfo');
    const companyNumberRef = document.getElementById('companyNumber');
    const submitRef = document.getElementById('submit');
    const validRef = document.getElementById('valid');

    companyCheckRef.addEventListener("change", showCompany);
    submitRef.addEventListener("click", submitHandler);

    function submitHandler(e) {
        e.preventDefault();
        let valid = true;
        let username = usernameRef.value;
        if (username.length < 3 || username.length > 20 || !/^[A-Za-z0-9]+$/.test(username)) {
            valid = false;
            usernameRef.style.borderColor = 'red';
        } else {
            usernameRef.style.borderColor = '';
        }

        let password = passwordRef.value;
        if (password.length < 5 || password.length > 15 || !/^[\w]+$/.test(password)) {
            valid = false;
            passwordRef.style.borderColor = 'red';
        } else {
            passwordRef.style.borderColor = '';
        }

        let confirmPass = confirmPasswordRef.value;
        if (confirmPass.length < 5 || confirmPass.length > 15 || !/^[\w]+$/.test(confirmPass) || confirmPass !== password) {
            valid = false;
            confirmPasswordRef.style.borderColor = 'red';
        } else {
            confirmPasswordRef.style.borderColor = '';
        }

        let email = emailRef.value;
        if (!/.*@.*\..*/.test(email)) {
            valid = false;
            emailRef.style.borderColor = 'red';
        } else {
            emailRef.style.borderColor = '';
        }

        if (companyInfoRef.style.display == 'block') {
            let companyNumber = Number(companyNumberRef.value);
            if (companyNumber < 1000 || companyNumber > 9999 || companyNumber == NaN) {
                valid = false;
                companyNumberRef.style.borderColor = 'red';
            } else {
                companyNumberRef.style.borderColor = '';
            }
        }

        if (valid) validRef.style.display = 'block';
        else validRef.style.display = 'none';
    }

    function showCompany(e) {
        if (e.target.checked) {
            companyInfoRef.style.display = 'block';
        } else {
            companyInfoRef.style.display = 'none';
        }
    }
}

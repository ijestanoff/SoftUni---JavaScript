const loginButRef = document.querySelector('a[id="login"]');
const registerButRef = document.querySelector('a[id="register"]');
const logoutButRef = document.querySelector('a[id="logout"]');
const homeButRef = document.querySelector('a[id="home"]');
loginButRef.style.display = 'inline-block';
registerButRef.style.display = 'inline-block';
logoutButRef.style.display = 'none';
registerButRef.classList.add('active');
homeButRef.classList.remove('active');

const registerUrl = 'http://localhost:3030/users/register';
console.log('register.js');
const formRef = document.querySelector('form[id="register"]');
formRef.addEventListener('submit', registerSubmit);

function registerSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, rePass } = Object.fromEntries(formData.entries());
    if (!email || !password || !rePass || password != rePass) {
        document.querySelector('#register-view').textContent = 'Something wrong, please try again!';
        return;
    }
    createUser({ email, password });
    e.target.reset();
    window.location = 'index.html';
}

async function createUser(data) {
    const option = createOption('post', data);
    const request = await fetch(registerUrl, option);
    const userData = await request.json();
    sessionStorage.setItem('userData', JSON.stringify(userData));

}

function createOption(method, data) {
    return {
        method,
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    };
}
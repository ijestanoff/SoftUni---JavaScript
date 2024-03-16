const loginButRef = document.querySelector('a[id="login"]');
const registerButRef = document.querySelector('a[id="register"]');
const logoutButRef = document.querySelector('a[id="logout"]');
const homeButRef = document.querySelector('a[id="home"]');
loginButRef.style.display = 'inline-block';
registerButRef.style.display = 'inline-block';
logoutButRef.style.display = 'none';
loginButRef.classList.add('active');
homeButRef.classList.remove('active');


const loginUrl = 'http://localhost:3030/users/login';
console.log('login.js');
const formRef = document.querySelector('form[id="login"]');
formRef.addEventListener('submit', loginSubmit);

function loginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());
    if (!email || !password) {
        return;
    }
    loginUser ({email,password});
    e.target.reset();
    window.location = 'index.html';
}

async function loginUser(data) {
    const option = createOption('post', data);
    const request = await fetch(loginUrl, option);
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
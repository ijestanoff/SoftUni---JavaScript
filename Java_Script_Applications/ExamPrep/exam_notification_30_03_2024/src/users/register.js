import { register } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, showNotification, updateNav } from '../util.js';

export function showRegisterView() {
    render(registerTemplate());
}

async function onRegister(data) {
    const email = data.email;
    const password = data.password;
    const rePassword = data['re-password'];
    if (!email || !password || password != rePassword) {
        showNotification('Passwords don\'t match!');

        return alert('Passwords don\'t match!'); 
    }
    await register(email, password);
    updateNav();
    page.redirect('/');
}

const registerTemplate = () => html`
<section id="register">
    <div class="form">
    <h2>Register</h2>
    <form @submit=${createSubmitHandler(onRegister)} class="register-form">
        <input
        type="text"
        name="email"
        id="register-email"
        placeholder="email"
        />
        <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
        />
        <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
    </div>
</section>`;
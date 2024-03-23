import { login } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, showNotification, updateNav } from '../util.js';

export function showLoginView(ctx) {
    render(loginTemplate());
}

async function onLogin({ email, password }) {
    if (!email || !password) {
        showNotification('All fields required!');
        return;
    }
    await login(email, password);
    updateNav();
    page.redirect('/');
}

const loginTemplate = () => html`
<section id="login">
    <form @submit=${createSubmitHandler(onLogin)} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`;
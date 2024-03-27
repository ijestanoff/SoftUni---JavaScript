import { login } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';

export function showLoginView() {
    render(loginTemplate());
}

async function onLogin({ email, password }) {
    if (!email || !password) {
        return alert('All fields required!');
    }
    await login(email, password);
    updateNav();
    page.redirect('/');
}

const loginTemplate = () => html`
<section id="login-page" class="auth">
        <form @submit=${createSubmitHandler(onLogin)} id="login">
            <h1 class="title">Login</h1>

            <article class="input-group">
                <label for="login-email">Email: </label>
                <input type="email" id="login-email" name="email">
            </article>

            <article class="input-group">
                <label for="password">Password: </label>
                <input type="password" id="password" name="password">
            </article>

            <input type="submit" class="btn submit-btn" value="Log In">
        </form>
    </section>`;
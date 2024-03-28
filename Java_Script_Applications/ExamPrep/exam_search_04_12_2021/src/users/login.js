import { login } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';

export function showLoginView(ctx) {
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
<section id="loginPage">
    <form @submit=${createSubmitHandler(onLogin)}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;
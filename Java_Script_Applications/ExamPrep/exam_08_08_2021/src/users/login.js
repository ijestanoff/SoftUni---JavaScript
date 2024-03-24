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

//@submit=${createSubmitHandler(onLogin)}
const loginTemplate = () => html`
<section id="login-page" class="login">
    <form @submit=${createSubmitHandler(onLogin)} id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>`;

/*<section id="login">
    <div class="form">
    <h2>Login</h2>
    <form @submit=${createSubmitHandler(onLogin)} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
        Not registered? <a href="#">Create an account</a>
        </p>
    </form>
    </div>
</section>*/
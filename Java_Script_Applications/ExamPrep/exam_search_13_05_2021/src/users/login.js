import { login } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';

export function showLoginView(ctx) {
    render(loginTemplate());
}

async function onLogin({ username, password }) {
    if (!username || !password) {
        return alert('All fields required!');
    }
    await login(username, password);
    updateNav();
    page.redirect('/');
}

const loginTemplate = () => html`
<section id="login">
    <div class="container">
        <form @submit=${createSubmitHandler(onLogin)} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
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

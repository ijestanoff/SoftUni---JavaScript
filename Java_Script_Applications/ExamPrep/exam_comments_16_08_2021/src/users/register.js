import { register } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';

export function showRegisterView() {
    render(registerTemplate());
}

async function onRegister(data) {
    const email = data.email;
    const password = data.password;
    const rePassword = data['confirm-password'];
    if (!email || !password || password != rePassword) {
        return alert('All fields required!');
    }
    await register(email, password);
    updateNav();
    page.redirect('/');
}

const registerTemplate = () => html`
 <section id="register-page" class="content auth">
    <form @submit=${createSubmitHandler(onRegister)} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>`;
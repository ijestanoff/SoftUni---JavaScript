import { register } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';

export function showRegisterView() {
    render(registerTemplate());
}

async function onRegister(data) {
    const username = data.username;
    const password = data.password;
    const rePassword = data['repeatPass'];
    if (!username || !password || password != rePassword) {
        return alert('All fields required!');
    }
    await register(username, password);
    updateNav();
    page.redirect('/');
}

const registerTemplate = () => html`
<section id="register">
    <div class="container">
        <form @submit=${createSubmitHandler(onRegister)} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;

/*<section id="register">
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
        <p class="message">Already registered? <a href="#">Login</a></p>
    </form>
    </div>
</section>*/
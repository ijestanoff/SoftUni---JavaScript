import { register } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, showNotification, updateNav } from '../util.js';

export function showRegisterView() {
    render(registerTemplate());
}

async function onRegister(data) {
    const username = data.username;
    const email = data.email;
    const password = data.password;
    const rePassword = data.repeatPass;
    const gender = data.gender;
    if (!username || !email || !password || password != rePassword) {
        showNotification('All fields required!');
        return;
    }
    await register(username, email, password, gender);
    updateNav();
    page.redirect('/');
}

//
const registerTemplate = () => html`
<section id="register">
    <form @submit=${createSubmitHandler(onRegister)} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
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
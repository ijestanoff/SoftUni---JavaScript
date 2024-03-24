import { register } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';

export function showRegisterView() {
    render(registerTemplate());
}

async function onRegister({email, password, repeatPassword}) {
    if (!email || !password || password != repeatPassword || password.length<6) {
        return alert('All fields required!');
    }
    await register(email, password);
    updateNav();
    page.redirect('/');
}

const registerTemplate = () => html`
<section id="form-sign-up" class="view-section">
    <form @submit=${createSubmitHandler(onRegister)} id="register-form" class="text-center border border-light p-5" >
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password" />
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>`;
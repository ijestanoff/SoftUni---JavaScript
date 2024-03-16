import { register } from '../data/users.js';
import { html, render, classMap } from '../lit.js';
import { visit } from '../nav.js';
import { createSubmitHandler, saveUserData } from '../util.js';

export function showRegister() {
    render(registerTemplate({ errors: {} }));
}

const registerTemplate = (data) => html`
<h1>Register</h1>
<form @submit=${createSubmitHandler(onSubmit)}>
    <label>
        Email:
        <input class=${classMap({error: data.errors.email})} type="text" name="email">
    </label>
    <label>
        Password:
        <input class=${classMap({error: data.errors.password})} type="password" name="password">
    </label>
    <label>
        Repeat password:
        <input class=${classMap({error: data.errors.repass})} type="password" name="repass">
    </label>
    <input type="submit" value="Register">
</form>`;

async function onSubmit({ email, password, repass }) {
    const data = {
        email,
        password,
        repass,
        errors: {
            email: false,
            password: false,
            repass: false
        }
    };
    if (!email) {
        data.errors.email = true;
    }
    if (!password) {
        data.errors.password = true;
    }
    if (!repass) {
        data.errors.repass = true;
    }
    if (!email || !password) {
        render(registerTemplate(data));
        return alert('All fields are required!');
    }
    if (password != repass) {
        data.errors.repass = true;
        data.errors.password = true;
        render(registerTemplate(data));
        return alert('Paswords don\'t match');
    }

    const result = await register(email,password);
    saveUserData(result);

    visit('home');
}


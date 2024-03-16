import { login } from '../data/users.js';
import { classMap, html, render } from '../lit.js';
import { visit } from '../nav.js';
import { createSubmitHandler, saveUserData } from '../util.js';

export function showLogin() {
    render(loginTemplate({ errors: {} }));
}

const loginTemplate = (data) => html`
<h1>Log in to Movies</h1>
<form @submit=${createSubmitHandler(onSubmit)}>
    <label>
        Email:
        <input class=${classMap({error: data.errors.email})} type="text" name="email">
    </label>
    <label>
         Password:
        <input class=${classMap({error: data.errors.password})} type="password" name="password">
    </label>
    <input type="submit" value="Login">
</form>`;

async function onSubmit({ email, password }) {
    const data = {
        email,
        password,
        errors: {
            email: false,
            password: false
        }
    };
    if (!email) {
        data.errors.email = true;
    }
    if (!password) {
        data.errors.password = true;
    }
    if (!email || !password) {
        render(loginTemplate(data));
        return alert('All fields are required!');
    }

    const result = await login(email,password);
    saveUserData(result);

    visit('home');
}
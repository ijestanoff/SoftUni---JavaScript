import { login } from '../dat/users.js';
import { classMap, html, render } from '../lit.js';
import { visit } from '../nav.js';
import { createSubmitHandler, saveUserData } from '../util.js';

export function showLogin() {
    render(loginTemplate({ errors: {} }));
}

const loginTemplate = (data) => html`
    <!-- <label>
         Password:
        <input class=${classMap({error: data.errors.password})} type="password" name="password">
    </label> -->
    
<section id="form-login" class="view-section">
    <form @submit=${createSubmitHandler(onSubmit)} id="login-form" class="text-center border border-light p-5" action="" method="">
    <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
    </div>

    <button type="submit" class="btn btn-primary">Login</button>
    </form>
</section>
`;

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

    visit('Movies');
}
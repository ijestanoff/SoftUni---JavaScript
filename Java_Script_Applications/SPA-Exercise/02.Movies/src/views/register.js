import { register } from '../dat/users.js';
import { html, render, classMap } from '../lit.js';
import { visit } from '../nav.js';
import { createSubmitHandler, saveUserData } from '../util.js';

export function showRegister() {
    render(registerTemplate({ errors: {} }));
}

const registerTemplate = (data) => html`

    <!-- <label>
        Repeat password:
        <input class=${classMap({ error: data.errors.repass })} type="password" name="repass">
    </label> -->
    
<section id="form-sign-up" class="view-section">
    <form @submit=${createSubmitHandler(onSubmit)} id="register-form" class="text-center border border-light p-5" action="" method="">
    <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
    </div>

    <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password"
        name="repeatPassword" value="" />
    </div>

    <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>
`;

async function onSubmit({ email, password, repeatPassword }) {
    const data = {
        email,
        password,
        repeatPassword,
        errors: {
            email: false,
            password: false,
            repeatPassword: false
        }
    };
    if (!email) {
        data.errors.email = true;
    }
    if (!password) {
        data.errors.password = true;
    }
    if (!repeatPassword) {
        data.errors.repass = true;
    }
    if (!email || !password) {
        render(registerTemplate(data));
        return alert('All fields are required!');
    }
    if (password != repeatPassword) {
        data.errors.repass = true;
        data.errors.password = true;
        render(registerTemplate(data));
        return alert('Paswords don\'t match');
    }

    const result = await register(email, password);
    saveUserData(result);
    
    visit('Movies');
}
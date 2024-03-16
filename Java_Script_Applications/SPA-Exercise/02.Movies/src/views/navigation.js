import { html } from '../lit.js';


export const navigationTemplate = (email) => html`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand text-light" href="/">Movies</a>
    <ul class="navbar-nav ml-auto">
    <li class="nav-item user">
        <a class="nav-link" id="welcome-msg">${email == null ? '': 'Welcome, '}${email == null ? '': email}</a>
    </li>
    <li class="nav-item user">
        <a class="nav-link" href="#">Logout</a>
    </li>
    <li class="nav-item guest">
        <a class="nav-link" href="#">Login</a>
    </li>
    <li class="nav-item guest">
        <a class="nav-link" href="#">Register</a>
    </li>
    </ul>
</nav>
`;

export const footerTemplate = () => html`
<footer class="page-footer font-small">
    <div class="footer-copyright text-center py-3">
    &copy; 2020
    <a href="#" class="text-dark">JS Applications</a>
    </div>
</footer>
`;
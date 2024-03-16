import { html, render as liRender } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';
import { footerTemplate, navigationTemplate } from './views/navigation.js';
import { onNavigate } from './nav.js';
import { getUserData } from './util.js';

const root = document.querySelector('#container');
root.replaceChildren();

const combinedTemplate = (view, email) => html`
${navigationTemplate(email)}
${view}
${footerTemplate()}`;

export function render(view) {
    const userData = getUserData();
    view = combinedTemplate(view, userData?.email);
    liRender(view, root);
    document.querySelector('nav').addEventListener('click', onNavigate);
    const guest = document.querySelectorAll('.nav-item.guest');
    const user = document.querySelectorAll('.nav-item.user');
    if (userData) {
        guest.forEach(elm => elm.style.display = 'none');
        user.forEach(elm => elm.style.display = 'block');
    } else {
        guest.forEach(elm => elm.style.display = 'block');
        user.forEach(elm => elm.style.display = 'none');
    }
}

export {
    html,
    classMap
};
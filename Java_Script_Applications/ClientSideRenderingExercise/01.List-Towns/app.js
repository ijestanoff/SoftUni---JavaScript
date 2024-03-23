import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.querySelector('#root');

document.querySelector('form').addEventListener('submit', onClick);

function onClick (e) {
    e.preventDefault();
    let form = e.target;
    let towns = form.elements.towns.value.split(', ');
    render(template(towns),root);
}

const template = (towns) =>html`
<ul>
    ${towns.map(town => html`<li>${town}</li>`)}
</ul>`;


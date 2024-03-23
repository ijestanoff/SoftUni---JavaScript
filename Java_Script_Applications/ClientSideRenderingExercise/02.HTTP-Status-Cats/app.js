import { cats } from './catSeeder.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.querySelector('#allCats');

const allCatTemplate = (cats) => html`
<ul>
    ${cats.map(cat => catTemplate(cat))}
</ul>`;

const catTemplate = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${onClick} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`;

function onClick (e) {
    if (e.target.textContent == 'Show status code') {
        e.target.textContent = 'Hide status code';
        e.target.nextElementSibling.style.display = 'block';
    } else {
        e.target.textContent = 'Show status code';
        e.target.nextElementSibling.style.display = 'none';
    }
}

render(allCatTemplate(cats), root);

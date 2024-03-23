import { html, render } from './node_modules/lit-html/lit-html.js';
import { api } from './requester.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const root = document.querySelector('body');
root.replaceChildren();

const townTemp = (town) =>html`<option value="${town._id}">${town.text}</option>`;

const dropdownTemplate = (towns) => html`
<h1>Dropdown Menu</h1>
<article>
    <div>
        <select id="menu">
            ${towns.map(town => townTemp(town))}
        </select>
    </div>
    <form @submit=${onSubmit}>
        <label for="itemText">
            Text:
        </label>
        <input type="text" id="itemText" />
        <input type="submit" value="Add">
    </form>
</article>`;

async function onSubmit(e) {
    e.preventDefault();
    const text = e.target.elements.itemText.value;
    if (!text) {
        return alert('Did\'t work with empty field!');
    }
    e.target.elements.itemText.value = '';
    await api.post(url, {text});
    await loadTowns();
}

async function loadTowns () {
    const towns = await api.get(url);
    render(dropdownTemplate(Object.values(towns)), root);
} 

await loadTowns();

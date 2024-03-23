import { towns } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.querySelector('body');
root.replaceChildren();

const townTemplate = (towns, search, matches) => html`
<article>
    <div id="towns">
        <ul>
             ${towns.map(town => html`<li class="${town.includes(search)? 'active':''}">${town}</li>`)}
        </ul>
    </div>
    <input type="text" id="searchText" />
    <button @click=${onSearch} >Search</button>
    <div id="result">${matches>-1? matches + ' matches found':''}</div>
</article>`;

function onSearch() {
    const search = document.querySelector('#searchText').value;
    if (!search) {
        return;
    }
    let matches = 0;  
    towns.forEach(town => {
        if (town.includes(search)){
            matches++;
        } 
    });
    render(townTemplate(towns, search, matches), root);
}

render(townTemplate(towns,null,-1), root);
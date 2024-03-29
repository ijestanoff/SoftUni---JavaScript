import page from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { viewHome } from './viewHome.js';
import { showTopic } from './viewTopic.js';

const root = document.querySelector('main');

page(updateCTX);
page('/', viewHome);
// page('/create', showCreateView);
page('/topic/:id', showTopic);
page.start();

function renderer(temp) {
    render(temp, root);
}

function updateCTX(ctx, next) {
    ctx.render = renderer;
    ctx.goTo = goTo;
    next();
}

function goTo(path) {
    page.redirect(path);
}

export { html };

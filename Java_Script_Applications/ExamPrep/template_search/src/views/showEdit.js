import { editItem, getItemById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    render(editTemplate(item));
}

//@submit=${createSubmitHandler(onEdit)} data-id=${item._id}
//.value=${item.name}
const editTemplate = (item) => html`
`;

async function onEdit({ name, imageUrl, description, nutrition }, event) {
    if (!name || !imageUrl || !description || !nutrition ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, name, imageUrl, description, nutrition);
    page.redirect(`/catalog/${id}`);
}
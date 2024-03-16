import { contacts } from './contacts.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('contacts');
root.addEventListener('click', onClick);

function onClick(event) {
    if (event.target.classList.contains('detailsBtn')) {
        const details = event.target.parentElement.querySelector('div .details');
        const isHidden = details.style.display != 'block';
        details.style.display = isHidden ? 'block' : 'none';
    }
}

const cardTemplate = (contact) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button class="detailsBtn">Details</button>
        <div class="details" id=${contact.id}>
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
        </div>
    </div>
</div>`;

render(contacts.map(contact => cardTemplate(contact)),root);

//contacts.forEach(contact => root.innerHTML+= contactCard(contact));

// function contactCard(contact) {
//     return `<div class="contact card">
//         <div>
//             <i class="far fa-user-circle gravatar"></i>
//         </div>
//         <div class="info">
//             <h2>Name: ${contact.name}</h2>
//             <button class="detailsBtn">Details</button>
//             <div class="details" id=${contact.id}>
//                 <p>Phone number: ${contact.phoneNumber}</p>
//                 <p>Email: ${contact.email}</p>
//             </div>
//         </div>
//     </div>`;
// }
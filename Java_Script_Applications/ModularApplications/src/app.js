import { page } from './lib.js';
import { notify } from './notification.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import './data/users.js';

//showCatalog();
page('/', showCatalog);
page('/create', showCreate);
page.start();

window.notify = notify;
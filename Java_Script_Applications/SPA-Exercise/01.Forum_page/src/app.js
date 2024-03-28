import { page } from './lib.js';
import { showHomeView } from './views/showHomeview.js';
import { showCatalog } from './views/showCatalog.js';
// import { showDetailsView } from './views/showDetails.js';

page('/', showHomeView);
page('/catalog', showCatalog);
// page('/catalog/:id', showDetailsView);
page.start();
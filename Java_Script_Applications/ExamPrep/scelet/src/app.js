import { showCatalog } from './views/showCatalog.js';
import { page } from './lib.js';


page('/', showCatalog);
page.start();
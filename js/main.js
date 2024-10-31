import {getPicture} from './data.js';
import {processPicture} from './picture.js';

const picturesContainer = document.querySelector('.pictures');
processPicture(getPicture(), picturesContainer);

import { renderGallery } from './gallery.js';


const photos = getPicture();
renderGallery(photos);

// eslint-disable-next-line no-console
console.log(getPicture());


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems
.map(
    ({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img 
  class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
  </a>`
  )
  .join('');
  
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  
  const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGalleryCardEl = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;

const addCardGalleryEl = galleryItems.map(createGalleryCardEl).join('');

galleryContainer.insertAdjacentHTML('beforeend', addCardGalleryEl);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
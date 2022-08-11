import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(createImagesCardMarkup (galleryItems));

function createImagesCardMarkup (galleryItems) {
    const markup = galleryItems.map(galleryItem => {
        return
        `<div class="gallery">
    <ul>
        <li class="gallery__item">
            <a href="/" class="gallery__link">
                <img class="gallery__image"></img>
        </a>
        </li>
    </ul>
</div>`;
    });
    console.log(markup);
}
 
// console.log(galleryItems);




import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createImagesCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick)


function createImagesCardMarkup(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `
        <div class="gallery__item">
            <a href="${original}" class="gallery__link">
                <img 
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                data-source="${original}"
                ></img>
            </a>
        </div>
        `;
    }).join('');
}

function onGalleryContainerClick(evt) { 
    console.log(evt.target);
}

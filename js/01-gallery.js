import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createImagesCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createImagesCardMarkup(galleryItems) {
    return galleryItems.map(({original, preview, description}) => {
        return `
        <div class="gallery__item">
            <a href="${original.value}" class="gallery__link">
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

const onGalleryContainerClick = (evt) => { 
    evt.preventDefault();

    if (evt.target.classList.contains("gallery")) return;
    const source = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
};

galleryContainer.addEventListener("click", onGalleryContainerClick);
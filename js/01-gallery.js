import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
function createGalleryCardsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" /> 
        </a>
    </li>
    `;
        })
        .join("");
}
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener(`click`, imgClick);

function imgClick(e) {

    e.preventDefault();


    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`);

    instance.show();

    galleryContainer.addEventListener(`keydown`, (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    });
}

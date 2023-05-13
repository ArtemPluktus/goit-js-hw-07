import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
function createGalleryCardsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
     <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
    </li>
    `;
    }).join('');
};
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener(`click`, (e) => {
    e.preventDefault();
});

const gallery = new SimpleLightbox('.gallery a', {
    captions: true, // Відображати підпис під зображеннями
    captionsData: "alt", // Використовувати значення атрибуту alt для підписів
    captionDelay: 250, // Затримка перед відображенням підписів (в мілісекундах)
    captionsSelector: "self", // Використовувати сами елементи зображень як селектор для підписів
    elementsSelector: ".my-gallery a", // Використовувати інший селектор для елементів галереї
    disableScroll: true, // Заборонити прокручування сторінки під час перегляду зображень
    history: false, // Вимкнути запис історії перегляду зображень в браузері
    closeText: "X", // Текст кнопки закриття модального вікна
    showCounter: true, // Відображати лічильник зображень
    slideInterval: 5000, // Інтервал автоматичної зміни зображень (в мілісекундах)
    disableRightClick: true, // Заборонити клік правою кнопкою миші
    widthRatio: 0.8, // Відношення ширини великого зображення до вікна браузера
    heightRatio: 0.8, // Відношення висоти великого зображення до вікна браузера
    docClose: true // Закривати модальне вікно при кліку на документ
});
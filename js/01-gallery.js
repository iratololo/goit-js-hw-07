import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", handlerGallery);


const murkup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join("");

gallery.insertAdjacentHTML("afterbegin", murkup);



function handlerGallery(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) {
        return;
    }
    const instance = basicLightbox.create(`
	<img
      class="gallery__image"
      src="${evt.target.dataset.source}"
      data-source="${evt.target.dataset.source}"
      alt="${evt.target.getAttribute("alt")}"
    />
`, {
    onShow: (instance) => {
    window.addEventListener("keydown", handlerCloseGallery)
        },
    onClose: (instance) => {
    window.removeEventListener("keydown", handlerCloseGallery)
}
    
})
    instance.show();

    function handlerCloseGallery(event) {
    console.log('YES');
        if (event.key === 'Escape') {
            instance.close()
        }
}

}

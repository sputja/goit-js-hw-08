import galleryItem from "./gallery-items.js";
const refs = {
  galleryJs: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".lightbox"),
  lightboxImg: document.querySelector(".lightbox__image"),
  closeBtn: document.querySelector(".lightbox__button"),
  divOverlay: document.querySelector(".lightbox__overlay"),
};

const createImg = ({ original, preview, description }) => {
  const itemCreate = document.createElement("li");
  itemCreate.classList.add("gallery__item");

  const linkCreate = document.createElement("a");
  linkCreate.classList.add("gallery__link");
  linkCreate.setAttribute("href", `${original}`);

  const itemImg = document.createElement("img");
  itemImg.classList.add("gallery__image");
  itemImg.setAttribute("src", `${preview}`);
  itemImg.setAttribute("data-source", `${original}`);
  itemImg.setAttribute("alt", `${description}`);

  linkCreate.appendChild(itemImg);
  itemCreate.appendChild(linkCreate);
  return itemCreate;
};
const listGalery = galleryItem.map(createImg);
refs.galleryJs.append(...listGalery);

const imgMenuClick = (e) => {
  e.preventDefault();
  // if (e.currentTarget === e.target) {
  //   return;
  // }
  if (e.target.nodeName !== "IMG") {
    console.log(e.target.nodeName);
    return;
  }
  refs.lightbox.classList.add("is-open");
  refs.lightboxImg.src = e.target.dataset.source;
  refs.lightboxImg.alt = e.target.alt;
  
};

refs.galleryJs.addEventListener("click", imgMenuClick);
refs.closeBtn.addEventListener("click", () => {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImg.src = "";
  refs.lightboxImg.alt = "";
});
refs.divOverlay.addEventListener("click", () => {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImg.src = "";
  refs.lightboxImg.alt = "";
});
window.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    refs.lightbox.classList.remove("is-open");
    refs.lightboxImg.src = "";
    refs.lightboxImg.alt = "";
    window.removeEventListener("keyup", (e));
  }
});

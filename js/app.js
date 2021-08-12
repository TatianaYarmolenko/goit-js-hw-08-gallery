const galleryItems = [
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
     description: 'Hokkaido Flower',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
     description: 'Container Haulage Freight',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
     description: 'Aerial Beach View',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
     description: 'Flower Blooms',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
     description: 'Alpine Mountains',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
     description: 'Mountain Lake Sailing',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
     description: 'Alpine Spring Meadows',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
     description: 'Nature Landscape',
   },
   {
     preview:
       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
     original:
       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
     description: 'Lighthouse Coast Sea',
   },
 ];

const galleryContainer = document.querySelector('.js-gallery');
const lightboxImg = createGalleryItemsMarkup('.lightbox__image');

galleryContainer.insertAdjacentElementHTML('beforeend', createGalleryItemsMarkup)

// let rezStr = '';
// for (let i = 0; i != galleryItems.length; i++) {
//   rezStr += `<li class=\"gallery__item"\> <img  src=\"${galleryItems[i].preview}\" alt=\"${galleryItems[i].description}\"> </li>`;
// }

// gallery.insertAdjacentHTML('afterbegin', rezStr);
// const galItem = document.querySelectorAll('.galleryItem');
// gallery.style.height = 'auto';



console.log(createGalleryItemsMarkup);

function createGalleryItemsMarkup(items) {
   return items
      .map(({ preview, original, description }) => {
         return `
      <li class="gallery__item">
         <a
            class="gallery__link"
            href="${original}"
            >
            <img 
               class="gallery__image"
               data-src="${preview}" 
               data-source="${original}"
               alt="${description}" 
            />
         </a>
      </li>`;
      })
      .join('');
}


//  const galleryImages = galleryItems.reduce(
//    ({ preview, original, description }) => `<li class="gallery__item"> <img  src=\"${galleryItems[i].preview}\" alt=\"${galleryItems[i].description}\"> </li>`,
//    '',
// );
//   const galleryList = document.querySelector('.js-gallery');

//  galleryList.insertAdjacentHTML('beforeend', galleryImages);



//console.dir(galery);
//  const galleryRef = document.querySelector('.js-gallery');
 
//  galleryRef.addEventListener('click', onClick);

//  function onClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//        return;
//     }
//     console.log(event.target.textContent);
//  }

// galleryRef.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));
// addImgLazyLoading();

// const addBtn = document.querySelector('[type="button"]')
// let labelCounter = 9;

// addBtn.addEventListener('click', onAddBtnClick);
// function onAddBtnClick() {
//    const btn = document.createElement('button')
//    btn.textContent = `Кнопка ${labelCounter}`;
//    btn.type = 'button';

//    galleryRef.appendChild(btn);
//    labelCounter +=1;
// }


const closeModal = e => {
   console.log(e.target);
   if (closeModal) {
      closeModal.classList.remove('is-open')
 }
}
 butClose.addEventListener('click', closeModal);


  
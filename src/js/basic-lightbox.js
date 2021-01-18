import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'
import refs from './refs';


refs.containerImg.addEventListener('click', handlerBigImg);

function handlerBigImg({target}) {
    if (target.nodeName === 'IMG') {
        const largeImg = target.dataset.bigImg;
        const instance = basicLightbox.create(`<img src=${largeImg} >`);        
        instance.show()
    }
};
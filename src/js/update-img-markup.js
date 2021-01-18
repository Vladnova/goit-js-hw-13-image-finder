import galleryTpl from '../templates/templates.hbs';
import refs from './refs';
import io from './intersection-observer';


function updateImg(hits) {
    const markup = galleryTpl(hits)
    refs.containerImg.insertAdjacentHTML('beforeend', markup);
    io.observe(refs.containerImg.lastElementChild);    
};



export default updateImg;
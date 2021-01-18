import refs from './refs';
import apiService from './api-service.js'
import resetContainerImg from './reset';
import getImg from './fetch-img';
import { Info } from './notify';
import './basic-lightbox';


refs.form.addEventListener('submit', handlerSearchImg);
// refs.loadMoreBtn.addEventListener('click', getImg);

function handlerSearchImg(e) {
    e.preventDefault();   
    const form = e.currentTarget;
    apiService.search = form.elements.query.value; 
    if (apiService.search === '') {
        Info();
        return;
    };
    form.reset();
    resetContainerImg();
    apiService.resetPage();
    
    getImg();
};






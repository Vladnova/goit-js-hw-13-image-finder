import apiService from './api-service.js'
import { spinner } from './spinner-and-btn';
import { Error } from './notify';
import updateImg from './update-img-markup';
import './intersection-observer';



function getImg() {    
    spinner.show();
    // loadMoreBtn.hide();
    
    apiService.fetchImg().then(hits => {
       
        if (hits.length === 0) {
            // loadMoreBtn.hide();
            Error();
            return;
        };
        updateImg(hits);
        // loadMoreBtn.show();
        // scrollSmooth();
    })
    .catch(err => Error(err))
    .finally(() => {
        spinner.hide();
    });
};

export default getImg;
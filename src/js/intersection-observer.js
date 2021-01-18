import getImg from './fetch-img';

const options = {
    rootMargin: '100px'
}

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            getImg();
        }
    })
},options);

export default io;
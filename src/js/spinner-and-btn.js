import refs from './refs';

const loadMoreBtn = {
    hide() {
        refs.loadMoreBtn.classList.add('is-hidden');
    },
    show() {
        refs.loadMoreBtn.classList.remove('is-hidden');
    },
};

const spinner = {
    hide() {
        refs.spinner.classList.add('is-hidden');
    },
    show() {
        refs.spinner.classList.remove('is-hidden');
    },
};

function scrollSmooth() {
    window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: "smooth"
    });
};
export  { loadMoreBtn, spinner, scrollSmooth };
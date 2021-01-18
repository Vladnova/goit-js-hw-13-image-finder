import {Error } from './notify';
const myKey = '19870120-8ec79e7454f8912b12bef551c'; 

export default {
    searchQuery: '',
    page: 1,
    fetchImg() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${myKey}`;
   
        return fetch(url)
            .then(res => res.json())
            .then(({ hits }) => { 
                this.page += 1;
                return hits 
            });
    },
    resetPage() {
        this.page = 1;
    },
    get search() {
        return this.searchQuery;
    },
    set search(value) {
        this.searchQuery = value;        
    }
};
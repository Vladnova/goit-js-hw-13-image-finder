import axios from 'axios';
const myKey = '19870120-8ec79e7454f8912b12bef551c'; 
axios.defaults.baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${myKey}`;




export default {
    searchQuery: '',
    page: 1,
    async fetchImg() {
        const url = `&q=${this.search}&page=${this.page}`;   
        // return fetch(url)
        //     .then(res => res.json())
        //     .then(({ hits }) => { 
        //         this.page += 1;
        //         return hits 
        //     });
        try {             
            const {data: { hits }} = await axios.get(url);
            this.page += 1;            
            return hits;
        } catch  { } 
       
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
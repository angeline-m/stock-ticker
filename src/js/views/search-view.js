import ejs from '../../../node_modules/ejs';

function SearchView(viewId) {
    
    this.view = document.querySelector(viewId);

    return this;

}

export default SearchView;
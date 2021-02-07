function SearchController(model, searchView){
    this.model = model;
    this.searchView = searchView;

    const searchForm = document.querySelector('#searchForm');

    searchForm.addEventListener('submit', this.onHandleSubmit);

    this.onHandleSubmit = async (e) => {
        e.preventDefault();
        const symbol = this.searchView.view[0].value;
        
        const searchResponse = await this.model.search(symbol);
        
        this.view.renderView(searchResponse);
    }

    return this;

}

export default SearchController;
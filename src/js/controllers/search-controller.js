function SearchController(model, searchView){
    this.model = model;
    this.searchView = searchView;
    this.searchView.setController(this);

    this.configListeners = () => {
        this.searchView.view.addEventListener("submit", this.onHandleSubmit);
    }

}

export default SearchController;
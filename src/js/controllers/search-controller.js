function SearchController(model, searchView){
    //assign the passed in arguments
    this.model = model;
    this.searchView = searchView;

    //set a const to the form that the user interacts with
    const searchForm = document.forms['searchForm'];

    //add event listener for the form
    searchForm.addEventListener('submit', this.onHandleSubmit);

    //function to handle when form is submitted
    this.onHandleSubmit = async (e) => {
        e.preventDefault();

        //set a const to the input value
        const symbol = searchForm.symbolSearch.value;
        
        //assign the search results
        const searchResponse = await this.model.search(symbol);
        
        //render the view for the results
        this.view.renderView(searchResponse);

    }

    return this;

}

export default SearchController;
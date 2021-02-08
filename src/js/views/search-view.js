import ejs from 'ejs';

//view for when there are no results
const noResultView = `<aside class="noResults">
                        <h2>No results found</h2>
                        </aside>`;

//view for when there are valid results
const foundResultView = `<aside class="symbolInfo">
                        <h2><%= data['01. symbol'] %> Information</h2>
                        </aside>`;

function SearchView() {

    //assign the results aside
    this.container = document.querySelector('#results');

    this.renderView = function(searchResult) {
        //clear the results div before we render out the result
        this.removeChildElements();
        
        const renderedElement = searchResult.then((data) => {
            console.log(data)
            //if no results, render the foundResultView, otherwise render the noResultView
            if (data['01. symbol'] == undefined || data['01. symbol']  == null) {
                const elem = ejs.render(noResultView, data);
                this.container.insertAdjacentHTML("afterbegin", elem);
            } else {
                const elem = ejs.render(foundResultView, data);
                this.container.insertAdjacentHTML("afterbegin", elem);
            }

        })

    }

    //clear the results div
    this.removeChildElements = function(){
        this.container.querySelectorAll('aside').forEach((searchResult) => {
            this.container.removeChild(searchResult);
        })
    }
    

    return this;

}

export default SearchView;
import ejs from 'ejs';

//view for when there are valid results
const foundResultView = `<aside class="symbolInfo">
                <h2><%=symbol['01. symbol']%> Information</h2>
                </aside>`;

//view for when there are no results
const noResultView = `<aside class="noResults">
<h2>No results found</h2>
</aside>`;

function SearchView() {

    //assign the results aside
    this.container = document.querySelector('#results');

    this.renderView = function(symbol) {
        //clear the results div before we render out the result
        this.removeChildElements();

        //if no results, render the noResultView
        if (symbol.results.length === 0) {
            const elem = ejs.render(noResultView);
            this.container.insertAdjacentHTML("afterbegin", elem);
        }

        //if there are results, render the foundResultView
        if (symbol.results.length !== 0) {
            const elem = ejs.render(foundResultView);
            this.container.insertAdjacentHTML("afterbegin", elem);
        }

        //clear the results div
        this.removeChildElements = function(){
            this.container.querySelectorAll('aside').forEach((symbol) => {
                this.container.removeChild(symbol);
            })
        }
    }
    

    return this;

}

export default SearchView;
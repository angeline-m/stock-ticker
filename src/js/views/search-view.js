import ejs from 'ejs';

const foundResultView = `<aside class="symbolInfo">
                <h2><%=symbol['01. symbol']%> Information</h2>
                </aside>`;

const noResultView = `<aside class="noResults">
<h2>No results found</h2>
</aside>`;

function SearchView() {

    this.container = document.querySelector('#results');

    this.renderView = function(symbol) {
        this.removeChildElements();
        if (symbol.results.length === 0) {
            const elem = ejs.render(noResultView);
            this.container.insertAdjacentHTML("afterbegin", elem);
        }

        if (symbol.results.length !== 0) {
            
        }
    }
    

    return this;

}

export default SearchView;
import ejs from 'ejs';

//view for when there are no results
const noResultView = `<aside class="noResults">
                        <h2>No results found</h2>
                        </aside>`;

//view for when there are valid results
const foundResultView = `<aside class="symbolInfo">
                        <h2><%=ticker['01. symbol']%> Information</h2>
                        <div class="info lineOne">
                            <span class="symbol"><%=ticker['01. symbol']%></span>
                            <span class="price"><%=ticker['05. price']%> USD</span>
                        </div>
                        <div class="info lineTwo">
                            <p>Closed <span class="date"><%=ticker['07. latest trading day']%></span></p>
                        </div>
                        <div class="info lineThree">
                            <p>Previous close <span class="close"><%=ticker['08. previous close']%></span>, change of <span class="change"><%=ticker['09. change']%></span> <span class="change-per">(<%=ticker['10. change percent']%>)</span></p>
                        </div>
                        </aside>`;

function SearchView() {

    //assign the results aside
    this.container = document.querySelector('#results');

    this.renderView = function(searchResult) {
        //clear the results div before we render out the result
        this.removeChildElements();
        
        const renderedElement = searchResult.then((ticker) => {
            //if no results, render the foundResultView, otherwise render the noResultView
            if (ticker['01. symbol'] == undefined || ticker['01. symbol']  == null) {
                const elem = ejs.render(noResultView);
                //insert view
                this.container.insertAdjacentHTML("afterbegin", elem);
            } else {
                //must remember to add curly brace for object
                const elem = ejs.render(foundResultView, {ticker});
                //insert view
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
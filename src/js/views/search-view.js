import ejs from 'ejs';

//view for when there are no results
const noResultView = `<aside class="noResults">
                    <p>No results found</p>
                    </aside>`;

//view for when there are valid results
const foundResultView = `<aside class="symbolInfo">
                    <div class="topInfo">
                        <h2 class="symbol"><%=ticker['01. symbol']%></h2>
                        <div class="divider"></div>
                        <div class="info sectionOne">
                            <p class="price"><%=ticker['05. price']%> USD</p>
                            <p class="closeDate">Closed on <%=ticker['07. latest trading day']%></p>
                        </div>
                    </div>
                    <div class="info sectionTwo">
                        <div class="boxOne">
                            <p class="closeAmt"><%=ticker['08. previous close']%></p>
                            <p>Previous close</p>
                        </div>
                        <div class="boxTwo">
                            <p class="changeValue"><%=ticker['09. change']%></p>
                            <p>Change value</p>
                        </div>
                        <div class="boxThree">
                            <p class="changePercent"><%=ticker['10. change percent']%></p>
                            <p>Change percentage</p>
                        </div>
                    </div>
                </aside>`;

function SearchView() {

    //assign the results aside
    this.container = document.querySelector('#results');

    this.renderView = function (searchResult) {
        //clear the results div before we render out the result
        this.removeChildElements();

        const renderedElement = searchResult.then((ticker) => {
            //if no results, render the foundResultView, otherwise render the noResultView
            if (ticker['01. symbol'] == undefined || ticker['01. symbol'] == null) {
                const elem = ejs.render(noResultView);
                //insert view
                this.container.insertAdjacentHTML("afterbegin", elem);
            } else {
                //must remember to add curly brace for object
                const elem = ejs.render(foundResultView, {
                    ticker
                });
                //insert view
                this.container.insertAdjacentHTML("afterbegin", elem);
            }

        })

    }

    //clear the results div
    this.removeChildElements = function () {
        this.container.querySelectorAll('aside').forEach((searchResult) => {
            this.container.removeChild(searchResult);
        })
    }

    return this;

}

export default SearchView;

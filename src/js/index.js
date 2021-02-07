//instantiate model and view and feed it into the controller

import AlphaVantageModel from './models/alphavantage.js';
import SearchView from './views/search-view.js';

const model = new AlphaVantageModel();
const searchView = new SearchView('#searchForm');

console.log(model)
console.log(searchView)

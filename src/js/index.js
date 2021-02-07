//instantiate model and view and feed it into the controller

import SearchController from './controllers/search-controller.js';
import AlphaVantageModel from './models/alphavantage.js';
import SearchView from './views/search-view.js';

const model = new AlphaVantageModel();
const searchView = new SearchView();
const controller = new SearchController(model, searchView);

console.log(model)
console.log(searchView)
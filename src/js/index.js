//instantiate model and view and feed it into the controller
//import default functions from the controller, view, and model folders
import SearchController from './controllers/search-controller.js';
import AlphaVantageModel from './models/alphavantage.js';
import SearchView from './views/search-view.js';

//create new "classes" from these default functions
const model = new AlphaVantageModel();
const searchView = new SearchView();
const controller = new SearchController(model, searchView);

//call configUI to retrieve search value and pass into the view
controller.configUI();
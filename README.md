# dmit-2008-assign-1
Assignment 1 for DMIT 2008 - Stock Ticker App
- This is an assignment that requires the usage of an external API to load stock information into a simple search page that returns the query results (if a valid symbol is given).
- This assignment uses the MVC model to handle the capturing of the search data, retrieving the queried data's results, and showing the results on the page.

## Model
The model file is responsible for putting together the appropriate query URL with the correct parameters. It already receives the function and key values, and simply needs the form input value given by the user. The model retrieves the information for the given symbol and returns the object result for that symbol.

## View
The view is responsible for rendering the appopriate HTML elements on to the page. If the user input is invalid, it will not return a valid object, thus a "No results" view will be rendered to the page. If the user input is valid, then a "Results" view is rendered to the page displaying the appropriate values of the object result's keys.

## Controller
The controller takes the model and view and handles them. First, it captures the form and adds an event listener everytime it is submitted by the user. Then it captures the form input value and retrieves the object result via the model. Once that is done, it calls on the renderView function in the view to render the appropriate view on the page.

## src index.js file
The main `index.js` file is responsible for bringing all the MVC files together, capturing the model, view, and controller into their own separate variables. The model and view are fed into the controller.
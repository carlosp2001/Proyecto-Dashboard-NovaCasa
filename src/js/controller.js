import * as model from './model.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';


const controlResults = async function () {
    try {
        // resultsView.renderSpinner();
        // 1) Get search query
        // const query = resultsView.getQuery();
        // if (!query) return;

        // 2) Load search results
        await model.loadResults();

        // 3) Render results
        resultsView.render(model.getResults())

        // console.log(model.state.search.results);
        // // resultsView.render(model.state.search.results)
        // resultsView.render(model.getSearchResultsPage());

        // 4) Render initial pagination buttons
        paginationView.render(model.state.search);
    } catch (err) {
        console.log(err);
    }
};

const controlPagination = function (goToPage) {
    // 1) Render new results
    // console.log(model.state.search.results);
    // resultsView.render(model.state.search.results)
    resultsView.render(model.getResults(goToPage));

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
};

const init = function () {
    resultsView.addHandler(controlResults);
    paginationView.addHandlerClick(controlPagination);
};
init();

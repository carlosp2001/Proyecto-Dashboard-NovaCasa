import * as model from './model.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import importPropertiesView from './views/importPropertiesView.js';

const controlResults = async function () {
    try {
        // resultsView.renderSpinner();
        // 1) Get search query
        // const query = resultsView.getQuery();
        // if (!query) return;

        // 2) Load search results
        resultsView.renderSpinner();

        await model.loadResults();

        // 3) Render results
        resultsView.render(model.getResults());

        // console.log(model.state.search.results);
        // // resultsView.render(model.state.search.results)
        // resultsView.render(model.getSearchResultsPage());

        // 4) Render initial pagination buttons
        paginationView.render(model.state.search);
    } catch (err) {
        console.log(err);
        importPropertiesView._errorMessage = err;
        importPropertiesView.renderError();
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

async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const controlImportProperties = async function () {
    importPropertiesView._message = 'loading';
    importPropertiesView.render((onlyRender = true));
    const res = await model.importProperties();
    
    if (res.status === 'successful') {
        importPropertiesView._message = 'successful';
        importPropertiesView.render((onlyRender = true));
        await sleep(4);
        importPropertiesView._clear();
    } else if (res.status === 'fail' ) {
        console.log('Hola');
        importPropertiesView._errorMessage = res.message;
        importPropertiesView.renderError();
        // await sleep(4);
        // importPropertiesView._clear();
    }
};

const init = function () {
    resultsView.addHandler(controlResults);
    paginationView.addHandlerClick(controlPagination);
    importPropertiesView.addHandler(controlImportProperties);
};
init();

import * as model from './model.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import importPropertiesView from './views/importPropertiesView.js';
import configAppView from './views/catalogConfigView.js';

const controlResults = async function () {
    try {
        // 1) Se realiza la autenticación de facebook
        await model.checkFacebookAuth();
        console.log(model.state.user.catalogs);

        if (!model.checkForCatalog()) {
            // 2) Si la autenticación que realice se encuentra del todo bien, se muestra el popup
            // para seleccionar el catálogo al que se desea importar
            configAppView.render(
                (data = model.state.user.catalogs),
                (onlyRender = true)
            );

            // 3) Se hace una espera con una promesa hasta que confirme al catálogo que enviaremos
            await configAppView.catalogSubmit();

            // 4) Se guarda el catálogo seleccionado

            model.saveCatalog(await configAppView.getSelectedCatalog());
        }

        // 5) Se renderiza el spinner de carga
        resultsView.renderSpinner();

        // 6) Se cargan los resultados
        await model.loadResults();

        // 7) Se renderizan los resultados
        resultsView.render(model.getResults());

        // console.log(model.state.search.results);
        // // resultsView.render(model.state.search.results)
        // resultsView.render(model.getSearchResultsPage());

        // 8) Se renderiza la paginación de la pagina
        paginationView.render(model.state.search);
        configAppView._clear();
    } catch (err) {
        // En caso de haber algun error en cualquiera de los procedimientos anteriores se
        // capturara aca y se mostrará en un pop-up con un icono de alerta
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
    } else if (res.status === 'fail') {
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

import * as model from './model.js';
import appView from './views/appView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import importPropertiesView from './views/importPropertiesView.js';
import catalogConfigAppView from './views/catalogConfigView.js';
import configView from './views/configView.js';

const controlResults = async function () {
    try {
        console.log(process.env);
        // 1) Se realiza la autenticación de facebook
        await model.checkFacebookAuth();
        console.log(model.state.user.catalogs);

        if (!model.checkForCatalog()) {
            // 2) Si la autenticación que realice se encuentra del todo bien, se muestra el popup
            // para seleccionar el catálogo al que se desea importar
            catalogConfigAppView.render(model.state.user.catalogs);

            // 3) Se hace una espera con una promesa hasta que confirme al catálogo que enviaremos
            await catalogConfigAppView.catalogSubmit();

            // 4) Se guarda el catálogo seleccionado

            model.saveCatalog(await catalogConfigAppView.getSelectedCatalog());
            model.checkForCatalog();
        }
        catalogConfigAppView._clear();

        configView.render(model.state);
        configView.addLogOutHandler(controlLogOutFacebook);
        configView.addConfirmHandler(controlSettings);

        // 5) Se renderiza el spinner de carga
        resultsView.renderSpinner();

        // 6) Se cargan los resultados
        await model.loadResults();

        // 7) Se renderizan los resultados
        resultsView.render(model.getResults());

        // 8) Se renderiza la paginación de la pagina
        paginationView.render(model.state.search);
    } catch (err) {
        // En caso de haber algun error en cualquiera de los procedimientos anteriores se
        // capturara aca y se mostrará en un pop-up con un icono de alerta
        console.log(err);
        importPropertiesView._errorMessage = err;
        importPropertiesView.renderError();
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
    importPropertiesView.render(undefined, true, true);
    const res = await model.importProperties();

    if (res.status === 'successful') {
        importPropertiesView._message = 'successful';
        importPropertiesView.render(undefined, true, true);
        await sleep(4);
        importPropertiesView._clear();
    } else if (res.status === 'fail') {
        importPropertiesView._errorMessage = res.message;
        importPropertiesView.renderError();
    }
};

const controlPage = (e) => {
    if (e.type === 'hashchange' || e.type === 'load') {
        const page = window.location.hash.slice(1);
        console.log(page);

        function switchDashboard() {
            document.getElementById('dashboard-page').style.display = 'inline';
            document.getElementById('settings-page').style.display = 'none';
        }
        if (page === 'settings') {
            document.getElementById('dashboard-page').style.display = 'none';
            document.getElementById('settings-page').style.display = 'inline';
        } else {
            switchDashboard();
        }
    }
};

const controlLogOutFacebook = async (e) => {
    e.preventDefault();
    try {
        if ((await model.logOutFacebook()) === 'loggedOut') {
            localStorage.removeItem('catalog');
            throw new Error(
                'Has cerrado sesión recarga la página para volver a iniciar sesión'
            );
        }
    } catch (err) {
        importPropertiesView._errorMessage = err.message;
        importPropertiesView.renderError();
    }
};

const controlSettings = (e) => {
    e.preventDefault();
    model.setNewConfigSettings(configView.getFormData());
};

const init = async function () {
    appView.addHandlerRender(controlPage);
    resultsView.addHandler(controlResults);
    paginationView.addHandlerClick(controlPagination);
    importPropertiesView.addHandler(controlImportProperties);
};
init();

import {AJAX} from './helpers.js';
const API_URL = 'http://localhost:8080';

export const state = {
    property: {},
    user: {
        user_id: '',
        business: '',
        catalog: '',
    },
    search: {
        query: '',
        results: [],
        resultsFacebook: [],
        page: 1,
        resultsPerPage: 10,
    },
};

export const loadResults = async function () {
    try {
        const data = await AJAX(`${API_URL}/api/v1/properties`);

        state.search.results = data.data.properties;

        const dataFacebook = await AJAX(
            `http://localhost:8080/api/v1/propertiesFacebook`
        );
        // console.log(state.search.results);
        state.search.resultsFacebook = dataFacebook.data.properties;
        // console.log(state.search.resultsFacebook);

        state.search.page = 1;
    } catch (err) {
        console.error(`Error intentando obtener los datos! 💥💥💥💥`);
        throw new Error(`Error intentando obtener los datos! 💥💥💥💥`);
    }
};

export const getResults = function (page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 9
    return state.search.results.slice(start, end);
};

export const getFacebookResults = function () {
    return state.search.resultsFacebook;
};

export const importProperties = async function () {
    const result = await AJAX(
        `http://localhost:8080/importProperties?catalog_id=${state.user.catalog.id}`
    );

    return result;
};

export const logInFacebook = function () {
    return new Promise((resolve, reject) => {
        FB.login(
            function (response) {
                if (response.status === 'connected') resolve('connected');
                else reject('logout');
            },
            {
                scope: 'business_management, catalog_management',
                return_scopes: true,
            }
        );
    });
};

export const logOutFacebook = function () {
    return new Promise((resolve, reject) => {
        FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                FB.logout(() => {
                    resolve('loggedOut');
                });
            } else {
                reject('No existe una sesión')
            }
        });
    });
};

export const checkFacebookAuth = function () {
    return new Promise((resolve, reject) => {
        FB.init({
            appId: '658573932758488',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v17.0',
        });

        FB.getLoginStatus(async function (response) {
            if (response.status === 'connected') {
                console.log(response);
                FB.api(`/me`, function (response) {
                    console.log(response);
                    if (!response)
                        return reject(
                            'No se encontro la información de tu cuenta'
                        );
                    state.user.user_name = response.name;
                });
                state.user.user_id = response.authResponse.userID;
                new Promise((resolve, reject) => {
                    // Conseguir la el ID del negocio
                    FB.api('/me/businesses', function (response) {
                        if (response.data < 3 || !response.data)
                            reject(
                                'No hay negocios vinculados con esta cuenta'
                            );
                        state.user.business = response.data[0];

                        return resolve(state.user.business.id);
                    });
                })
                    .then((data) => {
                        // Conseguir la lista de los catálogos
                        FB.api(
                            `/${data}/owned_product_catalogs`,
                            function (response) {
                                if (!response.data.length)
                                    return reject(
                                        'No hay catálogos asociados a esta cuenta'
                                    );
                                state.user.catalogs = response.data;
                                return resolve(response);
                            }
                        );
                    })
                    .catch((err) => {
                        reject(err);
                    });
            } else {
                if ((await logInFacebook()) === 'connected')
                    resolve(checkFacebookAuth());
                else {
                    return reject('Debes iniciar sesión');
                }
            }
        });
    });
};

export const saveCatalog = function (catalogInfo) {
    localStorage.setItem('catalog', JSON.stringify(catalogInfo));
    console.log(localStorage);
};

export const checkForCatalog = function () {
    const catalog = JSON.parse(localStorage.getItem('catalog'));
    if (catalog) {
        state.user.catalog = catalog;
        console.log(state.user);
        return true;
    } else return false;
};

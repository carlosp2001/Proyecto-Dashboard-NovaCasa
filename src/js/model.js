import {AJAX} from './helpers.js';
import {API_URL} from './config.js';

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

/**
 * Carga los resultados de la propiedades desde la API y luego los almacena en la variable state
 * que es la que controla los datos de la app
 * @this {Object} Instancia de la llamada
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
export const loadResults = async function () {
    try {
        const data = await AJAX(`${API_URL}/api/v1/properties`);

        state.search.results = data.data.properties;

        const dataFacebook = await AJAX(`${API_URL}/api/v1/propertiesFacebook`);

        state.search.resultsFacebook = dataFacebook.data.properties;

        state.search.page = 1;
    } catch (err) {
        console.error(`Error intentando obtener los datos! 💥💥💥💥`);
        throw new Error(`Error intentando obtener los datos! 💥💥💥💥`);
    }
};

/**
 * Consigue las propiedades que se han almacenado en la variable state con su respectiva
 * paginación
 * @this {Object} Instancia de la llamada
 * @param {Number} page El numero de página que se filtrará
 * @returns {Array} Las propiedades filtradas con la paginación
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
export const getResults = function (page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 9
    return state.search.results.slice(start, end);
};

/**
 * Obtiene las propiedades que están en el catálogo de facebook
 *
 * @this {Object} Instancia de la llamada
 * @returns {Array} Las propiedades guardadas en el state que han sido obtenidas de Facebook
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
export const getFacebookResults = function () {
    return state.search.resultsFacebook;
};

export const importProperties = async function () {
    const result = await AJAX(
        `${API_URL}/importProperties?catalog_id=${state.user.catalog.id}`
    );

    return result;
};

/**
 * Funcion para iniciar sesión en facebook
 * @this {Object} Instancia de la llamada
 * @returns {Promise} La promesa va a ser resolve si el usuario inicia sesión exitosamente,
 * si el usuario no inicia sesión exitosamente se devuelve el reject con el mensaje logout
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
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

/**
 * Funcion para cerrar sesión en facebook
 * @this {Object} Instancia de la llamada
 * @returns {Promise} La promesa va a ser resolve si la sesión del usuario existe y se pudo cerrar la
 * sesión, si la sesión del usuario no existe se devuelve el reject con el mensaje de No existe una
 * sesión
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
export const logOutFacebook = function () {
    return new Promise((resolve, reject) => {
        FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                FB.logout(() => {
                    resolve('loggedOut');
                });
            } else {
                reject('No existe una sesión');
            }
        });
    });
};

/**
 * Función para validar si existe una sesión existente de facebook
 * @this {Object} Instancia de la llamada
 * @returns {Promise} Nos retorna la promesa como resuelta si se cumplen todos los requisitos, si existe la sesion, existe un negocio asociado con esa cuenta y hay catalogos sera resuelta la promesa,
 * de lo contrario si uno de estos parámetros no se encuentra será rechazada con un mensaje acerca del]
 * por qué fué rechazada
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
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

/**
 * Función para guardar el catálogo en el localStorage
 * @this {Object} Instancia de la llamada
 * @param {Object} catalogInfo el objeto que contiene los datos del catálogo al que serán importadas
 * las propiedades
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
export const saveCatalog = function (catalogInfo) {
    localStorage.setItem('catalog', JSON.stringify(catalogInfo));
    console.log(localStorage);
};

/**
 * Función para verificar si existe un catálogo almacenado en el localStorage, de existir se almacena
 * en la variable state
 * @this {Object} Instancia de la llamada
 * @returns {Boolean} true si existe el catálogo en localStorage y se almacena directamente en el 
 * state, false de no existir el catálogo en el localStorage
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
export const checkForCatalog = function () {
    const catalog = JSON.parse(localStorage.getItem('catalog'));
    if (catalog) {
        state.user.catalog = catalog;
        console.log(state.user);
        return true;
    } else return false;
};

/**
 * Función para verificar si existe un catálogo almacenado en el localStorage, de existir se almacena
 * en la variable state
 * @this {Object} Instancia de la llamada
 * @returns {Boolean} true si existe el catálogo en localStorage y se almacena directamente en el 
 * state, false de no existir el catálogo en el localStorage
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
export const setNewConfigSettings = function (data) {
    if (data.catalog) saveCatalog(data.catalog);
};

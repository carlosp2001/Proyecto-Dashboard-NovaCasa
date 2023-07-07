import {AJAX} from './helpers.js';
const API_URL = 'http://localhost:8080';


export const state = {
    property: {},
    search: {
        query: '',
        results: [],
        resultsFacebook: [],
        page: 1,
        resultsPerPage: 10
    },
    bookmarks: [],
};

export const loadResults = async function () {
    try {
        const data = await AJAX(`${API_URL}/api/v1/properties`);

        state.search.results = data.data.properties;
        const dataFacebook = await AJAX(`http://localhost:8080/api/v1/propertiesFacebook`)
        // console.log(state.search.results);
        state.search.resultsFacebook = dataFacebook.data.properties;
        console.log(state.search.resultsFacebook);

        

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
    const result = await AJAX(`http://localhost:8080/importProperties`);

    return result;
};

import {AJAX} from './helpers.js';
const API_URL = 'http://127.0.0.1:8080/api/v1/properties';


export const state = {
    property: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: 10
    },
    bookmarks: [],
};

export const loadResults = async function () {
    try {
        const data = await AJAX(`http://localhost:8080/api/v1/properties`);

        state.search.results = data.data.properties;
        // console.log(state.search.results);
        state.search.page = 1;
    } catch (err) {
        console.error(`${err} 💥💥💥💥`);
        throw err;
    }
};

export const getResults = function (page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 9
    return state.search.results.slice(start, end);
};

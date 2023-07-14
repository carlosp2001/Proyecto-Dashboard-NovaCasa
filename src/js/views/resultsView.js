import View from './View.js';
// import previewView from './previewView.js'; // Parcel 2, si no es un archivo de
import icons from 'url:../../img/icons.svg';
import {getFacebookResults} from '../model.js';

/**
 * Esta vista muestra las propiedades cargadas desde la página
 * @param {Element} _parentElement Es el body de la tabla donde se agregaran la filas con la informa-
 * ción de las propiedades
 * @param {String} [_errorMessage='Hubo error al mostrar la página'] _errorMessage Es el mensaje que se muestra al renderizar el error
 * @this {Object} Instancia de la vista
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
class ResultsView extends View {
    _parentElement = document
        .querySelector('.table-data')
        .querySelector('tbody');
    _errorMessage = 'No se encontraron propiedades! Por favor intenta de nuevo';

    /**
     * Se agrega el handler que conecta al controlador con la vista
     * @param {Function} handler Es la función que se ejecutará al recibir una llamada por el evento
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    addHandler(handler) {
        window.addEventListener('load', handler);
    }

    /**
     * Esta función genera el markup que se renderizará en la tabla con las popiedades
     * @this {Object} Instancia de la vista
     * @returns {string | undefined} Regresa en forma de cadena el html generado
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    _generateMarkup() {
        return this._data
            .map((result) => this._generateMarkupPreview(result))
            .join('');
    }

    /**
     * Esta función se encarga de tratar individualmente el html que será generado por _generateMarkup
     * @param {Object | undefined} result Es el objeto que contiene la información de la propiedad
     * el cuál será destructurado luego
     * @this {Object} Instancia de la vista
     * @returns {string | undefined} Regresa en forma de cadena el html generado individualmente
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    _generateMarkupPreview(result) {
        // const id = window.location.hash.slice(1);
        const facebookResults = getFacebookResults();

        return `<tr>
        <td>${result.ID || '--'}</td>
        <td>${result.post_title || '--'}</td>
        <td>${result.property_bathrooms || '--'}</td>
        <td>${(result.property_size
            ? result.property_size_prefix
                ? `${result.property_size} ${result.property_size_prefix}`
                : result.property_size
            : '--'
        ).toLowerCase()}</td>
        <td>${result.property_garage || '--'}</td>
        <td>${result.category || '--'}</td>
        <td> ${new Intl.NumberFormat(result.currency, {
            style: 'currency',
            currency: result.currency,
        }).format(result.property_price)}</td>
        <td>${
            facebookResults.find((el) => el.retailer_id == result.ID)
                ? `<svg class="check-icon"><use href="${icons}#icon-check"></use></svg>`
                : `<svg class="x-icon"><use href="${icons}#icon-x"></use></svg>`
        }</td>
    </tr>`;
    }

    /**
     * Renderiza un spinner en el elemento padre, esto para crear un efecto de espera
     * @returns {undefined | string} No devuelve ningún dato
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    renderSpinner() {
        const markup = `
        <tr>
        <td colspan=8>
        <div class="spinner">
            <svg>
                <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
        </td>
        </tr>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}

export default new ResultsView();

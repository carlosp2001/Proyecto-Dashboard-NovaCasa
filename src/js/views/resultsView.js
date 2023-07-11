import View from './View.js';
// import previewView from './previewView.js'; // Parcel 2, si no es un archivo de
import icons from 'url:../../img/icons.svg';
import { getFacebookResults } from '../model.js';

class ResultsView extends View {
    _parentElement = document
        .querySelector('.table-data')
        .querySelector('tbody');
    _errorMessage = 'No se encontraron propiedades! Por favor intenta de nuevo';
    _message = '';

    addHandler(handler) {
        window.addEventListener('load', handler);
    }

    _generateMarkup() {
        return this._data
            .map((result) => this._generateMarkupPreview(result))
            .join('');
    }

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

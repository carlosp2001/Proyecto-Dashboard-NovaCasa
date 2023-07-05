import View from './View.js';
import icons from 'url:../../img/icons.svg';

// import previewView from './previewView.js'; // Parcel 2, si no es un archivo de

class importPropertiesView extends View {
    _parentElement = document.querySelector('.popup-container');

    _errorMessage = 'No se pudo realizar la importación de las propiedades';
    _message = '';
    _messageContent = '';

    addHandler(handler) {
        document
            .querySelector('#import-button')
            .addEventListener('click', handler);
    }

    _generateMarkup() {
        return `<div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    ${
                        this._message === 'loading'
                            ? this._generateMarkupLoadingPreview()
                            : this._generateMarkupSuccessPreview()
                    }
                </div>
                
            </div>
        </div>
    </div>`;

    }

    renderError(message = this._errorMessage) {
        const markup = `
        <div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <div class="alert">
                        <svg>
                            <use href="${icons}#icon-alert-triangle"></use>
                        </svg>
                    </div>
                    <p style="white-space: pre-line">${message}</p>
                </div>
                
            </div>
        </div>
    </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    

    _generateMarkupLoadingPreview() {
        return `<h3>
        Importando las propiedades
        </h3>
        <div class="spinner">
<svg>
    <use href="${icons}#icon-loader"></use>
</svg>`;
    }


    _generateMarkupSuccessPreview() {
        return `
                <h3>
                    ¡Propiedades importadas correctamente!
                </h3>
                <p>Revisa tu catálogo de facebook</p>
                <div class="check">
                <svg>
                    <use href="${icons}#icon-check"></use>
                </svg>
                </div>`;
    }

    // _generateMarkupPreview(result) {
    //     // const id = window.location.hash.slice(1);

    //     return `<tr>
    //     <td>${result.ID || '--'}</td>
    //     <td>${result.post_title || '--'}</td>
    //     <td>${result.property_bathrooms || '--'}</td>
    //     <td>${(result.property_size ? result.property_size_prefix ?  `${result.property_size} ${result.property_size_prefix}`:  result.property_size : '--').toLowerCase()}</td>
    //     <td>${result.property_garage || '--'}</td>
    //     <td>${result.category || '--'}</td>
    //     <td> ${new Intl.NumberFormat(result.currency, {
    //         style: 'currency',
    //         currency: result.currency,
    //     }).format(result.property_price)}</td>
    // </tr>`;

    // }
}

export default new importPropertiesView();

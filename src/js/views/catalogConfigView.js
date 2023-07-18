import View from './View.js';
import icons from 'url:../../img/icons.svg';

// import previewView from './previewView.js'; // Parcel 2, si no es un archivo de

/**
 * Esta clase controla las vistas que se generan para configurar el catálogo al que se importarán
 * las propiedades
 * @property {Element} _parentElement Es el contenedor principal donde se renderizarán los elementos
 * @property {String} [_errorMessage='No se pudo configurar el catálogo'] _errorMessage Es el
 * mensaje que se muestra al renderizar el error
 * @property {Element} [_catalogElement=''] Es el elemento select del DOM en el cual el usuario elegirá
 * el catálogo y nosotros recibiremos el valor de ese catálogo acá
 * @property {String|Object} [_dataCatalog=''] Almacena la información del catálogo seleccionado
 * @this {Object} Instancia de la vista
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
class catalogConfigView extends View {
    _parentElement = document.querySelector('.popup-container');
    _catalogElement = '';
    _dataCatalog = '';
    _errorMessage = 'No se pudo configurar el catálogo';

    addHandler(handler) {
        document
            .querySelector('#import-button')
            .addEventListener('click', handler);
    }

    _generateMarkup() {
        return `<div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <form class="form-group catalog-form">
                        <label for="catalog-select">Selecciona el catalogo:</label>
                        <select class="form-control" id="catalog-select">
                            ${this._data.map(
                                (el) =>
                                    `<option value=${el.id} >${el.name}</option>`
                            )}
                        </select>
                        <br>
                        <button type="submit" class="btn btn-primary btn-catalog">Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>`;
    }

    getSelectedCatalog() {
        this._catalogElement = document.querySelector('#catalog-select');
        let selectedCatalog = {
            id: this._catalogElement.options[this._catalogElement.selectedIndex]
                .value,
            value: this._catalogElement.options[
                this._catalogElement.selectedIndex
            ].text,
        };
        this._dataCatalog = selectedCatalog;
        return this._dataCatalog;
    }

    catalogSubmit() {
        return new Promise((resolve, reject) => {
            document
                .querySelector('.catalog-form')
                .addEventListener('submit', async (e) => {
                    e.preventDefault();
                    resolve('submitted');
                });
        });
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
}

export default new catalogConfigView();

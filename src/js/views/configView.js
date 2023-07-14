import View from './View.js';
import icons from 'url:../../img/icons.svg';

// import previewView from './previewView.js'; // Parcel 2, si no es un archivo de

class configView extends View {
    _parentElement = document.querySelector('.settings-wrapper');
    _errorMessage = 'No se pudo realizar la importación de las propiedades';
    _message = '';
    _messageContent = '';

    addHandler(handler) {
        window.addEventListener('load', handler);
    }

    addLogOutHandler(handler) {
        document
            .querySelector('.btn-logout-facebook')
            .addEventListener('click', handler);
    }

    _generateMarkup() {
        return `
        <div class="mb-3">
            <h3>Configuración</h3>
        </div>
        <div>
            <h6>Usuario de Facebook</h6>
            <hr>
            <div class="w-25 d-inline-block mr-4">
            <label for="user-id-input">Id del Usuario:</label>
            <input type="text" class="form-control" id="user-id-input" value='${
                this._data.user.user_id
            }'>
            </div>
            <div class="w-25 d-inline-block mr-3">
            <label for="user-name-input">Nombre:</label>
            <input type="text" class="form-control" id="user-name-input" value='${
                this._data.user.user_name
            }'>
            </div><button type="submit" class="btn btn-secondary btn-logout-facebook">Cerrar Sesión</button>
            <hr>
            <label for="catalog-select-form">Catálogo seleccionado:</label>
            <select class="form-control" id="catalog-select-form">
                ${this._data.user.catalogs
                    .map(
                        (el) =>
                            `<option value='${el.id}' ${
                                el.id === this._data.user.catalog
                                    ? 'selected'
                                    : ''
                            }>${el.name}</option>`
                    )
                    .join('')}
            </select>
            <br>
            <button type="submit" class="btn btn-secondary">Confirmar</button>

            


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
}

export default new configView();

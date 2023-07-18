import View from './View.js';
import icons from 'url:../../img/icons.svg';

/**
 * Esta vista controla la acción creada por el botón importar propiedades
 * @property {Element} _parentElement Es el contenedor principal donde se renderizarán los elementos
 * @property {String} [_errorMessage='No se pudo mostrar la configuración'] _errorMessage Es el
 * mensaje que se muestra al renderizar el error
 * @this {Object} Instancia de la vista
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
class configView extends View {
    _parentElement = document.querySelector('.settings-wrapper');
    _errorMessage = 'No se pudo mostrar la configuración';

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
     * Se agrega el handler que conecta al controlador con la vista para realizar el cierre de sesión 
     * con facebook
     * @param {Function} handler Es la función que se ejecutará al recibir una llamada por el evento
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    addLogOutHandler(handler) {
        document
            .querySelector('.btn-logout-facebook')
            .addEventListener('click', handler);
    }

    /**
     * Se agrega el handler que conecta al controlador con la vista al presionar el boton confirmar y
     * actualizar los datos de configuración
     * @param {Function} handler Es la función que se ejecutará al recibir una llamada por el evento
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    addConfirmHandler(handler) {
        document
            .querySelector('.btn-confirm-settings')
            .addEventListener('click', handler);
    }

    /**
     * Se encarga de obtener los datos 
     * @returns 
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    getFormData() {
        let catalog = document.querySelector('#catalog-select-form');
        let selectedCatalog = {
            id: catalog.options[catalog.selectedIndex].value,
            value: catalog.options[catalog.selectedIndex].text,
        };
        return {
            catalog: selectedCatalog,
        };
    }

    /**
     * Esta función genera el markup que se renderizará en la página de configuraciones
     * @this {Object} Instancia de la vista
     * @returns {String} Regresa en forma de cadena el html generado
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    _generateMarkup() {
        return `
        <div class="mb-3">
            <h3>Configuración</h3>
        </div>
        <div>
            <h6>Usuario de Facebook</h6>
            <hr>
            <div class="col-12 col-md-4 d-inline-block mr-4">
            <label for="user-id-input">Id del Usuario:</label>
            <input type="text" class="form-control" id="user-id-input" value='${
                this._data.user.user_id
            }'>
            </div>
            <div class="col-12 col-md-4 d-inline-block mr-3 mb-4">
            <label for="user-name-input">Nombre:</label>
            <input type="text" class="form-control" id="user-name-input" value='${
                this._data.user.user_name
            }'>
            </div>
            <button type="submit" class="btn btn-secondary btn-logout-facebook">Cerrar Sesión</button>
            <hr>
            <div class="col-12">
            <label for="catalog-select-form">Catálogo seleccionado:</label>
            <select class="form-control" id="catalog-select-form">
                ${this._data.user.catalogs
                    .map(
                        (el) =>
                            `<option value='${el.id}' ${
                                el.id === this._data.user.catalog.id
                                    ? 'selected'
                                    : ''
                            }>${el.name}</option>`
                    )
                    .join('')}
            </select>
            <br>
            </div>
            <button type="submit" class="btn btn-secondary btn-confirm-settings">Confirmar</button>

            


        </div>`;
    }

    /**
     * Renderiza un error mediante un pop-up
     * @param {String} [message=this._errorMessage] El contenido del mensaje de error
     * @returns {undefined | string} No devuelve ningún dato
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
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

import View from './View.js';
import icons from 'url:../../img/icons.svg';

/**
 * Esta vista controla la acción creada por el botón importar propiedades
 * @property {Element} _parentElement Es el contenedor principal donde se mostrarán los pop-up de
 * la importación de datos
 * @property {String} [_errorMessage='No se pudo realizar la importación de las propiedades']
 * _errorMessage Es el mensaje que se muestra al renderizar el error
 * @property {String} [_message=''] Define el markup que será generado si es de carga o mensaje de
 * completado
 * @property {String} [_messageContent=''] Contenido del mensaje que será mostrado en el pop-up
 * @this {Object} Instancia de la vista
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
class importPropertiesView extends View {
    _parentElement = document.querySelector('.popup-container');

    _errorMessage = 'No se pudo realizar la importación de las propiedades';
    _message = '';
    _messageContent = '';

    /**
     * Se agrega el handler que conecta al controlador con la vista
     * @param {Function} handler Es la función que se ejecutará al recibir una llamada por el evento
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    addHandler(handler) {
        document
            .querySelector('#import-button')
            .addEventListener('click', handler);
    }

    /**
     * Esta función genera el markup que se renderizará en el pop-up
     * @this {Object} Instancia de la vista
     * @returns {String} Regresa en forma de cadena el html generado
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
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

    /**
     * Esta función genera el markup de carga que se renderizará en el pop-up
     * @this {Object} Instancia de la vista
     * @returns {String} Regresa en forma de cadena el html generado
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    _generateMarkupLoadingPreview() {
        return `<h3>
        Importando las propiedades
        </h3>
        <div class="spinner">
<svg>
    <use href="${icons}#icon-loader"></use>
</svg>`;
    }

    /**
     * Esta función genera el markup del mensaje de confirmación que se renderizará en el pop-up
     * @this {Object} Instancia de la vista
     * @returns {String} Regresa en forma de cadena el html generado
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
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
}

export default new importPropertiesView();

import icons from 'url:../../img/icons.svg';

export default class View {
    _data;

    /**
     * Renderiza el objeto recibo al DOM
     * @param {Object | Object[]} data Son los datos que van a ser renderizados
     * @param {boolean} [render=true] Si es falso, solo crea una linea de texto con el HTML
     * @returns {undefined | string} Una cadena de HTML se devuel si render=false
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    render(data, render = true, onlyRender = false) {
        if (!onlyRender) {
            if (!data || (Array.isArray(data) && data.length === 0))
                return this.renderError();
            this._data = data;
            
        }
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    /**
     * Limpia el elemento clave
     * @returns {undefined | string} No devuelve ningún dato
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    _clear() {
        this._parentElement.innerHTML = '';
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
        <div class="spinner">
            <svg>
                <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }


    /**
     * Renderiza un error mediante un pop-up
     * @returns {undefined | string} No devuelve ningún dato
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    renderError(message = this._errorMessage) {
        const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}

import View from './View.js';
import icons from 'url:../../img/icons.svg';

/**
 * Esta vista controla el cambio de página entre el dashboard y la página de configuraciones
 * @param {Element} _parentElement Hace referencia al elemento en el DOM en el cual se renderizará
 * los datos
 * @param {String} [_errorMessage='Hubo error al mostrar la página'] _errorMessage Es el mensaje que se muestra al renderizar el error
 * @this {Object} Instancia de la vista
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
class appView extends View {
    _parentElement = document.querySelector('#main-app');
    _errorMessage = 'Hubo error al mostrar la página';

    addHandlerRender(handler) {
        ['hashchange', 'load'].forEach((e) =>
            window.addEventListener(e, handler)
        );
    }
}

export default new appView();

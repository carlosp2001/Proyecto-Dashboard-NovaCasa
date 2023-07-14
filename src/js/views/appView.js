import View from './View.js';
import icons from 'url:../../img/icons.svg';

// import previewView from './previewView.js'; // Parcel 2, si no es un archivo de

class appView extends View {
    _parentElement = document.querySelector('#main-app');
    _errorMessage = 'No se pudo realizar la importación de las propiedades';
    _message = '';
    _messageContent = '';


    addHandlerRender(handler) {
        ['hashchange', 'load'].forEach((e) =>
            window.addEventListener(e, handler)
        );
    }
}

export default new appView();

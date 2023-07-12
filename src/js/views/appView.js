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

    _generateMarkup() { 
        if(page === "dashboard") return this._generateMarkupAppPage();

    }


    _generateMarkupAppPage() {
        return `
        <div class="table-title">
        <div class="row">
            <div class="col-sm-9">
                <h2>Administrar <b>Propiedades</b></h2>
            </div>
            <div class="col-sm-3">
                <div id="import-button">
                    <span class="mr-2"><i class="fas fa-sync-alt"></i></i></span>Importar propiedades
                </div>
            </div>
            <!-- <div class="col-sm-6">
<a class="btn btn-success" id="btn-agregar"
><i class="fas fa-plus-circle"></i
><span>Nuevo Auto</span></a
>
</div> -->
        </div>
    </div>
    <table class="table table-data">
        <thead>
            <tr>
                <th>Id</th>
                <th style="width: 25%;">Titulo de la Propiedad</th>
                <th style="width: 7%;">Baños</th>
                <th style="width: 10%;"><i class="fas fa-home"></i></th>
                <th style="width: 7%;"><i class="fas fa-car"></i></th>
                <th style="width: 10%;">Estado</th>
                <th>Precio</th>
                <th><i class="fab fa-facebook"></i></th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr>
                <td>1</td>
                <td>Propiedad</td>
                <td>4</td>
                <td>150m2</td>
                <td>2</td>
                <td>Disponible</td>
                <td>Precio</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Propiedad</td>
                <td>4</td>
                <td>150m2</td>
                <td>2</td>
                <td>Disponible</td>
                <td>Precio</td>
            </tr> -->
        </tbody>
        
    </table>
    <nav>
        <ul class="pagination">
            <!-- <li class="page-item"><a class="page-link" href="#1">Previous</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li> -->
        </ul>
      </nav>
        `;
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

export default new appView();

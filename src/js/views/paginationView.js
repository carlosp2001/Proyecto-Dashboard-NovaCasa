import View from './View.js';
import icons from 'url:../../img/icons.svg';

/**
 * Esta se encarga de mostrar la paginación y manejar el cambio de pagina
 * @property {Element} _parentElement Es el elemento padre donde se mostrará la paginación
 * @this {Object} Instancia de la vista
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */
class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    /**
     * Esta funcion crea la conexión entre el controlador y la vista
     * @param {Function} handler Es la función que sera llamada cada que vez que el evento de click en 
     * el cambio de página suceda
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.page-link');
            console.log(btn);
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }

    /**
     * Genera el markup de la paginación, analiza la cantidad de propiedades y crea el HTML de la 
     * paginación
     * @this {Object} Instancia de la vista
     * @returns {String} La cadena HTML que será renderiza en el DOM
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(
            this._data.results.length / this._data.resultsPerPage
        );
        console.log(numPages);
        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) {
            // return `<button data-goto='${
            //     curPage + 1
            // }' class="btn--inline pagination__btn--next">
            //             <span>Page ${curPage + 1}</span>
            // <svg class="search__icon">
            //     <use href="${icons}#icon-arrow-right"></use>
            // </svg>
            //         </button>`;

            return `<li class="page-item active"><a class="page-link" data-goto='${curPage}' >Pagina ${curPage}</a>
            </li><li class="page-item"><a class="page-link" data-goto='${
                curPage + 1
            }' >Pagina ${curPage + 1}</a></li>`;
        }

        // Last page
        if (curPage === numPages && numPages > 1) {
            // return `<button data-goto='${
            //     curPage - 1
            // }' class="btn--inline pagination__btn--prev">

            //         </button>`;
            return `<li class="page-item"><a class="page-link" data-goto='${
                curPage - 1
            }' >Pagina ${curPage - 1}</a></li>`;
        }

        // Other page
        if (curPage < numPages) {
            // return `<button data-goto='${
            //     curPage - 1
            // }' class="btn--inline pagination__btn--prev">
            //             <svg class="search__icon">
            //                 <use href="${icons}#icon-arrow-left"></use>
            //             </svg>
            //             <span>Page ${curPage - 1}</span>
            //         </button>
            //         <button data-goto='${
            //             curPage + 1
            //         }' class="btn--inline pagination__btn--next">
            //             <span>Page ${curPage + 1}</span>
            //             <svg class="search__icon">
            //                 <use href="${icons}#icon-arrow-right"></use>
            //             </svg>
            //         </button>`;
            return `<li class="page-item"><a class="page-link" data-goto='${
                curPage - 1
            }' >Pagina ${curPage - 1}</a></li>
            <li class="page-item active"><a class="page-link" >Pagina ${curPage}</a></li>
            <li class="page-item "><a class="page-link" data-goto='${
                curPage + 1
            }' >Pagina ${curPage + 1}</a></li>`;
        }

        // Page 1, and there are no other pages
        return '';
    }
}

export default new PaginationView();

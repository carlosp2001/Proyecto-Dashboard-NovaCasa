import View from './View.js';
// import previewView from './previewView.js'; // Parcel 2, si no es un archivo de

class ResultsView extends View {
    _parentElement = document.querySelector('.table-data').querySelector('tbody');
    _errorMessage = 'No recipes found for your query! Please try again';
    _message = '';

    addHandler(handler) {
        window.addEventListener('load', handler);
    }

    _generateMarkup() {
        return this._data
            .map((result) => this._generateMarkupPreview(result))
            .join('');

    }

    _generateMarkupPreview(result) {
        // const id = window.location.hash.slice(1);

        return `<tr>
        <td>${result.ID || '--'}</td>
        <td>${result.post_title || '--'}</td>
        <td>${result.property_bathrooms || '--'}</td>
        <td>${result.property_size || '--'}</td>
        <td>${result.property_garage || '--'}</td>
        <td>${result.category || '--'}</td>
        <td>${result.property_price || '--'} ${result.currency || '--'}</td>
    </tr>`;
    }
}

export default new ResultsView();

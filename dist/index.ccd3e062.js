function e(e,t,a,r){Object.defineProperty(e,t,{get:a,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},n=a.parcelRequire0e80;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},a.parcelRequire0e80=n),n.register("27Lyk",function(t,a){"use strict";e(t.exports,"register",()=>r,e=>r=e),e(t.exports,"resolve",()=>s,e=>s=e);var r,s,n={};r=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)n[t[a]]=e[t[a]]},s=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("27Lyk").register(JSON.parse('{"f9fpV":"index.ccd3e062.js","eyyUD":"icons.c14567a0.svg"}'));const o=async function(e){try{let t=await fetch(e),a=await t.json();return a}catch(e){throw e}},i="http://localhost:8080",l={property:{},user:{user_id:"",business:"",catalog:""},search:{query:"",results:[],resultsFacebook:[],page:1,resultsPerPage:10}},c=async function(){try{let e=await o(`${i}/api/v1/properties`);l.search.results=e.data.properties;let t=await o(`${i}/api/v1/propertiesFacebook`);l.search.resultsFacebook=t.data.properties,l.search.page=1}catch(e){throw console.error(`Error intentando obtener los datos! 💥💥💥💥`),Error(`Error intentando obtener los datos! 💥💥💥💥`)}},d=function(e=l.search.page){l.search.page=e;let t=(e-1)*l.search.resultsPerPage,a=e*l.search.resultsPerPage;return l.search.results.slice(t,a)},u=async function(){let e=await o(`${i}/importProperties?catalog_id=${l.user.catalog.id}`);return e},p=function(){return new Promise((e,t)=>{FB.init({appId:"658573932758488",autoLogAppEvents:!0,xfbml:!0,version:"v17.0"}),FB.getLoginStatus(async function(a){if("connected"===a.status)console.log(a),FB.api("/me",function(e){if(console.log(e),!e)return t("No se encontro la informaci\xf3n de tu cuenta");l.user.user_name=e.name}),l.user.user_id=a.authResponse.userID,new Promise((e,t)=>{FB.api("/me/businesses",function(a){return(a.data<3||!a.data)&&t("No hay negocios vinculados con esta cuenta"),l.user.business=a.data[0],e(l.user.business.id)})}).then(a=>{FB.api(`/${a}/owned_product_catalogs`,function(a){return a.data.length?(l.user.catalogs=a.data,e(a)):t("No hay cat\xe1logos asociados a esta cuenta")})}).catch(e=>{t(e)});else{if(await new Promise((e,t)=>{FB.login(function(a){"connected"===a.status?e("connected"):t("logout")},{scope:"business_management, catalog_management",return_scopes:!0})})!=="connected")return t("Debes iniciar sesi\xf3n");e(p())}})})},g=function(e){localStorage.setItem("catalog",JSON.stringify(e)),console.log(localStorage)},m=function(){let e=JSON.parse(localStorage.getItem("catalog"));return!!e&&(l.user.catalog=e,console.log(l.user),!0)},v=function(e){e.catalog&&g(e.catalog)};var f={};f=new URL(n("27Lyk").resolve("eyyUD"),import.meta.url).toString();class h{_data;render(e,t=!0,a=!1){if(!a){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e}let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
            <svg>
                <use href="${t(f)}#icon-loader"></use>
            </svg>
        </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let a=`<div class="error">
    <div>
      <svg>
        <use href="${t(f)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${e}</p>
  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",a)}}class _ extends h{_parentElement=document.querySelector("#main-app");_errorMessage="Hubo error al mostrar la p\xe1gina";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}var y=new _;class b extends h{_parentElement=document.querySelector(".table-data").querySelector("tbody");_errorMessage="No se encontraron propiedades! Por favor intenta de nuevo";addHandler(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>this._generateMarkupPreview(e)).join("")}_generateMarkupPreview(e){let a=l.search.resultsFacebook;return`<tr>
        <td>${e.ID||"--"}</td>
        <td>${e.post_title||"--"}</td>
        <td>${e.property_bathrooms||"--"}</td>
        <td>${(e.property_size?e.property_size_prefix?`${e.property_size} ${e.property_size_prefix}`:e.property_size:"--").toLowerCase()}</td>
        <td>${e.property_garage||"--"}</td>
        <td>${e.category||"--"}</td>
        <td> ${new Intl.NumberFormat(e.currency,{style:"currency",currency:e.currency}).format(e.property_price)}</td>
        <td>${a.find(t=>t.retailer_id==e.ID)?`<svg class="check-icon"><use href="${t(f)}#icon-check"></use></svg>`:`<svg class="x-icon"><use href="${t(f)}#icon-x"></use></svg>`}</td>
    </tr>`}renderSpinner(){let e=`
        <tr>
        <td colspan=8>
        <div class="spinner">
            <svg>
                <use href="${t(f)}#icon-loader"></use>
            </svg>
        </div>
        </td>
        </tr>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}var w=new b;class E extends h{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let a=t.target.closest(".page-link");if(console.log(a),!a)return;let r=+a.dataset.goto;e(r)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(t),1===e&&t>1)?`<li class="page-item active"><a class="page-link" data-goto='${e}' >Pagina ${e}</a>
            </li><li class="page-item"><a class="page-link" data-goto='${e+1}' >Pagina ${e+1}</a></li>`:e===t&&t>1?`<li class="page-item"><a class="page-link" data-goto='${e-1}' >Pagina ${e-1}</a></li>`:e<t?`<li class="page-item"><a class="page-link" data-goto='${e-1}' >Pagina ${e-1}</a></li>
            <li class="page-item active"><a class="page-link" >Pagina ${e}</a></li>
            <li class="page-item "><a class="page-link" data-goto='${e+1}' >Pagina ${e+1}</a></li>`:""}}var $=new E;class k extends h{_parentElement=document.querySelector(".popup-container");_errorMessage="No se pudo realizar la importaci\xf3n de las propiedades";_message="";_messageContent="";addHandler(e){document.querySelector("#import-button").addEventListener("click",e)}_generateMarkup(){return`<div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    ${"loading"===this._message?this._generateMarkupLoadingPreview():this._generateMarkupSuccessPreview()}
                </div>
                
            </div>
        </div>
    </div>`}renderError(e=this._errorMessage){let a=`
        <div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <div class="alert">
                        <svg>
                            <use href="${t(f)}#icon-alert-triangle"></use>
                        </svg>
                    </div>
                    <p style="white-space: pre-line">${e}</p>
                </div>
                
            </div>
        </div>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",a)}_generateMarkupLoadingPreview(){return`<h3>
        Importando las propiedades
        </h3>
        <div class="spinner">
<svg>
    <use href="${t(f)}#icon-loader"></use>
</svg>`}_generateMarkupSuccessPreview(){return`
                <h3>
                    \xa1Propiedades importadas correctamente!
                </h3>
                <p>Revisa tu cat\xe1logo de facebook</p>
                <div class="check">
                <svg>
                    <use href="${t(f)}#icon-check"></use>
                </svg>
                </div>`}}var x=new k;class S extends h{_parentElement=document.querySelector(".popup-container");_catalogElement="";_dataCatalog="";_errorMessage="No se pudo realizar la importaci\xf3n de las propiedades";_message="";_messageContent="";addHandler(e){document.querySelector("#import-button").addEventListener("click",e)}_generateMarkup(){return`<div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <form class="form-group catalog-form">
                        <label for="catalog-select">Selecciona el catalogo:</label>
                        <select class="form-control" id="catalog-select">
                            ${this._data.map(e=>`<option value=${e.id} >${e.name}</option>`)}
                        </select>
                        <br>
                        <button type="submit" class="btn btn-primary btn-catalog">Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>`}getSelectedCatalog(){this._catalogElement=document.querySelector("#catalog-select");let e={id:this._catalogElement.options[this._catalogElement.selectedIndex].value,value:this._catalogElement.options[this._catalogElement.selectedIndex].text};return this._dataCatalog=e,this._dataCatalog}catalogSubmit(){return new Promise((e,t)=>{document.querySelector(".catalog-form").addEventListener("submit",async t=>{t.preventDefault(),e("submitted")})})}renderError(e=this._errorMessage){let a=`
        <div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <div class="alert">
                        <svg>
                            <use href="${t(f)}#icon-alert-triangle"></use>
                        </svg>
                    </div>
                    <p style="white-space: pre-line">${e}</p>
                </div>
                
            </div>
        </div>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",a)}}var M=new S;class L extends h{_parentElement=document.querySelector(".settings-wrapper");_errorMessage="No se pudo mostrar la configuraci\xf3n";addHandler(e){window.addEventListener("load",e)}addLogOutHandler(e){document.querySelector(".btn-logout-facebook").addEventListener("click",e)}addConfirmHandler(e){document.querySelector(".btn-confirm-settings").addEventListener("click",e)}getFormData(){let e=document.querySelector("#catalog-select-form");return{catalog:{id:e.options[e.selectedIndex].value,value:e.options[e.selectedIndex].text}}}_generateMarkup(){return`
        <div class="mb-3">
            <h3>Configuraci\xf3n</h3>
        </div>
        <div>
            <h6>Usuario de Facebook</h6>
            <hr>
            <div class="col-12 col-md-4 d-inline-block mr-4">
            <label for="user-id-input">Id del Usuario:</label>
            <input type="text" class="form-control" id="user-id-input" value='${this._data.user.user_id}'>
            </div>
            <div class="col-12 col-md-4 d-inline-block mr-3 mb-4">
            <label for="user-name-input">Nombre:</label>
            <input type="text" class="form-control" id="user-name-input" value='${this._data.user.user_name}'>
            </div>
            <button type="submit" class="btn btn-secondary btn-logout-facebook">Cerrar Sesi\xf3n</button>
            <hr>
            <div class="col-12">
            <label for="catalog-select-form">Cat\xe1logo seleccionado:</label>
            <select class="form-control" id="catalog-select-form">
                ${this._data.user.catalogs.map(e=>`<option value='${e.id}' ${e.id===this._data.user.catalog.id?"selected":""}>${e.name}</option>`).join("")}
            </select>
            <br>
            </div>
            <button type="submit" class="btn btn-secondary btn-confirm-settings">Confirmar</button>

            


        </div>`}renderError(e=this._errorMessage){let a=`
        <div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <div class="alert">
                        <svg>
                            <use href="${t(f)}#icon-alert-triangle"></use>
                        </svg>
                    </div>
                    <p style="white-space: pre-line">${e}</p>
                </div>
                
            </div>
        </div>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",a)}}var P=new L;const H=async function(){try{await p(),console.log(l.user.catalogs),m()||(M.render(data=l.user.catalogs,onlyRender=!0),await M.catalogSubmit(),g(await M.getSelectedCatalog()),m()),M._clear(),P.render(l),P.addLogOutHandler(N),P.addConfirmHandler(j),w.renderSpinner(),await c(),w.render(d()),$.render(l.search)}catch(e){console.log(e),x._errorMessage=e,x.renderError(),console.log(e)}},C=function(e){w.render(d(e)),$.render(l.search)};async function F(e){return new Promise(t=>setTimeout(t,1e3*e))}const I=async function(){x._message="loading",x.render(onlyRender=!0);let e=await u();"successful"===e.status?(x._message="successful",x.render(onlyRender=!0),await F(4),x._clear()):"fail"===e.status&&(x._errorMessage=e.message,x.renderError())},q=e=>{if("hashchange"===e.type||"load"===e.type){let e=window.location.hash.slice(1);"dashboard"===e?(document.getElementById("dashboard-page").style.display="inline",document.getElementById("settings-page").style.display="none"):"settings"===e?(document.getElementById("dashboard-page").style.display="none",document.getElementById("settings-page").style.display="inline"):(console.log(err),x._errorMessage=err,x.renderError(),console.log(err))}},N=async e=>{e.preventDefault();try{if(await new Promise((e,t)=>{FB.getLoginStatus(a=>{"connected"===a.status?FB.logout(()=>{e("loggedOut")}):t("No existe una sesi\xf3n")})})==="loggedOut")throw localStorage.removeItem("catalog"),Error("Has cerrado sesi\xf3n recarga la p\xe1gina para volver a iniciar sesi\xf3n")}catch(e){x._errorMessage=e.message,x.renderError()}},j=e=>{e.preventDefault(),v(P.getFormData())},D=async function(){y.addHandlerRender(q),w.addHandler(H),$.addHandlerClick(C),x.addHandler(I)};D();
//# sourceMappingURL=index.ccd3e062.js.map

function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r,a,n,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},l=s.parcelRequire0e80;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},s.parcelRequire0e80=l),l.register("27Lyk",function(t,r){"use strict";e(t.exports,"register",()=>a,e=>a=e),e(t.exports,"resolve",()=>n,e=>n=e);var a,n,s={};a=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)s[t[r]]=e[t[r]]},n=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l("27Lyk").register(JSON.parse('{"f9fpV":"index.c1af8a38.js","eyyUD":"icons.c14567a0.svg"}'));const c=async function(e){try{let t=await fetch(e),r=await t.json();return r}catch(e){throw e}},d="https://novacasa-server.onrender.com",u={property:{},user:{user_id:"",business:"",catalog:""},search:{query:"",results:[],resultsFacebook:[],page:1,resultsPerPage:10}},p=async function(){try{let e=await c(`${d}/api/v1/properties`);u.search.results=e.data.properties;let t=await c(`${d}/api/v1/propertiesFacebook`);u.search.resultsFacebook=t.data.properties,u.search.page=1}catch(e){throw console.error(`Error intentando obtener los datos! 💥💥💥💥`),Error(`Error intentando obtener los datos! 💥💥💥💥`)}},g=function(e=u.search.page){u.search.page=e;let t=(e-1)*u.search.resultsPerPage,r=e*u.search.resultsPerPage;return u.search.results.slice(t,r)},f=async function(){let e=await c(`${d}/importProperties?catalog_id=${u.user.catalog.id}`);return e},m=function(){return new Promise((e,t)=>{FB.init({appId:"658573932758488",autoLogAppEvents:!0,xfbml:!0,version:"v17.0"}),FB.getLoginStatus(async function(r){if("connected"===r.status)console.log(r),FB.api("/me",function(e){if(console.log(e),!e)return t("No se encontro la informaci\xf3n de tu cuenta");u.user.user_name=e.name}),u.user.user_id=r.authResponse.userID,new Promise((e,t)=>{FB.api("/me/businesses",function(r){return(r.data<3||!r.data)&&t("No hay negocios vinculados con esta cuenta"),u.user.business=r.data[0],e(u.user.business.id)})}).then(r=>{FB.api(`/${r}/owned_product_catalogs`,function(r){return r.data.length?(u.user.catalogs=r.data,e(r)):t("No hay cat\xe1logos asociados a esta cuenta")})}).catch(e=>{t(e)});else{if(await new Promise((e,t)=>{FB.login(function(r){"connected"===r.status?e("connected"):t("logout")},{scope:"business_management, catalog_management",return_scopes:!0})})!=="connected")return t("Debes iniciar sesi\xf3n");e(m())}})})},v=function(e){localStorage.setItem("catalog",JSON.stringify(e)),console.log(localStorage)},h=function(){let e=JSON.parse(localStorage.getItem("catalog"));return!!e&&(u.user.catalog=e,console.log(u.user),!0)},_=function(e){e.catalog&&v(e.catalog)};var y={};y=new URL(l("27Lyk").resolve("eyyUD"),import.meta.url).toString();class b{_data;render(e,t=!0,r=!1){if(!r){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e}let a=this._generateMarkup();if(!t)return a;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",a)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
            <svg>
                <use href="${t(y)}#icon-loader"></use>
            </svg>
        </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`<div class="error">
    <div>
      <svg>
        <use href="${t(y)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${e}</p>
  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}class w extends b{_parentElement=document.querySelector("#main-app");_errorMessage="Hubo error al mostrar la p\xe1gina";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}var E=new w;class $ extends b{_parentElement=document.querySelector(".table-data").querySelector("tbody");_errorMessage="No se encontraron propiedades! Por favor intenta de nuevo";addHandler(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>this._generateMarkupPreview(e)).join("")}_generateMarkupPreview(e){let r=u.search.resultsFacebook;return`<tr>
        <td>${e.ID||"--"}</td>
        <td>${e.post_title||"--"}</td>
        <td>${e.property_bathrooms||"--"}</td>
        <td>${(e.property_size?e.property_size_prefix?`${e.property_size} ${e.property_size_prefix}`:e.property_size:"--").toLowerCase()}</td>
        <td>${e.property_garage||"--"}</td>
        <td>${e.category||"--"}</td>
        <td> ${new Intl.NumberFormat(e.currency,{style:"currency",currency:e.currency}).format(e.property_price)}</td>
        <td>${r.find(t=>t.retailer_id==e.ID)?`<svg class="check-icon"><use href="${t(y)}#icon-check"></use></svg>`:`<svg class="x-icon"><use href="${t(y)}#icon-x"></use></svg>`}</td>
    </tr>`}renderSpinner(){let e=`
        <tr>
        <td colspan=8>
        <div class="spinner">
            <svg>
                <use href="${t(y)}#icon-loader"></use>
            </svg>
        </div>
        </td>
        </tr>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}var k=new $;class x extends b{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".page-link");if(console.log(r),!r)return;let a=+r.dataset.goto;e(a)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(t),1===e&&t>1)?`<li class="page-item active"><a class="page-link" data-goto='${e}' >Pagina ${e}</a>
            </li><li class="page-item"><a class="page-link" data-goto='${e+1}' >Pagina ${e+1}</a></li>`:e===t&&t>1?`<li class="page-item"><a class="page-link" data-goto='${e-1}' >Pagina ${e-1}</a></li>`:e<t?`<li class="page-item"><a class="page-link" data-goto='${e-1}' >Pagina ${e-1}</a></li>
            <li class="page-item active"><a class="page-link" >Pagina ${e}</a></li>
            <li class="page-item "><a class="page-link" data-goto='${e+1}' >Pagina ${e+1}</a></li>`:""}}var S=new x;class M extends b{_parentElement=document.querySelector(".popup-container");_errorMessage="No se pudo realizar la importaci\xf3n de las propiedades";_message="";_messageContent="";addHandler(e){document.querySelector("#import-button").addEventListener("click",e)}_generateMarkup(){return`<div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    ${"loading"===this._message?this._generateMarkupLoadingPreview():this._generateMarkupSuccessPreview()}
                </div>
                
            </div>
        </div>
    </div>`}renderError(e=this._errorMessage){let r=`
        <div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <div class="alert">
                        <svg>
                            <use href="${t(y)}#icon-alert-triangle"></use>
                        </svg>
                    </div>
                    <p style="white-space: pre-line">${e}</p>
                </div>
                
            </div>
        </div>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_generateMarkupLoadingPreview(){return`<h3>
        Importando las propiedades
        </h3>
        <div class="spinner">
<svg>
    <use href="${t(y)}#icon-loader"></use>
</svg>`}_generateMarkupSuccessPreview(){return`
                <h3>
                    \xa1Propiedades importadas correctamente!
                </h3>
                <p>Revisa tu cat\xe1logo de facebook</p>
                <div class="check">
                <svg>
                    <use href="${t(y)}#icon-check"></use>
                </svg>
                </div>`}}var L=new M;class P extends b{_parentElement=document.querySelector(".popup-container");_catalogElement="";_dataCatalog="";_errorMessage="No se pudo realizar la importaci\xf3n de las propiedades";_message="";_messageContent="";addHandler(e){document.querySelector("#import-button").addEventListener("click",e)}_generateMarkup(){return`<div class="popup-guardado">
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
    </div>`}getSelectedCatalog(){this._catalogElement=document.querySelector("#catalog-select");let e={id:this._catalogElement.options[this._catalogElement.selectedIndex].value,value:this._catalogElement.options[this._catalogElement.selectedIndex].text};return this._dataCatalog=e,this._dataCatalog}catalogSubmit(){return new Promise((e,t)=>{document.querySelector(".catalog-form").addEventListener("submit",async t=>{t.preventDefault(),e("submitted")})})}renderError(e=this._errorMessage){let r=`
        <div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <div class="alert">
                        <svg>
                            <use href="${t(y)}#icon-alert-triangle"></use>
                        </svg>
                    </div>
                    <p style="white-space: pre-line">${e}</p>
                </div>
                
            </div>
        </div>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}var T=new P;class H extends b{_parentElement=document.querySelector(".settings-wrapper");_errorMessage="No se pudo mostrar la configuraci\xf3n";addHandler(e){window.addEventListener("load",e)}addLogOutHandler(e){document.querySelector(".btn-logout-facebook").addEventListener("click",e)}addConfirmHandler(e){document.querySelector(".btn-confirm-settings").addEventListener("click",e)}getFormData(){let e=document.querySelector("#catalog-select-form");return{catalog:{id:e.options[e.selectedIndex].value,value:e.options[e.selectedIndex].text}}}_generateMarkup(){return`
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

            


        </div>`}renderError(e=this._errorMessage){let r=`
        <div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <div class="alert">
                        <svg>
                            <use href="${t(y)}#icon-alert-triangle"></use>
                        </svg>
                    </div>
                    <p style="white-space: pre-line">${e}</p>
                </div>
                
            </div>
        </div>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}var C=new H,F={},I=F={};function q(){throw Error("setTimeout has not been defined")}function N(){throw Error("clearTimeout has not been defined")}function A(e){if(r===setTimeout)return setTimeout(e,0);if((r===q||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:q}catch(e){r=q}try{a="function"==typeof clearTimeout?clearTimeout:N}catch(e){a=N}}();var j=[],D=!1,O=-1;function B(){D&&n&&(D=!1,n.length?j=n.concat(j):O=-1,j.length&&R())}function R(){if(!D){var e=A(B);D=!0;for(var t=j.length;t;){for(n=j,j=[];++O<t;)n&&n[O].run();O=-1,t=j.length}n=null,D=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===N||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function z(e,t){this.fun=e,this.array=t}function U(){}I.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];j.push(new z(e,t)),1!==j.length||D||A(R)},z.prototype.run=function(){this.fun.apply(null,this.array)},I.title="browser",I.browser=!0,I.env={},I.argv=[],I.version="",I.versions={},I.on=U,I.addListener=U,I.once=U,I.off=U,I.removeListener=U,I.removeAllListeners=U,I.emit=U,I.prependListener=U,I.prependOnceListener=U,I.listeners=function(e){return[]},I.binding=function(e){throw Error("process.binding is not supported")},I.cwd=function(){return"/"},I.chdir=function(e){throw Error("process.chdir is not supported")},I.umask=function(){return 0};const J=async function(){try{console.log(F.env),await m(),console.log(u.user.catalogs),h()||(T.render(data=u.user.catalogs,onlyRender=!0),await T.catalogSubmit(),v(await T.getSelectedCatalog()),h()),T._clear(),C.render(u),C.addLogOutHandler(W),C.addConfirmHandler(X),k.renderSpinner(),await p(),k.render(g()),S.render(u.search)}catch(e){console.log(e),L._errorMessage=e,L.renderError(),console.log(e)}},V=function(e){k.render(g(e)),S.render(u.search)};async function G(e){return new Promise(t=>setTimeout(t,1e3*e))}const K=async function(){L._message="loading",L.render(onlyRender=!0);let e=await f();"successful"===e.status?(L._message="successful",L.render(onlyRender=!0),await G(4),L._clear()):"fail"===e.status&&(L._errorMessage=e.message,L.renderError())},Q=e=>{if("hashchange"===e.type||"load"===e.type){let e=window.location.hash.slice(1);"dashboard"===e?(document.getElementById("dashboard-page").style.display="inline",document.getElementById("settings-page").style.display="none"):"settings"===e?(document.getElementById("dashboard-page").style.display="none",document.getElementById("settings-page").style.display="inline"):(L._errorMessage=err,L.renderError(),console.log(err))}},W=async e=>{e.preventDefault();try{if(await new Promise((e,t)=>{FB.getLoginStatus(r=>{"connected"===r.status?FB.logout(()=>{e("loggedOut")}):t("No existe una sesi\xf3n")})})==="loggedOut")throw localStorage.removeItem("catalog"),Error("Has cerrado sesi\xf3n recarga la p\xe1gina para volver a iniciar sesi\xf3n")}catch(e){L._errorMessage=e.message,L.renderError()}},X=e=>{e.preventDefault(),_(C.getFormData())},Y=async function(){E.addHandlerRender(Q),k.addHandler(J),S.addHandlerClick(V),L.addHandler(K)};Y();
//# sourceMappingURL=index.c1af8a38.js.map

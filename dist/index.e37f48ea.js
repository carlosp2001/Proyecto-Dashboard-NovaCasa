// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gfkIy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _appViewJs = require("./views/appView.js");
var _appViewJsDefault = parcelHelpers.interopDefault(_appViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _importPropertiesViewJs = require("./views/importPropertiesView.js");
var _importPropertiesViewJsDefault = parcelHelpers.interopDefault(_importPropertiesViewJs);
var _catalogConfigViewJs = require("./views/catalogConfigView.js");
var _catalogConfigViewJsDefault = parcelHelpers.interopDefault(_catalogConfigViewJs);
var _configViewJs = require("./views/configView.js");
var _configViewJsDefault = parcelHelpers.interopDefault(_configViewJs);
var process = require("7f5f2eee49cf486f");
const controlResults = async function() {
    try {
        console.log(process.env);
        // 1) Se realiza la autenticación de facebook
        await _modelJs.checkFacebookAuth();
        console.log(_modelJs.state.user.catalogs);
        if (!_modelJs.checkForCatalog()) {
            // 2) Si la autenticación que realice se encuentra del todo bien, se muestra el popup
            // para seleccionar el catálogo al que se desea importar
            (0, _catalogConfigViewJsDefault.default).render(data = _modelJs.state.user.catalogs, onlyRender = true);
            // 3) Se hace una espera con una promesa hasta que confirme al catálogo que enviaremos
            await (0, _catalogConfigViewJsDefault.default).catalogSubmit();
            // 4) Se guarda el catálogo seleccionado
            _modelJs.saveCatalog(await (0, _catalogConfigViewJsDefault.default).getSelectedCatalog());
            _modelJs.checkForCatalog();
        }
        (0, _catalogConfigViewJsDefault.default)._clear();
        (0, _configViewJsDefault.default).render(_modelJs.state);
        (0, _configViewJsDefault.default).addLogOutHandler(controlLogOutFacebook);
        (0, _configViewJsDefault.default).addConfirmHandler(controlSettings);
        // 5) Se renderiza el spinner de carga
        (0, _resultsViewJsDefault.default).renderSpinner();
        // 6) Se cargan los resultados
        await _modelJs.loadResults();
        // 7) Se renderizan los resultados
        (0, _resultsViewJsDefault.default).render(_modelJs.getResults());
        // 8) Se renderiza la paginación de la pagina
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err1) {
        // En caso de haber algun error en cualquiera de los procedimientos anteriores se
        // capturara aca y se mostrará en un pop-up con un icono de alerta
        console.log(err1);
        (0, _importPropertiesViewJsDefault.default)._errorMessage = err1;
        (0, _importPropertiesViewJsDefault.default).renderError();
        console.log(err1);
    }
};
const controlPagination = function(goToPage) {
    // 1) Render new results
    // console.log(model.state.search.results);
    // resultsView.render(model.state.search.results)
    (0, _resultsViewJsDefault.default).render(_modelJs.getResults(goToPage));
    // 4) Render initial pagination buttons
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
async function sleep(seconds) {
    return new Promise((resolve)=>setTimeout(resolve, seconds * 1000));
}
const controlImportProperties = async function() {
    (0, _importPropertiesViewJsDefault.default)._message = "loading";
    (0, _importPropertiesViewJsDefault.default).render(onlyRender = true);
    const res = await _modelJs.importProperties();
    if (res.status === "successful") {
        (0, _importPropertiesViewJsDefault.default)._message = "successful";
        (0, _importPropertiesViewJsDefault.default).render(onlyRender = true);
        await sleep(4);
        (0, _importPropertiesViewJsDefault.default)._clear();
    } else if (res.status === "fail") {
        (0, _importPropertiesViewJsDefault.default)._errorMessage = res.message;
        (0, _importPropertiesViewJsDefault.default).renderError();
    }
};
const controlPage = (e)=>{
    if (e.type === "hashchange" || e.type === "load") {
        const page = window.location.hash.slice(1);
        function switchDashboard() {
            document.getElementById("dashboard-page").style.display = "inline";
            document.getElementById("settings-page").style.display = "none";
        }
        if (page === "dashboard") switchDashboard();
        else if (page === "settings") {
            document.getElementById("dashboard-page").style.display = "none";
            document.getElementById("settings-page").style.display = "inline";
        } else {
            (0, _importPropertiesViewJsDefault.default)._errorMessage = err;
            (0, _importPropertiesViewJsDefault.default).renderError();
            console.log(err);
        }
    }
};
const controlLogOutFacebook = async (e)=>{
    e.preventDefault();
    try {
        if (await _modelJs.logOutFacebook() === "loggedOut") {
            localStorage.removeItem("catalog");
            throw new Error("Has cerrado sesi\xf3n recarga la p\xe1gina para volver a iniciar sesi\xf3n");
        }
    } catch (err1) {
        (0, _importPropertiesViewJsDefault.default)._errorMessage = err1.message;
        (0, _importPropertiesViewJsDefault.default).renderError();
    }
};
const controlSettings = (e)=>{
    e.preventDefault();
    _modelJs.setNewConfigSettings((0, _configViewJsDefault.default).getFormData());
};
const init = async function() {
    (0, _appViewJsDefault.default).addHandlerRender(controlPage);
    (0, _resultsViewJsDefault.default).addHandler(controlResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _importPropertiesViewJsDefault.default).addHandler(controlImportProperties);
};
init();

},{"./model.js":"Y4A21","./views/resultsView.js":"cSbZE","./views/paginationView.js":"6z7bi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/importPropertiesView.js":"j5lqb","./views/appView.js":"9NgEe","./views/catalogConfigView.js":"4qPEU","./views/configView.js":"aNyps","7f5f2eee49cf486f":"d5jf4"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadResults", ()=>loadResults);
parcelHelpers.export(exports, "getResults", ()=>getResults);
parcelHelpers.export(exports, "getFacebookResults", ()=>getFacebookResults);
parcelHelpers.export(exports, "importProperties", ()=>importProperties);
parcelHelpers.export(exports, "logInFacebook", ()=>logInFacebook);
parcelHelpers.export(exports, "logOutFacebook", ()=>logOutFacebook);
parcelHelpers.export(exports, "checkFacebookAuth", ()=>checkFacebookAuth);
parcelHelpers.export(exports, "saveCatalog", ()=>saveCatalog);
parcelHelpers.export(exports, "checkForCatalog", ()=>checkForCatalog);
parcelHelpers.export(exports, "setNewConfigSettings", ()=>setNewConfigSettings);
var _helpersJs = require("./helpers.js");
var _configJs = require("./config.js");
const state = {
    property: {},
    user: {
        user_id: "",
        business: "",
        catalog: ""
    },
    search: {
        query: "",
        results: [],
        resultsFacebook: [],
        page: 1,
        resultsPerPage: 10
    }
};
const loadResults = async function() {
    try {
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}/api/v1/properties`);
        state.search.results = data.data.properties;
        const dataFacebook = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}/api/v1/propertiesFacebook`);
        state.search.resultsFacebook = dataFacebook.data.properties;
        state.search.page = 1;
    } catch (err) {
        console.error(`Error intentando obtener los datos! 💥💥💥💥`);
        throw new Error(`Error intentando obtener los datos! 💥💥💥💥`);
    }
};
const getResults = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 9
    return state.search.results.slice(start, end);
};
const getFacebookResults = function() {
    return state.search.resultsFacebook;
};
const importProperties = async function() {
    const result = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}/importProperties?catalog_id=${state.user.catalog.id}`);
    return result;
};
const logInFacebook = function() {
    return new Promise((resolve, reject)=>{
        FB.login(function(response) {
            if (response.status === "connected") resolve("connected");
            else reject("logout");
        }, {
            scope: "business_management, catalog_management",
            return_scopes: true
        });
    });
};
const logOutFacebook = function() {
    return new Promise((resolve, reject)=>{
        FB.getLoginStatus((response)=>{
            if (response.status === "connected") FB.logout(()=>{
                resolve("loggedOut");
            });
            else reject("No existe una sesi\xf3n");
        });
    });
};
const checkFacebookAuth = function() {
    return new Promise((resolve, reject)=>{
        FB.init({
            appId: "658573932758488",
            autoLogAppEvents: true,
            xfbml: true,
            version: "v17.0"
        });
        FB.getLoginStatus(async function(response) {
            if (response.status === "connected") {
                console.log(response);
                FB.api(`/me`, function(response) {
                    console.log(response);
                    if (!response) return reject("No se encontro la informaci\xf3n de tu cuenta");
                    state.user.user_name = response.name;
                });
                state.user.user_id = response.authResponse.userID;
                new Promise((resolve, reject)=>{
                    // Conseguir la el ID del negocio
                    FB.api("/me/businesses", function(response) {
                        if (response.data < 3 || !response.data) reject("No hay negocios vinculados con esta cuenta");
                        state.user.business = response.data[0];
                        return resolve(state.user.business.id);
                    });
                }).then((data)=>{
                    // Conseguir la lista de los catálogos
                    FB.api(`/${data}/owned_product_catalogs`, function(response) {
                        if (!response.data.length) return reject("No hay cat\xe1logos asociados a esta cuenta");
                        state.user.catalogs = response.data;
                        return resolve(response);
                    });
                }).catch((err)=>{
                    reject(err);
                });
            } else {
                if (await logInFacebook() === "connected") resolve(checkFacebookAuth());
                else return reject("Debes iniciar sesi\xf3n");
            }
        });
    });
};
const saveCatalog = function(catalogInfo) {
    localStorage.setItem("catalog", JSON.stringify(catalogInfo));
    console.log(localStorage);
};
const checkForCatalog = function() {
    const catalog = JSON.parse(localStorage.getItem("catalog"));
    if (catalog) {
        state.user.catalog = catalog;
        console.log(state.user);
        return true;
    } else return false;
};
const setNewConfigSettings = function(data) {
    if (data.catalog) saveCatalog(data.catalog);
};

},{"./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config.js":"k5Hzs"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
parcelHelpers.export(exports, "getCookie", ()=>getCookie);
const AJAX = async function(url) {
    try {
        // const fetchPro = uploadData
        //     ? fetch(url, {
        //           method: 'POST',
        //           headers: {
        //               'Content-Type': 'application/json',
        //           },
        //           body: JSON.stringify(uploadData),
        //       })
        //     : fetch(url);
        const fetchPro = await fetch(url);
        const data = await fetchPro.json();
        // console.log(data);
        // const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        // const data = await res.json();
        // if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        // console.log(res, data);
        return data;
    } catch (err) {
        throw err;
    }
};
const getCookie = function(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++){
        var cookiePair = cookieArr[i].split("=");
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */ if (name == cookiePair[0].trim()) // Decode the cookie value and return
        return decodeURIComponent(cookiePair[1]);
    }
    // Return null if not found
    return null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
const API_URL = "https://novacasa-server.onrender.com";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
// import previewView from './previewView.js'; // Parcel 2, si no es un archivo de
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _modelJs = require("../model.js");
/**
 * Esta vista muestra las propiedades cargadas desde la página
 * @param {Element} _parentElement Es el body de la tabla donde se agregaran la filas con la informa-
 * ción de las propiedades
 * @param {String} [_errorMessage='Hubo error al mostrar la página'] _errorMessage Es el mensaje que se muestra al renderizar el error
 * @this {Object} Instancia de la vista
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */ class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".table-data").querySelector("tbody");
    _errorMessage = "No se encontraron propiedades! Por favor intenta de nuevo";
    /**
     * Se agrega el handler que conecta al controlador con la vista
     * @param {Function} handler Es la función que se ejecutará al recibir una llamada por el evento
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ addHandler(handler) {
        window.addEventListener("load", handler);
    }
    /**
     * Esta función genera el markup que se renderizará en la tabla con las popiedades
     * @this {Object} Instancia de la vista
     * @returns {string | undefined} Regresa en forma de cadena el html generado
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ _generateMarkup() {
        return this._data.map((result)=>this._generateMarkupPreview(result)).join("");
    }
    /**
     * Esta función se encarga de tratar individualmente el html que será generado por _generateMarkup
     * @param {Object | undefined} result Es el objeto que contiene la información de la propiedad
     * el cuál será destructurado luego
     * @this {Object} Instancia de la vista
     * @returns {string | undefined} Regresa en forma de cadena el html generado individualmente
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ _generateMarkupPreview(result) {
        // const id = window.location.hash.slice(1);
        const facebookResults = (0, _modelJs.getFacebookResults)();
        return `<tr>
        <td>${result.ID || "--"}</td>
        <td>${result.post_title || "--"}</td>
        <td>${result.property_bathrooms || "--"}</td>
        <td>${(result.property_size ? result.property_size_prefix ? `${result.property_size} ${result.property_size_prefix}` : result.property_size : "--").toLowerCase()}</td>
        <td>${result.property_garage || "--"}</td>
        <td>${result.category || "--"}</td>
        <td> ${new Intl.NumberFormat(result.currency, {
            style: "currency",
            currency: result.currency
        }).format(result.property_price)}</td>
        <td>${facebookResults.find((el)=>el.retailer_id == result.ID) ? `<svg class="check-icon"><use href="${0, _iconsSvgDefault.default}#icon-check"></use></svg>` : `<svg class="x-icon"><use href="${0, _iconsSvgDefault.default}#icon-x"></use></svg>`}</td>
    </tr>`;
    }
    /**
     * Renderiza un spinner en el elemento padre, esto para crear un efecto de espera
     * @returns {undefined | string} No devuelve ningún dato
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ renderSpinner() {
        const markup = `
        <tr>
        <td colspan=8>
        <div class="spinner">
            <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
            </svg>
        </div>
        </td>
        </tr>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = new ResultsView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp","../model.js":"Y4A21"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    /**
     * Renderiza el objeto recibo al DOM
     * @param {Object | Object[]} data Son los datos que van a ser renderizados
     * @param {boolean} [render=true] Si es falso, solo crea una linea de texto con el HTML
     * @returns {undefined | string} Una cadena de HTML se devuel si render=false
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ render(data, render = true, onlyRender = false) {
        if (!onlyRender) {
            if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
            this._data = data;
        }
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    /**
     * Limpia el elemento clave
     * @returns {undefined | string} No devuelve ningún dato
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ _clear() {
        this._parentElement.innerHTML = "";
    }
    /**
     * Renderiza un spinner en el elemento padre, esto para crear un efecto de espera
     * @returns {undefined | string} No devuelve ningún dato
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ renderSpinner() {
        const markup = `
        <div class="spinner">
            <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
            </svg>
        </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    /**
     * Renderiza un error mediante un pop-up
     * @returns {undefined | string} No devuelve ningún dato
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ renderError(message = this._errorMessage) {
        const markup = `<div class="error">
    <div>
      <svg>
        <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp"}],"loVOp":[function(require,module,exports) {
module.exports = require("9bcc84ee5d265e38").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"9bcc84ee5d265e38":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
/**
 * Esta se encarga de mostrar la paginación y manejar el cambio de pagina
 * @property {Element} _parentElement Es el elemento padre donde se mostrará la paginación
 * @this {Object} Instancia de la vista
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */ class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".pagination");
    /**
     * Esta funcion crea la conexión entre el controlador y la vista
     * @param {Function} handler Es la función que sera llamada cada que vez que el evento de click en 
     * el cambio de página suceda
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".page-link");
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
     */ _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        console.log(numPages);
        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) // return `<button data-goto='${
        //     curPage + 1
        // }' class="btn--inline pagination__btn--next">
        //             <span>Page ${curPage + 1}</span>
        // <svg class="search__icon">
        //     <use href="${icons}#icon-arrow-right"></use>
        // </svg>
        //         </button>`;
        return `<li class="page-item active"><a class="page-link" data-goto='${curPage}' >Pagina ${curPage}</a>
            </li><li class="page-item"><a class="page-link" data-goto='${curPage + 1}' >Pagina ${curPage + 1}</a></li>`;
        // Last page
        if (curPage === numPages && numPages > 1) // return `<button data-goto='${
        //     curPage - 1
        // }' class="btn--inline pagination__btn--prev">
        //         </button>`;
        return `<li class="page-item"><a class="page-link" data-goto='${curPage - 1}' >Pagina ${curPage - 1}</a></li>`;
        // Other page
        if (curPage < numPages) // return `<button data-goto='${
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
        return `<li class="page-item"><a class="page-link" data-goto='${curPage - 1}' >Pagina ${curPage - 1}</a></li>
            <li class="page-item active"><a class="page-link" >Pagina ${curPage}</a></li>
            <li class="page-item "><a class="page-link" data-goto='${curPage + 1}' >Pagina ${curPage + 1}</a></li>`;
        // Page 1, and there are no other pages
        return "";
    }
}
exports.default = new PaginationView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j5lqb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
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
 */ class importPropertiesView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".popup-container");
    _errorMessage = "No se pudo realizar la importaci\xf3n de las propiedades";
    _message = "";
    _messageContent = "";
    /**
     * Se agrega el handler que conecta al controlador con la vista
     * @param {Function} handler Es la función que se ejecutará al recibir una llamada por el evento
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ addHandler(handler) {
        document.querySelector("#import-button").addEventListener("click", handler);
    }
    /**
     * Esta función genera el markup que se renderizará en el pop-up
     * @this {Object} Instancia de la vista
     * @returns {String} Regresa en forma de cadena el html generado
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ _generateMarkup() {
        return `<div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    ${this._message === "loading" ? this._generateMarkupLoadingPreview() : this._generateMarkupSuccessPreview()}
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
     */ renderError(message = this._errorMessage) {
        const markup = `
        <div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <div class="alert">
                        <svg>
                            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                        </svg>
                    </div>
                    <p style="white-space: pre-line">${message}</p>
                </div>
                
            </div>
        </div>
    </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    /**
     * Esta función genera el markup de carga que se renderizará en el pop-up
     * @this {Object} Instancia de la vista
     * @returns {String} Regresa en forma de cadena el html generado
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ _generateMarkupLoadingPreview() {
        return `<h3>
        Importando las propiedades
        </h3>
        <div class="spinner">
<svg>
    <use href="${0, _iconsSvgDefault.default}#icon-loader"></use>
</svg>`;
    }
    /**
     * Esta función genera el markup del mensaje de confirmación que se renderizará en el pop-up
     * @this {Object} Instancia de la vista
     * @returns {String} Regresa en forma de cadena el html generado
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ _generateMarkupSuccessPreview() {
        return `
                <h3>
                    ¡Propiedades importadas correctamente!
                </h3>
                <p>Revisa tu catálogo de facebook</p>
                <div class="check">
                <svg>
                    <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
                </svg>
                </div>`;
    }
}
exports.default = new importPropertiesView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp"}],"9NgEe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
/**
 * Esta vista controla el cambio de página entre el dashboard y la página de configuraciones
 * @param {Element} _parentElement Hace referencia al elemento en el DOM en el cual se renderizará
 * los datos
 * @param {String} [_errorMessage='Hubo error al mostrar la página'] _errorMessage Es el mensaje que se muestra al renderizar el error
 * @this {Object} Instancia de la vista
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */ class appView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector("#main-app");
    _errorMessage = "Hubo error al mostrar la p\xe1gina";
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((e)=>window.addEventListener(e, handler));
    }
}
exports.default = new appView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4qPEU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
// import previewView from './previewView.js'; // Parcel 2, si no es un archivo de
class catalogConfigView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".popup-container");
    _catalogElement = "";
    _dataCatalog = "";
    _errorMessage = "No se pudo realizar la importaci\xf3n de las propiedades";
    _message = "";
    _messageContent = "";
    addHandler(handler) {
        document.querySelector("#import-button").addEventListener("click", handler);
    }
    _generateMarkup() {
        return `<div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <form class="form-group catalog-form">
                        <label for="catalog-select">Selecciona el catalogo:</label>
                        <select class="form-control" id="catalog-select">
                            ${this._data.map((el)=>`<option value=${el.id} >${el.name}</option>`)}
                        </select>
                        <br>
                        <button type="submit" class="btn btn-primary btn-catalog">Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>`;
    }
    getSelectedCatalog() {
        this._catalogElement = document.querySelector("#catalog-select");
        let selectedCatalog = {
            id: this._catalogElement.options[this._catalogElement.selectedIndex].value,
            value: this._catalogElement.options[this._catalogElement.selectedIndex].text
        };
        this._dataCatalog = selectedCatalog;
        return this._dataCatalog;
    }
    catalogSubmit() {
        return new Promise((resolve, reject)=>{
            document.querySelector(".catalog-form").addEventListener("submit", async (e)=>{
                e.preventDefault();
                resolve("submitted");
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
                            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                        </svg>
                    </div>
                    <p style="white-space: pre-line">${message}</p>
                </div>
                
            </div>
        </div>
    </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = new catalogConfigView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aNyps":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
/**
 * Esta vista controla la acción creada por el botón importar propiedades
 * @property {Element} _parentElement Es el contenedor principal donde se renderizarán los elementos
 * @property {String} [_errorMessage='No se pudo mostrar la configuración'] _errorMessage Es el
 * mensaje que se muestra al renderizar el error
 * @this {Object} Instancia de la vista
 * @author Carlos Pineda
 * @todo Finalizar implementación
 */ class configView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".settings-wrapper");
    _errorMessage = "No se pudo mostrar la configuraci\xf3n";
    /**
     * Se agrega el handler que conecta al controlador con la vista
     * @param {Function} handler Es la función que se ejecutará al recibir una llamada por el evento
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ addHandler(handler) {
        window.addEventListener("load", handler);
    }
    /**
     * Se agrega el handler que conecta al controlador con la vista para realizar el cierre de sesión 
     * con facebook
     * @param {Function} handler Es la función que se ejecutará al recibir una llamada por el evento
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ addLogOutHandler(handler) {
        document.querySelector(".btn-logout-facebook").addEventListener("click", handler);
    }
    /**
     * Se agrega el handler que conecta al controlador con la vista al presionar el boton confirmar y
     * actualizar los datos de configuración
     * @param {Function} handler Es la función que se ejecutará al recibir una llamada por el evento
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ addConfirmHandler(handler) {
        document.querySelector(".btn-confirm-settings").addEventListener("click", handler);
    }
    /**
     * Se encarga de obtener los datos 
     * @returns 
     * @this {Object} Instancia de la vista
     * @author Carlos Pineda
     * @todo Finalizar implementación
     */ getFormData() {
        let catalog = document.querySelector("#catalog-select-form");
        let selectedCatalog = {
            id: catalog.options[catalog.selectedIndex].value,
            value: catalog.options[catalog.selectedIndex].text
        };
        return {
            catalog: selectedCatalog
        };
    }
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
            <input type="text" class="form-control" id="user-id-input" value='${this._data.user.user_id}'>
            </div>
            <div class="col-12 col-md-4 d-inline-block mr-3 mb-4">
            <label for="user-name-input">Nombre:</label>
            <input type="text" class="form-control" id="user-name-input" value='${this._data.user.user_name}'>
            </div>
            <button type="submit" class="btn btn-secondary btn-logout-facebook">Cerrar Sesión</button>
            <hr>
            <div class="col-12">
            <label for="catalog-select-form">Catálogo seleccionado:</label>
            <select class="form-control" id="catalog-select-form">
                ${this._data.user.catalogs.map((el)=>`<option value='${el.id}' ${el.id === this._data.user.catalog.id ? "selected" : ""}>${el.name}</option>`).join("")}
            </select>
            <br>
            </div>
            <button type="submit" class="btn btn-secondary btn-confirm-settings">Confirmar</button>

            


        </div>`;
    }
    renderError(message = this._errorMessage) {
        const markup = `
        <div class="popup-guardado">
        <div class="popup">
                <div class="popup-inner">
                    <div class="alert">
                        <svg>
                            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
                        </svg>
                    </div>
                    <p style="white-space: pre-line">${message}</p>
                </div>
                
            </div>
        </div>
    </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = new configView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}]},["gfkIy","aenu9"], "aenu9", "parcelRequire0e80")

//# sourceMappingURL=index.e37f48ea.js.map

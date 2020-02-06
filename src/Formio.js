<<<<<<< HEAD
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.search");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _fetchPonyfill2 = _interopRequireDefault(require("fetch-ponyfill"));

require("custom-event-polyfill");

var _EventEmitter = _interopRequireDefault(require("./EventEmitter"));

var _browserCookies = _interopRequireDefault(require("browser-cookies"));

var _shallowCopy = _interopRequireDefault(require("shallow-copy"));

var providers = _interopRequireWildcard(require("./providers"));

var _intersection2 = _interopRequireDefault(require("lodash/intersection"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _defaults2 = _interopRequireDefault(require("lodash/defaults"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _fetchPonyfill = (0, _fetchPonyfill2.default)({
  Promise: _nativePromiseOnly.default
}),
    fetch = _fetchPonyfill.fetch,
    Headers = _fetchPonyfill.Headers;

var isBoolean = function isBoolean(val) {
  return _typeof(val) === _typeof(true);
};

var isNil = function isNil(val) {
  return val === null || val === undefined;
};

var isObject = function isObject(val) {
  return val && _typeof(val) === 'object';
};
=======
/* globals OktaAuth */
// Intentionally use native-promise-only here... Other promise libraries (es6-promise)
// duck-punch the global Promise definition which messes up Angular 2 since it
// also duck-punches the global Promise definition. For now, keep native-promise-only.
import NativePromise from 'native-promise-only';
import fetchPonyfill from 'fetch-ponyfill';
import EventEmitter from './EventEmitter';
import cookies from 'browser-cookies';
import Providers from './providers';
import _intersection from 'lodash/intersection';
import _get from 'lodash/get';
import _cloneDeep from 'lodash/cloneDeep';
import _defaults from 'lodash/defaults';
import { eachComponent } from './utils/utils';
import './polyfills';

const { fetch, Headers } = fetchPonyfill({
  Promise: NativePromise
});

const isBoolean = (val) => typeof val === typeof true;
const isNil = (val) => val === null || val === undefined;
const isObject = (val) => val && typeof val === 'object';

function cloneResponse(response) {
  const copy = _cloneDeep(response);

  if (Array.isArray(response)) {
    copy.skip = response.skip;
    copy.limit = response.limit;
    copy.serverCount = response.serverCount;
  }

  return copy;
}

>>>>>>> newFormio
/**
 * The Formio interface class.
 *
 *   let formio = new Formio('https://examples.form.io/example');
 */


var Formio =
/*#__PURE__*/
function () {
  /* eslint-disable max-statements */
  function Formio(path) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Formio);

    // Ensure we have an instance of Formio.
    if (!(this instanceof Formio)) {
      return new Formio(path);
    } // Initialize our variables.


    this.base = '';
    this.projectsUrl = '';
    this.projectUrl = '';
    this.projectId = '';
    this.formUrl = '';
    this.formsUrl = '';
    this.formId = '';
    this.submissionsUrl = '';
    this.submissionUrl = '';
    this.submissionId = '';
    this.actionsUrl = '';
    this.actionId = '';
    this.actionUrl = '';
    this.vsUrl = '';
    this.vId = '';
    this.vUrl = '';
    this.query = ''; // Store the original path and options.

    this.path = path;
    this.options = options;

    // Store the original path and options.
    this.path = path;
    this.options = options;

    if (options.hasOwnProperty('base')) {
      this.base = options.base;
    } else if (Formio.baseUrl) {
      this.base = Formio.baseUrl;
    } else {
      this.base = window.location.href.match(/http[s]?:\/\/api./)[0];
    }

    if (!path) {
      // Allow user to create new projects if this was instantiated without
      // a url
<<<<<<< HEAD
      this.projectUrl = Formio.projectUrl || "".concat(this.base, "/project");
      this.projectsUrl = "".concat(this.base, "/project");
=======
      this.projectUrl = Formio.projectUrl || `${this.base}/project`;
      this.projectsUrl = `${this.base}/project`;
>>>>>>> newFormio
      this.projectId = false;
      this.query = '';
      return;
    }

    if (options.hasOwnProperty('project')) {
      this.projectUrl = options.project;
    }

    var project = this.projectUrl || Formio.projectUrl;
    var projectRegEx = /(^|\/)(project)($|\/[^/]+)/;
    var isProjectUrl = path.search(projectRegEx) !== -1; // The baseURL is the same as the projectUrl, and does not contain "/project/MONGO_ID" in
    // its domain. This is almost certainly against the Open Source server.

    if (project && this.base === project && !isProjectUrl) {
      this.noProject = true;
      this.projectUrl = this.base;
    } // Normalize to an absolute path.


    if (path.indexOf('http') !== 0 && path.indexOf('//') !== 0) {
      path = this.base + path;
    }

    var hostparts = this.getUrlParts(path);
    var parts = [];
    var hostName = hostparts[1] + hostparts[2];
    path = hostparts.length > 3 ? hostparts[3] : '';
    var queryparts = path.split('?');

    if (queryparts.length > 1) {
      path = queryparts[0];
      this.query = "?".concat(queryparts[1]);
    } // Register a specific path.


    var registerPath = function registerPath(name, base) {
      _this["".concat(name, "sUrl")] = "".concat(base, "/").concat(name);
      var regex = new RegExp("/".concat(name, "/([^/]+)"));

      if (path.search(regex) !== -1) {
        parts = path.match(regex);
        _this["".concat(name, "Url")] = parts ? base + parts[0] : '';
        _this["".concat(name, "Id")] = parts.length > 1 ? parts[1] : '';
        base += parts[0];
      }

      return base;
    }; // Register an array of items.


    var registerItems = function registerItems(items, base, staticBase) {
      for (var i in items) {
        if (items.hasOwnProperty(i)) {
          var item = items[i];

          if (Array.isArray(item)) {
            registerItems(item, base, true);
          } else {
            var newBase = registerPath(item, base);
            base = staticBase ? base : newBase;
          }
        }
      }
    };

    if (!this.projectUrl || this.projectUrl === this.base) {
      this.projectUrl = hostName;
    }

    if (!this.noProject) {
      // Determine the projectUrl and projectId
      if (isProjectUrl) {
        // Get project id as project/:projectId.
        registerItems(['project'], hostName);
        path = path.replace(projectRegEx, '');
      } else if (hostName === this.base) {
        // Get project id as first part of path (subdirectory).
        if (hostparts.length > 3 && path.split('/').length > 1) {
          var pathParts = path.split('/');
          pathParts.shift(); // Throw away the first /.

          this.projectId = pathParts.shift();
          path = "/".concat(pathParts.join('/'));
          this.projectUrl = "".concat(hostName, "/").concat(this.projectId);
        }
      } else {
        // Get project id from subdomain.
        if (hostparts.length > 2 && (hostparts[2].split('.').length > 2 || hostName.includes('localhost'))) {
          this.projectUrl = hostName;
          this.projectId = hostparts[2].split('.')[0];
        }
      }

      this.projectsUrl = this.projectsUrl || "".concat(this.base, "/project");
    } // Configure Form urls and form ids.


    if (path.search(/(^|\/)(form)($|\/)/) !== -1) {
      registerItems(['form', ['submission', 'action', 'v']], this.projectUrl);
    } else {
      var subRegEx = new RegExp('/(submission|action|v)($|/.*)');
      var subs = path.match(subRegEx);
      this.pathType = subs && subs.length > 1 ? subs[1] : '';
      path = path.replace(subRegEx, '');
      path = path.replace(/\/$/, '');
      this.formsUrl = "".concat(this.projectUrl, "/form");
      this.formUrl = path ? this.projectUrl + path : '';
      this.formId = path.replace(/^\/+|\/+$/g, '');
      var items = ['submission', 'action', 'v'];

      for (var i in items) {
        if (items.hasOwnProperty(i)) {
          var item = items[i];
          this["".concat(item, "sUrl")] = "".concat(this.projectUrl + path, "/").concat(item);

          if (this.pathType === item && subs.length > 2 && subs[2]) {
            this["".concat(item, "Id")] = subs[2].replace(/^\/+|\/+$/g, '');
            this["".concat(item, "Url")] = this.projectUrl + path + subs[0];
          }
        }
      }
    } // Set the app url if it is not set.


    if (!Formio.projectUrlSet) {
      Formio.projectUrl = this.projectUrl;
    }
  }
  /* eslint-enable max-statements */

<<<<<<< HEAD
=======
  delete(type, opts) {
    const _id = `${type}Id`;
    const _url = `${type}Url`;
    if (!this[_id]) {
      NativePromise.reject('Nothing to delete');
    }
    Formio.cache = {};
    return this.makeRequest(type, this[_url], 'delete', null, opts);
  }
>>>>>>> newFormio

  _createClass(Formio, [{
    key: "delete",
    value: function _delete(type, opts) {
      var _id = "".concat(type, "Id");

      var _url = "".concat(type, "Url");

<<<<<<< HEAD
      if (!this[_id]) {
        _nativePromiseOnly.default.reject('Nothing to delete');
      }

      Formio.cache = {};
      return this.makeRequest(type, this[_url], 'delete', null, opts);
=======
  load(type, query, opts) {
    const _id = `${type}Id`;
    const _url = `${type}Url`;
    if (query && isObject(query)) {
      query = Formio.serialize(query.params);
    }
    if (query) {
      query = this.query ? (`${this.query}&${query}`) : (`?${query}`);
    }
    else {
      query = this.query;
    }
    if (!this[_id]) {
      return NativePromise.reject(`Missing ${_id}`);
>>>>>>> newFormio
    }
  }, {
    key: "index",
    value: function index(type, query, opts) {
      var _url = "".concat(type, "Url");

      query = query || '';

      if (query && isObject(query)) {
        query = "?".concat(Formio.serialize(query.params));
      }

      return this.makeRequest(type, this[_url] + query, 'get', null, opts);
    }
  }, {
    key: "save",
    value: function save(type, data, opts) {
      var _id = "".concat(type, "Id");

      var _url = "".concat(type, "Url");

      var method = this[_id] || data._id ? 'put' : 'post';
      var reqUrl = this[_id] ? this[_url] : this["".concat(type, "sUrl")];

      if (!this[_id] && data._id && method === 'put' && !reqUrl.includes(data._id)) {
        reqUrl += "/".concat(data._id);
      }

      Formio.cache = {};
      return this.makeRequest(type, reqUrl + this.query, method, data, opts);
    }
  }, {
    key: "load",
    value: function load(type, query, opts) {
      var _id = "".concat(type, "Id");

<<<<<<< HEAD
      var _url = "".concat(type, "Url");
=======
  loadForm(query, opts) {
    return this.load('form', query, opts)
      .then((currentForm) => {
        // Check to see if there isn't a number in vId.
        if (!currentForm.revisions || isNaN(parseInt(this.vId))) {
          return currentForm;
        }
        // If a submission already exists but form is marked to load current version of form.
        if (currentForm.revisions === 'current' && this.submissionId) {
          return currentForm;
        }
        // If they specified a revision form, load the revised form components.
        if (query && isObject(query)) {
          query = Formio.serialize(query.params);
        }
        if (query) {
          query = this.query ? (`${this.query}&${query}`) : (`?${query}`);
        }
        else {
          query = this.query;
        }
        return this.makeRequest('form', this.vUrl + query, 'get', null, opts)
          .then((revisionForm) => {
            currentForm.components = revisionForm.components;
            currentForm.settings = revisionForm.settings;
            // Using object.assign so we don't cross polinate multiple form loads.
            return Object.assign({}, currentForm);
          })
          // If we couldn't load the revision, just return the original form.
          .catch(() => Object.assign({}, currentForm));
      });
  }
>>>>>>> newFormio

      if (query && isObject(query)) {
        query = Formio.serialize(query.params);
      }

      if (query) {
        query = this.query ? "".concat(this.query, "&").concat(query) : "?".concat(query);
      } else {
        query = this.query;
      }

      if (!this[_id]) {
        return _nativePromiseOnly.default.reject("Missing ".concat(_id));
      }

      return this.makeRequest(type, this[_url] + query, 'get', null, opts);
    }
  }, {
    key: "makeRequest",
    value: function makeRequest() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return Formio.makeRequest.apply(Formio, [this].concat(args));
    }
  }, {
    key: "loadProject",
    value: function loadProject(query, opts) {
      return this.load('project', query, opts);
    }
  }, {
    key: "saveProject",
    value: function saveProject(data, opts) {
      return this.save('project', data, opts);
    }
  }, {
    key: "deleteProject",
    value: function deleteProject(opts) {
      return this.delete('project', opts);
    }
  }, {
    key: "loadFormRevision",
    value: function loadFormRevision(vid, query, opts) {
      if (!this.formUrl && !this.vUrl) {
        return _nativePromiseOnly.default.reject('No form url set.');
      } // Set the version url if not set.


      if (vid && !this.vUrl) {
        this.vId = vid;
        this.vUrl = "".concat(this.formUrl, "/v/").concat(vid);
      } // If they specified a revision form, load the revised form components.


      if (query && isObject(query)) {
        query = Formio.serialize(query.params);
      }

      if (query) {
        query = this.query ? "".concat(this.query, "&").concat(query) : "?".concat(query);
      } else {
        query = this.query;
      }

      return this.makeRequest('form', this.vUrl + query, 'get', null, opts);
    }
  }, {
    key: "loadForm",
    value: function loadForm(query, opts) {
      var _this2 = this;

      return this.load('form', query, opts).then(function (currentForm) {
        // Check to see if there isn't a number in vId.
        if (!currentForm.revisions || isNaN(parseInt(_this2.vId))) {
          return currentForm;
        } // If a submission already exists but form is marked to load current version of form.


        if (currentForm.revisions === 'current' && _this2.submissionId) {
          return currentForm;
        }

<<<<<<< HEAD
        return _this2.loadFormRevision(_this2.vId, query, opts).then(function (revisionForm) {
          currentForm.components = revisionForm.components; // Using object.assign so we don't cross polinate multiple form loads.

          return Object.assign({}, currentForm);
        }) // If we couldn't load the revision, just return the original form.
        .catch(function () {
          return Object.assign({}, currentForm);
        });
      });
=======
  getProjectId() {
    if (!this.projectId) {
      return NativePromise.resolve('');
    }
    if (this.isObjectId(this.projectId)) {
      return NativePromise.resolve(this.projectId);
>>>>>>> newFormio
    }
  }, {
    key: "saveForm",
    value: function saveForm(data, opts) {
      return this.save('form', data, opts);
    }
  }, {
    key: "deleteForm",
    value: function deleteForm(opts) {
      return this.delete('form', opts);
    }
  }, {
    key: "loadForms",
    value: function loadForms(query, opts) {
      return this.index('forms', query, opts);
    }
  }, {
    key: "loadSubmission",
    value: function loadSubmission(query, opts) {
      var _this3 = this;

      return this.load('submission', query, opts).then(function (submission) {
        _this3.vId = submission._fvid;
        _this3.vUrl = "".concat(_this3.formUrl, "/v/").concat(_this3.vId);
        return submission;
      });
    }
  }, {
    key: "saveSubmission",
    value: function saveSubmission(data, opts) {
      if (!isNaN(parseInt(this.vId))) {
        data._fvid = this.vId;
      }

<<<<<<< HEAD
      return this.save('submission', data, opts);
    }
  }, {
    key: "deleteSubmission",
    value: function deleteSubmission(opts) {
      return this.delete('submission', opts);
    }
  }, {
    key: "loadSubmissions",
    value: function loadSubmissions(query, opts) {
      return this.index('submissions', query, opts);
    }
  }, {
    key: "loadAction",
    value: function loadAction(query, opts) {
      return this.load('action', query, opts);
    }
  }, {
    key: "saveAction",
    value: function saveAction(data, opts) {
      return this.save('action', data, opts);
    }
  }, {
    key: "deleteAction",
    value: function deleteAction(opts) {
      return this.delete('action', opts);
    }
  }, {
    key: "loadActions",
    value: function loadActions(query, opts) {
      return this.index('actions', query, opts);
    }
  }, {
    key: "availableActions",
    value: function availableActions() {
      return this.makeRequest('availableActions', "".concat(this.formUrl, "/actions"));
    }
  }, {
    key: "actionInfo",
    value: function actionInfo(name) {
      return this.makeRequest('actionInfo', "".concat(this.formUrl, "/actions/").concat(name));
    }
  }, {
    key: "isObjectId",
    value: function isObjectId(id) {
      var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
      return checkForHexRegExp.test(id);
    }
  }, {
    key: "getProjectId",
    value: function getProjectId() {
      if (!this.projectId) {
        return _nativePromiseOnly.default.resolve('');
      }

      if (this.isObjectId(this.projectId)) {
        return _nativePromiseOnly.default.resolve(this.projectId);
      } else {
        return this.loadProject().then(function (project) {
          return project._id;
        });
      }
    }
  }, {
    key: "getFormId",
    value: function getFormId() {
      if (!this.formId) {
        return _nativePromiseOnly.default.resolve('');
      }

      if (this.isObjectId(this.formId)) {
        return _nativePromiseOnly.default.resolve(this.formId);
      } else {
        return this.loadForm().then(function (form) {
          return form._id;
        });
      }
=======
  getFormId() {
    if (!this.formId) {
      return NativePromise.resolve('');
    }
    if (this.isObjectId(this.formId)) {
      return NativePromise.resolve(this.formId);
>>>>>>> newFormio
    }
  }, {
    key: "currentUser",
    value: function currentUser(options) {
      return Formio.currentUser(this, options);
    }
  }, {
    key: "accessInfo",
    value: function accessInfo() {
      return Formio.accessInfo(this);
    }
    /**
     * Returns the JWT token for this instance.
     *
     * @return {*}
     */

  }, {
    key: "getToken",
    value: function getToken(options) {
      return Formio.getToken(Object.assign({
        formio: this
      }, this.options, options));
    }
    /**
     * Sets the JWT token for this instance.
     *
     * @return {*}
     */

  }, {
    key: "setToken",
    value: function setToken(token, options) {
      return Formio.setToken(token, Object.assign({
        formio: this
      }, this.options, options));
    }
    /**
     * Returns a temporary authentication token for single purpose token generation.
     */

  }, {
    key: "getTempToken",
    value: function getTempToken(expire, allowed, options) {
      var token = Formio.getToken(options);

      if (!token) {
        return _nativePromiseOnly.default.reject('You must be authenticated to generate a temporary auth token.');
      }

      var authUrl = Formio.authUrl || this.projectUrl;
      return this.makeRequest('tempToken', "".concat(authUrl, "/token"), 'GET', null, {
        ignoreCache: true,
        header: new Headers({
          'x-expire': expire,
          'x-allow': allowed
        })
      });
    }
    /**
     * Get a download url for a submission PDF of this submission.
     *
     * @return {*}
     */

  }, {
    key: "getDownloadUrl",
    value: function getDownloadUrl(form) {
      var _this4 = this;

      if (!this.submissionId) {
        return _nativePromiseOnly.default.resolve('');
      }

<<<<<<< HEAD
      if (!form) {
        // Make sure to load the form first.
        return this.loadForm().then(function (_form) {
          if (!_form) {
            return '';
          }

          return _this4.getDownloadUrl(_form);
        });
      }

      var apiUrl = "/project/".concat(form.project);
      apiUrl += "/form/".concat(form._id);
      apiUrl += "/submission/".concat(this.submissionId);
      apiUrl += '/download';
      var download = this.base + apiUrl;
      return new _nativePromiseOnly.default(function (resolve, reject) {
        _this4.getTempToken(3600, "GET:".concat(apiUrl)).then(function (tempToken) {
          download += "?token=".concat(tempToken.key);
          resolve(download);
        }, function () {
          resolve(download);
        }).catch(reject);
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(storage, file, fileName, dir, progressCallback, url, options) {
      var _this5 = this;

      var requestArgs = {
        provider: storage,
        method: 'upload',
        file: file,
        fileName: fileName,
        dir: dir
      };
      var request = Formio.pluginWait('preRequest', requestArgs).then(function () {
        return Formio.pluginGet('fileRequest', requestArgs).then(function (result) {
          if (storage && isNil(result)) {
            if (Formio.providers.storage.hasOwnProperty(storage)) {
              var provider = new Formio.providers.storage[storage](_this5);
              return provider.uploadFile(file, fileName, dir, progressCallback, url, options);
            } else {
              throw 'Storage provider not found';
            }
          }

          return result || {
            url: ''
          };
        });
      });
      return Formio.pluginAlter('wrapFileRequestPromise', request, requestArgs);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(file) {
      var _this6 = this;

      var requestArgs = {
        method: 'download',
        file: file
      };
      var request = Formio.pluginWait('preRequest', requestArgs).then(function () {
        return Formio.pluginGet('fileRequest', requestArgs).then(function (result) {
          if (file.storage && isNil(result)) {
            if (Formio.providers.storage.hasOwnProperty(file.storage)) {
              var provider = new Formio.providers.storage[file.storage](_this6);
              return provider.downloadFile(file);
            } else {
              throw 'Storage provider not found';
            }
          }

          return result || {
            url: ''
          };
        });
      });
      return Formio.pluginAlter('wrapFileRequestPromise', request, requestArgs);
    }
    /**
     * Returns the user permissions to a form and submission.
     *
     * @param user - The user or current user if undefined. For anonymous, use "null"
     * @param form - The form or current form if undefined. For no form check, use "null"
     * @param submission - The submisison or "index" if undefined.
     *
     * @return {create: boolean, read: boolean, edit: boolean, delete: boolean}
     */

  }, {
    key: "userPermissions",
    value: function userPermissions(user, form, submission) {
      return _nativePromiseOnly.default.all([form !== undefined ? _nativePromiseOnly.default.resolve(form) : this.loadForm(), user !== undefined ? _nativePromiseOnly.default.resolve(user) : this.currentUser(), this.accessInfo()]).then(function (results) {
        var form = results.shift();
        var user = results.shift() || {
          _id: false,
          roles: []
        };
        var access = results.shift();
        var permMap = {
          create: 'create',
          read: 'read',
          update: 'edit',
          delete: 'delete'
        };
        var perms = {
          user: user,
          form: form,
          access: access,
          create: false,
          read: false,
          edit: false,
          delete: false
        };

        for (var roleName in access.roles) {
          if (access.roles.hasOwnProperty(roleName)) {
            var role = access.roles[roleName];

            if (role.default && user._id === false) {
              // User is anonymous. Add the anonymous role.
              user.roles.push(role._id);
            } else if (role.admin && user.roles.indexOf(role._id) !== -1) {
              perms.create = true;
              perms.read = true;
              perms.delete = true;
              perms.edit = true;
              return perms;
            }
          }
        }

        if (form && form.submissionAccess) {
          for (var i = 0; i < form.submissionAccess.length; i++) {
            var permission = form.submissionAccess[i];

            var _permission$type$spli = permission.type.split('_'),
                _permission$type$spli2 = _slicedToArray(_permission$type$spli, 2),
                perm = _permission$type$spli2[0],
                scope = _permission$type$spli2[1];

            if (['create', 'read', 'update', 'delete'].includes(perm)) {
              if ((0, _intersection2.default)(permission.roles, user.roles).length) {
                perms[permMap[perm]] = scope === 'all' || !submission || user._id === submission.owner;
              }
            }
          }
        }
=======
  /**
   * Returns the JWT token for this instance.
   *
   * @return {*}
   */
  getToken(options) {
    return Formio.getToken(Object.assign({ formio: this }, this.options, options));
  }

  /**
   * Sets the JWT token for this instance.
   *
   * @return {*}
   */
  setToken(token, options) {
    return Formio.setToken(token, Object.assign({ formio: this }, this.options, options));
  }

  /**
   * Returns a temporary authentication token for single purpose token generation.
   */
  getTempToken(expire, allowed, options) {
    const token = Formio.getToken(options);
    if (!token) {
      return NativePromise.reject('You must be authenticated to generate a temporary auth token.');
    }
    const authUrl = Formio.authUrl || this.projectUrl;
    return this.makeRequest('tempToken', `${authUrl}/token`, 'GET', null, {
      ignoreCache: true,
      header: new Headers({
        'x-expire': expire,
        'x-allow': allowed
      })
    });
  }

  /**
   * Get a download url for a submission PDF of this submission.
   *
   * @return {*}
   */
  getDownloadUrl(form) {
    if (!this.submissionId) {
      return NativePromise.resolve('');
    }

    if (!form) {
      // Make sure to load the form first.
      return this.loadForm().then((_form) => {
        if (!_form) {
          return '';
        }
        return this.getDownloadUrl(_form);
      });
    }

    let apiUrl = `/project/${form.project}`;
    apiUrl += `/form/${form._id}`;
    apiUrl += `/submission/${this.submissionId}`;
    apiUrl += '/download';

    let download = this.base + apiUrl;
    return new NativePromise((resolve, reject) => {
      this.getTempToken(3600, `GET:${apiUrl}`).then((tempToken) => {
        download += `?token=${tempToken.key}`;
        resolve(download);
      }, () => {
        resolve(download);
      }).catch(reject);
    });
  }

  uploadFile(storage, file, fileName, dir, progressCallback, url, options, fileKey) {
    const requestArgs = {
      provider: storage,
      method: 'upload',
      file: file,
      fileName: fileName,
      dir: dir
    };
    fileKey = fileKey || 'file';
    const request = Formio.pluginWait('preRequest', requestArgs)
      .then(() => {
        return Formio.pluginGet('fileRequest', requestArgs)
          .then((result) => {
            if (storage && isNil(result)) {
              const Provider = Providers.getProvider('storage', storage);
              if (Provider) {
                const provider = new Provider(this);
                return provider.uploadFile(file, fileName, dir, progressCallback, url, options, fileKey);
              }
              else {
                throw ('Storage provider not found');
              }
            }
            return result || { url: '' };
          });
      });

    return Formio.pluginAlter('wrapFileRequestPromise', request, requestArgs);
  }

  downloadFile(file, options) {
    const requestArgs = {
      method: 'download',
      file: file
    };

    const request = Formio.pluginWait('preRequest', requestArgs)
      .then(() => {
        return Formio.pluginGet('fileRequest', requestArgs)
          .then((result) => {
            if (file.storage && isNil(result)) {
              const Provider = Providers.getProvider('storage', file.storage);
              if (Provider) {
                const provider = new Provider(this);
                return provider.downloadFile(file, options);
              }
              else {
                throw ('Storage provider not found');
              }
            }
            return result || { url: '' };
          });
      });

    return Formio.pluginAlter('wrapFileRequestPromise', request, requestArgs);
  }

  /**
   * Returns the user permissions to a form and submission.
   *
   * @param user - The user or current user if undefined. For anonymous, use "null"
   * @param form - The form or current form if undefined. For no form check, use "null"
   * @param submission - The submisison or "index" if undefined.
   *
   * @return {create: boolean, read: boolean, edit: boolean, delete: boolean}
   */
  userPermissions(user, form, submission) {
    return NativePromise.all([
      (form !== undefined) ? NativePromise.resolve(form) : this.loadForm(),
      (user !== undefined) ? NativePromise.resolve(user) : this.currentUser(),
      (submission !== undefined || !this.submissionId) ? NativePromise.resolve(submission) : this.loadSubmission(),
      this.accessInfo()
    ]).then((results) => {
      const form = results.shift();
      const user = results.shift() || { _id: false, roles: [] };
      const submission = results.shift();
      const access = results.shift();
      const permMap = {
        create: 'create',
        read: 'read',
        update: 'edit',
        delete: 'delete'
      };
      const perms = {
        user: user,
        form: form,
        access: access,
        create: false,
        read: false,
        edit: false,
        delete: false
      };
      for (const roleName in access.roles) {
        if (access.roles.hasOwnProperty(roleName)) {
          const role = access.roles[roleName];
          if (role.default && (user._id === false)) {
            // User is anonymous. Add the anonymous role.
            user.roles.push(role._id);
          }
          else if (role.admin && user.roles.indexOf(role._id) !== -1) {
            perms.create = true;
            perms.read = true;
            perms.delete = true;
            perms.edit = true;
            return perms;
          }
        }
      }
      if (form && form.submissionAccess) {
        for (let i = 0; i < form.submissionAccess.length; i++) {
          const permission = form.submissionAccess[i];
          const [perm, scope] = permission.type.split('_');
          if (['create', 'read', 'update', 'delete'].includes(perm)) {
            if (_intersection(permission.roles, user.roles).length) {
              perms[permMap[perm]] = (scope === 'all') || (!submission || (user._id === submission.owner));
            }
          }
        }
      }
      // check for Group Permissions
      if (submission) {
        // we would anyway need to loop through components for create permission, so we'll do that for all of them
        eachComponent(form.components, (component, path) => {
          if (component && component.defaultPermission) {
            const value = _get(submission.data, path);
            // make it work for single-select Group and multi-select Group
            const groups = Array.isArray(value) ? value : [value];
            groups.forEach(group => {
              if (
                group && group._id && // group id is present
                user.roles.indexOf(group._id) > -1 // user has group id in his roles
              ) {
                if (component.defaultPermission === 'read') {
                  perms[permMap.read] = true;
                }
                if (component.defaultPermission === 'create') {
                  perms[permMap.create] = true;
                  perms[permMap.read] = true;
                }
                if (component.defaultPermission === 'write') {
                  perms[permMap.create] = true;
                  perms[permMap.read] = true;
                  perms[permMap.update] = true;
                }
                if (component.defaultPermission === 'admin') {
                  perms[permMap.create] = true;
                  perms[permMap.read] = true;
                  perms[permMap.update] = true;
                  perms[permMap.delete] = true;
                }
              }
            });
          }
        });
      }
      return perms;
    });
  }

  /**
   * Determine if the current user can submit a form.
   * @return {*}
   */
  canSubmit() {
    return this.userPermissions().then((perms) => {
      // If there is user and they cannot create, then check anonymous user permissions.
      if (!perms.create && Formio.getUser()) {
        return this.userPermissions(null).then((anonPerms) => {
          if (anonPerms.create) {
            Formio.setUser(null);
            return true;
          }

          return false;
        });
      }

      return perms.create;
    });
  }
>>>>>>> newFormio

        return perms;
      });
    }
    /**
     * Determine if the current user can submit a form.
     * @return {*}
     */

  }, {
    key: "canSubmit",
    value: function canSubmit() {
      var _this7 = this;

      return this.userPermissions().then(function (perms) {
        // If there is user and they cannot create, then check anonymous user permissions.
        if (!perms.create && Formio.getUser()) {
          return _this7.userPermissions(null).then(function (anonPerms) {
            if (anonPerms.create) {
              Formio.setUser(null);
              return true;
            }

            return false;
          });
        }

        return perms.create;
      });
    }
  }, {
    key: "getUrlParts",
    value: function getUrlParts(url) {
      return Formio.getUrlParts(url, this);
    }
  }], [{
    key: "loadProjects",
    value: function loadProjects(query, opts) {
      query = query || '';

<<<<<<< HEAD
      if (isObject(query)) {
        query = "?".concat(Formio.serialize(query.params));
=======
  static serialize(obj, _interpolate) {
    const str = [];
    const interpolate = (item) => {
      return _interpolate ? _interpolate(item) : item;
    };
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(`${encodeURIComponent(p)}=${encodeURIComponent(interpolate(obj[p]))}`);
>>>>>>> newFormio
      }

      return Formio.makeStaticRequest("".concat(Formio.baseUrl, "/project").concat(query), 'GET', null, opts);
    }
  }, {
    key: "getUrlParts",
    value: function getUrlParts(url, formio) {
      var base = formio && formio.base ? formio.base : Formio.baseUrl;
      var regex = '^(http[s]?:\\/\\/)';

      if (base && url.indexOf(base) === 0) {
        regex += "(".concat(base.replace(/^http[s]?:\/\//, ''), ")");
      } else {
        regex += '([^/]+)';
      }

      regex += '($|\\/.*)';
      return url.match(new RegExp(regex));
    }
  }, {
    key: "serialize",
    value: function serialize(obj, _interpolate) {
      var str = [];

      var interpolate = function interpolate(item) {
        return _interpolate ? _interpolate(item) : item;
      };

      for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          str.push("".concat(encodeURIComponent(p), "=").concat(encodeURIComponent(interpolate(obj[p]))));
        }
      }

      return str.join('&');
    }
  }, {
    key: "getRequestArgs",
    value: function getRequestArgs(formio, type, url, method, data, opts) {
      method = (method || 'GET').toUpperCase();

      if (!opts || !isObject(opts)) {
        opts = {};
      }

      var requestArgs = {
        url: url,
        method: method,
        data: data || null,
        opts: opts
      };

      if (type) {
        requestArgs.type = type;
      }

      if (formio) {
        requestArgs.formio = formio;
      }

      return requestArgs;
    }
  }, {
    key: "makeStaticRequest",
    value: function makeStaticRequest(url, method, data, opts) {
      var requestArgs = Formio.getRequestArgs(null, '', url, method, data, opts);
      var request = Formio.pluginWait('preRequest', requestArgs).then(function () {
        return Formio.pluginGet('staticRequest', requestArgs).then(function (result) {
          if (isNil(result)) {
            return Formio.request(url, method, requestArgs.data, requestArgs.opts.header, requestArgs.opts);
          }

          return result;
        });
      });
      return Formio.pluginAlter('wrapStaticRequestPromise', request, requestArgs);
    }
  }, {
    key: "makeRequest",
    value: function makeRequest(formio, type, url, method, data, opts) {
      if (!formio) {
        return Formio.makeStaticRequest(url, method, data, opts);
      }

<<<<<<< HEAD
      var requestArgs = Formio.getRequestArgs(formio, type, url, method, data, opts);
      requestArgs.opts = requestArgs.opts || {};
      requestArgs.opts.formio = formio;
      var request = Formio.pluginWait('preRequest', requestArgs).then(function () {
        return Formio.pluginGet('request', requestArgs).then(function (result) {
=======
    const requestArgs = Formio.getRequestArgs(formio, type, url, method, data, opts);
    requestArgs.opts = requestArgs.opts || {};
    requestArgs.opts.formio = formio;

    //for Formio requests default Accept and Content-type headers
    if (!requestArgs.opts.headers) {
      requestArgs.opts.headers = {};
    }
    requestArgs.opts.headers = _defaults(requestArgs.opts.headers, {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    });
    const request = Formio.pluginWait('preRequest', requestArgs)
      .then(() => Formio.pluginGet('request', requestArgs)
        .then((result) => {
>>>>>>> newFormio
          if (isNil(result)) {
            return Formio.request(url, method, requestArgs.data, requestArgs.opts.header, requestArgs.opts);
          }

          return result;
        });
      });
      return Formio.pluginAlter('wrapRequestPromise', request, requestArgs);
    }
  }, {
    key: "request",
    value: function request(url, method, data, header, opts) {
      if (!url) {
        return _nativePromiseOnly.default.reject('No url provided');
      }

      method = (method || 'GET').toUpperCase(); // For reverse compatibility, if they provided the ignoreCache parameter,
      // then change it back to the options format where that is a parameter.

<<<<<<< HEAD
      if (isBoolean(opts)) {
        opts = {
          ignoreCache: opts
        };
      }
=======
  static request(url, method, data, header, opts) {
    if (!url) {
      return NativePromise.reject('No url provided');
    }
    method = (method || 'GET').toUpperCase();
>>>>>>> newFormio

      if (!opts || !isObject(opts)) {
        opts = {};
      } // Generate a cachekey.


<<<<<<< HEAD
      var cacheKey = btoa(url); // Get the cached promise to save multiple loads.

      if (!Formio.ignoreCache && !opts.ignoreCache && method === 'GET' && Formio.cache.hasOwnProperty(cacheKey)) {
        return _nativePromiseOnly.default.resolve((0, _cloneDeep2.default)(Formio.cache[cacheKey]));
      } // Set up and fetch request


      var headers = header || new Headers((0, _defaults2.default)(opts.headers, {
        'Accept': 'application/json',
        'Content-type': 'application/json; charset=UTF-8'
      }));
      var token = Formio.getToken(opts);

      if (token && !opts.noToken) {
        headers.append('x-jwt-token', token);
      } // The fetch-ponyfill can't handle a proper Headers class anymore. Change it back to an object.


      var headerObj = {};
      headers.forEach(function (value, name) {
        headerObj[name] = value;
      });
      var options = {
        method: method,
        headers: headerObj,
        mode: 'cors'
      };

      if (data) {
        options.body = JSON.stringify(data);
      } // Allow plugins to alter the options.


      options = Formio.pluginAlter('requestOptions', options, url);

      if (options.namespace || Formio.namespace) {
        opts.namespace = options.namespace || Formio.namespace;
      }

      var requestToken = options.headers['x-jwt-token'];
      var result = Formio.fetch(url, options).then(function (response) {
=======
    // Get the cached promise to save multiple loads.
    if (!opts.ignoreCache && method === 'GET' && Formio.cache.hasOwnProperty(cacheKey)) {
      return NativePromise.resolve(cloneResponse(Formio.cache[cacheKey]));
    }

    // Set up and fetch request
    const headers = header || new Headers(opts.headers || {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    });
    const token = Formio.getToken(opts);
    if (token && !opts.noToken) {
      headers.append('x-jwt-token', token);
    }

    // The fetch-ponyfill can't handle a proper Headers class anymore. Change it back to an object.
    const headerObj = {};
    headers.forEach(function(value, name) {
      headerObj[name] = value;
    });

    let options = {
      method: method,
      headers: headerObj,
      mode: 'cors'
    };
    if (data) {
      options.body = JSON.stringify(data);
    }

    // Allow plugins to alter the options.
    options = Formio.pluginAlter('requestOptions', options, url);
    if (options.namespace || Formio.namespace) {
      opts.namespace = options.namespace ||  Formio.namespace;
    }

    const requestToken = options.headers['x-jwt-token'];
    const result = Formio.fetch(url, options)
      .then((response) => {
>>>>>>> newFormio
        // Allow plugins to respond.
        response = Formio.pluginAlter('requestResponse', response, Formio);

        if (!response.ok) {
          if (response.status === 440) {
            Formio.setToken(null, opts);
            Formio.events.emit('formio.sessionExpired', response.body);
          } else if (response.status === 401) {
            Formio.events.emit('formio.unauthorized', response.body);
<<<<<<< HEAD
          } // Parse and return the error as a rejected promise to reject this promise


          return (response.headers.get('content-type').includes('application/json') ? response.json() : response.text()).then(function (error) {
            return _nativePromiseOnly.default.reject(error);
          });
        } // Handle fetch results
=======
          }
          // Parse and return the error as a rejected promise to reject this promise
          return (response.headers.get('content-type').includes('application/json')
            ? response.json()
            : response.text())
            .then((error) => {
              return NativePromise.reject(error);
            });
        }
>>>>>>> newFormio


        var token = response.headers.get('x-jwt-token'); // In some strange cases, the fetch library will return an x-jwt-token without sending
        // one to the server. This has even been debugged on the server to verify that no token
        // was introduced with the request, but the response contains a token. This is an Invalid
        // case where we do not send an x-jwt-token and get one in return for any GET request.

        var tokenIntroduced = false;

        if (method === 'GET' && !requestToken && token && !opts.external && !url.includes('token=') && !url.includes('x-jwt-token=')) {
          console.warn('Token was introduced in request.');
          tokenIntroduced = true;
        }

<<<<<<< HEAD
        if (response.status >= 200 && response.status < 300 && token && token !== '' && !tokenIntroduced) {
          Formio.setToken(token, opts);
        } // 204 is no content. Don't try to .json() it.


=======
        if (
          response.status >= 200 &&
          response.status < 300 &&
          token &&
          token !== '' &&
          !tokenIntroduced
        ) {
          Formio.setToken(token, opts);
        }
        // 204 is no content. Don't try to .json() it.
>>>>>>> newFormio
        if (response.status === 204) {
          return {};
        }

        var getResult = response.headers.get('content-type').includes('application/json') ? response.json() : response.text();
        return getResult.then(function (result) {
          // Add some content-range metadata to the result here
          var range = response.headers.get('content-range');

          if (range && isObject(result)) {
            range = range.split('/');

            if (range[0] !== '*') {
              var skipLimit = range[0].split('-');
              result.skip = Number(skipLimit[0]);
              result.limit = skipLimit[1] - skipLimit[0] + 1;
            }

            result.serverCount = range[1] === '*' ? range[1] : Number(range[1]);
          }

          if (!opts.getHeaders) {
            return result;
          }

          var headers = {};
          response.headers.forEach(function (item, key) {
            headers[key] = item;
          }); // Return the result with the headers.

          return {
            result,
            headers,
          };
        });
      }).then(function (result) {
        if (opts.getHeaders) {
          return result;
        } // Cache the response.


        if (!Formio.ignoreCache && method === 'GET') {
          Formio.cache[cacheKey] = (0, _cloneDeep2.default)(result);
        }

<<<<<<< HEAD
        var resultCopy = {}; // Shallow copy result so modifications don't end up in cache

        if (Array.isArray(result)) {
          resultCopy = result.map(_shallowCopy.default);
          resultCopy.skip = result.skip;
          resultCopy.limit = result.limit;
          resultCopy.serverCount = result.serverCount;
        } else {
          resultCopy = (0, _shallowCopy.default)(result);
        }

        return resultCopy;
      }).catch(function (err) {
=======
        // Cache the response.
        if (method === 'GET') {
          Formio.cache[cacheKey] = result;
        }

        return cloneResponse(result);
      })
      .catch((err) => {
>>>>>>> newFormio
        if (err === 'Bad Token') {
          Formio.setToken(null, opts);
          Formio.events.emit('formio.badToken', err);
        }

        if (err.message) {
          err.message = "Could not connect to API server (".concat(err.message, ")");
          err.networkError = true;
        }
<<<<<<< HEAD

        if (method === 'GET') {
          delete Formio.cache[cacheKey];
        }

        return _nativePromiseOnly.default.reject(err);
      });
      return result;
    } // Needed to maintain reverse compatability...

  }, {
    key: "setToken",
    value: function setToken() {
      var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var opts = arguments.length > 1 ? arguments[1] : undefined;
      opts = typeof opts === 'string' ? {
        namespace: opts
      } : opts || {};
      var tokenName = "".concat(opts.namespace || Formio.namespace || 'formio', "Token");

      if (!Formio.tokens) {
        Formio.tokens = {};
      }

      if (Formio.tokens[tokenName] === token) {
        return;
      }

      Formio.tokens[tokenName] = token;

      if (!token) {
        Formio.setUser(null, opts); // iOS in private browse mode will throw an error but we can't detect ahead of time that we are in private mode.

        try {
          return localStorage.removeItem(tokenName);
        } catch (err) {
          return _browserCookies.default.erase(tokenName, {
            path: '/'
          });
        }
      } // iOS in private browse mode will throw an error but we can't detect ahead of time that we are in private mode.


      try {
        localStorage.setItem(tokenName, token);
      } catch (err) {
        _browserCookies.default.set(tokenName, token, {
          path: '/'
        });
      }

      return Formio.currentUser(opts.formio, opts); // Run this so user is updated if null
    }
  }, {
    key: "getToken",
    value: function getToken(options) {
      options = typeof options === 'string' ? {
        namespace: options
      } : options || {};
      var tokenName = "".concat(options.namespace || Formio.namespace || 'formio', "Token");
=======

        if (method === 'GET') {
          delete Formio.cache[cacheKey];
        }

        return NativePromise.reject(err);
      });

    return result;
  }

  // Needed to maintain reverse compatability...
  static get token() {
    if (!Formio.tokens) {
      Formio.tokens = {};
    }

    return Formio.tokens.formioToken ? Formio.tokens.formioToken : '';
  }

  // Needed to maintain reverse compatability...
  static set token(token) {
    if (!Formio.tokens) {
      Formio.tokens = {};
    }

    return Formio.tokens.formioToken = token || '';
  }

  static setToken(token = '', opts) {
    token = token || '';
    opts = (typeof opts === 'string') ? { namespace: opts } : opts || {};
    var tokenName = `${opts.namespace || Formio.namespace || 'formio'}Token`;
    if (!Formio.tokens) {
      Formio.tokens = {};
    }

    if (Formio.tokens[tokenName] && Formio.tokens[tokenName] === token) {
      return;
    }

    Formio.tokens[tokenName] = token;
    if (!token) {
      if (!opts.fromUser) {
        opts.fromToken = true;
        Formio.setUser(null, opts);
      }
      // iOS in private browse mode will throw an error but we can't detect ahead of time that we are in private mode.
      try {
        return localStorage.removeItem(tokenName);
      }
      catch (err) {
        return cookies.erase(tokenName, { path: '/' });
      }
    }
    // iOS in private browse mode will throw an error but we can't detect ahead of time that we are in private mode.
    try {
      localStorage.setItem(tokenName, token);
    }
    catch (err) {
      cookies.set(tokenName, token, { path: '/' });
    }
    return Formio.currentUser(opts.formio, opts); // Run this so user is updated if null
  }

  static getToken(options) {
    options = (typeof options === 'string') ? { namespace: options } : options || {};
    var tokenName = `${options.namespace || Formio.namespace || 'formio'}Token`;
    if (!Formio.tokens) {
      Formio.tokens = {};
    }

    if (Formio.tokens[tokenName]) {
      return Formio.tokens[tokenName];
    }
    try {
      Formio.tokens[tokenName] = localStorage.getItem(tokenName) || '';
      return Formio.tokens[tokenName];
    }
    catch (e) {
      Formio.tokens[tokenName] = cookies.get(tokenName);
      return Formio.tokens[tokenName];
    }
  }

  static setUser(user, opts = {}) {
    var userName = `${opts.namespace || Formio.namespace || 'formio'}User`;
    if (!user) {
      if (!opts.fromToken) {
        opts.fromUser = true;
        Formio.setToken(null, opts);
      }

      // Emit an event on the cleared user.
      Formio.events.emit('formio.user', null);

      // iOS in private browse mode will throw an error but we can't detect ahead of time that we are in private mode.
      try {
        return localStorage.removeItem(userName);
      }
      catch (err) {
        return cookies.erase(userName, { path: '/' });
      }
    }
    // iOS in private browse mode will throw an error but we can't detect ahead of time that we are in private mode.
    try {
      localStorage.setItem(userName, JSON.stringify(user));
    }
    catch (err) {
      cookies.set(userName, JSON.stringify(user), { path: '/' });
    }

    // Emit an event on the authenticated user.
    Formio.events.emit('formio.user', user);
  }

  static getUser(options) {
    options = options || {};
    var userName = `${options.namespace || Formio.namespace || 'formio'}User`;
    try {
      return JSON.parse(localStorage.getItem(userName) || null);
    }
    catch (e) {
      return JSON.parse(cookies.get(userName));
    }
  }
>>>>>>> newFormio

      if (!Formio.tokens) {
        Formio.tokens = {};
      }

      if (Formio.tokens[tokenName]) {
        return Formio.tokens[tokenName];
      }

      try {
        Formio.tokens[tokenName] = localStorage.getItem(tokenName) || '';
        return Formio.tokens[tokenName];
      } catch (e) {
        Formio.tokens[tokenName] = _browserCookies.default.get(tokenName);
        return Formio.tokens[tokenName];
      }
    }
  }, {
    key: "setUser",
    value: function setUser(user) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var userName = "".concat(opts.namespace || Formio.namespace || 'formio', "User");

      if (!user) {
        Formio.setToken(null, opts); // Emit an event on the cleared user.

        Formio.events.emit('formio.user', null); // iOS in private browse mode will throw an error but we can't detect ahead of time that we are in private mode.

        try {
          return localStorage.removeItem(userName);
        } catch (err) {
          return _browserCookies.default.erase(userName, {
            path: '/'
          });
        }
      } // iOS in private browse mode will throw an error but we can't detect ahead of time that we are in private mode.

<<<<<<< HEAD
=======
  static setAuthUrl(url) {
    Formio.authUrl = url;
  }

  static getAppUrl() {
    console.warn('Formio.getAppUrl() is deprecated. Use Formio.getProjectUrl instead.');
    return Formio.projectUrl;
  }
>>>>>>> newFormio

      try {
        localStorage.setItem(userName, JSON.stringify(user));
      } catch (err) {
        _browserCookies.default.set(userName, JSON.stringify(user), {
          path: '/'
        });
      } // Emit an event on the authenticated user.


      Formio.events.emit('formio.user', user);
    }
  }, {
    key: "getUser",
    value: function getUser(options) {
      options = options || {};
      var userName = "".concat(options.namespace || Formio.namespace || 'formio', "User");

      try {
        return JSON.parse(localStorage.getItem(userName) || null);
      } catch (e) {
        return JSON.parse(_browserCookies.default.get(userName));
      }
    }
  }, {
    key: "setBaseUrl",
    value: function setBaseUrl(url) {
      Formio.baseUrl = url;

      if (!Formio.projectUrlSet) {
        Formio.projectUrl = url;
      }
    }
  }, {
    key: "getBaseUrl",
    value: function getBaseUrl() {
      return Formio.baseUrl;
    }
  }, {
    key: "setApiUrl",
    value: function setApiUrl(url) {
      return Formio.setBaseUrl(url);
    }
  }, {
    key: "getApiUrl",
    value: function getApiUrl() {
      return Formio.getBaseUrl();
    }
  }, {
    key: "setAppUrl",
    value: function setAppUrl(url) {
      console.warn('Formio.setAppUrl() is deprecated. Use Formio.setProjectUrl instead.');
      Formio.projectUrl = url;
      Formio.projectUrlSet = true;
    }
  }, {
    key: "setProjectUrl",
    value: function setProjectUrl(url) {
      Formio.projectUrl = url;
      Formio.projectUrlSet = true;
    }
  }, {
    key: "setAuthUrl",
    value: function setAuthUrl(url) {
      Formio.authUrl = url;
    }
  }, {
    key: "getAppUrl",
    value: function getAppUrl() {
      console.warn('Formio.getAppUrl() is deprecated. Use Formio.getProjectUrl instead.');
      return Formio.projectUrl;
    }
  }, {
    key: "getProjectUrl",
    value: function getProjectUrl() {
      return Formio.projectUrl;
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      Formio.cache = {};
    }
  }, {
    key: "noop",
    value: function noop() {}
  }, {
    key: "identity",
    value: function identity(value) {
      return value;
    }
  }, {
    key: "deregisterPlugin",
    value: function deregisterPlugin(plugin) {
      var beforeLength = Formio.plugins.length;
      Formio.plugins = Formio.plugins.filter(function (p) {
        if (p !== plugin && p.__name !== plugin) {
          return true;
        }

        (p.deregister || Formio.noop).call(plugin, Formio);
        return false;
      });
      return beforeLength !== Formio.plugins.length;
    }
  }, {
    key: "registerPlugin",
    value: function registerPlugin(plugin, name) {
      var found = false;
      Formio.plugins.forEach(function (existing) {
        if (existing.__name === name) {
          found = true;
        }
      });

      if (!found) {
        // Do not register already registered plugins.
        Formio.plugins.push(plugin);
        Formio.plugins.sort(function (a, b) {
          return (b.priority || 0) - (a.priority || 0);
        });
        plugin.__name = name;
        (plugin.init || Formio.noop).call(plugin, Formio);
      }
    }
  }, {
    key: "getPlugin",
    value: function getPlugin(name) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Formio.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var plugin = _step.value;

<<<<<<< HEAD
          if (plugin.__name === name) {
            return plugin;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
  }, {
    key: "pluginWait",
    value: function pluginWait(pluginFn) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
=======
  static pluginWait(pluginFn, ...args) {
    return NativePromise.all(Formio.plugins.map((plugin) =>
      (plugin[pluginFn] || Formio.noop).call(plugin, ...args)));
  }
>>>>>>> newFormio

      return _nativePromiseOnly.default.all(Formio.plugins.map(function (plugin) {
        var _ref;

<<<<<<< HEAD
        return (_ref = plugin[pluginFn] || Formio.noop).call.apply(_ref, [plugin].concat(args));
      }));
    }
  }, {
    key: "pluginGet",
    value: function pluginGet(pluginFn) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var callPlugin = function callPlugin(index) {
        var _ref2;

        var plugin = Formio.plugins[index];

        if (!plugin) {
          return _nativePromiseOnly.default.resolve(null);
        }

        return _nativePromiseOnly.default.resolve((_ref2 = plugin[pluginFn] || Formio.noop).call.apply(_ref2, [plugin].concat(args))).then(function (result) {
=======
      if (!plugin) {
        return NativePromise.resolve(null);
      }

      return NativePromise.resolve((plugin[pluginFn] || Formio.noop).call(plugin, ...args))
        .then((result) => {
>>>>>>> newFormio
          if (!isNil(result)) {
            return result;
          }

          return callPlugin(index + 1);
        });
      };

      return callPlugin(0);
    }
  }, {
    key: "pluginAlter",
    value: function pluginAlter(pluginFn, value) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

<<<<<<< HEAD
      return Formio.plugins.reduce(function (value, plugin) {
        return (plugin[pluginFn] || Formio.identity).apply(void 0, [value].concat(args));
      }, value);
    }
  }, {
    key: "accessInfo",
    value: function accessInfo(formio) {
      var projectUrl = formio ? formio.projectUrl : Formio.projectUrl;
      return Formio.makeRequest(formio, 'accessInfo', "".concat(projectUrl, "/access"));
    }
  }, {
    key: "currentUser",
    value: function currentUser(formio, options) {
      var authUrl = Formio.authUrl;

      if (!authUrl) {
        authUrl = formio ? formio.projectUrl : Formio.projectUrl || Formio.baseUrl;
=======
  static currentUser(formio, options) {
    let authUrl = Formio.authUrl;
    if (!authUrl) {
      authUrl = formio ? formio.projectUrl : (Formio.projectUrl || Formio.baseUrl);
    }
    authUrl += '/current';
    const user = Formio.getUser(options);
    if (user) {
      return Formio.pluginAlter('wrapStaticRequestPromise', NativePromise.resolve(user), {
        url: authUrl,
        method: 'GET',
        options
      });
    }

    const token = Formio.getToken(options);
    if ((!options || !options.external) && !token) {
      return Formio.pluginAlter('wrapStaticRequestPromise', NativePromise.resolve(null), {
        url: authUrl,
        method: 'GET',
        options
      });
    }
    return Formio.makeRequest(formio, 'currentUser', authUrl, 'GET', null, options)
      .then((response) => {
        Formio.setUser(response, options);
        return response;
      });
  }

  static logout(formio, options) {
    options = options || {};
    options.formio = formio;
    Formio.setToken(null, options);
    Formio.setUser(null, options);
    Formio.clearCache();
    const projectUrl = Formio.authUrl ? Formio.authUrl : (formio ? formio.projectUrl : Formio.baseUrl);
    return Formio.makeRequest(formio, 'logout', `${projectUrl}/logout`);
  }

  static pageQuery() {
    if (Formio._pageQuery) {
      return Formio._pageQuery;
    }

    Formio._pageQuery = {};
    Formio._pageQuery.paths = [];
    const hashes = location.hash.substr(1).replace(/\?/g, '&').split('&');
    let parts = [];
    location.search.substr(1).split('&').forEach(function(item) {
      parts = item.split('=');
      if (parts.length > 1) {
        Formio._pageQuery[parts[0]] = parts[1] && decodeURIComponent(parts[1]);
      }
    });

    hashes.forEach(function(item) {
      parts = item.split('=');
      if (parts.length > 1) {
        Formio._pageQuery[parts[0]] = parts[1] && decodeURIComponent(parts[1]);
      }
      else if (item.indexOf('/') === 0) {
        Formio._pageQuery.paths = item.substr(1).split('/');
      }
    });
    return Formio._pageQuery;
  }

  static oAuthCurrentUser(formio, token) {
    return Formio.currentUser(formio, {
      external: true,
      headers: {
        Authorization: `Bearer ${token}`
>>>>>>> newFormio
      }

<<<<<<< HEAD
      authUrl += '/current';
      var user = Formio.getUser(options);

      if (user) {
        return Formio.pluginAlter('wrapStaticRequestPromise', _nativePromiseOnly.default.resolve(user), {
          url: authUrl,
          method: 'GET',
          options: options
        });
      }

      var token = Formio.getToken(options);

      if ((!options || !options.external) && !token) {
        return Formio.pluginAlter('wrapStaticRequestPromise', _nativePromiseOnly.default.resolve(null), {
          url: authUrl,
          method: 'GET',
          options: options
        });
      }

      return Formio.makeRequest(formio, 'currentUser', authUrl, 'GET', null, options).then(function (response) {
        Formio.setUser(response, options);
        return response;
      });
=======
  static samlInit(options) {
    options = options || {};
    const query = Formio.pageQuery();
    if (query.saml) {
      Formio.setUser(null);
      const retVal = Formio.setToken(query.saml);
      let uri = window.location.toString();
      uri = uri.substring(0, uri.indexOf('?'));
      if (window.location.hash) {
        uri += window.location.hash;
      }
      window.history.replaceState({}, document.title, uri);
      return retVal;
    }

    // Set the relay if not provided.
    if (!options.relay) {
      options.relay = window.location.href;
    }

    // go to the saml sso endpoint for this project.
    const authUrl = Formio.authUrl || Formio.projectUrl;
    window.location.href = `${authUrl}/saml/sso?relay=${encodeURI(options.relay)}`;
    return false;
  }

  static oktaInit(options) {
    options = options || {};
    if (typeof OktaAuth !== undefined) {
      options.OktaAuth = OktaAuth;
    }

    if (typeof options.OktaAuth === undefined) {
      const errorMessage = 'Cannot find OktaAuth. Please include the Okta JavaScript SDK within your application. See https://developer.okta.com/code/javascript/okta_auth_sdk for an example.';
      console.warn(errorMessage);
      return NativePromise.reject(errorMessage);
    }
    return new NativePromise((resolve, reject) => {
      const Okta = options.OktaAuth;
      delete options.OktaAuth;
      var authClient = new Okta(options);
      authClient.tokenManager.get('accessToken')
        .then(accessToken => {
          if (accessToken) {
            resolve(Formio.oAuthCurrentUser(options.formio, accessToken.accessToken));
          }
          else if (location.hash) {
            authClient.token.parseFromUrl()
              .then(token => {
                authClient.tokenManager.add('accessToken', token);
                resolve(Formio.oAuthCurrentUser(options.formio, token.accessToken));
              })
              .catch(err => {
                console.warn(err);
                reject(err);
              });
          }
          else {
            authClient.token.getWithRedirect({
              responseType: 'token',
              scopes: options.scopes
            });
            resolve(false);
          }
        });
    });
  }

  static ssoInit(type, options) {
    switch (type) {
      case 'saml':
        return Formio.samlInit(options);
      case 'okta':
        return Formio.oktaInit(options);
      default:
        console.warn('Unknown SSO type');
        return NativePromise.reject('Unknown SSO type');
>>>>>>> newFormio
    }
  }, {
    key: "logout",
    value: function logout(formio, options) {
      options = options || {};
      options.formio = formio;
      Formio.setToken(null, options);
      Formio.setUser(null, options);
      Formio.clearCache();
      var projectUrl = Formio.authUrl ? Formio.authUrl : formio ? formio.projectUrl : Formio.baseUrl;
      return Formio.makeRequest(formio, 'logout', "".concat(projectUrl, "/logout"));
    }
  }, {
    key: "pageQuery",
    value: function pageQuery() {
      if (Formio._pageQuery) {
        return Formio._pageQuery;
      }

      Formio._pageQuery = {};
      Formio._pageQuery.paths = [];
      var hashes = location.hash.substr(1).replace(/\?/g, '&').split('&');
      var parts = [];
      location.search.substr(1).split('&').forEach(function (item) {
        parts = item.split('=');

<<<<<<< HEAD
        if (parts.length > 1) {
          Formio._pageQuery[parts[0]] = parts[1] && decodeURIComponent(parts[1]);
        }
=======
  static requireLibrary(name, property, src, polling) {
    if (!Formio.libraries.hasOwnProperty(name)) {
      Formio.libraries[name] = {};
      Formio.libraries[name].ready = new NativePromise((resolve, reject) => {
        Formio.libraries[name].resolve = resolve;
        Formio.libraries[name].reject = reject;
>>>>>>> newFormio
      });
      hashes.forEach(function (item) {
        parts = item.split('=');

        if (parts.length > 1) {
          Formio._pageQuery[parts[0]] = parts[1] && decodeURIComponent(parts[1]);
        } else if (item.indexOf('/') === 0) {
          Formio._pageQuery.paths = item.substr(1).split('/');
        }
      });
      return Formio._pageQuery;
    }
  }, {
    key: "oAuthCurrentUser",
    value: function oAuthCurrentUser(formio, token) {
      return Formio.currentUser(formio, {
        external: true,
        headers: {
          Authorization: "Bearer ".concat(token)
        }
      });
    }
  }, {
    key: "samlInit",
    value: function samlInit(options) {
      options = options || {};
      var query = Formio.pageQuery();

      if (query.saml) {
        Formio.setUser(null);
        var retVal = Formio.setToken(query.saml);
        var uri = window.location.toString();
        uri = uri.substring(0, uri.indexOf('?'));
        window.history.replaceState({}, document.title, uri);
        return retVal;
      }

      if (options.forceAuth) {
        Formio.setUser(null);
      } else if (Formio.getToken()) {
        // If we are not forcing the authentication and we have a token, then return here.
        return false;
      } // Set the relay if not provided.


      if (!options.relay) {
        options.relay = window.location.href;
      } // go to the saml sso endpoint for this project.


      var authUrl = Formio.authUrl || Formio.projectUrl;
      window.location.href = "".concat(authUrl, "/saml/sso?relay=").concat(encodeURIComponent(options.relay));
      return false;
    }
  }, {
    key: "oktaInit",
    value: function oktaInit(options) {
      options = options || {};

      if ((typeof OktaAuth === "undefined" ? "undefined" : _typeof(OktaAuth)) !== undefined) {
        options.OktaAuth = OktaAuth;
      }

      if (_typeof(options.OktaAuth) === undefined) {
        var errorMessage = 'Cannot find OktaAuth. Please include the Okta JavaScript SDK within your application. See https://developer.okta.com/code/javascript/okta_auth_sdk for an example.';
        console.warn(errorMessage);
        return _nativePromiseOnly.default.reject(errorMessage);
      }
<<<<<<< HEAD

      return new _nativePromiseOnly.default(function (resolve, reject) {
        var Okta = options.OktaAuth;
        delete options.OktaAuth;
        var authClient = Okta;
        authClient.tokenManager.get('accessToken').then(function (accessToken) {
          if (accessToken) {
            resolve(Formio.oAuthCurrentUser(options.formio, accessToken.accessToken));
          } else if (location.hash) {
            authClient.token.parseFromUrl().then(function (token) {
              authClient.tokenManager.add('accessToken', token);
              resolve(Formio.oAuthCurrentUser(options.formio, token.accessToken));
            }).catch(function (err) {
              console.warn(err);
              reject(err);
            });
          } else {
            authClient.token.getWithRedirect({
              responseType: 'token',
              scopes: options.scopes
            });
            resolve(false);
=======
      else {
        src = Array.isArray(src) ? src : [src];
        src.forEach((lib) => {
          let attrs = {};
          let elementType = '';
          if (typeof lib === 'string') {
            lib = {
              type: 'script',
              src: lib,
            };
          }
          switch (lib.type) {
            case 'script':
              elementType = 'script';
              attrs = {
                src: lib.src,
                type: 'text/javascript',
                defer: true,
                async: true,
                referrerpolicy: 'origin',
              };
              break;
            case 'styles':
              elementType = 'link';
              attrs = {
                href: lib.src,
                rel: 'stylesheet',
              };
              break;
          }

          // Add the script to the top of the page.
          const element = document.createElement(elementType);
          if (element.setAttribute) {
            for (const attr in attrs) {
              element.setAttribute(attr, attrs[attr]);
            }
          }

          const { head } = document;
          if (head) {
            head.appendChild(element);
>>>>>>> newFormio
          }
        });
      });
    }
  }, {
    key: "ssoInit",
    value: function ssoInit(type, options) {
      switch (type) {
        case 'saml':
          return Formio.samlInit(options);

        case 'okta':
          return Formio.oktaInit(options);

        default:
          console.warn('Unknown SSO type');
          return _nativePromiseOnly.default.reject('Unknown SSO type');
      }
    }
  }, {
    key: "requireLibrary",
    value: function requireLibrary(name, property, src, polling) {
      if (!Formio.libraries.hasOwnProperty(name)) {
        Formio.libraries[name] = {};
        Formio.libraries[name].ready = new _nativePromiseOnly.default(function (resolve, reject) {
          Formio.libraries[name].resolve = resolve;
          Formio.libraries[name].reject = reject;
        });
        var callbackName = "".concat(name, "Callback");

        if (!polling && !window[callbackName]) {
          window[callbackName] = function () {
            return Formio.libraries[name].resolve();
          };
        } // See if the plugin already exists.


        var plugin = (0, _get2.default)(window, property);

        if (plugin) {
          Formio.libraries[name].resolve(plugin);
        } else {
          src = Array.isArray(src) ? src : [src];
          src.forEach(function (lib) {
            var attrs = {};
            var elementType = '';

            if (typeof lib === 'string') {
              lib = {
                type: 'script',
                src: lib
              };
            }

            switch (lib.type) {
              case 'script':
                elementType = 'script';
                attrs = {
                  src: lib.src,
                  type: 'text/javascript',
                  defer: true,
                  async: true
                };
                break;

              case 'styles':
                elementType = 'link';
                attrs = {
                  href: lib.src,
                  rel: 'stylesheet'
                };
                break;
            } // Add the script to the top page.


            var script = document.createElement(elementType);

            for (var attr in attrs) {
              script.setAttribute(attr, attrs[attr]);
            }

            document.getElementsByTagName('head')[0].appendChild(script);
          }); // if no callback is provided, then check periodically for the script.

          if (polling) {
            var interval = setInterval(function () {
              var plugin = (0, _get2.default)(window, property);

              if (plugin) {
                clearInterval(interval);
                Formio.libraries[name].resolve(plugin);
              }
            }, 200);
          }
        }
      }

      return Formio.libraries[name].ready;
    }
  }, {
    key: "libraryReady",
    value: function libraryReady(name) {
      if (Formio.libraries.hasOwnProperty(name) && Formio.libraries[name].ready) {
        return Formio.libraries[name].ready;
      }

      return _nativePromiseOnly.default.reject("".concat(name, " library was not required."));
    }
  }, {
    key: "token",
    get: function get() {
      if (!Formio.tokens) {
        Formio.tokens = {};
      }

      return Formio.tokens.formioToken ? Formio.tokens.formioToken : '';
    } // Needed to maintain reverse compatability...
    ,
    set: function set(token) {
      if (!Formio.tokens) {
        Formio.tokens = {};
      }

      return Formio.tokens.formioToken = token || '';
    }
  }]);

  return Formio;
}(); // Define all the static properties.

<<<<<<< HEAD
=======
    return NativePromise.reject(`${name} library was not required.`);
  }
}
>>>>>>> newFormio

exports.default = Formio;
Formio.ignoreCache = false;
Formio.libraries = {};
<<<<<<< HEAD
Formio.Promise = _nativePromiseOnly.default;
=======
Formio.Promise = NativePromise;
>>>>>>> newFormio
Formio.fetch = fetch;
Formio.Headers = Headers;
Formio.baseUrl = 'https://api.form.io';
Formio.projectUrl = Formio.baseUrl;
Formio.authUrl = '';
Formio.projectUrlSet = false;
Formio.plugins = [];
Formio.cache = {};
<<<<<<< HEAD
Formio.providers = providers;
Formio.events = new _EventEmitter.default({
=======
Formio.Providers = Providers;
Formio.version = '---VERSION---';
Formio.events = new EventEmitter({
>>>>>>> newFormio
  wildcard: false,
  maxListeners: 0
});

if ((typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && !global.Formio) {
  global.Formio = Formio;
}
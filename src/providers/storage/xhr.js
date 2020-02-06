<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.string.trim");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _trim2 = _interopRequireDefault(require("lodash/trim"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XHR = {
  trim: function trim(text) {
    return (0, _trim2.default)(text, '/');
  },
  path: function path(items) {
    return items.filter(function (item) {
      return !!item;
    }).map(XHR.trim).join('/');
  },
  upload: function upload(formio, type, xhrCb, file, fileName, dir, progressCallback) {
    return new _nativePromiseOnly.default(function (resolve, reject) {
      // Send the pre response to sign the upload.
      var pre = new XMLHttpRequest(); // This only fires on a network error.

      pre.onerror = function (err) {
=======
import NativePromise from 'native-promise-only';
import _trim from 'lodash/trim';
const XHR = {
  trim(text) {
    return _trim(text, '/');
  },
  path(items) {
    return items.filter(item => !!item).map(XHR.trim).join('/');
  },
  upload(formio, type, xhrCb, file, fileName, dir, progressCallback) {
    return new NativePromise(((resolve, reject) => {
      // Send the pre response to sign the upload.
      const pre = new XMLHttpRequest();

      // This only fires on a network error.
      pre.onerror = (err) => {
>>>>>>> newFormio
        err.networkError = true;
        reject(err);
      };

      pre.onabort = reject;
<<<<<<< HEAD

      pre.onload = function () {
        if (pre.status >= 200 && pre.status < 300) {
          var response = JSON.parse(pre.response); // Send the file with data.

          var xhr = new XMLHttpRequest();

          if (typeof progressCallback === 'function') {
            xhr.upload.onprogress = progressCallback;
          } // Fire on network error.


          xhr.onerror = function (err) {
            err.networkError = true;
            reject(err);
          }; // Fire on network abort.


          xhr.onabort = function (err) {
            err.networkError = true;
            reject(err);
          }; // Fired when the response has made it back from the server.


          xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(response);
            } else {
              reject(xhr.response || 'Unable to upload file');
            }
          }; // Set the onabort error callback.


          xhr.onabort = reject; // Get the request and send it to the server.

          xhr.send(xhrCb(xhr, response));
        } else {
=======
      pre.onload = () => {
        if (pre.status >= 200 && pre.status < 300) {
          const response = JSON.parse(pre.response);

          // Send the file with data.
          const xhr = new XMLHttpRequest();

          if (typeof progressCallback === 'function') {
            xhr.upload.onprogress = progressCallback;
          }

          // Fire on network error.
          xhr.onerror = (err) => {
            err.networkError = true;
            reject(err);
          };

          // Fire on network abort.
          xhr.onabort = (err) => {
            err.networkError = true;
            reject(err);
          };

          // Fired when the response has made it back from the server.
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(response);
            }
            else {
              reject(xhr.response || 'Unable to upload file');
            }
          };

          // Set the onabort error callback.
          xhr.onabort = reject;

          // Get the request and send it to the server.
          xhr.send(xhrCb(xhr, response));
        }
        else {
>>>>>>> newFormio
          reject(pre.response || 'Unable to sign file');
        }
      };

<<<<<<< HEAD
      pre.open('POST', "".concat(formio.formUrl, "/storage/").concat(type));
      pre.setRequestHeader('Accept', 'application/json');
      pre.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      var token = formio.getToken();

=======
      pre.open('POST', `${formio.formUrl}/storage/${type}`);
      pre.setRequestHeader('Accept', 'application/json');
      pre.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      const token = formio.getToken();
>>>>>>> newFormio
      if (token) {
        pre.setRequestHeader('x-jwt-token', token);
      }

      pre.send(JSON.stringify({
        name: XHR.path([dir, fileName]),
        size: file.size,
        type: file.type
      }));
<<<<<<< HEAD
    });
  }
};
var _default = XHR;
exports.default = _default;
=======
    }));
  }
};

export default XHR;
>>>>>>> newFormio

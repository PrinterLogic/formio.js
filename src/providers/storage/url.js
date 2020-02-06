<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = function url(formio) {
  var xhrRequest = function xhrRequest(url, name, query, data, options, onprogress) {
    return new _nativePromiseOnly.default(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      var json = typeof data === 'string';
      var fd = new FormData();

=======
import NativePromise from 'native-promise-only';

const url = (formio) => {
  const xhrRequest = (url, name, query, data, options, onprogress) => {
    return new NativePromise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const json = (typeof data === 'string');
      const fd = new FormData();
>>>>>>> newFormio
      if (typeof onprogress === 'function') {
        xhr.upload.onprogress = onprogress;
      }

      if (!json) {
<<<<<<< HEAD
        for (var key in data) {
=======
        for (const key in data) {
>>>>>>> newFormio
          fd.append(key, data[key]);
        }
      }

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          // Need to test if xhr.response is decoded or not.
          var respData = {};

          try {
            respData = typeof xhr.response === 'string' ? JSON.parse(xhr.response) : {};
            respData = respData && respData.data ? respData.data : respData;
          } catch (err) {
            respData = {};
          } // Get the url of the file.


          var respUrl = respData.hasOwnProperty('url') ? respData.url : "".concat(xhr.responseURL, "/").concat(name); // If they provide relative url, then prepend the url.

          if (respUrl && respUrl[0] === '/') {
            respUrl = "".concat(url).concat(respUrl);
          }

<<<<<<< HEAD
          resolve({
            url: respUrl,
            data: respData
          });
        } else {
=======
          // Get the url of the file.
          let respUrl = respData.hasOwnProperty('url') ? respData.url : `${xhr.responseURL}/${name}`;

          // If they provide relative url, then prepend the url.
          if (respUrl && respUrl[0] === '/') {
            respUrl = `${url}${respUrl}`;
          }
          resolve({ url: respUrl, data: respData });
        }
        else {
>>>>>>> newFormio
          reject(xhr.response || 'Unable to upload file');
        }
      };

<<<<<<< HEAD
      xhr.onerror = function () {
        return reject(xhr);
      };

      xhr.onabort = function () {
        return reject(xhr);
      };

      var requestUrl = url + (url.indexOf('?') > -1 ? '&' : '?');

      for (var _key in query) {
        requestUrl += "".concat(_key, "=").concat(query[_key], "&");
      }

      if (requestUrl[requestUrl.length - 1] === '&') {
        requestUrl = requestUrl.substr(0, requestUrl.length - 1);
      }

      xhr.open('POST', requestUrl);

      if (json) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      var token = formio.getToken();

=======
      xhr.onerror = () => reject(xhr);
      xhr.onabort = () => reject(xhr);

      let requestUrl = url + (url.indexOf('?') > -1 ? '&' : '?');
      for (const key in query) {
        requestUrl += `${key}=${query[key]}&`;
      }
      if (requestUrl[requestUrl.length - 1] === '&') {
        requestUrl = requestUrl.substr(0, requestUrl.length - 1);
      }

      xhr.open('POST', requestUrl);
      if (json) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }
      const token = formio.getToken();
>>>>>>> newFormio
      if (token) {
        xhr.setRequestHeader('x-jwt-token', token);
      } //Overrides previous request props


      if (options) {
        var parsedOptions = JSON.parse(options);

        for (var prop in parsedOptions) {
          xhr[prop] = parsedOptions[prop];
        }
      }

<<<<<<< HEAD
=======
      //Overrides previous request props
      if (options) {
        const parsedOptions = typeof options === 'string' ? JSON.parse(options) : options;
        for (const prop in parsedOptions) {
          xhr[prop] = parsedOptions[prop];
        }
      }
>>>>>>> newFormio
      xhr.send(json ? data : fd);
    });
  };

  return {
    title: 'Url',
    name: 'url',
<<<<<<< HEAD
    uploadFile: function uploadFile(file, name, dir, progressCallback, url, options) {
      var uploadRequest = function uploadRequest(form) {
=======
    uploadFile(file, name, dir, progressCallback, url, options, fileKey) {
      const uploadRequest = function(form) {
>>>>>>> newFormio
        return xhrRequest(url, name, {
          baseUrl: encodeURIComponent(formio.projectUrl),
          project: form ? form.project : '',
          form: form ? form._id : ''
        }, {
<<<<<<< HEAD
          file: file,
          name: name,
          dir: dir
        }, options, progressCallback).then(function (response) {
=======
          [fileKey]:file,
          name,
          dir
        }, options, progressCallback).then(response => {
>>>>>>> newFormio
          // Store the project and form url along with the metadata.
          response.data = response.data || {};
          response.data.baseUrl = formio.projectUrl;
          response.data.project = form ? form.project : '';
          response.data.form = form ? form._id : '';
          return {
            storage: 'url',
<<<<<<< HEAD
            name: name,
=======
            name,
>>>>>>> newFormio
            url: response.url,
            size: file.size,
            type: file.type,
            data: response.data
          };
        });
      };
<<<<<<< HEAD

      if (file.private && formio.formId) {
        return formio.loadForm().then(function (form) {
          return uploadRequest(form);
        });
      } else {
        return uploadRequest();
      }
    },
    downloadFile: function downloadFile(file) {
=======
      if (file.private && formio.formId) {
        return formio.loadForm().then((form) => uploadRequest(form));
      }
      else {
        return uploadRequest();
      }
    },
    deleteFile(fileInfo) {
      return new NativePromise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', fileInfo.url, true);
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve('File deleted');
          }
          else {
            reject(xhr.response || 'Unable to delete file');
          }
        };
        xhr.send(null);
      });
    },

    downloadFile(file) {
>>>>>>> newFormio
      if (file.private) {
        if (formio.submissionId && file.data) {
          file.data.submission = formio.submissionId;
        }
<<<<<<< HEAD

        return xhrRequest(file.url, file.name, {}, JSON.stringify(file)).then(function (response) {
          return response.data;
        });
      } // Return the original as there is nothing to do.


      return _nativePromiseOnly.default.resolve(file);
=======
        return xhrRequest(file.url, file.name, {}, JSON.stringify(file)).then(response => response.data);
      }

      // Return the original as there is nothing to do.
      return NativePromise.resolve(file);
>>>>>>> newFormio
    }
  };
};

url.title = 'Url';
var _default = url;
exports.default = _default;
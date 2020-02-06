<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
=======
import NativePromise from 'native-promise-only';
const base64 = () => ({
  title: 'Base64',
  name: 'base64',
  uploadFile(file, fileName) {
    const reader = new FileReader();

    return new NativePromise((resolve, reject) => {
      reader.onload = (event) => {
        const url = event.target.result;
        resolve({
          storage: 'base64',
          name: fileName,
          url: url,
          size: file.size,
          type: file.type,
        });
      };

      reader.onerror = () => {
        return reject(this);
      };

      reader.readAsDataURL(file);
    });
  },
  downloadFile(file) {
    // Return the original as there is nothing to do.
    return NativePromise.resolve(file);
  }
>>>>>>> newFormio
});
exports.default = void 0;

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base64 = function base64() {
  return {
    title: 'Base64',
    name: 'base64',
    uploadFile: function uploadFile(file, fileName) {
      var _this = this;

      var reader = new FileReader();
      return new _nativePromiseOnly.default(function (resolve, reject) {
        reader.onload = function (event) {
          var url = event.target.result;
          resolve({
            storage: 'base64',
            name: fileName,
            url: url,
            size: file.size,
            type: file.type
          });
        };

        reader.onerror = function () {
          return reject(_this);
        };

        reader.readAsDataURL(file);
      });
    },
    downloadFile: function downloadFile(file) {
      // Return the original as there is nothing to do.
      return _nativePromiseOnly.default.resolve(file);
    }
  };
};

base64.title = 'Base64';
var _default = base64;
exports.default = _default;
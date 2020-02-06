<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("./base64"));

var _dropbox = _interopRequireDefault(require("./dropbox"));

var _s = _interopRequireDefault(require("./s3"));

var _azure = _interopRequireDefault(require("./azure"));

var _url = _interopRequireDefault(require("./url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  base64: _base.default,
  dropbox: _dropbox.default,
  s3: _s.default,
  url: _url.default,
  azure: _azure.default
=======
import base64 from './base64';
import dropbox from './dropbox';
import s3 from './s3';
import azure from './azure';
import url from './url';
import indexeddb from './indexeddb';

export default {
  base64,
  dropbox,
  s3,
  url,
  azure,
  indexeddb,
>>>>>>> newFormio
};
exports.default = _default;
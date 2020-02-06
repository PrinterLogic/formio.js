<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _TextField = _interopRequireDefault(require("../textfield/TextField.form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return _TextField.default.apply(void 0, arguments);
}
=======
import textEditForm from '../textfield/TextField.form';

import UrlEditDisplay from './editForm/Url.edit.display';
import UrlEditData from './editForm/Url.edit.data';

export default function(...extend) {
  return textEditForm([
    {
      key: 'display',
      components: UrlEditDisplay
    },
    {
      key: 'data',
      components: UrlEditData
    },
  ], ...extend);
}
>>>>>>> newFormio

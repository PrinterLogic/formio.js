<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _TextField = _interopRequireDefault(require("../textfield/TextField.form"));

var _PasswordEdit = _interopRequireDefault(require("./editForm/Password.edit.display"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _TextField.default.apply(void 0, [[{
    key: 'display',
    components: _PasswordEdit.default
  }]].concat(extend));
}
=======
import textEditForm from '../textfield/TextField.form';

import PasswordEditDisplay from './editForm/Password.edit.display';
import PasswordEditData from './editForm/Password.edit.data';
import PasswordEditValidation from './editForm/Password.edit.validation';

export default function(...extend) {
  return textEditForm([
    {
      key: 'data',
      components: PasswordEditData
    },
    {
      key: 'display',
      components: PasswordEditDisplay
    },
    {
      key: 'validation',
      components: PasswordEditValidation
    }
  ], ...extend);
}
>>>>>>> newFormio

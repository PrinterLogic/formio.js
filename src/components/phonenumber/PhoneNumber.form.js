<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _TextField = _interopRequireDefault(require("../textfield/TextField.form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _TextField.default.apply(void 0, [[]].concat(extend));
}
=======
import textEditForm from '../textfield/TextField.form';

import PhoneNumberEditValidation from './editForm/PhoneNumber.edit.validation';

export default function(...extend) {
  return textEditForm([
    {
      key: 'display',
      components: [
        {
          key: 'showWordCount',
          ignore: true
        },
        {
          key: 'showCharCount',
          ignore: true
        }
      ]
    },
    {
      key: 'validation',
      components: PhoneNumberEditValidation
    }
  ], ...extend);
}
>>>>>>> newFormio

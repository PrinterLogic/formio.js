<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return _Base.default.apply(void 0, arguments);
}
=======
import baseEditForm from '../textfield/TextField.form';
import EmailEditFormDisplay from './editForm/Email.edit.display';
import EmailEditFormValidation from './editForm/Email.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: EmailEditFormDisplay,
    },
    {
      key: 'validation',
      components: EmailEditFormValidation,
    }
  ], ...extend);
}
>>>>>>> newFormio

<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

var _SignatureEdit = _interopRequireDefault(require("./editForm/Signature.edit.display"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base.default.apply(void 0, [[{
    key: 'display',
    components: _SignatureEdit.default
  }]].concat(extend));
}
=======
import baseEditForm from '../_classes/component/Component.form';

import SignatureEditData from './editForm/Signature.edit.data';
import SignatureEditDisplay from './editForm/Signature.edit.display';
import SignatureEditValidation from './editForm/Signature.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: SignatureEditDisplay
    },
    {
      key: 'data',
      components: SignatureEditData
    },
    {
      key: 'validation',
      components: SignatureEditValidation
    },
  ], ...extend);
}
>>>>>>> newFormio

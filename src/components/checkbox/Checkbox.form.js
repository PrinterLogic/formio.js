<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

var _CheckboxEdit = _interopRequireDefault(require("./editForm/Checkbox.edit.display"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base.default.apply(void 0, [[{
    key: 'display',
    components: _CheckboxEdit.default
  }]].concat(extend));
}
=======
import baseEditForm from '../_classes/component/Component.form';

import CheckboxEditData from './editForm/Checkbox.edit.data';
import CheckboxEditDisplay from './editForm/Checkbox.edit.display';
import CheckboxEditValidation from './editForm/Checkbox.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'data',
      components: CheckboxEditData
    },
    {
      key: 'display',
      components: CheckboxEditDisplay
    },
    {
      key: 'validation',
      components: CheckboxEditValidation
    },
  ], ...extend);
}
>>>>>>> newFormio

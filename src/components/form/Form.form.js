<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _NestedComponent = _interopRequireDefault(require("../nested/NestedComponent.form"));

var _FormEdit = _interopRequireDefault(require("./editForm/Form.edit.form"));

var _FormEdit2 = _interopRequireDefault(require("./editForm/Form.edit.data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _NestedComponent.default.apply(void 0, [[{
    label: 'Form',
    key: 'form',
    weight: 10,
    components: _FormEdit.default
  }, {
    label: 'Data',
    key: 'data',
    weight: 10,
    components: _FormEdit2.default
  }]].concat(extend));
}
=======
import nestedComponentForm from '../_classes/nested/NestedComponent.form';
import FormEditDisplay from './editForm/Form.edit.display';
import FormEditForm from './editForm/Form.edit.form';
import FormEditData from './editForm/Form.edit.data';

export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: FormEditDisplay
    },
    {
      label: 'Form',
      key: 'form',
      weight: 10,
      components: FormEditForm
    },
    {
      label: 'Data',
      key: 'data',
      weight: 10,
      components: FormEditData
    }
  ], ...extend);
}
>>>>>>> newFormio

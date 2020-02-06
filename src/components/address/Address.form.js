<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

var _AddressEdit = _interopRequireDefault(require("./editForm/Address.edit.display"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base.default.apply(void 0, [[{
    key: 'display',
    components: _AddressEdit.default
  }]].concat(extend));
}
=======
import baseEditForm from '../_classes/component/Component.form';

import AddressEditData from './editForm/Address.edit.data';
import AddressEditDisplay from './editForm/Address.edit.display';
import AddressEditProvider from './editForm/Address.edit.provider';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'data',
      components: AddressEditData,
    },
    {
      key: 'display',
      components: AddressEditDisplay,
    },
    {
      label: 'Provider',
      key: 'provider',
      weight: 15,
      components: AddressEditProvider,
    },
  ], ...extend);
}
>>>>>>> newFormio

<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

var _DataGridEdit = _interopRequireDefault(require("./editForm/DataGrid.edit.display"));

var _DataGridEdit2 = _interopRequireDefault(require("./editForm/DataGrid.edit.validation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base.default.apply(void 0, [[{
    key: 'display',
    components: _DataGridEdit.default
  }, {
    key: 'validation',
    components: _DataGridEdit2.default
  }]].concat(extend));
}
=======
import baseEditForm from '../_classes/component/Component.form';

import DataGridEditData from './editForm/DataGrid.edit.data';
import DataGridEditDisplay from './editForm/DataGrid.edit.display';
import DataGridEditValidation from './editForm/DataGrid.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: DataGridEditDisplay
    },
    {
      key: 'data',
      components: DataGridEditData
    },
    {
      key: 'validation',
      components: DataGridEditValidation
    }
  ], ...extend);
}
>>>>>>> newFormio

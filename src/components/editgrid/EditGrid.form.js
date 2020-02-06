<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

var _EditGridEdit = _interopRequireDefault(require("./editForm/EditGrid.edit.data"));

var _EditGridEdit2 = _interopRequireDefault(require("./editForm/EditGrid.edit.templates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base.default.apply(void 0, [[{
    label: 'Templates',
    key: 'templates',
    weight: 5,
    components: _EditGridEdit2.default
  }, {
    key: 'data',
    components: _EditGridEdit.default
  }]].concat(extend));
}
=======
import baseEditForm from '../_classes/component/Component.form';

import EditGridEditData from './editForm/EditGrid.edit.data';
import EditGridEditDisplay from './editForm/EditGrid.edit.display';
import EditGridEditTemplates from './editForm/EditGrid.edit.templates';
import EditGridEditValidation from './editForm/EditGrid.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      label: 'Templates',
      key: 'templates',
      weight: 5,
      components: EditGridEditTemplates
    },
    {
      key: 'display',
      components: EditGridEditDisplay,
    },
    {
      key: 'data',
      components: EditGridEditData,
    },
    {
      key: 'validation',
      components: EditGridEditValidation
    }
  ], ...extend);
}
>>>>>>> newFormio

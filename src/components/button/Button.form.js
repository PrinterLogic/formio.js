<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

var _ButtonEdit = _interopRequireDefault(require("./editForm/Button.edit.display"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base.default.apply(void 0, [[{
    key: 'display',
    components: _ButtonEdit.default
  }]].concat(extend));
}
=======
import baseEditForm from '../_classes/component/Component.form';

import ButtonEditDisplay from './editForm/Button.edit.display';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: ButtonEditDisplay
    },
    {
      key: 'data',
      ignore: true,
    },
    {
      key: 'validation',
      ignore: true,
    },
  ], ...extend);
}
>>>>>>> newFormio

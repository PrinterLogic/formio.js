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
import baseEditForm from '../_classes/component/Component.form';

import HiddenEditDisplay from './editForm/Hidden.edit.display';
import HiddenEditData from './editForm/Hidden.edit.data';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: HiddenEditDisplay
    },
    {
      key: 'data',
      components: HiddenEditData
    },
    {
      key: 'validation',
      ignore: true
    },
    {
      key: 'conditional',
      ignore: true
    },
  ], ...extend);
}
>>>>>>> newFormio

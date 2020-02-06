<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _NestedComponent = _interopRequireDefault(require("../nested/NestedComponent.form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return _NestedComponent.default.apply(void 0, arguments);
}
=======
import nestedComponentForm from '../_classes/nested/NestedComponent.form';

import WellEditDisplay from './editForm/Well.edit.display';

export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: WellEditDisplay
    }
  ], ...extend);
}
>>>>>>> newFormio

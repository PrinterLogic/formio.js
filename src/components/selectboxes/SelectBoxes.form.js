<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Radio = _interopRequireDefault(require("../radio/Radio.form"));

var _SelectBoxesEdit = _interopRequireDefault(require("./editSelectBoxes/SelectBoxes.edit.validation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Radio.default.apply(void 0, [[{
    key: 'validation',
    components: _SelectBoxesEdit.default
  }]].concat(extend));
}
=======
import radioEditForm from '../radio/Radio.form';
import SelectBoxesEditValidation from './editForm/SelectBoxes.edit.validation';

export default function(...extend) {
  return radioEditForm([
    {
      key: 'data',
      components: [
        {
          key: 'dataType',
          ignore: true,
        }
      ]
    },
    {
      key: 'validation',
      components: SelectBoxesEditValidation
    }
  ], ...extend);
}
>>>>>>> newFormio

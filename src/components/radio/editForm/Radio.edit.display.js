<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _builder = _interopRequireDefault(require("../../../utils/builder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [

// {
//   type: 'checkbox',
//   input: true,
//   key: 'inline',
//   label: 'Inline Layout',
//   tooltip: 'Displays the checkboxes/radios horizontally.',
//   weight: 650
// }
=======
export default [
  {
    key: 'placeholder',
    ignore: true
  },
  {
    type: 'select',
    input: true,
    label: 'Options Label Position',
    key: 'optionsLabelPosition',
    tooltip: 'Position for the label for options for this field.',
    dataSrc: 'values',
    weight: 32,
    defaultValue: 'right',
    data: {
      values: [
        { label: 'Top', value: 'top' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'Bottom', value: 'bottom' }
      ]
    }
  },
  {
    type: 'checkbox',
    input: true,
    key: 'inline',
    label: 'Inline Layout',
    tooltip: 'Displays the checkboxes/radios horizontally.',
    weight: 650
  }
>>>>>>> newFormio
];
exports.default = _default;
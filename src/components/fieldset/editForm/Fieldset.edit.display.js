<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: 'label',
  hidden: true,
  calculateValue: 'value = data.legend'
}, {
  weight: 1,
  type: 'textfield',
  input: true,
  key: 'legend',
  label: 'Legend',
  placeholder: 'Legend',
  tooltip: 'The legend for this Fieldset.'
}];
exports.default = _default;
=======
export default [
  {
    key: 'labelPosition',
    ignore: true
  },
  {
    key: 'placeholder',
    ignore: true
  },
  {
    key: 'description',
    ignore: true
  },
  {
    key: 'hideLabel',
    ignore: true
  },
  {
    key: 'autofocus',
    ignore: true
  },
  {
    key: 'label',
    hidden: true,
    calculateValue(context) {
      return context.data.legend;
    }
  },
  {
    weight: 1,
    type: 'textfield',
    input: true,
    key: 'legend',
    label: 'Legend',
    placeholder: 'Legend',
    tooltip: 'The legend for this Fieldset.'
  },
];
>>>>>>> newFormio

<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;


var _default = [
  {
    weight: 100,
    type: 'textfield',
    input: true,
    key: 'placeholder',
    label: 'Placeholder',
    placeholder: 'Placeholder',
    tooltip: 'The placeholder text that will appear when this field is empty.'
  },
];
exports.default = _default;
=======
export default [
  {
    type: 'select',
    input: true,
    weight: 20,
    tooltip: 'Select the type of widget you\'d like to use.',
    key: 'widget',
    defaultValue: 'choicesjs',
    label: 'Widget Type',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'ChoicesJS', value: 'choicesjs' },
        { label: 'HTML 5', value: 'html5' },
      ],
    },
  },
];
>>>>>>> newFormio

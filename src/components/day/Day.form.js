<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

var _DayEdit = _interopRequireDefault(require("./editForm/Day.edit.display"));

var _DayEdit2 = _interopRequireDefault(require("./editForm/Day.edit.validation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base.default.apply(void 0, [[{
    key: 'display',
    components: _DayEdit.default
  }, {
    key: 'validation',
    components: _DayEdit2.default
  }]].concat(extend));
}
=======
import baseEditForm from '../_classes/component/Component.form';

import DayEditData from './editForm/Day.edit.data';
import DayEditDisplay from './editForm/Day.edit.display';
import DayEditValidation from './editForm/Day.edit.validation';
import DayEditDay from './editForm/Day.edit.day';
import DayEditMonth from './editForm/Day.edit.month';
import DayEditYear from './editForm/Day.edit.year';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: DayEditDisplay
    },
    {
      key: 'data',
      components: DayEditData,
    },
    {
      key: 'validation',
      components: DayEditValidation
    },
    {
      key: 'day',
      label: 'Day',
      weight: 3,
      components: DayEditDay
    },
    {
      key: 'month',
      label: 'Month',
      weight: 3,
      components: DayEditMonth
    },
    {
      key: 'year',
      label: 'Year',
      weight: 3,
      components: DayEditYear
    },
  ], ...extend);
}
>>>>>>> newFormio

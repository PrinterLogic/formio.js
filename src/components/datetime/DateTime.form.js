<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

var _DateTimeEdit = _interopRequireDefault(require("./editForm/DateTime.edit.data"));

var _DateTimeEdit2 = _interopRequireDefault(require("./editForm/DateTime.edit.validation"));

var _DateTimeEdit3 = _interopRequireDefault(require("./editForm/DateTime.edit.display"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base.default.apply(void 0, [[{
    key: 'display',
    components: _DateTimeEdit3.default
  }, {
    key: 'data',
    components: _DateTimeEdit.default
  }, {
    key: 'validation',
    components: _DateTimeEdit2.default
  }]].concat(extend));
}
=======
import baseEditForm from '../_classes/component/Component.form';

import DateTimeEditData from './editForm/DateTime.edit.data';
import DateTimeEditDate from './editForm/DateTime.edit.date';
import DateTimeEditDisplay from './editForm/DateTime.edit.display';
import DateTimeEditTime from './editForm/DateTime.edit.time';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: DateTimeEditDisplay
    },
    {
      label: 'Date',
      key: 'date',
      weight: 1,
      components: DateTimeEditDate
    },
    {
      label: 'Time',
      key: 'time',
      weight: 2,
      components: DateTimeEditTime
    },
    {
      key: 'data',
      components: DateTimeEditData
    }
  ], ...extend);
}
>>>>>>> newFormio

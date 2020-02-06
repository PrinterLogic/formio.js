<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InputWidget = _interopRequireDefault(require("./InputWidget"));

var _CalendarWidget = _interopRequireDefault(require("./CalendarWidget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  input: _InputWidget.default,
  calendar: _CalendarWidget.default
};
exports.default = _default;
=======
import InputWidget from './InputWidget';
import CalendarWidget from './CalendarWidget';
export default {
  input: InputWidget,
  calendar: CalendarWidget
};
>>>>>>> newFormio

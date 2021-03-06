<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("../../base/editForm/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var _default = [_utils.default.javaScriptValue('Custom Default Value', 'customDefaultValue', 'customDefaultValue', 120, '<p><h4>Example:</h4><pre>value = data.firstName + " " + data.lastName;</pre></p>', '<p><h4>Example:</h4><pre>{"cat": [{"var": "data.firstName"}, " ", {"var": "data.lastName"}]}</pre>'), _utils.default.javaScriptValue('Calculated Value', 'calculateValue', 'calculateValue', 130, '<p><h4>Example:</h4><pre>value = data.a + data.b + data.c;</pre></p>', '<p><h4>Example:</h4><pre>{"sum": [{"var": "data.a"}, {"var": "data.b"}, {"var": "data.c"}]}</pre><p><a target="_blank" href="http://formio.github.io/formio.js/app/examples/calculated.html">Click here for an example</a></p>')];
/* eslint-enable max-len */

exports.default = _default;
=======
import EditFormUtils from '../../_classes/component/editForm/utils';
/* eslint-disable max-len */
export default [
  EditFormUtils.javaScriptValue('Custom Default Value', 'customDefaultValue', 'customDefaultValue', 120,
    '<p><h4>Example:</h4><pre>value = data.firstName + " " + data.lastName;</pre></p>',
    '<p><h4>Example:</h4><pre>{"cat": [{"var": "data.firstName"}, " ", {"var": "data.lastName"}]}</pre>'
  ),
  EditFormUtils.javaScriptValue('Calculated Value', 'calculateValue', 'calculateValue', 130,
    '<p><h4>Example:</h4><pre>value = data.a + data.b + data.c;</pre></p>',
    '<p><h4>Example:</h4><pre>{"+": [{"var": "data.a"}, {"var": "data.b"}, {"var": "data.c"}]}</pre><p><a target="_blank" href="http://formio.github.io/formio.js/app/examples/calculated.html">Click here for an example</a></p>'
  )
];
/* eslint-enable max-len */
>>>>>>> newFormio

<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

var _SurveyEdit = _interopRequireDefault(require("./editForm/Survey.edit.display"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base.default.apply(void 0, [[{
    key: 'display',
    components: _SurveyEdit.default
  }]].concat(extend));
}
=======
import baseEditForm from '../_classes/component/Component.form';
import SurveyEditData from './editForm/Survey.edit.data';
import SurveyEditDisplay from './editForm/Survey.edit.display';
import SurveyEditValidation from './editForm/Survey.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: SurveyEditDisplay
    },
    {
      key: 'data',
      components: SurveyEditData
    },
    {
      key: 'validation',
      components: SurveyEditValidation
    },
  ], ...extend);
}
>>>>>>> newFormio

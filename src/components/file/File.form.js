<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _Base = _interopRequireDefault(require("../base/Base.form"));

var _FileEdit = _interopRequireDefault(require("./editForm/File.edit.file"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base.default.apply(void 0, [[{
    label: 'File',
    key: 'file',
    weight: 5,
    components: _FileEdit.default
  }]].concat(extend));
}
=======
import baseEditForm from '../_classes/component/Component.form';

import FileEditData from './editForm/File.edit.data';
import FileEditDisplay from './editForm/File.edit.display';
import FileEditFile from './editForm/File.edit.file';
import FileEditValidation from './editForm/File.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: FileEditDisplay
    },
    {
      key: 'data',
      components: FileEditData
    },
    {
      label: 'File',
      key: 'file',
      weight: 5,
      components: FileEditFile
    },
    {
      key: 'validation',
      components: FileEditValidation
    },
  ], ...extend);
}
>>>>>>> newFormio

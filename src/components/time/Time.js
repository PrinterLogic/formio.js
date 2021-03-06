<<<<<<< HEAD
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _TextField = _interopRequireDefault(require("../textfield/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TimeComponent =
/*#__PURE__*/
function (_TextFieldComponent) {
  _inherits(TimeComponent, _TextFieldComponent);

  _createClass(TimeComponent, null, [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _TextField.default.schema.apply(_TextField.default, [{
        type: 'time',
        label: 'Time',
        key: 'time',
        inputType: 'time',
        format: 'HH:mm'
      }].concat(extend));
    }
  }]);

  function TimeComponent(component, options, data) {
    var _this;

    _classCallCheck(this, TimeComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeComponent).call(this, component, options, data)); //check if <input type="time" /> is supported to fallback to input with mask (for Safari and IE)

    var input = _this.ce('time');

    _this.timeInputSupported = input.type === 'time';

    if (!_this.timeInputSupported) {
      _this.component.inputMask = '99:99';
    }

    return _this;
=======
import moment from 'moment';
import TextFieldComponent from '../textfield/TextField';

const defaultDataFormat = 'HH:mm:ss';

export default class TimeComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
      type: 'time',
      label: 'Time',
      key: 'time',
      inputType: 'time',
      format: 'HH:mm',
      dataFormat: defaultDataFormat,
    }, ...extend);
  }

  constructor(component, options, data) {
    super(component, options, data);

    this.component.inputMask = '99:99';
    this.component.inputType = this.component.inputType || 'time';
  }

  static get builderInfo() {
    return {
      title: 'Time',
      icon: 'clock-o',
      group: 'advanced',
      documentation: 'http://help.form.io/userguide/#time',
      weight: 55,
      schema: TimeComponent.schema(),
    };
  }

  get dataFormat() {
    return this.component.dataFormat || defaultDataFormat;
  }

  get defaultSchema() {
    return TimeComponent.schema();
  }

  get defaultValue() {
    let value = super.defaultValue;
    if (this.component.multiple && Array.isArray(value)) {
      value = value.map(item => item ? this.getStringAsValue(item) : item);
    }
    else {
      if (value) {
        value = this.getStringAsValue(value);
      }
    }
    return value;
  }

  get inputInfo() {
    const info = super.inputInfo;
    info.attr.type = this.component.inputType;
    return info;
  }

  get skipMaskValidation() {
    return true;
  }

  getValueAt(index) {
    if (!this.refs.input.length || !this.refs.input[index]) {
      return this.emptyValue;
    }
    const { value } = this.refs.input[index];
    if (!value) {
      return this.emptyValue;
    }

    return this.getStringAsValue(value);
  }

  setValueAt(index, value) {
    this.refs.input[index].value = value ? this.getValueAsString(value) : value;
  }

  getStringAsValue(view) {
    return view ? moment(view, this.component.format).format(this.dataFormat) : view;
  }

  getValueAsString(value) {
    return (value ? moment(value, this.dataFormat).format(this.component.format) : value) || '';
>>>>>>> newFormio
  }

  _createClass(TimeComponent, [{
    key: "elementInfo",
    value: function elementInfo() {
      var info = _get(_getPrototypeOf(TimeComponent.prototype), "elementInfo", this).call(this);

      info.attr.type = 'time';
      return info;
    }
  }, {
    key: "getValueAt",
    value: function getValueAt(index) {
      if (!this.inputs.length || !this.inputs[index]) {
        return this.emptyValue;
      }

      var val = this.inputs[index].value;

      if (!val) {
        return this.emptyValue;
      }

      return (0, _moment.default)(val, this.component.format).format('HH:mm:ss');
    }
  }, {
    key: "setValueAt",
    value: function setValueAt(index, value) {
      this.inputs[index].value = value ? (0, _moment.default)(value, 'HH:mm:ss').format(this.component.format) : value;
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return TimeComponent.schema();
    }
  }], [{
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Time',
        icon: 'fa fa-clock-o',
        group: 'basic',
        documentation: 'http://help.form.io/userguide/#time',
        weight: 60,
        schema: TimeComponent.schema()
      };
    }
  }]);

  return TimeComponent;
}(_TextField.default);

exports.default = TimeComponent;
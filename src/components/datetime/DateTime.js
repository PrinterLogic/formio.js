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

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _Base = _interopRequireDefault(require("../base/Base"));

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

var DateTimeComponent =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(DateTimeComponent, _BaseComponent);

  _createClass(DateTimeComponent, null, [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _Base.default.schema.apply(_Base.default, [{
        type: 'datetime',
        label: 'Date / Time',
        key: 'dateTime',
        format: 'yyyy-MM-dd hh:mm a',
        useLocaleSettings: false,
        allowInput: true,
        enableDate: true,
        enableTime: true,
        defaultDate: '',
        displayInTimezone: 'viewer',
        timezone: '',
        datepickerMode: 'day',
        datePicker: {
          showWeeks: true,
          startingDay: 0,
          initDate: '',
          minMode: 'day',
          maxMode: 'year',
          yearRows: 4,
          yearColumns: 5,
          minDate: null,
          maxDate: null
        },
        timePicker: {
          hourStep: 1,
          minuteStep: 1,
          showMeridian: true,
          readonlyInput: false,
          mousewheel: true,
          arrowkeys: true
        }
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Date / Time',
        group: 'advanced',
        icon: 'fa fa-calendar-plus-o',
        documentation: 'http://help.form.io/userguide/#datetime',
        weight: 40,
        schema: DateTimeComponent.schema()
      };
    }
  }]);

  function DateTimeComponent(component, options, data) {
    var _this;

    _classCallCheck(this, DateTimeComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimeComponent).call(this, component, options, data));
    var timezone = _this.component.timezone || _this.options.timezone;
    var time24hr = !_lodash.default.get(_this.component, 'timePicker.showMeridian', true); // Change the format to map to the settings.

    if (!_this.component.enableDate) {
      _this.component.format = _this.component.format.replace(/yyyy-MM-dd /g, '');
    }

    if (!_this.component.enableTime) {
      _this.component.format = _this.component.format.replace(/ hh:mm a$/g, '');
    } else if (time24hr) {
      _this.component.format = _this.component.format.replace(/hh:mm a$/g, 'HH:mm');
    } else {
      _this.component.format = _this.component.format.replace(/HH:mm$/g, 'hh:mm a');
    }
    /* eslint-disable camelcase */


    _this.originalComponent.widget = _this.component.widget = {
      type: 'calendar',
      timezone: timezone,
      displayInTimezone: _lodash.default.get(_this.component, 'displayInTimezone', 'viewer'),
      submissionTimezone: _this.submissionTimezone,
      language: _this.options.language,
      useLocaleSettings: _lodash.default.get(_this.component, 'useLocaleSettings', false),
      allowInput: _lodash.default.get(_this.component, 'allowInput', true),
      mode: _this.component.multiple ? 'multiple' : 'single',
      enableTime: _lodash.default.get(_this.component, 'enableTime', true),
      noCalendar: !_lodash.default.get(_this.component, 'enableDate', true),
      format: _this.component.format,
      defaultDate: _this.component.defaultDate,
      hourIncrement: _lodash.default.get(_this.component, 'timePicker.hourStep', 1),
      minuteIncrement: _lodash.default.get(_this.component, 'timePicker.minuteStep', 5),
      time_24hr: time24hr,
      readOnly: _this.options.readOnly,
      minDate: _lodash.default.get(_this.component, 'datePicker.minDate'),
      maxDate: _lodash.default.get(_this.component, 'datePicker.maxDate')
    };
    /* eslint-enable camelcase */
    // Add the validators date.

    _this.validators.push('date');

    return _this;
  }

  _createClass(DateTimeComponent, [{
    key: "performInputMapping",
    value: function performInputMapping(input) {
      if (input.widget && this.widget.settings) {
        input.widget.settings.submissionTimezone = this.submissionTimezone;
      }

      return input;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      if (value && value.toString() === 'Invalid Date') {
        return true;
      }

      return _get(_getPrototypeOf(DateTimeComponent.prototype), "isEmpty", this).call(this, value);
    } // This select component can handle multiple items on its own.

  }, {
    key: "createWrapper",
    value: function createWrapper() {
      return false;
=======
import _ from 'lodash';
import moment from 'moment';
import Input from '../_classes/input/Input';
import FormioUtils from '../../utils';
export default class DateTimeComponent extends Input {
  static schema(...extend) {
    return Input.schema({
      type: 'datetime',
      label: 'Date / Time',
      key: 'dateTime',
      format: 'yyyy-MM-dd hh:mm a',
      useLocaleSettings: false,
      allowInput: true,
      enableDate: true,
      enableTime: true,
      defaultValue: '',
      defaultDate: '',
      displayInTimezone: 'viewer',
      timezone: '',
      datepickerMode: 'day',
      datePicker: {
        showWeeks: true,
        startingDay: 0,
        initDate: '',
        minMode: 'day',
        maxMode: 'year',
        yearRows: 4,
        yearColumns: 5,
        minDate: null,
        maxDate: null
      },
      timePicker: {
        hourStep: 1,
        minuteStep: 1,
        showMeridian: true,
        readonlyInput: false,
        mousewheel: true,
        arrowkeys: true
      },
      customOptions: {},
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Date / Time',
      group: 'advanced',
      icon: 'calendar',
      documentation: 'http://help.form.io/userguide/#datetime',
      weight: 40,
      schema: DateTimeComponent.schema()
    };
  }

  constructor(component, options, data) {
    super(component, options, data);
    const timezone = (this.component.timezone || this.options.timezone);
    const time24hr = !_.get(this.component, 'timePicker.showMeridian', true);

    // Change the format to map to the settings.
    if (!this.component.enableDate) {
      this.component.format = this.component.format.replace(/yyyy-MM-dd /g, '');
    }
    if (!this.component.enableTime) {
      this.component.format = this.component.format.replace(/ hh:mm a$/g, '');
    }
    else if (time24hr) {
      this.component.format = this.component.format.replace(/hh:mm a$/g, 'HH:mm');
    }
    else {
      this.component.format = this.component.format.replace(/HH:mm$/g, 'hh:mm a');
    }

    let customOptions = this.component.customOptions || {};

    if (typeof customOptions === 'string') {
      try {
        customOptions = JSON.parse(customOptions);
      }
      catch (err) {
        console.warn(err.message);
        customOptions = {};
      }
    }

    /* eslint-disable camelcase */
    this.component.widget = {
      type: 'calendar',
      timezone,
      displayInTimezone: _.get(this.component, 'displayInTimezone', 'viewer'),
      submissionTimezone: this.submissionTimezone,
      language: this.options.language,
      useLocaleSettings: _.get(this.component, 'useLocaleSettings', false),
      allowInput: _.get(this.component, 'allowInput', true),
      mode: this.component.multiple ? 'multiple' : 'single',
      enableTime: _.get(this.component, 'enableTime', true),
      noCalendar: !_.get(this.component, 'enableDate', true),
      format: this.component.format,
      hourIncrement: _.get(this.component, 'timePicker.hourStep', 1),
      minuteIncrement: _.get(this.component, 'timePicker.minuteStep', 5),
      time_24hr: time24hr,
      readOnly: this.options.readOnly,
      minDate: _.get(this.component, 'datePicker.minDate'),
      disabledDates: _.get(this.component, 'datePicker.disable'),
      disableWeekends: _.get(this.component, 'datePicker.disableWeekends'),
      disableWeekdays: _.get(this.component, 'datePicker.disableWeekdays'),
      disableFunction: _.get(this.component, 'datePicker.disableFunction'),
      maxDate: _.get(this.component, 'datePicker.maxDate'),
      ...customOptions,
    };
    /* eslint-enable camelcase */

    // Add the validators date.
    this.validators.push('date');
  }

  performInputMapping(input) {
    if (input.widget && input.widget.settings) {
      input.widget.settings.submissionTimezone = this.submissionTimezone;
    }
    return input;
  }

  get defaultSchema() {
    return DateTimeComponent.schema();
  }

  get defaultValue() {
    let defaultValue = super.defaultValue;
    if (!defaultValue && this.component.defaultDate) {
      defaultValue = FormioUtils.getDateSetting(this.component.defaultDate);
      defaultValue = defaultValue ? defaultValue.toISOString() : '';
    }
    return defaultValue;
  }

  get emptyValue() {
    return '';
  }

  isEmpty(value = this.dataValue) {
    if (value && (value.toString() === 'Invalid Date')) {
      return true;
    }
    return super.isEmpty(value);
  }

  formatValue(input) {
    const result = moment.utc(input).toISOString();
    return result === 'Invalid date' ? input : result;
  }

  isEqual(valueA, valueB = this.dataValue) {
    const format = FormioUtils.convertFormatToMoment(this.component.format);
    return (this.isEmpty(valueA) && this.isEmpty(valueB))
      || moment.utc(valueA).format(format) === moment.utc(valueB).format(format);
  }

  createWrapper() {
    return false;
  }

  checkValidity(data, dirty, rowData) {
    if (this.refs.input) {
      this.refs.input.forEach((input) => {
        if (input.widget && input.widget.enteredDate) {
          dirty = true;
        }
      });
    }
    return super.checkValidity(data, dirty, rowData);
  }

  focus() {
    if (this.refs.input && this.refs.input[0]) {
      const sibling = this.refs.input[0].nextSibling;
      if (sibling) {
        sibling.focus();
      }
>>>>>>> newFormio
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return DateTimeComponent.schema();
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return '';
    }
  }]);

  return DateTimeComponent;
}(_Base.default);

exports.default = DateTimeComponent;
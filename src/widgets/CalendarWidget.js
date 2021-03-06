<<<<<<< HEAD
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.reflect.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flatpickr = _interopRequireDefault(require("flatpickr"));

var _InputWidget2 = _interopRequireDefault(require("./InputWidget"));

var _utils = require("../utils/utils");

var _moment = _interopRequireDefault(require("moment"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DEFAULT_FORMAT = 'yyyy-MM-dd hh:mm a';
var ISO_8601_FORMAT = 'yyyy-MM-ddTHH:mm:ssZ';

var CalendarWidget =
/*#__PURE__*/
function (_InputWidget) {
  _inherits(CalendarWidget, _InputWidget);

  _createClass(CalendarWidget, null, [{
    key: "defaultSettings",

    /* eslint-disable camelcase */
    get: function get() {
      return {
        type: 'calendar',
        altInput: true,
        allowInput: true,
        clickOpens: true,
        enableDate: true,
        enableTime: true,
        mode: 'single',
        noCalendar: false,
        format: DEFAULT_FORMAT,
        dateFormat: ISO_8601_FORMAT,
        useLocaleSettings: false,
        language: 'us-en',
        defaultDate: null,
        hourIncrement: 1,
        minuteIncrement: 5,
        time_24hr: false,
        saveAs: 'date',
        displayInTimezone: '',
        timezone: '',
        minDate: '',
        maxDate: ''
      };
    }
    /* eslint-enable camelcase */

  }]);

  function CalendarWidget(settings, component) {
    var _this;

    _classCallCheck(this, CalendarWidget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarWidget).call(this, settings, component)); // Change the format to map to the settings.

    if (_this.settings.noCalendar) {
      _this.settings.format = _this.settings.format.replace(/yyyy-MM-dd /g, '');
    }

    if (!_this.settings.enableTime) {
      _this.settings.format = _this.settings.format.replace(/ hh:mm a$/g, '');
    } else if (_this.settings.time_24hr) {
      _this.settings.format = _this.settings.format.replace(/hh:mm a$/g, 'HH:mm');
    }

    _this.component.suffix = true;
    return _this;
  }
=======
import Flatpickr from 'flatpickr';
import InputWidget from './InputWidget';
import {
  convertFormatToFlatpickr,
  convertFormatToMask,
  convertFormatToMoment,
  currentTimezone,
  formatDate,
  formatOffset,
  getDateSetting,
  getLocaleDateFormatInfo,
  momentDate,
  zonesLoaded,
  shouldLoadZones,
  loadZones
} from '../utils/utils';
import moment from 'moment';
import _ from 'lodash';
const DEFAULT_FORMAT = 'yyyy-MM-dd hh:mm a';
const ISO_8601_FORMAT = 'yyyy-MM-ddTHH:mm:ssZ';

export default class CalendarWidget extends InputWidget {
  /* eslint-disable camelcase */
  static get defaultSettings() {
    return {
      type: 'calendar',
      altInput: true,
      allowInput: true,
      clickOpens: true,
      enableDate: true,
      enableTime: true,
      mode: 'single',
      noCalendar: false,
      format: DEFAULT_FORMAT,
      dateFormat: ISO_8601_FORMAT,
      useLocaleSettings: false,
      language: 'us-en',
      hourIncrement: 1,
      minuteIncrement: 5,
      time_24hr: false,
      saveAs: 'date',
      displayInTimezone: '',
      timezone: '',
      disable: [],
      minDate: '',
      maxDate: ''
    };
  }
  /* eslint-enable camelcase */

  constructor(settings, component) {
    super(settings, component);
    // Change the format to map to the settings.
    if (this.settings.noCalendar) {
      this.settings.format = this.settings.format.replace(/yyyy-MM-dd /g, '');
    }
    if (!this.settings.enableTime) {
      this.settings.format = this.settings.format.replace(/ hh:mm a$/g, '');
    }
    else if (this.settings.time_24hr) {
      this.settings.format = this.settings.format.replace(/hh:mm a$/g, 'HH:mm');
    }
  }

>>>>>>> newFormio
  /**
   * Load the timezones.
   *
   * @return {boolean} TRUE if the zones are loading, FALSE otherwise.
   */
<<<<<<< HEAD


  _createClass(CalendarWidget, [{
    key: "loadZones",
    value: function loadZones() {
      var _this2 = this;

      var timezone = this.timezone;

      if (!(0, _utils.zonesLoaded)() && (0, _utils.shouldLoadZones)(timezone)) {
        (0, _utils.loadZones)(timezone).then(function () {
          return _this2.emit('redraw');
        }); // Return zones are loading.

        return true;
      } // Zones are already loaded.


      return false;
    }
  }, {
    key: "attach",
    value: function attach(input) {
      var _this3 = this;

      _get(_getPrototypeOf(CalendarWidget.prototype), "attach", this).call(this, input);

      if (input && !input.getAttribute('placeholder')) {
        input.setAttribute('placeholder', this.settings.format);
      }

      var dateFormatInfo = (0, _utils.getLocaleDateFormatInfo)(this.settings.language);
      this.defaultFormat = {
        date: dateFormatInfo.dayFirst ? 'd/m/Y ' : 'm/d/Y ',
        time: 'h:i K'
      };
      this.closedOn = 0;
      this.valueFormat = this.settings.dateFormat || ISO_8601_FORMAT;
      this.valueMomentFormat = (0, _utils.convertFormatToMoment)(this.valueFormat);
      this.settings.minDate = (0, _utils.getDateSetting)(this.settings.minDate);
      this.settings.maxDate = (0, _utils.getDateSetting)(this.settings.maxDate);
      this.settings.defaultDate = (0, _utils.getDateSetting)(this.settings.defaultDate);
      this.settings.altFormat = (0, _utils.convertFormatToFlatpickr)(this.settings.format);
      this.settings.dateFormat = (0, _utils.convertFormatToFlatpickr)(this.settings.dateFormat);

      this.settings.onChange = function () {
        return _this3.emit('update');
      };

      this.settings.onClose = function () {
        return _this3.closedOn = Date.now();
      };

      this.settings.formatDate = function (date, format) {
        // Only format this if this is the altFormat and the form is readOnly.
        if (_this3.settings.readOnly && format === _this3.settings.altFormat) {
          if (_this3.settings.saveAs === 'text' || _this3.loadZones()) {
            return _flatpickr.default.formatDate(date, format);
          }

          return (0, _utils.formatOffset)(_flatpickr.default.formatDate.bind(_flatpickr.default), date, format, _this3.timezone);
        }

        return _flatpickr.default.formatDate(date, format);
      };

      if (this._input) {
        // Create a new flatpickr.
        this.calendar = new _flatpickr.default(this._input, this.settings); // Enforce the input mask of the format.

        this.setInputMask(this.calendar._input, (0, _utils.convertFormatToMask)(this.settings.format)); // Make sure we commit the value after a blur event occurs.

        this.addEventListener(this.calendar._input, 'blur', function () {
          return _this3.calendar.setDate(_this3.calendar._input.value, true, _this3.settings.altFormat);
        });
      }
    }
  }, {
    key: "addSuffix",
    value: function addSuffix(container) {
      var _this4 = this;

      var suffix = this.ce('span', {
        class: 'input-group-addon input-group-append',
        style: 'cursor: pointer'
      });
      suffix.appendChild(this.ce('span', {
        class: 'input-group-text'
      }, this.getIcon(this.settings.enableDate ? 'calendar' : 'time')));
      this.addEventListener(suffix, 'click', function () {
        if (_this4.calendar && !_this4.calendar.isOpen && Date.now() - _this4.closedOn > 200) {
          _this4.calendar.open();
        }
      });
      container.appendChild(suffix);
      return suffix;
    }
  }, {
    key: "getDateValue",

    /**
     * Return the date value.
     *
     * @param date
     * @param format
     * @return {string}
     */
    value: function getDateValue(date, format) {
      return (0, _moment.default)(date).format((0, _utils.convertFormatToMoment)(format));
    }
    /**
     * Return the value of the selected date.
     *
     * @return {*}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      // Standard output format.
      if (!this.calendar) {
        return _get(_getPrototypeOf(CalendarWidget.prototype), "getValue", this).call(this);
      } // Get the selected dates from the calendar widget.


      var dates = this.calendar.selectedDates;

      if (!dates || !dates.length) {
        return _get(_getPrototypeOf(CalendarWidget.prototype), "getValue", this).call(this);
      }

      if (!(dates[0] instanceof Date)) {
        return 'Invalid Date';
      }

      return this.getDateValue(dates[0], this.valueFormat);
    }
    /**
     * Set the selected date value.
     *
     * @param value
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      if (!this.calendar) {
        return _get(_getPrototypeOf(CalendarWidget.prototype), "setValue", this).call(this, value);
      }

      if (value) {
        if (this.settings.saveAs !== 'text' && this.settings.readOnly && !this.loadZones()) {
          this.calendar.setDate((0, _utils.momentDate)(value, this.valueFormat, this.timezone).toDate(), false);
        } else {
          this.calendar.setDate((0, _moment.default)(value, this.valueMomentFormat).toDate(), false);
        }
      } else {
        this.calendar.clear(false);
      }
    }
  }, {
    key: "getView",
    value: function getView(value, format) {
      format = format || this.dateFormat;

      if (this.settings.saveAs === 'text') {
        return this.getDateValue(value, format);
      }

      return (0, _utils.formatDate)(value, format, this.timezone);
    }
  }, {
    key: "validationValue",
    value: function validationValue(value) {
      if (typeof value === 'string') {
        return new Date(value);
      }

      return value.map(function (val) {
        return new Date(val);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(CalendarWidget.prototype), "destroy", this).call(this);

      this.calendar.destroy();
    }
  }, {
    key: "timezone",
    get: function get() {
      if (this.settings.timezone) {
        return this.settings.timezone;
      }

      if (this.settings.displayInTimezone === 'submission' && this.settings.submissionTimezone) {
        return this.settings.submissionTimezone;
      }

      if (this.settings.displayInTimezone === 'utc') {
        return 'UTC';
      } // Return current timezone if none are provided.


      return (0, _utils.currentTimezone)();
    }
  }, {
    key: "defaultSettings",
    get: function get() {
      return CalendarWidget.defaultSettings;
    }
  }, {
    key: "disabled",
    set: function set(disabled) {
      _set(_getPrototypeOf(CalendarWidget.prototype), "disabled", disabled, this, true);

      if (this.calendar) {
        if (disabled) {
          this.calendar._input.setAttribute('disabled', 'disabled');
        } else {
          this.calendar._input.removeAttribute('disabled');
        }

        this.calendar.close();
        this.calendar.redraw();
      }
    }
  }, {
    key: "input",
    get: function get() {
      return this.calendar ? this.calendar.altInput : null;
    }
  }, {
    key: "localeFormat",
    get: function get() {
      var format = '';

      if (this.settings.enableDate) {
        format += this.defaultFormat.date;
      }

      if (this.settings.enableTime) {
        format += this.defaultFormat.time;
      }

      return format;
    }
  }, {
    key: "dateTimeFormat",
    get: function get() {
      return this.settings.useLocaleSettings ? this.localeFormat : (0, _utils.convertFormatToFlatpickr)(this.dateFormat);
    }
  }, {
    key: "dateFormat",
    get: function get() {
      return _lodash.default.get(this.settings, 'format', DEFAULT_FORMAT);
    }
    /**
     * Get the default date for the calendar.
     * @return {*}
     */

  }, {
    key: "defaultDate",
    get: function get() {
      return (0, _utils.getDateSetting)(this.settings.defaultDate);
    }
  }, {
    key: "defaultValue",
    get: function get() {
      var defaultDate = this.defaultDate;
      return defaultDate ? defaultDate.toISOString() : '';
    }
  }]);

  return CalendarWidget;
}(_InputWidget2.default);

exports.default = CalendarWidget;
=======
  loadZones() {
    const timezone = this.timezone;
    if (!zonesLoaded() && shouldLoadZones(timezone)) {
      loadZones(timezone).then(() => this.emit('redraw'));

      // Return zones are loading.
      return true;
    }

    // Zones are already loaded.
    return false;
  }

  attach(input) {
    const superAttach = super.attach(input);
    if (input && !input.getAttribute('placeholder')) {
      input.setAttribute('placeholder', this.settings.format);
    }

    const dateFormatInfo = getLocaleDateFormatInfo(this.settings.language);
    this.defaultFormat = {
      date: dateFormatInfo.dayFirst ? 'd/m/Y ' : 'm/d/Y ',
      time: 'G:i K'
    };

    this.closedOn = 0;
    this.valueFormat = this.settings.dateFormat || ISO_8601_FORMAT;

    this.valueMomentFormat = convertFormatToMoment(this.valueFormat);
    this.settings.minDate = getDateSetting(this.settings.minDate);
    this.settings.disable = this.disabledDates;
    this.settings.disableWeekends ? this.settings.disable.push(this.disableWeekends) : '';
    this.settings.disableWeekdays ? this.settings.disable.push(this.disableWeekdays) : '';
    this.settings.disableFunction ? this.settings.disable.push(this.disableFunction) : '';
    this.settings.maxDate = getDateSetting(this.settings.maxDate);
    this.settings.altFormat = convertFormatToFlatpickr(this.settings.format);
    this.settings.dateFormat = convertFormatToFlatpickr(this.settings.dateFormat);
    this.settings.onChange = () => this.emit('update');
    this.settings.onClose = () => {
      this.closedOn = Date.now();
      if (this.calendar) {
        this.emit('blur');
      }
    };
    this.settings.formatDate = (date, format) => {
      // Only format this if this is the altFormat and the form is readOnly.
      if (this.settings.readOnly && (format === this.settings.altFormat)) {
        if (this.settings.saveAs === 'text' || this.loadZones()) {
          return Flatpickr.formatDate(date, format);
        }

        return formatOffset(Flatpickr.formatDate.bind(Flatpickr), date, format, this.timezone);
      }

      return Flatpickr.formatDate(date, format);
    };

    if (this._input) {
      // Create a new flatpickr.
      this.calendar = new Flatpickr(this._input, this.settings);

      // Enforce the input mask of the format.
      this.setInputMask(this.calendar._input, convertFormatToMask(this.settings.format));

      // Make sure we commit the value after a blur event occurs.
      this.addEventListener(this.calendar._input, 'blur', () =>
        this.calendar.setDate(this.calendar._input.value, true, this.settings.altFormat)
      );
    }
    return superAttach;
  }

  get disableWeekends() {
    return function(date) {
      return (date.getDay() === 0 || date.getDay() === 6);
    };
  }

  get disableWeekdays() {
    return (date) => !this.disableWeekends(date);
  }

  get disableFunction() {
    return (date) => this.evaluate(`return ${this.settings.disableFunction}`, {
      date
    });
  }

  get timezone() {
    if (this.settings.timezone) {
      return this.settings.timezone;
    }
    if (this.settings.displayInTimezone === 'submission' && this.settings.submissionTimezone) {
      return this.settings.submissionTimezone;
    }
    if (this.settings.displayInTimezone === 'utc') {
      return 'UTC';
    }

    // Return current timezone if none are provided.
    return currentTimezone();
  }

  get defaultSettings() {
    return CalendarWidget.defaultSettings;
  }

  addSuffix(suffix) {
    this.addEventListener(suffix, 'click', () => {
      if (this.calendar && !this.calendar.isOpen && ((Date.now() - this.closedOn) > 200)) {
        this.calendar.open();
      }
    });
    return suffix;
  }

  set disabled(disabled) {
    super.disabled = disabled;
    if (this.calendar) {
      if (disabled) {
        this.calendar._input.setAttribute('disabled', 'disabled');
      }
      else {
        this.calendar._input.removeAttribute('disabled');
      }
      this.calendar.close();
      this.calendar.redraw();
    }
  }

  get input() {
    return this.calendar ? this.calendar.altInput : null;
  }

  get disabledDates() {
    if (this.settings.disabledDates) {
      const disabledDates = this.settings.disabledDates.split(',');
      return disabledDates.map((item) => {
        const dateMask = /\d{4}-\d{2}-\d{2}/g;
        const dates = item.match(dateMask);
        if (dates.length) {
          return dates.length === 1 ?  item.match(dateMask)[0] : {
            from: item.match(dateMask)[0],
            to: item.match(dateMask)[1],
          };
        }
      });
    }
    return [];
  }

  get localeFormat() {
    let format = '';

    if (this.settings.enableDate) {
      format += this.defaultFormat.date;
    }

    if (this.settings.enableTime) {
      format += this.defaultFormat.time;
    }

    return format;
  }

  get dateTimeFormat() {
    return this.settings.useLocaleSettings ? this.localeFormat : convertFormatToFlatpickr(this.dateFormat);
  }

  get dateFormat() {
    return _.get(this.settings, 'format', DEFAULT_FORMAT);
  }

  /**
   * Return the date value.
   *
   * @param date
   * @param format
   * @return {string}
   */
  getDateValue(date, format) {
    return moment(date).format(convertFormatToMoment(format));
  }

  /**
   * Return the value of the selected date.
   *
   * @return {*}
   */
  getValue() {
    // Standard output format.
    if (!this.calendar) {
      return super.getValue();
    }

    // Get the selected dates from the calendar widget.
    const dates = this.calendar.selectedDates;
    if (!dates || !dates.length) {
      return super.getValue();
    }

    if (!(dates[0] instanceof Date)) {
      return 'Invalid Date';
    }

    return this.getDateValue(dates[0], this.valueFormat);
  }

  /**
   * Set the selected date value.
   *
   * @param value
   */
  setValue(value) {
    if (!this.calendar) {
      return super.setValue(value);
    }
    if (value) {
      if ((this.settings.saveAs !== 'text') && this.settings.readOnly && !this.loadZones()) {
        this.calendar.setDate(momentDate(value, this.valueFormat, this.timezone).toDate(), false);
      }
      else {
        this.calendar.setDate(moment(value, this.valueMomentFormat).toDate(), false);
      }
    }
    else {
      this.calendar.clear(false);
    }
  }

  getValueAsString(value, format) {
    format = format || this.dateFormat;
    if (this.settings.saveAs === 'text') {
      return this.getDateValue(value, format);
    }

    return formatDate(value, format, this.timezone);
  }

  validationValue(value) {
    if (typeof value === 'string') {
      return new Date(value);
    }
    return value.map(val => new Date(val));
  }

  destroy() {
    super.destroy();
    if (this.calendar) {
      this.calendar.destroy();
    }
  }
}
>>>>>>> newFormio

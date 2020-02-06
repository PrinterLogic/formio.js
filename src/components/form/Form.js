<<<<<<< HEAD
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.reflect.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _Base = _interopRequireDefault(require("../base/Base"));

var _eventemitter = _interopRequireDefault(require("eventemitter2"));

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _utils = require("../../utils/utils");

var _Formio = _interopRequireDefault(require("../../Formio"));

var _Form = _interopRequireDefault(require("../../Form"));

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

var FormComponent =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(FormComponent, _BaseComponent);

  _createClass(FormComponent, null, [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _Base.default.schema.apply(_Base.default, [{
        label: 'Form',
        type: 'form',
        key: 'form',
        src: '',
        reference: true,
        form: '',
        path: ''
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Nested Form',
        icon: 'fa fa-wpforms',
        group: 'advanced',
        documentation: 'http://help.form.io/userguide/#form',
        weight: 110,
        schema: FormComponent.schema()
      };
    }
  }]);

  function FormComponent(component, options, data) {
    var _this;

    _classCallCheck(this, FormComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormComponent).call(this, component, options, data));
    _this.subForm = null;
    _this.formSrc = '';
    _this.subFormReady = new _nativePromiseOnly.default(function (resolve, reject) {
      _this.subFormReadyResolve = resolve;
      _this.subFormReadyReject = reject;
    });
    _this.subFormLoaded = false;

    _this.subscribe();

    return _this;
  }

  _createClass(FormComponent, [{
    key: "subscribe",
    value: function subscribe() {
      var _this2 = this;

      this.on('nosubmit', function (value) {
        _this2.nosubmit = value;
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var state = _get(_getPrototypeOf(FormComponent.prototype), "destroy", this).call(this) || {};

      if (this.subForm) {
        this.subForm.destroy();
      }

      return state;
    }
    /**
     * Render a subform.
     *
     * @param form
     * @param options
     */

  }, {
    key: "renderSubForm",
    value: function renderSubForm(form, options) {
      var _this3 = this;

      if (this.options.builder) {
        this.element.appendChild(this.ce('div', {
          class: 'text-muted text-center p-2'
        }, this.text(form.title)));
        return;
      }

      options.events = this.createEmitter(); // Iterate through every component and hide the submit button.

      (0, _utils.eachComponent)(form.components, function (component) {
        if (component.type === 'button' && (component.action === 'submit' || !component.action)) {
          component.hidden = true;
        }
      });
      new _Form.default(this.element, form, options).render().then(function (instance) {
        _this3.subForm = instance;
        _this3.subForm.root = _this3.root;
        _this3.subForm.currentForm = _this3;
        _this3.subForm.parent = _this3;
        _this3.subForm.parentVisible = _this3.visible;

        _this3.subForm.on('change', function () {
          _this3.dataValue = _this3.subForm.getValue();

          _this3.triggerChange({
            noEmit: true
          });
        });

        _this3.subForm.url = _this3.formSrc;
        _this3.subForm.nosubmit = _this3.nosubmit;

        _this3.restoreValue();

        _this3.subFormReadyResolve(_this3.subForm);

        return _this3.subForm;
      });
    }
  }, {
    key: "show",
    value: function show() {
      var _get2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var state = (_get2 = _get(_getPrototypeOf(FormComponent.prototype), "show", this)).call.apply(_get2, [this].concat(args));

      if (state && !this.subFormLoaded) {
        this.loadSubForm();
      }

      return state;
=======
import _ from 'lodash';
import Component from '../_classes/component/Component';
import EventEmitter from 'eventemitter2';
import NativePromise from 'native-promise-only';
import { isMongoId, eachComponent } from '../../utils/utils';
import Formio from '../../Formio';
import Form from '../../Form';

export default class FormComponent extends Component {
  static schema(...extend) {
    return Component.schema({
      label: 'Form',
      type: 'form',
      key: 'form',
      src: '',
      reference: true,
      form: '',
      path: '',
      tableView: true,
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Nested Form',
      icon: 'wpforms',
      group: 'premium',
      documentation: 'http://help.form.io/userguide/#form',
      weight: 110,
      schema: FormComponent.schema()
    };
  }

  init() {
    super.init();
    this.formObj = {
      display: this.component.display,
      settings: this.component.settings,
      components: this.component.components
    };
    this.subForm = null;
    this.formSrc = '';
    if (this.component.src) {
      this.formSrc = this.component.src;
>>>>>>> newFormio
    }
    /**
     * Load the subform.
     */

<<<<<<< HEAD
    /* eslint-disable max-statements */

  }, {
    key: "loadSubForm",
    value: function loadSubForm() {
      var _this4 = this;

      // Only load the subform if the subform isn't loaded and the conditions apply.
      if (this.subFormLoaded) {
        return this.subFormReady;
=======
    if (
      !this.component.src &&
      !this.options.formio &&
      (this.component.form || this.component.path)
    ) {
      if (this.component.project) {
        this.formSrc = Formio.getBaseUrl();
        // Check to see if it is a MongoID.
        if (isMongoId(this.component.project)) {
          this.formSrc += '/project';
        }
        this.formSrc += `/${this.component.project}`;
        this.options.project = this.formSrc;
      }
      else {
        this.formSrc = Formio.getProjectUrl();
        this.options.project = this.formSrc;
>>>>>>> newFormio
      }

      this.subFormLoaded = true;
      var srcOptions = {};

      if (this.options && this.options.base) {
        srcOptions.base = this.options.base;
      }

      if (this.options && this.options.project) {
        srcOptions.project = this.options.project;
      }

      if (this.options && this.options.readOnly) {
        srcOptions.readOnly = this.options.readOnly;
      }

      if (this.options && this.options.breadcrumbSettings) {
        srcOptions.breadcrumbSettings = this.options.breadcrumbSettings;
      }

      if (this.options && this.options.buttonSettings) {
        srcOptions.buttonSettings = this.options.buttonSettings;
      }

      if (this.options && this.options.icons) {
        srcOptions.icons = this.options.icons;
      }

      if (this.options && this.options.viewAsHtml) {
        srcOptions.viewAsHtml = this.options.viewAsHtml;
      }

      if (this.options && this.options.hide) {
        srcOptions.hide = this.options.hide;
      }

      if (this.options && this.options.show) {
        srcOptions.show = this.options.show;
      }

<<<<<<< HEAD
      if (_lodash.default.has(this.options, 'language')) {
        srcOptions.language = this.options.language;
      }

      if (this.component.src) {
        this.formSrc = this.component.src;
      }

      if (!this.component.src && !this.options.formio && (this.component.form || this.component.path)) {
        if (this.component.project) {
          this.formSrc = _Formio.default.getBaseUrl(); // Check to see if it is a MongoID.

          if ((0, _utils.isMongoId)(this.component.project)) {
            this.formSrc += '/project';
          }

          this.formSrc += "/".concat(this.component.project);
          srcOptions.project = this.formSrc;
        } else {
          this.formSrc = _Formio.default.getProjectUrl();
          srcOptions.project = this.formSrc;
        }

        if (this.component.form) {
          this.formSrc += "/form/".concat(this.component.form);
        } else if (this.component.path) {
          this.formSrc += "/".concat(this.component.path);
        }
      } // Build the source based on the root src path.


      if (!this.formSrc && this.options.formio) {
        var rootSrc = this.options.formio.formsUrl;

        if (this.component.path) {
          var parts = rootSrc.split('/');
          parts.pop();
          this.formSrc = "".concat(parts.join('/'), "/").concat(this.component.path);
        }

        if (this.component.form) {
          this.formSrc = "".concat(rootSrc, "/").concat(this.component.form);
        }
      } // Add revision version if set.


      if (this.component.formRevision || this.component.formRevision === 0) {
        this.formSrc += "/v/".concat(this.component.formRevision);
      } // Determine if we already have a loaded form object.


      if (this.component && this.component.components && this.component.components.length) {
        this.renderSubForm(this.component, srcOptions);
      } else if (this.formSrc) {
        var query = {
          params: {
            live: 1
          }
        };
        new _Formio.default(this.formSrc).loadForm(query).then(function (formObj) {
          return _this4.renderSubForm(formObj, srcOptions);
        }).catch(function (err) {
          return _this4.subFormReadyReject(err);
        });
      }

      return this.subFormReady;
    }
    /* eslint-enable max-statements */

  }, {
    key: "checkValidity",
    value: function checkValidity(data, dirty) {
      if (this.subForm) {
        return this.subForm.checkValidity(this.dataValue.data, dirty);
      }

      return _get(_getPrototypeOf(FormComponent.prototype), "checkValidity", this).call(this, data, dirty);
    }
  }, {
    key: "checkConditions",
    value: function checkConditions(data) {
      var visible = _get(_getPrototypeOf(FormComponent.prototype), "checkConditions", this).call(this, data);

      var subForm = this.subForm; // Return if already hidden

      if (!visible) {
        return visible;
      }

      if (subForm && subForm.hasCondition()) {
        return this.subForm.checkConditions(this.dataValue.data);
      }

      return visible;
=======
    // Add revision version if set.
    if (this.component.formRevision || this.component.formRevision === 0) {
      this.formSrc += `/v/${this.component.formRevision}`;
    }
  }

  get dataReady() {
    return this.subFormReady || NativePromise.resolve();
  }

  get defaultValue() {
    // Not not provide a default value unless the subform is ready so that it will initialize correctly.
    return this.subForm ? super.defaultValue : null;
  }

  get defaultSchema() {
    return FormComponent.schema();
  }

  get emptyValue() {
    return { data: {} };
  }

  get ready() {
    return this.subFormReady || NativePromise.resolve();
  }

  getSubOptions(options = {}) {
    if (!this.options) {
      return options;
    }
    if (this.options.base) {
      options.base = this.options.base;
    }
    if (this.options.project) {
      options.project = this.options.project;
    }
    if (this.options.readOnly) {
      options.readOnly = this.options.readOnly;
    }
    if (this.options.breadcrumbSettings) {
      options.breadcrumbSettings = this.options.breadcrumbSettings;
    }
    if (this.options.buttonSettings) {
      options.buttonSettings = _.clone(this.options.buttonSettings);
    }
    if (this.options.viewAsHtml) {
      options.viewAsHtml = this.options.viewAsHtml;
    }
    if (this.options.language) {
      options.language = this.options.language;
    }
    if (this.options.template) {
      options.template = this.options.template;
    }
    if (this.options.templates) {
      options.templates = this.options.templates;
    }
    if (this.options.renderMode) {
      options.renderMode = this.options.renderMode;
    }
    if (this.options.attachMode) {
      options.attachMode = this.options.attachMode;
    }
    if (this.options.iconset) {
      options.iconset = this.options.iconset;
    }
    options.events = this.createEmitter();

    // Make sure to not show the submit button in wizards in the nested forms.
    _.set(options, 'buttonSettings.showSubmit', false);
    return options;
  }

  render() {
    if (this.builderMode) {
      return super.render(this.component.label || 'Nested form');
    }
    const subform = this.subForm ? this.subForm.render() : this.renderTemplate('loading');
    return super.render(subform);
  }

  asString(value) {
    return this.getValueAsString(value);
  }

  /**
   * Prints out the value of form components as a datagrid value.
   */
  getValueAsString(value) {
    if (!value) {
      return 'No data provided';
    }
    if (!value.data && value._id) {
      return value._id;
    }
    if (!value.data || !Object.keys(value.data).length) {
      return 'No data provided';
    }
    return '[Complex Data]';
  }

  attach(element) {
    // Don't attach in builder.
    if (this.builderMode) {
      return super.attach(element);
    }
    return super.attach(element)
      .then(() => this.createSubForm())
      .then(() => {
        this.empty(element);
        if (this.options.builder) {
          this.setContent(element, this.ce('div', {
            class: 'text-muted text-center p-2'
          }, this.text(this.formObj.title)));
          return;
        }

        this.setContent(element, this.render());
        if (this.subForm) {
          this.subForm.attach(element);
        }
      });
  }

  detach() {
    if (this.subForm) {
      this.subForm.detach();
    }
    super.detach();
  }

  get currentForm() {
    return this._currentForm;
  }

  set currentForm(instance) {
    this._currentForm = instance;
    if (!this.subForm) {
      return;
    }
    this.subForm.getComponents().forEach(component => {
      component.currentForm = this;
    });
  }

  destroy() {
    if (this.subForm) {
      this.subForm.destroy();
      this.subForm = null;
      this.subFormReady = null;
    }
    super.destroy();
  }

  redraw() {
    if (this.subForm) {
      this.subForm.form = this.formObj;
    }
    return super.redraw();
  }

  /**
   * Pass everyComponent to subform.
   * @param args
   * @returns {*|void}
   */
  everyComponent(...args) {
    if (this.subForm) {
      this.subForm.everyComponent(...args);
    }
  }

  /**
   * Create a subform instance.
   *
   * @return {*}
   */
  createSubForm() {
    this.subFormReady = this.loadSubForm().then((form) => {
      if (!form) {
        return;
      }

      // Iterate through every component and hide the submit button.
      // Override defaultValue with respective parts from old dataValue.
      const oldData = this.dataValue ? this.dataValue.data : {};
      eachComponent(form.components, (component) => {
        component.defaultValue = _.get(oldData, component.key, component.defaultValue);
        if (
          (component.type === 'button') &&
          ((component.action === 'submit') || !component.action)
        ) {
          component.hidden = true;
        }
      });

      // If the subform is already created then destroy the old one.
      if (this.subForm) {
        this.subForm.destroy();
      }

      // Render the form.
      return (new Form(form, this.getSubOptions())).ready.then((instance) => {
        this.subForm = instance;
        this.subForm.currentForm = this;
        this.subForm.parent = this;
        this.subForm.parentVisible = this.visible;
        this.subForm.on('change', () => {
          if (this.subForm) {
            this.dataValue = this.subForm.getValue();
            this.triggerChange({
              noEmit: true
            });
          }
        });
        this.subForm.url = this.formSrc;
        this.subForm.nosubmit = true;
        this.subForm.root = this.root;
        this.restoreValue();
        return this.subForm;
      });
    });
    return this.subFormReady;
  }

  /**
   * Load the subform.
   */
  loadSubForm() {
    if (this.builderMode || this.isHidden()) {
      return NativePromise.resolve();
    }

    // Determine if we already have a loaded form object.
    if (
      this.formObj &&
      this.formObj.components &&
      Array.isArray(this.formObj.components) &&
      this.formObj.components.length
    ) {
      // Pass config down to sub forms.
      if (this.root && this.root.form && this.root.form.config && !this.formObj.config) {
        this.formObj.config = this.root.form.config;
      }
      return NativePromise.resolve(this.formObj);
    }
    else if (this.formSrc) {
      return (new Formio(this.formSrc)).loadForm({ params: { live: 1 } })
        .then((formObj) => {
          this.formObj = formObj;
          return formObj;
        });
    }
    return NativePromise.resolve();
  }

  checkComponentValidity(data, dirty, row) {
    if (this.subForm) {
      return this.subForm.checkValidity(this.dataValue.data, dirty);
>>>>>>> newFormio
    }
  }, {
    key: "calculateValue",
    value: function calculateValue(data, flags) {
      if (this.subForm) {
        return this.subForm.calculateValue(this.dataValue.data, flags);
      }

<<<<<<< HEAD
      return _get(_getPrototypeOf(FormComponent.prototype), "calculateValue", this).call(this, data, flags);
    }
  }, {
    key: "setPristine",
    value: function setPristine(pristine) {
      _get(_getPrototypeOf(FormComponent.prototype), "setPristine", this).call(this, pristine);

      if (this.subForm) {
        this.subForm.setPristine(pristine);
      }
=======
    return super.checkComponentValidity(data, dirty, row);
  }

  checkComponentConditions(data, flags, row) {
    const visible = super.checkComponentConditions(data, flags, row);

    // Return if already hidden
    if (!visible) {
      return visible;
    }

    if (this.subForm && this.subForm.hasCondition()) {
      return this.subForm.checkConditions(this.dataValue.data);
>>>>>>> newFormio
    }
  }, {
    key: "beforeNext",

<<<<<<< HEAD
    /**
     * Submit the form before the next page is triggered.
     */
    value: function beforeNext() {
      var _this5 = this;

      // If we wish to submit the form on next page, then do that here.
      if (this.shouldSubmit) {
        return this.loadSubForm().then(function () {
          return _this5.subForm.submitForm().then(function (result) {
            _this5.dataValue = result.submission;
            return _this5.dataValue;
          }).catch(function (err) {
            _this5.subForm.onSubmissionError(err);

            return _nativePromiseOnly.default.reject(err);
          });
        });
      } else {
        return _get(_getPrototypeOf(FormComponent.prototype), "beforeNext", this).call(this);
      }
=======
    return visible;
  }

  calculateValue(data, flags, row) {
    if (this.subForm) {
      return this.subForm.calculateValue(this.dataValue.data, flags);
>>>>>>> newFormio
    }
    /**
     * Submit the form before the whole form is triggered.
     */

<<<<<<< HEAD
  }, {
    key: "beforeSubmit",
    value: function beforeSubmit() {
      var _this6 = this;

      var submission = this.dataValue; // This submission has already been submitted, so just return the reference data.

      if (submission && submission._id && submission.form) {
        this.dataValue = this.shouldSubmit ? {
          _id: submission._id,
          form: submission.form
        } : submission;
        return _nativePromiseOnly.default.resolve(this.dataValue);
      } // This submission has not been submitted yet.


      if (this.shouldSubmit) {
        return this.loadSubForm().then(function () {
          return _this6.subForm.submitForm().then(function (result) {
            _this6.subForm.loading = false;
            _this6.dataValue = {
              _id: result.submission._id,
              form: result.submission.form
            };
            return _this6.dataValue;
          }).catch(function () {});
=======
    return super.calculateValue(data, flags, row);
  }

  setPristine(pristine) {
    super.setPristine(pristine);
    if (this.subForm) {
      this.subForm.setPristine(pristine);
    }
  }

  /**
   * Determine if the subform should be submitted.
   * @return {*|boolean}
   */
  get shouldSubmit() {
    return this.subFormReady && (!this.component.hasOwnProperty('reference') || this.component.reference);
  }

  /**
   * Returns the data for the subform.
   *
   * @return {*}
   */
  getSubFormData() {
    if (_.get(this.subForm, 'form.display') === 'pdf') {
      return this.subForm.getSubmission();
    }
    else {
      return NativePromise.resolve(this.dataValue);
    }
  }

  /**
   * Submit the subform if configured to do so.
   *
   * @return {*}
   */
  submitSubForm(rejectOnError) {
    // If we wish to submit the form on next page, then do that here.
    if (this.shouldSubmit) {
      const subFormReady = this.subFormReady || this.createSubForm();
      return subFormReady.then(() => {
        if (!this.subForm) {
          return this.dataValue;
        }
        this.subForm.nosubmit = false;
        return this.subForm.submitForm().then(result => {
          this.subForm.loading = false;
          this.dataValue = result.submission;
          return this.dataValue;
        }).catch(err => {
          if (rejectOnError) {
            this.subForm.onSubmissionError(err);
            return NativePromise.reject(err);
          }
          else {
            return {};
          }
>>>>>>> newFormio
        });
      } else {
        return _get(_getPrototypeOf(FormComponent.prototype), "beforeSubmit", this).call(this);
      }
    }
<<<<<<< HEAD
  }, {
    key: "build",
    value: function build() {
      this.createElement(); // Do not restore the value when building before submission.

      if (!this.options.beforeSubmit) {
        this.restoreValue();
      }

      this.attachLogic();
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      if (!this.visible) {
        return true;
      }

      return !_get(_getPrototypeOf(FormComponent.prototype), "checkConditions", this).call(this, this.rootValue);
    }
  }, {
    key: "setValue",
    value: function setValue(submission, flags, norecurse) {
      var _this7 = this;

      this._submission = submission;

      if (this.subForm || norecurse) {
        if (!norecurse && submission && submission._id && this.subForm.formio && !flags.noload && (_lodash.default.isEmpty(submission.data) || this.shouldSubmit)) {
          var submissionUrl = "".concat(this.subForm.formio.formsUrl, "/").concat(submission.form, "/submission/").concat(submission._id);
          this.subForm.setUrl(submissionUrl, this.options);
          this.subForm.nosubmit = false;
          this.subForm.loadSubmission().then(function (sub) {
            return _this7.setValue(sub, flags, true);
          });
          return _get(_getPrototypeOf(FormComponent.prototype), "setValue", this).call(this, submission, flags);
        } else {
          return this.subForm ? this.subForm.setValue(submission, flags) : _get(_getPrototypeOf(FormComponent.prototype), "setValue", this).call(this, submission, flags);
        }
      }

      var changed = _get(_getPrototypeOf(FormComponent.prototype), "setValue", this).call(this, this._submission, flags);

      var hidden = this.isHidden();
      var subForm;

      if (hidden) {
        subForm = this.subFormReady;
      } else {
        subForm = this.loadSubForm();
      }

      subForm.then(function () {
        return _this7.setValue(_this7._submission, flags, true);
      });
      return changed;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (this.subForm) {
        return this.subForm.getValue();
      }

      return this.dataValue;
    }
  }, {
    key: "getAllComponents",
    value: function getAllComponents() {
      if (!this.subForm) {
        return [];
      }

      return this.subForm.getAllComponents();
    }
  }, {
    key: "updateSubFormVisibility",
    value: function updateSubFormVisibility() {
      if (this.subForm) {
        this.subForm.parentVisible = this.visible;
      }
    }
  }, {
    key: "isInternalEvent",
    value: function isInternalEvent(event) {
      switch (event) {
        case 'focus':
        case 'blur':
        case 'componentChange':
        case 'componentError':
        case 'error':
        case 'formLoad':
        case 'languageChanged':
        case 'render':
        case 'checkValidity':
        case 'initialized':
        case 'submit':
        case 'submitButton':
        case 'nosubmit':
        case 'updateComponent':
        case 'submitDone':
        case 'submissionDeleted':
        case 'requestDone':
        case 'nextPage':
        case 'prevPage':
        case 'wizardNavigationClicked':
        case 'updateWizardNav':
        case 'restoreDraft':
        case 'saveDraft':
        case 'saveComponent':
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "createEmitter",
    value: function createEmitter() {
      var emiter = new _eventemitter.default({
        wildcard: false,
        maxListeners: 0
      });
      var nativeEmit = emiter.emit;
      var that = this;

      emiter.emit = function (event) {
        var eventType = event.replace("".concat(that.options.namespace, "."), '');

        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        nativeEmit.call.apply(nativeEmit, [this, event].concat(args));

        if (!that.isInternalEvent(eventType)) {
          that.emit.apply(that, [eventType].concat(args));
        }
      };

      return emiter;
    }
  }, {
    key: "deleteValue",
    value: function deleteValue() {
      _get(_getPrototypeOf(FormComponent.prototype), "setValue", this).call(this, null, {
        noUpdateEvent: true,
        noDefault: true
      });

      _lodash.default.unset(this.data, this.key);
=======
    return this.getSubFormData();
  }

  /**
   * Submit the form before the next page is triggered.
   */
  beforePage(next) {
    return this.submitSubForm(true).then(() => super.beforePage(next));
  }

  /**
   * Submit the form before the whole form is triggered.
   */
  beforeSubmit() {
    const submission = this.dataValue;

    // This submission has already been submitted, so just return the reference data.
    if (submission && submission._id && submission.form) {
      this.dataValue = submission;
      return NativePromise.resolve(this.dataValue);
    }
    return this.submitSubForm(false)
      .then(() => {
        return this.dataValue;
      })
      .then(() => super.beforeSubmit());
  }

  isHidden() {
    if (!this.visible) {
      return true;
    }

    return !super.checkConditions(this.rootValue);
  }

  setValue(submission, flags) {
    const changed = super.setValue(submission, flags);
    if (this.subForm) {
      if (
        submission &&
        submission._id &&
        this.subForm.formio &&
        _.isEmpty(submission.data)
      ) {
        const submissionUrl = `${this.subForm.formio.formsUrl}/${submission.form}/submission/${submission._id}`;
        this.subForm.setUrl(submissionUrl, this.options);
        this.subForm.loadSubmission();
      }
      else {
        this.subForm.setValue(submission, flags);
      }
>>>>>>> newFormio
    }
  }, {
    key: "dataReady",
    get: function get() {
      return this.subFormReady;
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return FormComponent.schema();
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return {
        data: {}
      };
    }
  }, {
    key: "root",
    set: function set(inst) {
      this._root = inst;
      this.nosubmit = inst.nosubmit;
    },
    get: function get() {
      return this._root;
    }
  }, {
    key: "nosubmit",
    set: function set(value) {
      this._nosubmit = !!value;

      if (this.subForm) {
        this.subForm.nosubmit = !!value;
      }
    },
    get: function get() {
      return this._nosubmit || false;
    }
<<<<<<< HEAD
  }, {
    key: "currentForm",
    get: function get() {
      return this._currentForm;
    },
    set: function set(instance) {
      var _this8 = this;

      this._currentForm = instance;

      if (!this.subForm) {
        return;
      }

      this.subForm.getComponents().forEach(function (component) {
        component.currentForm = _this8;
      });
    }
  }, {
    key: "shouldSubmit",
    get: function get() {
      return !this.component.hasOwnProperty('reference') || this.component.reference;
    }
  }, {
    key: "visible",
    get: function get() {
      return _get(_getPrototypeOf(FormComponent.prototype), "visible", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(FormComponent.prototype), "visible", value, this, true);

      this.updateSubFormVisibility();
    }
  }, {
    key: "parentVisible",
    get: function get() {
      return _get(_getPrototypeOf(FormComponent.prototype), "parentVisible", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(FormComponent.prototype), "parentVisible", value, this, true);

      this.updateSubFormVisibility();
    }
  }]);

  return FormComponent;
}(_Base.default);

exports.default = FormComponent;
=======
    return this.dataValue;
  }

  getAllComponents() {
    if (!this.subForm) {
      return [];
    }
    return this.subForm.getAllComponents();
  }

  updateSubFormVisibility() {
    if (this.subForm) {
      this.subForm.parentVisible = this.visible;
    }
  }

  get visible() {
    return super.visible;
  }

  set visible(value) {
    super.visible = value;
    this.updateSubFormVisibility();
  }

  get parentVisible() {
    return super.parentVisible;
  }

  set parentVisible(value) {
    super.parentVisible = value;
    this.updateSubFormVisibility();
  }

  isInternalEvent(event) {
    switch (event) {
      case 'focus':
      case 'blur':
      case 'componentChange':
      case 'componentError':
      case 'error':
      case 'formLoad':
      case 'languageChanged':
      case 'render':
      case 'checkValidity':
      case 'initialized':
      case 'submit':
      case 'submitButton':
      case 'nosubmit':
      case 'updateComponent':
      case 'submitDone':
      case 'submissionDeleted':
      case 'requestDone':
      case 'nextPage':
      case 'prevPage':
      case 'wizardNavigationClicked':
      case 'updateWizardNav':
      case 'restoreDraft':
      case 'saveDraft':
      case 'saveComponent':
      case 'pdfUploaded':
        return true;
      default:
        return false;
    }
  }

  createEmitter() {
    const emitter = new EventEmitter({
      wildcard: false,
      maxListeners: 0
    });
    const nativeEmit = emitter.emit;
    const that = this;
    emitter.emit = function(event, ...args) {
      const eventType = event.replace(`${that.options.namespace}.`, '');
      nativeEmit.call(this, event, ...args);
      if (!that.isInternalEvent(eventType)) {
        that.emit(eventType, ...args);
      }
    };

    return emitter;
  }

  deleteValue() {
    super.setValue(null, {
      noUpdateEvent: true,
      noDefault: true
    });
    this.unset();
  }
}
>>>>>>> newFormio

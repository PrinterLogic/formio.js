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

require("core-js/modules/es.reflect.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _signature_pad = _interopRequireDefault(require("signature_pad/dist/signature_pad.js"));

var _Base = _interopRequireDefault(require("../base/Base"));

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

var SignatureComponent =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(SignatureComponent, _BaseComponent);

  _createClass(SignatureComponent, null, [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _Base.default.schema.apply(_Base.default, [{
        type: 'signature',
        label: 'Signature',
        key: 'signature',
        footer: 'Sign above',
        width: '100%',
        height: '150px',
        penColor: 'black',
        backgroundColor: 'rgb(245,245,235)',
        minWidth: '0.5',
        maxWidth: '2.5'
      }].concat(extend));
=======
import SignaturePad from 'signature_pad/dist/signature_pad.js';
import Input from '../_classes/input/Input';
import _ from 'lodash';

export default class SignatureComponent extends Input {
  static schema(...extend) {
    return Input.schema({
      type: 'signature',
      label: 'Signature',
      key: 'signature',
      footer: 'Sign above',
      width: '100%',
      height: '150px',
      penColor: 'black',
      backgroundColor: 'rgb(245,245,235)',
      minWidth: '0.5',
      maxWidth: '2.5'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Signature',
      group: 'advanced',
      icon: 'pencil',
      weight: 120,
      documentation: 'http://help.form.io/userguide/#signature',
      schema: SignatureComponent.schema()
    };
  }

  init() {
    super.init();
    this.currentWidth = 0;
    this.scale = 1;

    if (!this.component.width) {
      this.component.width = '100%';
>>>>>>> newFormio
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Signature',
        group: 'advanced',
        icon: 'fa fa-pencil',
        weight: 120,
        documentation: 'http://help.form.io/userguide/#signature',
        schema: SignatureComponent.schema()
      };
    }
  }]);

  function SignatureComponent(component, options, data) {
    var _this;

    _classCallCheck(this, SignatureComponent);

<<<<<<< HEAD
    _this = _possibleConstructorReturn(this, _getPrototypeOf(SignatureComponent).call(this, component, options, data));
    _this.currentWidth = 0;
    _this.scale = 1;

    if (!_this.component.width) {
      _this.component.width = '100%';
    }

    if (!_this.component.height) {
      _this.component.height = '200px';
    }

    return _this;
  }

  _createClass(SignatureComponent, [{
    key: "elementInfo",
    value: function elementInfo() {
      var info = _get(_getPrototypeOf(SignatureComponent.prototype), "elementInfo", this).call(this);

      info.type = 'input';
      info.attr.type = 'hidden';
      return info;
    }
  }, {
    key: "setValue",
    value: function setValue(value, flags) {
      flags = this.getFlags.apply(this, arguments);

      _get(_getPrototypeOf(SignatureComponent.prototype), "setValue", this).call(this, value, flags);

      if (this.signaturePad) {
        if (value && !flags.noSign) {
          this.signatureImage.setAttribute('src', value);
          this.showCanvas(false);
        }

        if (!value) {
          this.signaturePad.clear();
        }
=======
  get inputInfo() {
    const info = super.inputInfo;
    info.type = 'input';
    info.attr.type = 'hidden';
    return info;
  }

  get className() {
    return `${super.className} signature-pad`;
  }

  labelIsHidden() {
    return true;
  }

  setValue(value, flags) {
    flags = flags || {};
    const changed = super.setValue(value, flags);
    if (value && this.refs.signatureImage && this.options.readOnly) {
      this.refs.signatureImage.setAttribute('src', value);
      this.showCanvas(false);
    }
    if (this.signaturePad) {
      if (!value) {
        this.signaturePad.clear();
      }
      else if (changed) {
        this.triggerChange();
      }
    }
    return changed;
  }

  showCanvas(show) {
    if (show) {
      if (this.refs.canvas) {
        this.refs.canvas.style.display = 'inherit';
      }
      if (this.refs.signatureImage) {
        this.refs.signatureImage.style.display = 'none';
      }
    }
    else {
      if (this.refs.canvas) {
        this.refs.canvas.style.display = 'none';
      }
      if (this.refs.signatureImage) {
        this.refs.signatureImage.style.display = 'inherit';
>>>>>>> newFormio
      }
    }
  }, {
    key: "showCanvas",
    value: function showCanvas(show) {
      if (show) {
        this.canvas.style.display = 'inherit';
        this.signatureImage.style.display = 'none';
      } else {
        this.canvas.style.display = 'none';
        this.signatureImage.style.display = 'inherit';
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(SignatureComponent.prototype), "destroy", this).call(this);

<<<<<<< HEAD
      if (this.signaturePad) {
        this.signaturePad.off();
      }
    }
  }, {
    key: "checkSize",
    value: function checkSize(force, scale) {
      if (force || this.padBody.offsetWidth !== this.currentWidth) {
        this.scale = force ? scale : this.scale;
        this.currentWidth = this.padBody.offsetWidth;
        this.canvas.width = this.currentWidth * this.scale;
        this.canvas.height = this.padBody.offsetHeight * this.scale;
        var ctx = this.canvas.getContext('2d');
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(1 / this.scale, 1 / this.scale);
        ctx.fillStyle = this.signaturePad.backgroundColor;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.signaturePad.clear();
=======
  onDisabled() {
    this.showCanvas(!super.disabled);
    if (this.signaturePad) {
      if (super.disabled) {
        this.signaturePad.off();
        if (this.refs.refresh) {
          this.refs.refresh.classList.add('disabled');
        }
      }
      else {
        this.signaturePad.on();
        if (this.refs.refresh) {
          this.refs.refresh.classList.remove('disabled');
        }
>>>>>>> newFormio
      }
    }
    /* eslint-disable max-statements */

<<<<<<< HEAD
  }, {
    key: "build",
    value: function build() {
      var _this2 = this;

      this.element = this.createElement();
      this.element.component = this;
      var classNames = this.element.getAttribute('class');
      classNames += ' signature-pad';
      this.element.setAttribute('class', classNames);
      this.input = this.createInput(this.element);
      this.padBody = this.ce('div', {
        class: 'signature-pad-body',
        style: "width: ".concat(this.component.width, ";height: ").concat(this.component.height, ";padding:0;margin:0;"),
        tabindex: this.component.tabindex || 0
      });
      this.addFocusBlurEvents(this.padBody); // Create the refresh button.

      this.refresh = this.ce('a', {
        class: 'btn btn-sm btn-default btn-light signature-pad-refresh'
      });
      var refreshIcon = this.getIcon('refresh');
      this.refresh.appendChild(refreshIcon);
      this.padBody.appendChild(this.refresh); // The signature canvas.

      this.canvas = this.ce('canvas', {
        class: 'signature-pad-canvas',
        height: this.component.height
      });
      this.padBody.appendChild(this.canvas); // Add an asterisk if required.

      if (_lodash.default.get(this.component, 'validate.required', false)) {
        this.padBody.appendChild(this.ce('span', {
          class: 'form-control-feedback field-required-inline text-danger'
        }, this.getIcon('asterisk')));
      }

      this.signatureImage = this.ce('img', {
        style: 'width: 100%;display: none;'
      });
      this.padBody.appendChild(this.signatureImage);
      this.element.appendChild(this.padBody); // Add the footer.

      if (this.component.footer) {
        this.signatureFooter = this.ce('div', {
          class: 'signature-pad-footer'
        });
        this.signatureFooter.appendChild(this.text(this.component.footer));
        this.createTooltip(this.signatureFooter);
        this.element.appendChild(this.signatureFooter);
      } // Create the signature pad.


      this.signaturePad = new _signature_pad.default(this.canvas, {
        minWidth: this.component.minWidth,
        maxWidth: this.component.maxWidth,
        penColor: this.component.penColor,
        backgroundColor: this.component.backgroundColor
      });
      this.refresh.addEventListener('click', function (event) {
        event.preventDefault();

        _this2.showCanvas(true);

        _this2.signaturePad.clear();

        _this2.setValue(null);
      });

      this.signaturePad.onEnd = function () {
        return _this2.setValue(_this2.signaturePad.toDataURL(), {
          noSign: true
        });
      };

      this.signatureImage.setAttribute('src', this.signaturePad.toDataURL()); // Ensure the signature is always the size of its container.

      this.addEventListener(window, 'resize', _lodash.default.debounce(function () {
        return _this2.checkSize();
      }, 100));
      var interval = setInterval(function () {
        if (_this2.padBody.offsetWidth) {
          clearInterval(interval);

          _this2.checkSize();
        }
      }, 200); // Restore values.

      this.restoreValue(); // disable the signature pad if the form in ViewOnly mode

      if (this.shouldDisable || this.viewOnly) {
        this.disabled = true; // In view mode, ensure the padBody background color is set
        // in case the source image is a different aspect ratio

        this.padBody.style.backgroundColor = this.component.backgroundColor;
      }

      this.autofocus();
      this.attachLogic();
    }
    /* eslint-enable max-statements */

  }, {
    key: "createViewOnlyLabel",
    value: function createViewOnlyLabel(container) {
      this.labelElement = this.ce('dt');
      this.labelElement.appendChild(this.text(this.component.footer));
      this.createTooltip(this.labelElement);
      container.appendChild(this.labelElement);
    }
  }, {
    key: "getView",
    value: function getView(value) {
      return value ? 'Yes' : 'No';
    }
  }, {
    key: "focus",
    value: function focus() {
      this.padBody.focus();
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return '';
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return SignatureComponent.schema();
    }
  }, {
    key: "disabled",
    set: function set(disabled) {
      _set(_getPrototypeOf(SignatureComponent.prototype), "disabled", disabled, this, true);

      this.showCanvas(!disabled);

      if (this.signaturePad) {
        if (disabled) {
          this.signaturePad.off();
          this.refresh.classList.add('disabled');
        } else {
          this.signaturePad.on();
          this.refresh.classList.remove('disabled');
        }
      }
    }
  }]);

  return SignatureComponent;
}(_Base.default);

exports.default = SignatureComponent;
=======
  checkSize(force, scale) {
    if (force || (this.refs.padBody.offsetWidth !== this.currentWidth)) {
      this.scale = force ? scale : this.scale;
      this.currentWidth = this.refs.padBody.offsetWidth;
      this.refs.canvas.width = this.currentWidth * this.scale;
      this.refs.canvas.height = this.refs.padBody.offsetHeight * this.scale;
      const ctx = this.refs.canvas.getContext('2d');
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale((1 / this.scale), (1 / this.scale));
      ctx.fillStyle = this.signaturePad.backgroundColor;
      ctx.fillRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
      this.signaturePad.clear();

      if (this.dataValue) {
        this.signaturePad.fromDataURL(this.dataValue);
      }
    }
  }

  renderElement(value, index) {
    return this.renderTemplate('signature', {
      element: super.renderElement(value, index),
      required: _.get(this.component, 'validate.required', false),
    });
  }

  setOpenModalElement() {
    const template = `
      <label class="control-label">${this.component.label}</label><br>
      <button lang='en' class='btn btn-light btn-md open-modal-button' ref='openModal'>Click to Sign</button>
    `;
    this.componentModal.setOpenModalElement(template);
  }

  getModalPreviewTemplate() {
    return `
      <label class="control-label">${this.component.label}</label><br>
      <img src=${this.dataValue} ref='openModal' />
    `;
  }

  attach(element) {
    this.loadRefs(element, { canvas: 'single', refresh: 'single', padBody: 'single', signatureImage: 'single' });
    const superAttach = super.attach(element);

    this.onDisabled();

    if (this.refs.refresh && this.options.readOnly) {
      this.refs.refresh.classList.add('disabled');
    }

    // Create the signature pad.
    if (this.refs.canvas) {
      this.signaturePad = new SignaturePad(this.refs.canvas, {
        minWidth: this.component.minWidth,
        maxWidth: this.component.maxWidth,
        penColor: this.component.penColor,
        backgroundColor: this.component.backgroundColor
      });

      this.signaturePad.onEnd = () => this.setValue(this.signaturePad.toDataURL());
      this.refs.signatureImage.setAttribute('src', this.signaturePad.toDataURL());

      // Ensure the signature is always the size of its container.
      if (this.refs.padBody) {
        if (!this.refs.padBody.style.maxWidth) {
          this.refs.padBody.style.maxWidth = '100%';
        }

        this.addEventListener(window, 'resize', _.debounce(() => this.checkSize(), 100));
        setTimeout(function checkWidth() {
          if (this.refs.padBody && this.refs.padBody.offsetWidth) {
            this.checkSize();
          }
          else {
            setTimeout(checkWidth.bind(this), 200);
          }
        }.bind(this), 200);
      }
    }
    this.addEventListener(this.refs.refresh, 'click', (event) => {
      event.preventDefault();
      this.showCanvas(true);
      this.signaturePad.clear();
      this.setValue(this.defaultValue);
    });
    this.setValue(this.dataValue);
    return superAttach;
  }
  /* eslint-enable max-statements */

  detach() {
    if (this.signaturePad) {
      this.signaturePad.off();
    }
    this.signaturePad = null;
    this.currentWidth = 0;
    super.detach();
  }

  getValueAsString(value) {
    return value ? 'Yes' : 'No';
  }

  focus() {
    this.refs.padBody.focus();
  }
}
>>>>>>> newFormio

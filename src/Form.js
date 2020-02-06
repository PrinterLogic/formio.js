<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Formio = _interopRequireDefault(require("./Formio"));

var _Wizard = _interopRequireDefault(require("./Wizard"));

var _PDF = _interopRequireDefault(require("./PDF"));

var _Webform = _interopRequireDefault(require("./Webform"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form =
/*#__PURE__*/
function () {
=======
import Element from './Element';
import Formio from './Formio';
import Displays from './displays';
import templates from './templates';
import * as FormioUtils from './utils/utils';
import NativePromise from 'native-promise-only';

export default class Form extends Element {
>>>>>>> newFormio
  /**
   * Creates an easy to use interface for embedding webforms, pdfs, and wizards into your application.
   *
   * @param {Object} element - The DOM element you wish to render this form within.
   * @param {Object | string} form - Either a Form JSON schema or the URL of a hosted form via. form.io.
   * @param {Object} options - The options to create a new form instance.
   * @param {boolean} options.readOnly - Set this form to readOnly
   * @param {boolean} options.noAlerts - Set to true to disable the alerts dialog.
   * @param {boolean} options.i18n - The translation file for this rendering. @see https://github.com/formio/formio.js/blob/master/i18n.js
   * @param {boolean} options.template - Provides a way to inject custom logic into the creation of every element rendered within the form.
   *
   * @example
   * import Form from 'formiojs/Form';
   * const form = new Form(document.getElementById('formio'), 'https://examples.form.io/example');
   * form.build();
   */
<<<<<<< HEAD
  function Form(element, form, options) {
    _classCallCheck(this, Form);
=======
  constructor(...args) {
    super(args[0] instanceof HTMLElement ? args[2] : args[1]);
    this.ready = new NativePromise((resolve, reject) => {
      this.readyResolve = resolve;
      this.readyReject = reject;
    });
>>>>>>> newFormio

    this.instance = null;
    if (args[0] instanceof HTMLElement) {
      this.element = args[0];
      this.options = args[2] || {};
      this.options.events = this.events;
      this.setForm(args[1])
        .then(() => this.readyResolve(this.instance))
        .catch(this.readyReject);
    }
    else if (args[0]) {
      this.element = null;
      this.options = args[1] || {};
      this.options.events = this.events;
      this.setForm(args[0])
        .then(() => this.readyResolve(this.instance))
        .catch(this.readyReject);
    }
    else {
      this.element = null;
      this.options = {};
      this.options.events = this.events;
    }
    this.display = '';
  }

<<<<<<< HEAD
  _createClass(Form, [{
    key: "create",
    value: function create() {
      var isFlat = this.options && this.options.flatten;

      if (this.form.display === 'wizard' && !isFlat) {
        return new _Wizard.default(this.element, this.options);
      } else if (this.form.display === 'pdf' && !isFlat) {
        return new _PDF.default(this.element, this.options);
      } else {
        return new _Webform.default(this.element, this.options);
      }
=======
  /**
   * Create a new form instance provided the display of the form.
   *
   * @param {string} display - The display of the form, either "wizard", "form", or "pdf"
   * @return {*}
   */
  create(display) {
    if (this.options && (this.options.flatten || this.options.renderMode === 'flat')) {
      display = 'form';
    }
    this.display = display;
    if (Displays.displays[display]) {
      return new Displays.displays[display](this.element, this.options);
    }
    else {
      // eslint-disable-next-line new-cap
      return new Displays.displays['webform'](this.element, this.options);
>>>>>>> newFormio
    }
  }, {
    key: "setForm",
    value: function setForm(formParam) {
      var _this = this;

      formParam = formParam || this.form;
      this.element.innerHTML = '';

      if (typeof formParam === 'string') {
        return new _Formio.default(formParam).loadForm().then(function (form) {
          _this.form = form;

          if (_this.instance) {
            _this.instance.destroy();
          }

          _this.instance = _this.create();
          _this.instance.url = formParam;
          _this.instance.nosubmit = false;

          _this.instance.loadSubmission();

          _this.form = _this.instance.form = form;
          return _this.instance.ready.then(function () {
            return _this.instance;
          });
        });
      } else {
        this.form = formParam;

<<<<<<< HEAD
        if (this.instance) {
          this.instance.destroy();
        }

        this.instance = this.create();
        this.instance.form = this.form;
        return this.instance.ready.then(function () {
          return _this.instance;
        });
      }
    }
  }, {
    key: "setDisplay",
    value: function setDisplay(display) {
      this.form.display = display;
      return this.render();
    }
  }, {
    key: "render",
    value: function render(form) {
      return this.setForm(form);
    }
  }], [{
    key: "embed",
    value: function embed(_embed) {
      if (!_embed || !_embed.src) {
        return null;
      }

      var id = this.id || "formio-".concat(Math.random().toString(36).substring(7));
      var className = _embed.class || 'formio-form-wrapper'; // Add the styles to the header.

      if (_embed.styles) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = _embed.styles;
        document.head.appendChild(link);
      }

      document.write("<div id=\"".concat(id, "\" class=\"").concat(className, "\"></div>"));
      var formElement = document.getElementById(id);
      return new Form(formElement, _embed.src).render();
    }
  }]);

  return Form;
}(); // Allow simple embedding.
=======
  /**
   * Sets the form. Either as JSON or a URL to a form JSON schema.
   *
   * @param {string|object} formParam - Either the form JSON or the URL of the form json.
   * @return {*}
   */
  set form(formParam) {
    return this.setForm(formParam);
  }

  errorForm(err) {
    return {
      components: [
        {
          'label': 'HTML',
          'tag': 'div',
          'className': 'error error-message alert alert-danger ui red message',
          'attrs': [
            {
              'attr': 'role',
              'value': 'alert'
            }
          ],
          'key': 'errorMessage',
          'type': 'htmlelement',
          'input': false,
          'content': typeof err === 'string' ? err : err.message,
        }
      ]
    };
  }

  setForm(formParam) {
    let result;
    formParam = formParam || this.form;
    if (typeof formParam === 'string') {
      const formio = new Formio(formParam);
      let error;
      result = this.getSubmission(formio)
        .catch((err) => {
          error = err;
        })
        .then((submission) => {
          return formio.loadForm()
          // If the form returned an error, show it instead of the form.
            .catch(err => {
              error = err;
            })
            .then((form) => {
              // If the submission returned an error, show it instead of the form.
              if (error) {
                form = this.errorForm(error);
              }
              this.instance = this.instance || this.create(form.display);
              this.instance.url = formParam;
              this.instance.nosubmit = false;
              this._form = this.instance.form = form;
              if (submission) {
                this.instance.submission = submission;
              }
              if (error) {
                throw error;
              }
              return this.instance;
            });
        });
    }
    else {
      this.instance = this.instance || this.create(formParam.display);
      this._form = this.instance.form = formParam;
      result = this.instance.ready;
    }

    // A redraw has occurred so save off the new element in case of a setDisplay causing a rebuild.
    return result.then(() => {
      this.element = this.instance.element;
      return this.instance;
    });
  }

  getSubmission(formio) {
    if (formio.submissionId) {
      return formio.loadSubmission();
    }
    return NativePromise.resolve();
  }

  /**
   * Returns the loaded forms JSON.
   *
   * @return {object} - The loaded form's JSON
   */
  get form() {
    return this._form;
  }

  /**
   * Changes the display of the form.
   *
   * @param {string} display - The display to set this form. Either "wizard", "form", or "pdf"
   * @return {Promise<T>}
   */
  setDisplay(display) {
    if ((this.display === display) && this.instance) {
      return NativePromise.resolve(this.instance);
    }

    this.form.display = display;
    this.instance.destroy();
    this.instance = this.create(display);
    return this.setForm(this.form);
  }

  empty() {
    if (this.element) {
      while (this.element.firstChild) {
        this.element.removeChild(this.element.firstChild);
      }
    }
  }

  static embed(embed) {
    return new NativePromise((resolve) => {
      if (!embed || !embed.src) {
        resolve();
      }
      const id = this.id || `formio-${Math.random().toString(36).substring(7)}`;
      const className = embed.class || 'formio-form-wrapper';
      let code = embed.styles ? `<link rel="stylesheet" href="${embed.styles}">` : '';
      code += `<div id="${id}" class="${className}"></div>`;
      document.write(code);
      let attempts = 0;
      const wait = setInterval(() => {
        attempts++;
        const formElement = document.getElementById(id);
        if (formElement || attempts > 10) {
          resolve(new Form(formElement, embed.src).ready);
          clearInterval(wait);
        }
      }, 10);
    });
  }

  /**
   * Sanitize an html string.
   *
   * @param string
   * @returns {*}
   */
  sanitize(dirty) {
    return FormioUtils.sanitize(dirty, this.options);
  }

  setContent(element, content) {
    if (element instanceof HTMLElement) {
      element.innerHTML = this.sanitize(content);
      return true;
    }
    return false;
  }

  /**
   * Build a new form.
   *
   * @return {Promise<T>}
   */
  build() {
    if (!this.instance) {
      return NativePromise.reject('Form not ready. Use form.ready promise');
    }

    if (!this.element) {
      return NativePromise.reject('No DOM element for form.');
    }

    // Add temporary loader.
    const template = (this.options && this.options.template) ? this.options.template : 'bootstrap';
    const loader = templates[template].loader || templates.bootstrap.loader;
    this.setContent(this.element, loader.form);

    return this.render().then(html => {
      this.setContent(this.element, html);
      return this.attach(this.element).then(() => this.instance);
    })
      .then((param) => {
        this.emit('build', param);
        return param;
      });
  }

  render() {
    if (!this.instance) {
      return NativePromise.reject('Form not ready. Use form.ready promise');
    }
    return NativePromise.resolve(this.instance.render())
      .then((param) => {
        this.emit('render', param);
        return param;
      });
  }

  attach(element) {
    if (!this.instance) {
      return NativePromise.reject('Form not ready. Use form.ready promise');
    }
    this.element = element;
    return this.instance.attach(this.element)
      .then((param) => {
        this.emit('attach', param);
        return param;
      });
  }
}
>>>>>>> newFormio


exports.default = Form;

_Formio.default.embedForm = function (embed) {
  return Form.embed(embed);
};
/**
 * Factory that creates a new form based on the form parameters.
 *
 * @param element {HMTLElement} - The HTML Element to add this form to.
 * @param form {string|Object} - The src of the form, or a form object.
 * @param options {Object} - The options to create this form.
 *
 * @return {Promise} - When the form is instance is ready.
 */
<<<<<<< HEAD


_Formio.default.createForm = function (element, form, options) {
  return new Form(element, form, options).render();
=======
Formio.createForm = (...args) => {
  return (new Form(...args)).ready;
>>>>>>> newFormio
};

_Formio.default.Form = Form;
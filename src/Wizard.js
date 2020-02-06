<<<<<<< HEAD
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Webform2 = _interopRequireDefault(require("./Webform"));

var _Base = _interopRequireDefault(require("./components/base/Base"));

var _Formio = _interopRequireDefault(require("./Formio"));

var _utils = require("./utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Wizard =
/*#__PURE__*/
function (_Webform) {
  _inherits(Wizard, _Webform);
=======
import NativePromise from 'native-promise-only';
import _ from 'lodash';
import Webform from './Webform';
import Formio from './Formio';
import { fastCloneDeep, checkCondition, firstNonNil, uniqueKey } from './utils/utils';
>>>>>>> newFormio

  /**
   * Constructor for wizard based forms
   * @param element Dom element to place this wizard.
   * @param {Object} options Options object, supported options are:
   *    - breadcrumbSettings.clickable: true (default) determines if the breadcrumb bar is clickable or not
   *    - buttonSettings.show*(Previous, Next, Cancel): true (default) determines if the button is shown or not
   */
<<<<<<< HEAD
  function Wizard(element, options) {
    var _this;

    _classCallCheck(this, Wizard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wizard).call(this, element, options));
    _this.wizard = null;
    _this.pages = [];
    _this.globalComponents = [];
    _this.page = 0;
    _this._nextPage = 0;
    _this._seenPages = [0];
    return _this;
  }

  _createClass(Wizard, [{
    key: "isLastPage",
    value: function isLastPage() {
      var next = this.getNextPage(this.submission.data, this.page);

      if (_lodash.default.isNumber(next)) {
        return 0 < next && next >= this.pages.length;
      }

      return _lodash.default.isNull(next);
    }
  }, {
    key: "getPages",
    value: function getPages() {
      var _this2 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _args$all = args.all,
          all = _args$all === void 0 ? false : _args$all;

      var pageOptions = _lodash.default.clone(this.options);

      var components = _lodash.default.clone(this.components);

      var pages = this.pages.filter(all ? _lodash.default.identity : function (p, index) {
        return _this2._seenPages.includes(index);
      }).map(function (page, index) {
        return _this2.createComponent(page, _lodash.default.assign(pageOptions, {
          components: index === _this2.page ? components : null
        }));
      });
      this.components = components;
      return pages;
    }
  }, {
    key: "getComponents",
    value: function getComponents() {
      return this.submitting ? this.getPages({
        all: this.isLastPage()
      }) : _get(_getPrototypeOf(Wizard.prototype), "getComponents", this).call(this);
    }
  }, {
    key: "resetValue",
    value: function resetValue() {
      this.getPages({
        all: true
      }).forEach(function (page) {
        return page.resetValue();
      });
      this.setPristine(true);
    }
  }, {
    key: "setPage",
    value: function setPage(num) {
      if (!this.wizard.full && num >= 0 && num < this.pages.length) {
        this.page = num;

        if (!this._seenPages.includes(num)) {
          this._seenPages = this._seenPages.concat(num);
        }

        return _get(_getPrototypeOf(Wizard.prototype), "setForm", this).call(this, this.currentPage());
      } else if (this.wizard.full || !this.pages.length) {
        return _get(_getPrototypeOf(Wizard.prototype), "setForm", this).call(this, this.getWizard());
      }

      return _nativePromiseOnly.default.reject('Page not found');
=======
  constructor() {
    let element, options;
    if (arguments[0] instanceof HTMLElement || arguments[1]) {
      element = arguments[0];
      options = arguments[1];
    }
    else {
      options = arguments[0];
    }
    super(element, options);
    this.pages = [];
    this.prefixComps = [];
    this.suffixComps = [];
    this.components = [];
    this.originalComponents = [];
    this.page = 0;
    this.currentNextPage = 0;
    this._seenPages = [0];
  }

  isLastPage() {
    const next = this.getNextPage();

    if (_.isNumber(next)) {
      return 0 < next && next >= this.pages.length;
    }

    return _.isNull(next);
  }

  getPages(args = {}) {
    const { all = false } = args;
    const pages = this.pages
          .filter(all ? _.identity : (p, index) => this._seenPages.includes(index));

    return pages;
  }

  getComponents() {
    return this.submitting
      ? this.getPages({ all: this.isLastPage() })
      : super.getComponents();
  }

  resetValue() {
    this.getPages({ all: true }).forEach((page) => page.resetValue());
    this.setPristine(true);
  }

  init() {
    // Check for and initlize button settings object
    this.options.buttonSettings = _.defaults(this.options.buttonSettings, {
      showPrevious: true,
      showNext: true,
      showSubmit: true,
      showCancel: !this.options.readOnly
    });

    this.options.breadcrumbSettings = _.defaults(this.options.breadcrumbSettings, {
      clickable: true
    });

    this.page = 0;
    const onReady = super.init();
    this.setComponentSchema();
    return onReady;
  }

  get wizardKey() {
    return `wizard-${this.id}`;
  }

  get form() {
    return this.wizard;
  }

  set form(value) {
    super.form = value;
  }

  get buttons() {
    const buttons = {};
    [
      { name: 'cancel',    method: 'cancel' },
      { name: 'previous',  method: 'prevPage' },
      { name: 'next',      method: 'nextPage' },
      { name: 'submit',    method: 'submit' }
    ].forEach((button) => {
      if (this.hasButton(button.name)) {
        buttons[button.name] = button;
      }
    });
    return buttons;
  }

  get renderContext() {
    return {
      wizardKey: this.wizardKey,
      isBreadcrumbClickable: this.isBreadcrumbClickable(),
      panels: this.pages.map(page => page.component),
      buttons: this.buttons,
      currentPage: this.page,
    };
  }

  render() {
    const ctx = this.renderContext;
    return this.renderTemplate('wizard', {
      ...ctx,
      wizardHeader: this.renderTemplate('wizardHeader', ctx),
      wizardNav: this.renderTemplate('wizardNav', ctx),
      components: this.renderComponents([
        ...this.prefixComps,
        ...this.currentPage.components,
        ...this.suffixComps
      ]),
    }, this.builderMode ? 'builder' : 'form');
  }

  redrawNavigation() {
    if (this.element) {
      let navElement = this.element.querySelector(`#${this.wizardKey}-nav`);
      if (navElement) {
        this.detachNav();
        navElement.outerHTML = this.renderTemplate('wizardNav', this.renderContext);
        navElement = this.element.querySelector(`#${this.wizardKey}-nav`);
        this.loadRefs(navElement, {
          [`${this.wizardKey}-cancel`]: 'single',
          [`${this.wizardKey}-previous`]: 'single',
          [`${this.wizardKey}-next`]: 'single',
          [`${this.wizardKey}-submit`]: 'single',
        });
        this.attachNav();
      }
    }
  }

  redrawHeader() {
    if (this.element) {
      let headerElement = this.element.querySelector(`#${this.wizardKey}-header`);
      if (headerElement) {
        this.detachHeader();
        headerElement.outerHTML = this.renderTemplate('wizardHeader', this.renderContext);
        headerElement = this.element.querySelector(`#${this.wizardKey}-header`);
        this.loadRefs(headerElement, {
          [`${this.wizardKey}-link`]: 'multiple'
        });
        this.attachHeader();
      }
    }
  }

  attach(element) {
    this.element = element;
    this.loadRefs(element, {
      [this.wizardKey]: 'single',
      [`${this.wizardKey}-cancel`]: 'single',
      [`${this.wizardKey}-previous`]: 'single',
      [`${this.wizardKey}-next`]: 'single',
      [`${this.wizardKey}-submit`]: 'single',
      [`${this.wizardKey}-link`]: 'multiple',
    });

    const promises = this.attachComponents(this.refs[this.wizardKey], [
      ...this.prefixComps,
      ...this.currentPage.components,
      ...this.suffixComps,
    ]);
    this.attachNav();
    this.attachHeader();
    return promises.then(() => this.emit('render'));
  }

  isBreadcrumbClickable() {
    return _.get(this.options, 'breadcrumbSettings.clickable', true);
  }

  attachNav() {
    _.each(this.buttons, (button) => {
      const buttonElement = this.refs[`${this.wizardKey}-${button.name}`];
      this.addEventListener(buttonElement, 'click', (event) => {
        event.preventDefault();

        // Disable the button until done.
        buttonElement.setAttribute('disabled', 'disabled');
        this.setLoading(buttonElement, true);

        // Call the button method, then re-enable the button.
        this[button.method]().then(() => {
          buttonElement.removeAttribute('disabled');
          this.setLoading(buttonElement, false);
        }).catch(() => {
          buttonElement.removeAttribute('disabled');
          this.setLoading(buttonElement, false);
        });
      });
    });
  }

  attachHeader() {
    if (this.isBreadcrumbClickable()) {
      this.refs[`${this.wizardKey}-link`].forEach((link, index) => {
        this.addEventListener(link, 'click', (event) => {
          this.emit('wizardNavigationClicked', this.pages[index]);
          event.preventDefault();
          this.setPage(index);
        });
      });
    }
  }

  detachNav() {
    _.each(this.buttons, (button) => {
      this.removeEventListener(this.refs[`${this.wizardKey}-${button.name}`], 'click');
    });
  }

  detachHeader() {
    this.refs[`${this.wizardKey}-link`].forEach((link) => {
      this.removeEventListener(link, 'click');
    });
  }

  establishPages() {
    this.pages = [];
    this.prefixComps = [];
    this.suffixComps = [];
    const visible = [];
    const currentPages = {};
    const pageOptions = _.clone(this.options);
    if (this.components && this.components.length) {
      this.components.map(page => {
        if (page.component.type === 'panel') {
          currentPages[page.component.key || page.component.title] = page;
        }
      });
    }
    if (this.originalComponents) {
      this.originalComponents.forEach((item) => {
        if (item.type === 'panel') {
          if (!item.key) {
            item.key = item.title;
          }
          let page = currentPages[item.key];
          const isVisible = checkCondition(item, this.data, this.data, this.component, this);
          if (isVisible) {
            visible.push(item);
            if (page) {
              this.pages.push(page);
            }
          }
          if (!page && isVisible) {
            page = this.createComponent(item, pageOptions);
            this.pages.push(page);
            page.eachComponent((component) => {
              component.page = (this.pages.length - 1);
            });
          }
          else if (page && !isVisible) {
            this.removeComponent(page);
          }
        }
        else if (item.type !== 'button') {
          if (!this.pages.length) {
            this.prefixComps.push(this.createComponent(item, pageOptions));
          }
          else {
            this.suffixComps.push(this.createComponent(item, pageOptions));
          }
        }
      });
    }
    return visible;
  }

  addComponents() {
    this.establishPages();
  }

  setPage(num) {
    if (num === this.page) {
      return NativePromise.resolve();
    }
    if (!this.wizard.full && num >= 0 && num < this.pages.length) {
      this.page = num;

      this.pageFieldLogic(num);

      this.getNextPage();
      if (!this._seenPages.includes(num)) {
        this._seenPages = this._seenPages.concat(num);
      }
      this.redraw();
      return NativePromise.resolve();
    }
    else if (this.wizard.full || !this.pages.length) {
      this.redraw();
      return NativePromise.resolve();
    }
    return NativePromise.reject('Page not found');
  }

  pageFieldLogic(page) {
    // Handle field logic on pages.
    this.component = this.pages[page].component;
    this.originalComponent = fastCloneDeep(this.component);
    this.fieldLogic(this.data);
    // If disabled changed, be sure to distribute the setting.
    this.disabled = this.shouldDisabled;
  }

  get currentPage() {
    return (this.pages && (this.pages.length >= this.page)) ? this.pages[this.page] : { components: [] };
  }

  getNextPage() {
    const data = this.submission.data;
    const form = this.pages[this.page].component;
    // Check conditional nextPage
    if (form) {
      const page = this.pages.length > (this.page + 1) ? this.page + 1 : -1;
      if (form.nextPage) {
        const next = this.evaluate(form.nextPage, {
          next: page,
          data,
          page,
          form
        }, 'next');
        if (next === null) {
          this.currentNextPage = null;
          return null;
        }

        const pageNum = parseInt(next, 10);
        if (!isNaN(parseInt(pageNum, 10)) && isFinite(pageNum)) {
          this.currentNextPage = pageNum;
          return pageNum;
        }

        this.currentNextPage = this.getPageIndexByKey(next);
        return this.currentNextPage;
      }

      this.currentNextPage = page;
      return page;
>>>>>>> newFormio
    }
  }, {
    key: "getNextPage",
    value: function getNextPage(data, currentPage) {
      var form = this.pages[currentPage]; // Check conditional nextPage

<<<<<<< HEAD
      if (form) {
        var page = ++currentPage;

        if (form.nextPage) {
          var next = this.evaluate(form.nextPage, {
            next: page,
            data: data,
            page: page,
            form: form
          }, 'next');

          if (next === null) {
            return null;
          }

          var pageNum = parseInt(next, 10);

          if (!isNaN(parseInt(pageNum, 10)) && isFinite(pageNum)) {
            return pageNum;
          }

          return this.getPageIndexByKey(next);
        }

        return page;
      }

      return null;
=======
    this.currentNextPage = null;
    return null;
  }

  getPreviousPage() {
    return this.page - 1;
  }

  beforeSubmit() {
    return NativePromise.all(this.getPages().map((page) => {
      page.options.beforeSubmit = true;
      return page.beforeSubmit();
    }));
  }

  beforePage(next) {
    return new NativePromise((resolve, reject) => {
      this.hook(next ? 'beforeNext' : 'beforePrev', this.currentPage, this.submission, (err) => {
        if (err) {
          this.showErrors(err, true);
          reject(err);
        }

        const form = this.currentPage;
        if (form) {
          form.beforePage(next).then(resolve).catch(reject);
        }
        else {
          resolve();
        }
      });
    });
  }

  nextPage() {
    // Read-only forms should not worry about validation before going to next page, nor should they submit.
    if (this.options.readOnly) {
      return this.setPage(this.getNextPage()).then(() => {
        this.emit('nextPage', { page: this.page, submission: this.submission });
      });
>>>>>>> newFormio
    }
  }, {
    key: "getPreviousPage",
    value: function getPreviousPage() {
      return Math.max(this.page - 1, 0);
    }
  }, {
    key: "beforeSubmit",
    value: function beforeSubmit() {
      return _nativePromiseOnly.default.all(this.getPages().map(function (page) {
        page.options.beforeSubmit = true;
        return page.beforeSubmit();
      }));
    }
  }, {
    key: "beforeNext",
    value: function beforeNext() {
      var _this3 = this;

<<<<<<< HEAD
      return new _nativePromiseOnly.default(function (resolve, reject) {
        _this3.hook('beforeNext', _this3.currentPage(), _this3.submission, function (err) {
          if (err) {
            _this3.showErrors(err, true);

            reject(err);
          }

          _get(_getPrototypeOf(Wizard.prototype), "beforeNext", _this3).call(_this3).then(resolve).catch(reject);
        });
      });
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      var _this4 = this;

      // Read-only forms should not worry about validation before going to next page, nor should they submit.
      if (this.options.readOnly) {
        return this.setPage(this.getNextPage(this.submission.data, this.page)).then(function () {
          _this4._nextPage = _this4.getNextPage(_this4.submission.data, _this4.page);

          _this4.emit('nextPage', {
            page: _this4.page,
            submission: _this4.submission
          });
        });
      } // Validate the form builed, before go to the next page


      if (this.checkCurrentPageValidity(this.submission.data, true)) {
        this.checkData(this.submission.data, {
          noValidate: true
        });
        return this.beforeNext().then(function () {
          return _this4.setPage(_this4.getNextPage(_this4.submission.data, _this4.page)).then(function () {
            _this4._nextPage = _this4.getNextPage(_this4.submission.data, _this4.page);

            _this4.emit('nextPage', {
              page: _this4.page,
              submission: _this4.submission
            });
          });
        });
      } else {
        return _nativePromiseOnly.default.reject(this.showErrors(null, true));
      }
=======
    // Validate the form, before go to the next page
    if (this.checkValidity(this.submission.data, true, this.submission.data, true)) {
      this.checkData(this.submission.data);
      return this.beforePage(true).then(() => {
        return this.setPage(this.getNextPage()).then(() => {
          this.emit('nextPage', { page: this.page, submission: this.submission });
        });
      });
    }
    else {
      return NativePromise.reject(this.showErrors([], true));
    }
  }

  prevPage() {
    return this.beforePage().then(() => {
      return this.setPage(this.getPreviousPage()).then(() => {
        this.emit('prevPage', { page: this.page, submission: this.submission });
      });
    });
  }

  checkData(data, flags) {
    const dirty = this.currentPage.components.some(component => !component.isEmpty());
    return super.checkData(data, flags) && this.checkValidity(data, dirty, true);
  }

  cancel(noconfirm) {
    if (super.cancel(noconfirm)) {
      return this.setPage(0);
>>>>>>> newFormio
    }
  }, {
    key: "prevPage",
    value: function prevPage() {
      var _this5 = this;

      var prevPage = this.getPreviousPage();
      return this.setPage(prevPage).then(function () {
        _this5.emit('prevPage', {
          page: _this5.page,
          submission: _this5.submission
        });
      });
    }
<<<<<<< HEAD
  }, {
    key: "cancel",
    value: function cancel(noconfirm) {
      if (_get(_getPrototypeOf(Wizard.prototype), "cancel", this).call(this, noconfirm)) {
        return this.setPage(0);
      } else {
        return this.setPage();
      }
    }
  }, {
    key: "getPageIndexByKey",
    value: function getPageIndexByKey(key) {
      var pageIndex = 0;
      this.pages.forEach(function (page, index) {
        if (page.key === key) {
          pageIndex = index;
          return false;
        }
      });
      return pageIndex;
    }
  }, {
    key: "addGlobalComponents",
    value: function addGlobalComponents(page) {
      // If there are non-page components, then add them here. This is helpful to allow for hidden fields that
      // can propogate between pages.
      if (this.globalComponents.length) {
        page.components = this.globalComponents.concat(page.components);
=======
  }

  getPageIndexByKey(key) {
    let pageIndex = this.page;
    this.pages.forEach((page, index) => {
      if (page.component.key === key) {
        pageIndex = index;
        return false;
>>>>>>> newFormio
      }

<<<<<<< HEAD
      return page;
    }
  }, {
    key: "getPage",
    value: function getPage(pageNum) {
      if (pageNum >= 0 && pageNum < this.pages.length) {
        return this.addGlobalComponents(this.pages[pageNum]);
      }

      return null;
    }
  }, {
    key: "getWizard",
    value: function getWizard() {
      var pageIndex = 0;
      var page = null;

      var wizard = _lodash.default.clone(this.wizard);

      wizard.components = [];

      do {
        page = this.getPage(pageIndex);

        if (page) {
          wizard.components.push(page);
        }

        pageIndex = this.getNextPage(this.submission.data, pageIndex);
      } while (pageIndex); // Add all other components.


      this.wizard.components.forEach(function (component) {
        if (component.type !== 'panel') {
          wizard.components.push(component);
        }
      });
      return wizard;
    }
  }, {
    key: "currentPage",
    value: function currentPage() {
      return this.getPage(this.page);
    }
  }, {
    key: "buildPages",
    value: function buildPages(form) {
      var _this6 = this;

      this.pages = [];
      form.components.forEach(function (component) {
        if (component.type === 'panel') {
          // Ensure that this page can be seen.
          if ((0, _utils.checkCondition)(component, _this6.data, _this6.data, _this6.wizard, _this6)) {
            _this6.pages.push(component);
          }
        } else if (component.type === 'hidden') {
          // Global components are hidden components that can propagate between pages.
          _this6.globalComponents.push(component);
        }
      });
      this.buildWizardHeader();
      this.buildWizardNav();
    }
  }, {
    key: "setForm",
    value: function setForm(form) {
      if (!form) {
        return;
      }

      this.wizard = form;
      this.buildPages(this.wizard);
      return this.setPage(this.page);
    }
  }, {
    key: "build",
    value: function build() {
      var _this7 = this;

      _get(_getPrototypeOf(Wizard.prototype), "build", this).call(this);

      this.formReady.then(function () {
        _this7.buildWizardHeader();

        _this7.buildWizardNav();
      });
=======
  get schema() {
    return this.wizard;
  }

  setComponentSchema() {
    const pageKeys = {};
    this.originalComponents = [];
    this.component.components.map((item) => {
      if (item.type === 'panel') {
        item.key = uniqueKey(pageKeys, (item.key || 'panel'));
        pageKeys[item.key] = true;
      }
      this.originalComponents.push(_.clone(item));
    });

    if (!Object.keys(pageKeys).length) {
      const newPage = {
        type: 'panel',
        title: 'Page 1',
        label: 'Page 1',
        key: 'page1',
        components: this.component.components
      };
      this.component.components = [newPage];
      this.originalComponents.push(_.clone(newPage));
    }
  }

  setForm(form) {
    if (!form) {
      return;
    }
    this.wizard = form;
    this.component.components = form.components || [];
    this.setComponentSchema();
    return super.setForm(form);
  }

  setValue(submission, flags) {
    const changed = super.setValue(submission, flags);
    this.pageFieldLogic(this.page);
    return changed;
  }

  isClickable(page, index) {
    return this.page !== index && firstNonNil([
      _.get(page, 'breadcrumbClickable'),
      this.options.breadcrumbSettings.clickable
    ]);
  }

  hasButton(name, nextPage) {
    const currentPage = this.currentPage;
    if (name === 'previous') {
      const show = firstNonNil([
        _.get(currentPage, 'buttonSettings.previous'),
        this.options.buttonSettings.showPrevious
      ]);
      return (this.getPreviousPage() > -1) && show;
    }
    nextPage = (nextPage === undefined) ? this.getNextPage() : nextPage;
    if (name === 'next') {
      const show = firstNonNil([
        _.get(currentPage, 'buttonSettings.next'),
        this.options.buttonSettings.showNext
      ]);
      return (nextPage !== null) && (nextPage !== -1) && show;
    }
    if (name === 'cancel') {
      return firstNonNil([
        _.get(currentPage, 'buttonSettings.cancel'),
        this.options.buttonSettings.showCancel
      ]);
    }
    if (name === 'submit') {
      const show = firstNonNil([
        _.get(currentPage, 'buttonSettings.submit'),
        this.options.buttonSettings.showSubmit
      ]);
      return show && !this.options.readOnly && ((nextPage === null) || (this.page === (this.pages.length - 1)));
>>>>>>> newFormio
    }
  }, {
    key: "hasButton",
    value: function hasButton(name, nextPage) {
      // Check for and initlize button settings object
      var currentPage = this.currentPage();
      this.options.buttonSettings = _lodash.default.defaults(this.options.buttonSettings, {
        showPrevious: true,
        showNext: true,
        showCancel: !this.options.readOnly
      });

<<<<<<< HEAD
      if (name === 'previous') {
        var show = (0, _utils.firstNonNil)([_lodash.default.get(currentPage, 'buttonSettings.previous'), this.options.buttonSettings.showPrevious]);
        return this.page > 0 && show;
      }

      nextPage = nextPage === undefined ? this.getNextPage(this.submission.data, this.page) : nextPage;

      if (name === 'next') {
        var _show = (0, _utils.firstNonNil)([_lodash.default.get(currentPage, 'buttonSettings.next'), this.options.buttonSettings.showNext]);

        return nextPage !== null && nextPage < this.pages.length && _show;
      }

      if (name === 'cancel') {
        return (0, _utils.firstNonNil)([_lodash.default.get(currentPage, 'buttonSettings.cancel'), this.options.buttonSettings.showCancel]);
      }

      if (name === 'submit') {
        return !this.options.readOnly && (nextPage === null || this.page === this.pages.length - 1);
      }

      return true;
    }
  }, {
    key: "buildWizardHeader",
    value: function buildWizardHeader() {
      var _this8 = this;

      if (this.wizardHeader) {
        this.wizardHeader.innerHTML = '';
      }

      var currentPage = this.currentPage();

      if (!currentPage || this.wizard.full) {
        return;
      }

      currentPage.breadcrumb = currentPage.breadcrumb || 'default';

      if (currentPage.breadcrumb.toLowerCase() === 'none') {
        return;
      } // Check for and initlize breadcrumb settings object


      this.options.breadcrumbSettings = _lodash.default.defaults(this.options.breadcrumbSettings, {
        clickable: true
      });
      this.wizardHeader = this.ce('nav', {
        'aria-label': 'navigation'
      });
      this.wizardHeaderList = this.ce('ul', {
        class: 'pagination'
      });
      this.wizardHeader.appendChild(this.wizardHeaderList); // Add the header to the beginning.

      this.prepend(this.wizardHeader);
      var showHistory = currentPage.breadcrumb.toLowerCase() === 'history';
      this.pages.forEach(function (page, i) {
        // Iterate over predicates and returns first non-undefined value
        var clickableFlag = (0, _utils.firstNonNil)([// Now page (Panel) can override `breadcrumbSettings.clickable` option
        _lodash.default.get(page, 'breadcrumbClickable'), // Set clickable based on breadcrumb settings
        _this8.options.breadcrumbSettings.clickable]);
        var clickable = _this8.page !== i && clickableFlag;
        var pageClass = 'page-item ';
        pageClass += i === _this8.page ? 'active' : clickable ? '' : 'disabled';

        var pageButton = _this8.ce('li', {
          class: pageClass,
          style: clickable ? 'cursor: pointer;' : ''
        }); // Navigate to the page as they click on it.


        if (clickable) {
          _this8.addEventListener(pageButton, 'click', function (event) {
            _this8.emit('wizardNavigationClicked', _this8.pages[i]);

            event.preventDefault();

            _this8.setPage(i);
          });
        }

        var pageLabel = _this8.ce('span', {
          class: 'page-link'
        });

        var pageTitle = page.title;

        if (currentPage.breadcrumb.toLowerCase() === 'condensed') {
          pageTitle = i === _this8.page || showHistory ? page.title : i + 1;

          if (!pageTitle) {
            pageTitle = i + 1;
          }
        }

        pageLabel.appendChild(_this8.text(pageTitle));
        pageButton.appendChild(pageLabel);

        _this8.wizardHeaderList.appendChild(pageButton);
      });
=======
  pageId(page) {
    if (page.key) {
      // Some panels have the same key....
      return `${page.key}-${page.title}`;
    }
    else if (
      page.components &&
      page.components.length > 0
    ) {
      return this.pageId(page.components[0]);
>>>>>>> newFormio
    }
  }, {
    key: "pageId",
    value: function pageId(page) {
      if (page.key) {
        // Some panels have the same key....
        return "".concat(page.key, "-").concat(page.title);
      } else if (page.components && page.components.length > 0) {
        return this.pageId(page.components[0]);
      } else {
        return page.title;
      }
    }
  }, {
    key: "onChange",
    value: function onChange(flags, changed) {
      var _this9 = this;

<<<<<<< HEAD
      _get(_getPrototypeOf(Wizard.prototype), "onChange", this).call(this, flags, changed); // Only rebuild if there is a page change.


      var pageIndex = 0;
      var rebuild = false;
      this.wizard.components.forEach(function (component) {
        if (component.type !== 'panel') {
          return;
        }

        if ((0, _utils.hasCondition)(component)) {
          var hasPage = _this9.pages && _this9.pages[pageIndex] && _this9.pageId(_this9.pages[pageIndex]) === _this9.pageId(component);

          var shouldShow = (0, _utils.checkCondition)(component, _this9.data, _this9.data, _this9.wizard, _this9);

          if (shouldShow && !hasPage || !shouldShow && hasPage) {
            rebuild = true;
            return false;
          }

          if (shouldShow) {
            pageIndex++;
          }
        } else {
          pageIndex++;
        }
      });

      if (rebuild) {
        this.setForm(this.wizard);
      } // Update Wizard Nav


      var nextPage = this.getNextPage(this.submission.data, this.page);

      if (this._nextPage !== nextPage) {
        this.buildWizardNav(nextPage);
        this.emit('updateWizardNav', {
          oldpage: this._nextPage,
          newpage: nextPage,
          submission: this.submission
        });
        this._nextPage = nextPage;
      }
    }
  }, {
    key: "buildWizardNav",
    value: function buildWizardNav(nextPage) {
      var _this10 = this;

      if (this.wizardNav) {
        this.wizardNav.innerHTML = '';
        this.removeChild(this.wizardNav);
      }

      if (this.wizard.full) {
        return;
      }

      this.wizardNav = this.ce('ul', {
        class: 'list-inline'
      });
      this.element.appendChild(this.wizardNav);
      [{
        name: 'cancel',
        method: 'cancel',
        class: 'btn btn-default btn-secondary'
      }, {
        name: 'previous',
        method: 'prevPage',
        class: 'btn btn-primary'
      }, {
        name: 'next',
        method: 'nextPage',
        class: 'btn btn-primary'
      }, {
        name: 'submit',
        method: 'submit',
        class: 'btn btn-primary'
      }].forEach(function (button) {
        if (!_this10.hasButton(button.name, nextPage)) {
          return;
        }

        var buttonWrapper = _this10.ce('li', {
          class: 'list-inline-item'
        });

        var buttonProp = "".concat(button.name, "Button");

        var buttonElement = _this10[buttonProp] = _this10.ce('button', {
          class: "".concat(button.class, " btn-wizard-nav-").concat(button.name)
        });

        buttonElement.appendChild(_this10.text(_this10.t(button.name)));

        _this10.addEventListener(_this10[buttonProp], 'click', function (event) {
          event.preventDefault(); // Disable the button until done.

          buttonElement.setAttribute('disabled', 'disabled');

          _this10.setLoading(buttonElement, true); // Call the button method, then re-enable the button.


          _this10[button.method]().then(function () {
            buttonElement.removeAttribute('disabled');

            _this10.setLoading(buttonElement, false);
          }).catch(function () {
            buttonElement.removeAttribute('disabled');

            _this10.setLoading(buttonElement, false);
          });
        });

        buttonWrapper.appendChild(_this10[buttonProp]);

        _this10.wizardNav.appendChild(buttonWrapper);
      });
=======
  onChange(flags, changed, modified) {
    super.onChange(flags, changed, modified);
    if (this.alert && !this.submitted) {
      this.checkValidity(this.submission.data, false, this.submission.data, true);
      this.showErrors([], true);
    }

    // If the pages change, need to redraw the header.
    const currentPanels = this.pages.map(page => page.component.key);
    const panels = this.establishPages().map(panel => panel.key);
    if (!_.isEqual(panels, currentPanels)) {
      this.redrawHeader();
    }

    // If the next page changes, then make sure to redraw navigation.
    if (this.currentNextPage !== this.getNextPage()) {
      this.redrawNavigation();
>>>>>>> newFormio
    }
  }, {
    key: "checkCurrentPageValidity",
    value: function checkCurrentPageValidity() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

<<<<<<< HEAD
      return (_get2 = _get(_getPrototypeOf(Wizard.prototype), "checkValidity", this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: "checkPagesValidity",
    value: function checkPagesValidity(pages) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var isValid = _Base.default.prototype.checkValidity.apply(this, args);

      return pages.reduce(function (check, pageComp) {
        return pageComp.checkValidity.apply(pageComp, args) && check;
      }, isValid);
    }
  }, {
    key: "checkValidity",
    value: function checkValidity(data, dirty) {
      if (this.submitting) {
        return this.checkPagesValidity(this.getPages(), data, dirty);
      } else {
        return this.checkCurrentPageValidity(data, dirty);
      }
    }
  }, {
    key: "schema",
    get: function get() {
      return this.wizard;
    }
  }, {
    key: "errors",
    get: function get() {
      if (this.isLastPage()) {
        var pages = this.getPages({
          all: true
        });
        this.checkPagesValidity(pages, this.submission.data, true);
        return pages.reduce(function (errors, pageComp) {
          return errors.concat(pageComp.errors || []);
        }, []);
      }

      return _get(_getPrototypeOf(Wizard.prototype), "errors", this);
    }
  }]);

  return Wizard;
}(_Webform2.default);
=======
  checkValidity(data, dirty, row, currentPageOnly) {
    if (!this.checkCondition(row, data)) {
      this.setCustomValidity('');
      return true;
    }

    const components = !currentPageOnly || this.isLastPage()
      ? this.getComponents()
      : this.currentPage.components;

    return components.reduce(
      (check, comp) => comp.checkValidity(data, dirty, row) && check,
      true
    );
  }

  get errors() {
    if (!this.isLastPage()) {
      return this.currentPage.errors;
    }

    return super.errors;
  }

  focusOnComponent(key) {
    let pageIndex = 0;
    const [page] = this.pages.filter((page, index) => {
      if (page.getComponent(key)) {
        pageIndex = index;
        return true;
      }
      return false;
    });

    if (page && page !== this.currentPage) {
      return this.setPage(pageIndex).then(() => {
        this.checkValidity(this.submission.data, true, this.submission.data);
        this.showErrors();
        super.focusOnComponent(key);
      });
    }
    return super.focusOnComponent(key);
  }
}
>>>>>>> newFormio

exports.default = Wizard;
Wizard.setBaseUrl = _Formio.default.setBaseUrl;
Wizard.setApiUrl = _Formio.default.setApiUrl;
Wizard.setAppUrl = _Formio.default.setAppUrl;
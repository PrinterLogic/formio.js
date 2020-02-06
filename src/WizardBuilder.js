<<<<<<< HEAD
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _WebformBuilder2 = _interopRequireDefault(require("./WebformBuilder"));

var _lodash = _interopRequireDefault(require("lodash"));

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

var WizardBuilder =
/*#__PURE__*/
function (_WebformBuilder) {
  _inherits(WizardBuilder, _WebformBuilder);

  function WizardBuilder() {
    _classCallCheck(this, WizardBuilder);

    return _possibleConstructorReturn(this, _getPrototypeOf(WizardBuilder).apply(this, arguments));
  }

  _createClass(WizardBuilder, [{
    key: "setBuilderElement",
    value: function setBuilderElement() {
      var _this = this;

      return _get(_getPrototypeOf(WizardBuilder.prototype), "setBuilderElement", this).call(this).then(function () {
        var buildRegion = _this.ce('div', {
          class: 'col-xs-8 col-sm-9 col-md-10 formarea'
        });

        _this.element.setAttribute('class', '');

        _this.element.noDrop = true;

        _this.wrapper.insertBefore(buildRegion, _this.element);

        _this.pageBar = _this.ce('ol', {
          class: 'breadcrumb'
        });
        buildRegion.appendChild(_this.pageBar);
        buildRegion.appendChild(_this.element);
        _this.currentPage = 0;
      });
    }
  }, {
    key: "addSubmitButton",
    value: function addSubmitButton() {// Do nothing...
    }
  }, {
    key: "deleteComponent",
    value: function deleteComponent(component) {
      var _this2 = this;

      var cb;
      var isPage = this.components.includes(component);

      if (isPage) {
        cb = function cb() {
          return _this2.currentPage = 0;
        };

        this.on('deleteComponent', cb);
      }

      _get(_getPrototypeOf(WizardBuilder.prototype), "deleteComponent", this).call(this, component);

      if (isPage) {
        this.off('deleteComponent', cb);
      }
    }
  }, {
    key: "addPage",
    value: function addPage() {
      var pageNum = this.pages.length + 1;
      var newPage = {
        title: "Page ".concat(pageNum),
        label: "Page ".concat(pageNum),
        type: 'panel',
        key: "page".concat(pageNum)
      };
      this.component.components.push(newPage);
      this.addComponent(newPage);
      this.emit('saveComponent', newPage);
      this.form = this.schema;
    }
  }, {
    key: "addComponents",
    value: function addComponents(element, data, options, state) {
      var _this3 = this;

      element = element || this.getContainer();
      data = data || this.data;
      var components = this.hook('addComponents', this.componentComponents, this);

      _lodash.default.each(components, function (component, index) {
        return _this3.addComponent(component, element, data, null, index !== _this3.currentPage, _this3.getComponentState(component, state));
      });
    }
  }, {
    key: "gotoPage",
    value: function gotoPage(page) {
      this.currentPage = page;
      this.redraw(true);
    }
    /**
     * Only show the current page.
     *
     * @return {Array}
     */

  }, {
    key: "buildPageBar",
    value: function buildPageBar() {
      var _this4 = this;

      var pages = this.pages; // Always ensure we have a single page.

      if (!pages.length) {
        return this.addPage();
      }

      this.empty(this.pageBar);

      _lodash.default.each(pages, function (page, index) {
        var pageLink = _this4.ce('span', {
          title: page.title,
          class: index === _this4.currentPage ? 'mr-2 badge badge-primary bg-primary label label-primary wizard-page-label' : 'mr-2 badge badge-info bg-info label label-info wizard-page-label'
        }, _this4.text(page.title));

        _this4.pageBar.appendChild(_this4.ce('li', null, pageLink));

        _this4.addEventListener(pageLink, 'click', function (event) {
          event.preventDefault();

          _this4.gotoPage(index);
        });
      });

      var newPage = this.ce('span', {
        title: this.t('Create Page'),
        class: 'mr-2 badge badge-success bg-success label label-success wizard-page-label'
      }, [this.getIcon('plus'), this.text(' PAGE')]);
      this.addEventListener(newPage, 'click', function (event) {
        event.preventDefault();

        _this4.addPage();
      });
      this.pageBar.appendChild(this.ce('li', null, newPage));
    }
  }, {
    key: "build",
    value: function build(state) {
      var _this5 = this;

      _get(_getPrototypeOf(WizardBuilder.prototype), "build", this).call(this, state);

      this.builderReady.then(function () {
        return _this5.buildPageBar();
      });
    }
  }, {
    key: "currentPage",
    get: function get() {
      return this._currentPage || 0;
    },
    set: function set(currentPage) {
      this._currentPage = currentPage;
    }
  }, {
    key: "pages",
    get: function get() {
      return _lodash.default.filter(this.component.components, {
        type: 'panel'
      });
    }
  }, {
    key: "componentComponents",
    get: function get() {
      var components = this.pages;
      components.nodrop = true;
      return components;
    }
  }]);

  return WizardBuilder;
}(_WebformBuilder2.default);

exports.default = WizardBuilder;
=======
import WebformBuilder from './WebformBuilder';
import Webform from './Webform';
import BuilderUtils from './utils/builder';
import _ from 'lodash';

export default class WizardBuilder extends WebformBuilder {
  constructor() {
    let element, options;
    if (arguments[0] instanceof HTMLElement || arguments[1]) {
      element = arguments[0];
      options = arguments[1];
    }
    else {
      options = arguments[0];
    }
    // Reset skipInit in case PDFBuilder has set it.
    options.skipInit = false;

    super(element, options);

    this._form = {
      components: [
        this.getPageConfig(1),
      ],
    };

    this.page = 0;

    this.options.hooks.attachPanel = (element, component) => {
      if (component.refs.removeComponent) {
        this.addEventListener(component.refs.removeComponent, 'click', () => {
          const pageIndex = this.pages.findIndex((page) => page.key === component.key);
          const componentIndex = this._form.components.findIndex((comp) => comp.key === component.key);
          if (pageIndex !== -1) {
            this.removePage(pageIndex, componentIndex);
          }
        });
      }
    };

    const originalRenderComponentsHook = this.options.hooks.renderComponents;
    this.options.hooks.renderComponents = (html, { components, self }) => {
      if (self.type === 'form' && !self.root) {
        return html;
      }
      else {
        return originalRenderComponentsHook(html, { components, self });
      }
    };

    const originalAttachComponentsHook = this.options.hooks.attachComponents;
    this.options.hooks.attachComponents = (element, components, container, component) => {
      if (component.type === 'form' && !component.root) {
        return element;
      }

      return originalAttachComponentsHook(element, components, container, component);
    };

    // Wizard pages don't replace themselves in the right array. Do that here.
    this.on('saveComponent', (component, originalComponent) => {
      const webformComponents = this.webform.components.map(({ component }) => component);
      if (this._form.components.includes(originalComponent)) {
        this._form.components[this._form.components.indexOf(originalComponent)] = component;
        this.rebuild();
      }
      else if (webformComponents.includes(originalComponent)) {
        this._form.components.push(component);
        this.rebuild();
      }
    }, true);
  }

  allowDrop(element) {
    return (this.webform && this.webform.refs && this.webform.refs.webform === element) ? false : true;
  }

  get pages() {
    return _.filter(this._form.components, { type: 'panel' });
  }

  get currentPage() {
    const pages = this.pages;
    return (pages && (pages.length >= this.page)) ? pages[this.page] : null;
  }

  set form(value) {
    this._form = value;
    if (!this._form.components || !Array.isArray(this._form.components)) {
      this._form.components = [];
    }

    if (this.pages.length === 0) {
      const components = this._form.components.filter((component) => component.type !== 'button');
      this._form.components = [this.getPageConfig(1, components)];
    }
    this.rebuild();
  }

  get form() {
    return this._form;
  }

  get schema() {
    _.assign(this.currentPage, this.webform._form.components[0]);
    const webform = new Webform(this.options);
    webform.form = this._form;
    return webform.schema;
  }

  render() {
    return this.renderTemplate('builderWizard', {
      sidebar: this.renderTemplate('builderSidebar', {
        scrollEnabled: this.sideBarScroll,
        groupOrder: this.groupOrder,
        groupId: `builder-sidebar-${this.id}`,
        groups: this.groupOrder.map((groupKey) => this.renderTemplate('builderSidebarGroup', {
          group: this.groups[groupKey],
          groupKey,
          groupId: `builder-sidebar-${this.id}`,
          subgroups: this.groups[groupKey].subgroups.map((group) => this.renderTemplate('builderSidebarGroup', {
            group,
            groupKey: group.key,
            groupId: `builder-sidebar-${groupKey}`,
            subgroups: []
          })),
        })),
      }),
      pages: this.pages,
      form: this.webform.render(),
    });
  }

  attach(element) {
    this.loadRefs(element, {
      addPage: 'multiple',
      gotoPage: 'multiple',
    });

    this.refs.addPage.forEach(link => {
      this.addEventListener(link, 'click', (event) => {
        event.preventDefault();
        this.addPage();
      });
    });

    this.refs.gotoPage.forEach((link, index) => {
      this.addEventListener(link, 'click', (event) => {
        event.preventDefault();
        this.setPage(index);
      });
    });

    return super.attach(element);
  }

  rebuild() {
    const page = this.currentPage;
    this.webform.form = {
      display: 'form',
      type: 'form',
      components: page ? [page] : [],
    };
    return this.redraw();
  }

  addPage() {
    const pageNum = (this.pages.length + 1);
    const newPage = this.getPageConfig(pageNum);
    BuilderUtils.uniquify(this._form.components, newPage);
    this._form.components.push(newPage);
    this.emit('saveComponent', newPage);
    return this.rebuild();
  }

  removePage(pageIndex, componentIndex) {
    this._form.components.splice(componentIndex, 1);

    if (pageIndex === this.pages.length) {
      // If the last page is removed.
      if (pageIndex === 0) {
        this._form.components.push(this.getPageConfig(1));
        return this.rebuild();
      }
      else {
        return this.setPage(pageIndex - 1);
      }
    }
    else {
      return this.rebuild();
    }
  }

  setPage(index) {
    if (index === this.page) {
      return;
    }
    this.page = index;
    return this.rebuild();
  }

  getPageConfig(index, components = []) {
    return {
      title: `Page ${index}`,
      label: `Page ${index}`,
      type: 'panel',
      key: `page${index}`,
      components,
    };
  }

  pasteComponent(component) {
    if (component instanceof WizardBuilder) {
      return;
    }
    return super.pasteComponent(component);
  }
}
>>>>>>> newFormio

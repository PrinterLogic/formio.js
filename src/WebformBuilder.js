<<<<<<< HEAD
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find-index");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Webform2 = _interopRequireDefault(require("./Webform"));

var _dragula = _interopRequireDefault(require("dragula"));

var _tooltip = _interopRequireDefault(require("tooltip.js"));

var _Components = _interopRequireDefault(require("./components/Components"));

var _builder = _interopRequireDefault(require("./utils/builder"));

var _utils = require("./utils/utils");

var _EventEmitter = _interopRequireDefault(require("./EventEmitter"));

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

require('./components/builder');

var WebformBuilder =
/*#__PURE__*/
function (_Webform) {
  _inherits(WebformBuilder, _Webform);

  function WebformBuilder(element, options) {
    var _this;

    _classCallCheck(this, WebformBuilder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebformBuilder).call(this, element, options));
    _this.builderHeight = 0;
    _this.dragContainers = [];
    _this.sidebarContainers = [];
    _this.updateDraggable = _lodash.default.debounce(_this.refreshDraggable.bind(_assertThisInitialized(_this)), 200); // Setup the builder options.

    _this.options.builder = _lodash.default.defaultsDeep({}, _this.options.builder, _this.defaultComponents);
    _this.options.enableButtons = _lodash.default.defaults({}, _this.options.enableButtons, {
      remove: true,
      copy: true,
      paste: true,
      edit: true,
      editJson: false
    }); // Turn off if explicitely said to do so...

    _lodash.default.each(_this.defaultComponents, function (config, key) {
      if (config === false) {
        _this.options.builder[key] = false;
      }
    });

    _this.builderReady = new _nativePromiseOnly.default(function (resolve) {
      _this.builderReadyResolve = resolve;
    });
    _this.groups = {};
    _this.options.sideBarScroll = _lodash.default.get(_this.options, 'sideBarScroll', true);
    _this.options.sideBarScrollOffset = _lodash.default.get(_this.options, 'sideBarScrollOffset', 0);
    _this.options.hooks = _this.options.hooks || {};

    _this.options.hooks.addComponents = function (components, parent) {
      if (!components || !components.length && !components.nodrop) {
        // Return a simple alert so they know they can add something here.
        return [{
          type: 'htmlelement',
          internal: true,
          tag: 'div',
          className: 'drag-and-drop-alert alert alert-info',
          attrs: [{
            attr: 'id',
            value: "".concat(parent.id, "-placeholder")
          }, {
            attr: 'style',
            value: 'text-align:center;'
          }, {
            attr: 'role',
            value: 'alert'
          }],
          content: _this.t('Drag and Drop a form component')
        }];
      }

      return components;
    };

    _this.options.hooks.addComponent = function (container, comp, parent) {
      if (!comp || !comp.component) {
        return container;
=======
import Webform from './Webform';
import Component from './components/_classes/component/Component';
// Import from "dist" because it would require and "global" would not be defined in Angular apps.
import dragula from 'dragula/dist/dragula';
import Tooltip from 'tooltip.js';
import NativePromise from 'native-promise-only';
import Components from './components/Components';
import Formio from './Formio';
import { fastCloneDeep, bootstrapVersion } from './utils/utils';
import { eachComponent, getComponent } from './utils/formUtils';
import BuilderUtils from './utils/builder';
import _ from 'lodash';
import Templates from './templates/Templates';
require('./components/builder');

export default class WebformBuilder extends Component {
// eslint-disable-next-line max-statements
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

    super(null, options);

    this.element = element;

    this.builderHeight = 0;
    this.schemas = {};

    this.sideBarScroll = _.get(this.options, 'sideBarScroll', true);
    this.sideBarScrollOffset = _.get(this.options, 'sideBarScrollOffset', 0);

    const componentInfo = {};
    for (const type in Components.components) {
      const component = Components.components[type];
      if (component.builderInfo) {
        component.type = type;
        componentInfo[type] = component.builderInfo;
      }
    }

    this.dragDropEnabled = true;

    // Setup the builder options.
    this.builder = _.defaultsDeep({}, this.options.builder, this.defaultGroups);

    // Turn off if explicitely said to do so...
    _.each(this.defaultGroups, (config, key) => {
      if (config === false) {
        this.builder[key] = false;
      }
    });

    // Add the groups.
    this.groups = {};
    this.groupOrder = [];
    for (const group in this.builder) {
      if (this.builder[group]) {
        this.builder[group].key = group;
        this.groups[group] = this.builder[group];
        this.groups[group].components = this.groups[group].components || {};
        this.groups[group].componentOrder = this.groups[group].componentOrder || [];
        this.groups[group].subgroups = Object.keys(this.groups[group].groups || {}).map((groupKey) => {
          this.groups[group].groups[groupKey].componentOrder = Object.keys(this.groups[group].groups[groupKey].components).map((key) => key);
          return this.groups[group].groups[groupKey];
        });
        this.groupOrder.push(this.groups[group]);
      }
    }

    this.groupOrder = this.groupOrder
      .filter(group => group && !group.ignore)
      .sort((a, b) => a.weight - b.weight)
      .map(group => group.key);

    for (const type in Components.components) {
      const component = Components.components[type];
      if (component.builderInfo) {
        this.schemas[type] = component.builderInfo.schema;
        component.type = type;
        const builderInfo = component.builderInfo;
        builderInfo.key = component.type;
        this.addBuilderComponentInfo(builderInfo);
      }
    }
    // Filter out any extra components.
    // Add the components in each group.
    for (const group in this.groups) {
      const info = this.groups[group];
      for (const key in info.components) {
        const comp = info.components[key];
        if (comp) {
          if (comp.schema) {
            this.schemas[key] = comp.schema;
          }
          info.components[key] = comp === true ? componentInfo[key] : comp;
          info.components[key].key = key;
        }
      }
    }

    // Need to create a component order for each group.
    for (const group in this.groups) {
      if (this.groups[group] && this.groups[group].components) {
        this.groups[group].componentOrder = Object.keys(this.groups[group].components)
          .map(key => this.groups[group].components[key])
          .filter(component => component && !component.ignore)
          .sort((a, b) => a.weight - b.weight)
          .map(component => component.key);
      }
    }

    this.options.hooks = this.options.hooks || {};

    this.options.hooks.renderComponent = (html, { self }) => {
      if (self.type === 'form' && !self.key) {
        // The main webform shouldn't have this class as it adds extra styles.
        return html.replace('formio-component-form', '');
      }

      if (this.options.disabled && this.options.disabled.includes(self.key) || self.parent.noDragDrop) {
        return html;
      }

      return this.renderTemplate('builderComponent', {
        html,
      });
    };

    this.options.hooks.renderComponents = (html, { components, self }) => {
      // if Datagrid and already has a component, don't make it droppable.
      if (self.type === 'datagrid' && components.length > 0 || self.noDragDrop) {
        return html;
>>>>>>> newFormio
      }

      if (!components ||
        (!components.length && !components.nodrop) ||
        (self.type === 'form' && components.length <= 1 && (components.length === 0 || components[0].type === 'button'))
      ) {
        html = this.renderTemplate('builderPlaceholder', {
          position: 0
        }) + html;
      }
      return this.renderTemplate('builderComponents', {
        key: self.key,
        type: self.type,
        html,
      });
    };

<<<<<<< HEAD
        var removeButton = _this.ce('div', {
          class: 'btn btn-xxs btn-danger component-settings-button component-settings-button-remove'
        }, _this.getIcon('remove'));

        _this.addEventListener(removeButton, 'click', function () {
          return _this.deleteComponent(comp);
        });

        new _tooltip.default(removeButton, {
          trigger: 'hover',
          placement: 'top',
          title: _this.t('Remove')
        });

        var editButton = _this.ce('div', {
          class: 'btn btn-xxs btn-default component-settings-button component-settings-button-edit'
        }, _this.getIcon('cog'));

        _this.addEventListener(editButton, 'click', function () {
          return _this.editComponent(comp);
        });

        new _tooltip.default(editButton, {
          trigger: 'hover',
          placement: 'top',
          title: _this.t('Edit')
        });

        var copyButton = _this.ce('div', {
          class: 'btn btn-xxs btn-default component-settings-button component-settings-button-copy'
        }, _this.getIcon('copy'));

        _this.addEventListener(copyButton, 'click', function () {
          return _this.copyComponent(comp);
        });

        new _tooltip.default(copyButton, {
          trigger: 'hover',
          placement: 'top',
          title: _this.t('Copy')
        });

        var pasteButton = _this.ce('div', {
          class: 'btn btn-xxs btn-default component-settings-button component-settings-button-paste'
        }, _this.getIcon('save'));

        var pasteTooltip = new _tooltip.default(pasteButton, {
          trigger: 'hover',
          placement: 'top',
          title: _this.t('Paste below')
        });

        _this.addEventListener(pasteButton, 'click', function () {
          pasteTooltip.hide();

          _this.pasteComponent(comp);
        });

        var editJsonButton = _this.ce('div', {
          class: 'btn btn-xxs btn-default component-settings-button component-settings-button-edit-json'
        }, _this.getIcon('wrench'));

        _this.addEventListener(editJsonButton, 'click', function () {
          return _this.editComponent(comp, true);
        });

        new _tooltip.default(editJsonButton, {
          trigger: 'hover',
          placement: 'top',
          title: _this.t('Edit JSON')
        }); // Set in paste mode if we have an item in our clipboard.

        if (window.sessionStorage) {
          var data = window.sessionStorage.getItem('formio.clipboard');

          if (data) {
            _this.addClass(_this.element, 'builder-paste-mode');
          }
        } // Add the edit buttons to the component.


        comp.prepend(_this.ce('div', {
          class: 'component-btn-group'
        }, [_this.options.enableButtons.remove ? removeButton : null, _this.options.enableButtons.copy ? copyButton : null, _this.options.enableButtons.paste ? pasteButton : null, _this.options.enableButtons.editJson ? editJsonButton : null, _this.options.enableButtons.edit ? editButton : null]));
      }

      if (!container.noDrop) {
        _this.addDragContainer(container, parent);
=======
    this.options.hooks.renderInput = (html, { self }) => {
      if (self.type === 'hidden') {
        return html + self.name;
      }
      return html;
    };

    this.options.hooks.renderLoading = (html, { self }) => {
      if (self.type === 'form' && self.key) {
        return self.name;
      }
      return html;
    };

    this.options.hooks.attachComponents = (element, components, container, component) => {
      // Don't attach if no element was found or component doesn't participate in drag'n'drop.
      if (!element) {
        return;
      }
      if (component.noDragDrop) {
        return element;
      }
      // Attach container and component to element for later reference.
      const containerElement = element.querySelector(`[ref="${component.component.key}-container"]`) || element;
      containerElement.formioContainer = container;
      containerElement.formioComponent = component;

      // Add container to draggable list.
      if (this.dragula && this.allowDrop(element)) {
        this.dragula.containers.push(containerElement);
      }

      // If this is an existing datagrid element, don't make it draggable.
      if ((component.type === 'datagrid' || component.type === 'datamap') && components.length > 0) {
        return element;
>>>>>>> newFormio
      }

      // Since we added a wrapper, need to return the original element so that we can find the components inside it.
      return element.children[0];
    };
<<<<<<< HEAD

    _this.setBuilderElement();

    return _this;
  }

  _createClass(WebformBuilder, [{
    key: "scrollSidebar",
    value: function scrollSidebar() {
      var newTop = window.scrollY - this.sideBarTop + this.options.sideBarScrollOffset;
      var shouldScroll = newTop > 0;

      if (shouldScroll && newTop + this.sideBarElement.offsetHeight < this.builderHeight) {
        this.sideBarElement.style.marginTop = "".concat(newTop, "px");
      } else if (shouldScroll && this.sideBarElement.offsetHeight < this.builderHeight) {
        this.sideBarElement.style.marginTop = "".concat(this.builderHeight - this.sideBarElement.offsetHeight, "px");
      } else {
        this.sideBarElement.style.marginTop = '0px';
      }
    }
  }, {
    key: "setBuilderElement",
    value: function setBuilderElement() {
      var _this2 = this;

      return this.onElement.then(function () {
        _this2.addClass(_this2.wrapper, 'row formbuilder');

        _this2.builderSidebar = _this2.ce('div', {
          class: 'col-xs-4 col-sm-3 col-md-2 formcomponents'
        });

        _this2.prependTo(_this2.builderSidebar, _this2.wrapper);

        _this2.addClass(_this2.element, 'col-xs-8 col-sm-9 col-md-10 formarea');

        _this2.element.component = _this2;
      });
    }
  }, {
    key: "setForm",
    value: function setForm(form) {
      var _this3 = this;

      //populate isEnabled for recaptcha form settings
      var isRecaptchaEnabled = false;

      if (form.components) {
        (0, _utils.eachComponent)(form.components, function (component) {
          if (isRecaptchaEnabled) {
            return;
          }

          if (component.type === 'recaptcha') {
            isRecaptchaEnabled = true;
            return false;
          }
        });

        if (isRecaptchaEnabled) {
          _lodash.default.set(form, 'settings.recaptcha.isEnabled', true);
        } else if (_lodash.default.get(form, 'settings.recaptcha.isEnabled')) {
          _lodash.default.set(form, 'settings.recaptcha.isEnabled', false);
        }
      }

      this.emit('change', form);
      return _get(_getPrototypeOf(WebformBuilder.prototype), "setForm", this).call(this, form).then(function (retVal) {
        setTimeout(function () {
          return _this3.builderHeight = _this3.element.offsetHeight;
        }, 200);
        return retVal;
      });
=======

    this.options.hooks.attachDatagrid = (element, component) => {
      component.loadRefs(element, {
        [`${component.key}-container`]: 'single',
      });
      component.attachComponents(component.refs[`${component.key}-container`].parentNode, [], component.component.components);

      // Need to set up horizontal rearrangement of fields.
    };

    this.options.hooks.attachComponent = (element, component) => {
      // Add component to element for later reference.
      element.formioComponent = component;

      component.loadRefs(element, {
        removeComponent: 'single',
        editComponent: 'single',
        moveComponent: 'single',
        copyComponent: 'single',
        pasteComponent: 'single',
        editJson: 'single'
      });

      if (component.refs.copyComponent) {
        new Tooltip(component.refs.copyComponent, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('Copy')
        });

        component.addEventListener(component.refs.copyComponent, 'click', () =>
          this.copyComponent(component));
      }

      if (component.refs.pasteComponent) {
        const pasteToolTip = new Tooltip(component.refs.pasteComponent, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('Paste below')
        });

        component.addEventListener(component.refs.pasteComponent, 'click', () => {
          pasteToolTip.hide();
          this.pasteComponent(component);
        });
      }

      if (component.refs.moveComponent) {
        new Tooltip(component.refs.moveComponent, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('Move')
        });
      }

      const parent = this.getParentElement(element);

      if (component.refs.editComponent) {
        new Tooltip(component.refs.editComponent, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('Edit')
        });

        component.addEventListener(component.refs.editComponent, 'click', () =>
          this.editComponent(component.schema, parent, false, false, component.component));
      }

      if (component.refs.editJson) {
        new Tooltip(component.refs.editJson, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('Edit JSON')
        });

        component.addEventListener(component.refs.editJson, 'click', () =>
          this.editComponent(component.schema, parent, false, true, component.component));
      }

      if (component.refs.removeComponent) {
        new Tooltip(component.refs.removeComponent, {
          trigger: 'hover',
          placement: 'top',
          title: this.t('Remove')
        });

        component.addEventListener(component.refs.removeComponent, 'click', () =>
          this.removeComponent(component.schema, parent, component.component));
      }

      return element;
    };

    // Load resources tagged as 'builder'
    const query = {
      params: {
        type: 'resource',
        limit: 4294967295,
        select: '_id,title,name,components'
      }
    };
    if (this.options && this.options.resourceTag) {
      query.params.tags = [this.options.resourceTag];
    }
    else if (!this.options || !this.options.hasOwnProperty('resourceTag')) {
      query.params.tags = ['builder'];
    }
    const formio = new Formio(Formio.projectUrl);
    if (!formio.noProject) {
      formio.loadForms(query)
        .then((resources) => {
          if (resources.length) {
            this.builder.resource = {
              title: 'Existing Resource Fields',
              key: 'resource',
              weight: 50,
              subgroups: [],
              components: [],
              componentOrder: []
            };
            this.groups.resource = {
              title: 'Existing Resource Fields',
              key: 'resource',
              weight: 50,
              subgroups: [],
              components: [],
              componentOrder: []
            };
            this.groupOrder.push('resource');
            this.addExistingResourceFields(resources);
          }
        });
    }

    // Notify components if they need to modify their render.
    this.options.attachMode = 'builder';
    this.webform = this.webform || this.createForm(this.options);
  }

  allowDrop() {
    return true;
  }

  addExistingResourceFields(resources) {
    _.each(resources, (resource, index) => {
      const resourceKey = `resource-${resource.name}`;
      const subgroup = {
        key: resourceKey,
        title: resource.title,
        components: [],
        componentOrder: [],
        default: index === 0,
      };

      eachComponent(resource.components, (component) => {
        if (component.type === 'button') return;
        if (
          this.options &&
          this.options.resourceFilter &&
          (!component.tags || component.tags.indexOf(this.options.resourceFilter) === -1)
        ) return;

        let componentName = component.label;
        if (!componentName && component.key) {
          componentName = _.upperFirst(component.key);
        }

        subgroup.componentOrder.push(component.key);
        subgroup.components[component.key] = _.merge(
          fastCloneDeep(Components.components[component.type].builderInfo),
          {
            key: component.key,
            title: componentName,
            group: 'resource',
            subgroup: resourceKey,
          },
          {
            schema: {
              ...component,
              label: component.label,
              key: component.key,
              lockKey: true,
              source: (!this.options.noSource ? resource._id : undefined),
              isNew: true
            }
          }
        );
      }, true);

      this.groups.resource.subgroups.push(subgroup);
    });

    this.triggerRedraw();
  }

  createForm(options) {
    this.webform = new Webform(this.element, options);
    if (this.element) {
      this.loadRefs(this.element, {
        form: 'single'
      });
      if (this.refs.form) {
        this.webform.element = this.refs.form;
      }
    }
    return this.webform;
  }

  /**
   * Called when everything is ready.
   *
   * @returns {Promise} - Wait for webform to be ready.
   */
  get ready() {
    return this.webform.ready;
  }

  get defaultGroups() {
    return {
      basic: {
        title: 'Basic',
        weight: 0,
        default: true,
      },
      advanced: {
        title: 'Advanced',
        weight: 10
      },
      layout: {
        title: 'Layout',
        weight: 20
      },
      data: {
        title: 'Data',
        weight: 30
      },
      premium: {
        title: 'Premium',
        weight: 40
      },
    };
  }

  redraw() {
    return Webform.prototype.redraw.call(this);
  }

  get form() {
    return this.webform.form;
  }

  get schema() {
    return this.webform.schema;
  }

  set form(value) {
    if (!value.components) {
      value.components = [];
    }

    const isShowSubmitButton = !this.options.noDefaultSubmitButton
      && !value.components.length;

    // Ensure there is at least a submit button.
    if (isShowSubmitButton) {
      value.components.push({
        type: 'button',
        label: 'Submit',
        key: 'submit',
        size: 'md',
        block: false,
        action: 'submit',
        disableOnInvalid: true,
        theme: 'primary'
      });
    }

    this.webform.form = value;
    this.rebuild();
  }

  get container() {
    return this.webform.form.components;
  }

  /**
   * When a component sets its api key, we need to check if it is unique within its namespace. Find the namespace root
   * so we can calculate this correctly.
   * @param component
   */
  findNamespaceRoot(component) {
    // First get the component with nested parents.
    const comp = getComponent(this.webform.form.components, component.key, true);
    const namespaceKey = this.recurseNamespace(comp);

    // If there is no key, it is the root form.
    if (!namespaceKey || this.form.key === namespaceKey) {
      return this.form.components;
>>>>>>> newFormio
    }
  }, {
    key: "deleteComponent",
    value: function deleteComponent(component) {
      if (!component.parent) {
        return;
      }

      var remove = true;

      if (typeof component.getComponents === 'function' && component.getComponents().length > 0) {
        var message = 'Removing this component will also remove all of its children. Are you sure you want to do this?';
        remove = window.confirm(this.t(message));
      }

      if (remove) {
        component.parent.removeComponentById(component.id);
        this.form = this.schema;
        this.emit('deleteComponent', component);
      }

<<<<<<< HEAD
      return remove;
=======
    // If the current component is the namespace, we don't need to find it again.
    if (namespaceKey === component.key) {
      return component.components;
>>>>>>> newFormio
    }
  }, {
    key: "updateComponent",
    value: function updateComponent(component) {
      var _this4 = this;

      // Update the preview.
      if (this.componentPreview) {
        if (this.preview) {
          this.preview.destroy();
        }

<<<<<<< HEAD
        this.preview = _Components.default.create(component.component, {
          preview: true,
          events: new _EventEmitter.default({
            wildcard: false,
            maxListeners: 0
          })
        }, {}, true);
        this.preview.on('componentEdit', function (comp) {
          _lodash.default.merge(component.component, comp.component);

          _this4.editForm.redraw();
        });
        this.preview.build();
        this.preview.isBuilt = true;
        this.componentPreview.innerHTML = '';
        this.componentPreview.appendChild(this.preview.getElement());
      } // Ensure this component has a key.


      if (component.isNew) {
        if (!component.keyModified) {
          component.component.key = _lodash.default.camelCase(component.component.label || component.component.placeholder || component.component.type);
        } // Set a unique key for this component.


        _builder.default.uniquify(this._form, component.component);
      } // Change the "default value" field to be reflective of this component.


      if (this.defaultValueComponent) {
        _lodash.default.assign(this.defaultValueComponent, _lodash.default.omit(component.component, ['key', 'label', 'placeholder', 'tooltip', 'validate', 'disabled']));
      } // Called when we update a component.


      this.emit('updateComponent', component);
    }
    /* eslint-disable max-statements */

  }, {
    key: "editComponent",
    value: function editComponent(component, isJsonEdit) {
      var _this5 = this;

      var componentCopy = _lodash.default.cloneDeep(component);

      var componentClass = _Components.default.components[componentCopy.component.type];
      var isCustom = componentClass === undefined; //custom component should be edited as JSON

      isJsonEdit = isJsonEdit || isCustom;
      componentClass = isCustom ? _Components.default.components.unknown : componentClass; // Make sure we only have one dialog open at a time.

      if (this.dialog) {
        this.dialog.close();
      }

      this.dialog = this.createModal(componentCopy.name);
      var formioForm = this.ce('div');
      this.componentPreview = this.ce('div', {
        class: 'component-preview'
      });
      var componentInfo = componentClass ? componentClass.builderInfo : {};
      var saveButton = this.ce('button', {
        class: 'btn btn-success',
        style: 'margin-right: 10px;'
      }, this.t('Save'));
      var cancelButton = this.ce('button', {
        class: 'btn btn-default',
        style: 'margin-right: 10px;'
      }, this.t('Cancel'));
      var removeButton = this.ce('button', {
        class: 'btn btn-danger'
      }, this.t('Remove'));
      var componentEdit = this.ce('div', {}, [this.ce('div', {
        class: 'row'
      }, [this.ce('div', {
        class: 'col col-sm-6'
      }, this.ce('p', {
        class: 'lead'
      }, "".concat(this.t(componentInfo.title), " ").concat(this.t('Component')))), this.ce('div', {
        class: 'col col-sm-6'
      }, [this.ce('div', {
        class: 'pull-right',
        style: 'margin-right: 20px; margin-top: 10px'
      }, this.ce('a', {
        href: componentInfo.documentation || '#',
        target: '_blank'
      }, this.ce('i', {
        class: this.iconClass('new-window')
      }, " ".concat(this.t('Help')))))])]), this.ce('div', {
        class: 'row'
      }, [this.ce('div', {
        class: 'col col-sm-6'
      }, formioForm), this.ce('div', {
        class: 'col col-sm-6'
      }, [this.ce('div', {
        class: 'card panel panel-default preview-panel'
      }, [this.ce('div', {
        class: 'card-header panel-heading'
      }, this.ce('h4', {
        class: 'card-title panel-title mb-0'
      }, this.t('Preview'))), this.ce('div', {
        class: 'card-body panel-body'
      }, this.componentPreview)]), this.ce('div', {
        style: 'margin-top: 10px;'
      }, [saveButton, cancelButton, removeButton])])])]); // Append the settings page to the dialog body.

      this.dialog.body.appendChild(componentEdit); // Allow editForm overrides per component.

      var overrides = _lodash.default.get(this.options, "editForm.".concat(componentCopy.component.type), {}); // Get the editform for this component.


      var editForm; //custom component has its own Edit Form defined

      if (isJsonEdit && !isCustom) {
        editForm = {
          'components': [{
            'type': 'textarea',
            'as': 'json',
            'editor': 'ace',
            'weight': 10,
            'input': true,
            'key': 'componentJson',
            'label': 'Component JSON',
            'tooltip': 'Edit the JSON for this component.'
          }]
        };
      } else {
        editForm = componentClass.editForm(_lodash.default.cloneDeep(overrides));
      } // Change the defaultValue component to be reflective.


      this.defaultValueComponent = (0, _utils.getComponent)(editForm.components, 'defaultValue');

      _lodash.default.assign(this.defaultValueComponent, _lodash.default.omit(componentCopy.component, ['key', 'label', 'placeholder', 'tooltip', 'validate', 'disabled'])); // Create the form instance.


      var editFormOptions = _lodash.default.get(this, 'options.editForm', {});

      this.editForm = new _Webform2.default(formioForm, _objectSpread({
        language: this.options.language
      }, editFormOptions)); // Set the form to the edit form.

      this.editForm.form = editForm; // Pass along the form being edited.

      this.editForm.editForm = this._form;
      this.editForm.editComponent = component; // Update the preview with this component.

      this.updateComponent(componentCopy); // Register for when the edit form changes.

      this.editForm.on('change', function (event) {
        if (event.changed) {
          // See if this is a manually modified key. Treat JSON edited component keys as manually modified
          if (event.changed.component && event.changed.component.key === 'key' || isJsonEdit) {
            componentCopy.keyModified = true;
          } // Set the component JSON to the new data.


          var editFormData = _this5.editForm.getValue().data; //for custom component use value in 'componentJson' field as JSON of component


          if ((editFormData.type === 'custom' || isJsonEdit) && editFormData.componentJson) {
            componentCopy.component = editFormData.componentJson;
          } else {
            componentCopy.component = editFormData;
          } // Update the component.


          _this5.updateComponent(componentCopy);
        }
      }); // Modify the component information in the edit form.

      this.editForm.formReady.then(function () {
        //for custom component populate component setting with component JSON
        if (isJsonEdit) {
          _this5.editForm.setValue({
            data: {
              componentJson: _lodash.default.cloneDeep(componentCopy.component)
            }
          });
        } else {
          _this5.editForm.setValue({
            data: componentCopy.component
          });
        }
      });
      this.addEventListener(cancelButton, 'click', function (event) {
        event.preventDefault();

        _this5.emit('cancelComponent', component);

        _this5.dialog.close();
      });
      this.addEventListener(removeButton, 'click', function (event) {
        event.preventDefault();

        _this5.deleteComponent(component);

        _this5.dialog.close();
      });
      this.addEventListener(saveButton, 'click', function (event) {
        if (!_this5.editForm.checkValidity(_this5.editForm.data, true)) {
          return;
        }

        event.preventDefault();
        var originalComponent = component.schema;
        component.isNew = false; //for JSON Edit use value in 'componentJson' field as JSON of component

        if (isJsonEdit) {
          component.component = _this5.editForm.data.componentJson;
        } else {
          component.component = componentCopy.component;
        }

        if (component.dragEvents && component.dragEvents.onSave) {
          component.dragEvents.onSave(component);
        }

        _this5.form = _this5.schema;

        _this5.emit('saveComponent', component, originalComponent);

        _this5.dialog.close();
      });
      this.addEventListener(this.dialog, 'close', function () {
        _this5.editForm.destroy(true);

        _this5.preview.destroy(true);

        if (component.isNew) {
          _this5.deleteComponent(component);
        }
      }); // Called when we edit a component.

      this.emit('editComponent', component);
    }
    /* eslint-enable max-statements */

    /**
     * Creates copy of component schema and stores it under sessionStorage.
     * @param {Component} component
     * @return {*}
     */

  }, {
    key: "copyComponent",
    value: function copyComponent(component) {
      if (!window.sessionStorage) {
        return console.log('Session storage is not supported in this browser.');
      }

      this.addClass(this.element, 'builder-paste-mode');

      var copy = _lodash.default.cloneDeep(component.schema);

      window.sessionStorage.setItem('formio.clipboard', JSON.stringify(copy));
    }
    /**
     * Paste copied component after the current component.
     * @param {Component} component
     * @return {*}
     */

  }, {
    key: "pasteComponent",
    value: function pasteComponent(component) {
      if (!window.sessionStorage) {
        return console.log('Session storage is not supported in this browser.');
      }

      this.removeClass(this.element, 'builder-paste-mode');
      var data = window.sessionStorage.getItem('formio.clipboard');

      if (data) {
        var schema = JSON.parse(data);
        window.sessionStorage.removeItem('formio.clipboard');

        _builder.default.uniquify(this._form, schema); // If this is an empty "nested" component, and it is empty, then paste the component inside this component.


        if (typeof component.addComponent === 'function' && !component.components.length) {
          component.addComponent(schema);
        } else {
          component.parent.addComponent(schema, false, false, component.element.nextSibling);
        }

        this.form = this.schema;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var state = _get(_getPrototypeOf(WebformBuilder.prototype), "destroy", this).call(this);

      if (this.dragula) {
        this.dragula.destroy();
      }

      return state;
    }
    /**
     * Insert an element in the weight order.
     *
     * @param info
     * @param items
     * @param element
     * @param container
     */

  }, {
    key: "insertInOrder",
    value: function insertInOrder(info, items, element, container) {
      // Determine where this item should be added.
      var beforeWeight = 0;
      var before = null;

      _lodash.default.each(items, function (itemInfo) {
        if (info.key !== itemInfo.key && info.weight < itemInfo.weight && (!beforeWeight || itemInfo.weight < beforeWeight)) {
          before = itemInfo.element;
          beforeWeight = itemInfo.weight;
        }
      });

      if (before) {
        try {
          container.insertBefore(element, before);
        } catch (err) {
          container.appendChild(element);
        }
      } else {
        container.appendChild(element);
      }
    }
  }, {
    key: "addBuilderGroup",
    value: function addBuilderGroup(info, container) {
      var _this6 = this;

      if (!info || !info.key) {
        console.warn('Invalid Group Provided.');
        return;
      }

      info = _lodash.default.clone(info);
      var groupAnchor = this.ce('button', {
        class: 'btn btn-block builder-group-button',
        'type': 'button',
        'data-toggle': 'collapse',
        'data-parent': "#".concat(container.id),
        'data-target': "#group-".concat(info.key)
      }, this.text(info.title)); // Add a listener when it is clicked.

      if (!(0, _utils.bootstrapVersion)(this.options)) {
        this.addEventListener(groupAnchor, 'click', function (event) {
          event.preventDefault();
          var clickedGroupId = event.target.getAttribute('data-target').replace('#group-', '');

          if (_this6.groups[clickedGroupId]) {
            var clickedGroup = _this6.groups[clickedGroupId];

            var wasIn = _this6.hasClass(clickedGroup.panel, 'in');

            _lodash.default.each(_this6.groups, function (group, groupId) {
              _this6.removeClass(group.panel, 'in');

              _this6.removeClass(group.panel, 'show');

              if (groupId === clickedGroupId && !wasIn) {
                _this6.addClass(group.panel, 'in');

                _this6.addClass(group.panel, 'show');

                var parent = group.parent;

                while (parent) {
                  _this6.addClass(parent.panel, 'in');

                  _this6.addClass(parent.panel, 'show');

                  parent = parent.parent;
                }
              }
            }); // Match the form builder height to the sidebar.


            _this6.element.style.minHeight = "".concat(_this6.builderSidebar.offsetHeight, "px");

            _this6.scrollSidebar();
          }
        }, true);
      }

      info.element = this.ce('div', {
        class: 'card panel panel-default form-builder-panel',
        id: "group-panel-".concat(info.key)
      }, [this.ce('div', {
        class: 'card-header panel-heading form-builder-group-header'
      }, [this.ce('h5', {
        class: 'mb-0 panel-title'
      }, groupAnchor)])]);
      info.body = this.ce('div', {
        id: "group-container-".concat(info.key),
        class: 'card-body panel-body no-drop'
      }); // Add this group body to the drag containers.

      this.sidebarContainers.push(info.body);
      var groupBodyClass = 'panel-collapse collapse';

      if (info.default) {
        switch ((0, _utils.bootstrapVersion)(this.options)) {
          case 4:
            groupBodyClass += ' show';
            break;

          case 3:
            groupBodyClass += ' in';
            break;

          default:
            groupBodyClass += ' in show';
            break;
        }
      }

      info.panel = this.ce('div', {
        class: groupBodyClass,
        'data-parent': "#".concat(container.id),
        id: "group-".concat(info.key)
      }, info.body);
      info.element.appendChild(info.panel);
      this.groups[info.key] = info;
      this.insertInOrder(info, this.groups, info.element, container); // Now see if this group has subgroups.

      if (info.groups) {
        _lodash.default.each(info.groups, function (subInfo, subGroup) {
          subInfo.key = subGroup;
          subInfo.parent = info;

          _this6.addBuilderGroup(subInfo, info.body);
        });
      }
=======
    // Get the namespace component so we have the original object.
    const namespaceComponent = getComponent(this.form.components, namespaceKey, true);
    return namespaceComponent.components;
  }

  recurseNamespace(component) {
    // If there is no parent, we are at the root level.
    if (!component) {
      return null;
    }

    // Some components are their own namespace.
    if (['container', 'datagrid', 'editgrid', 'tree'].includes(component.type) || component.tree || component.arrayTree) {
      return component.key;
    }

    // Anything else, keep going up.
    return this.recurseNamespace(component.parent);
  }

  render() {
    return this.renderTemplate('builder', {
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
            groupId: `group-container-${groupKey}`,
            subgroups: []
          })),
        })),
      }),
      form: this.webform.render(),
    });
  }

  attach(element) {
    this.on('change', (form) => {
      this.populateRecaptchaSettings(form);
    });
    return super.attach(element).then(() => {
      this.loadRefs(element, {
        form: 'single',
        sidebar: 'single',
        'container': 'multiple',
        'sidebar-anchor': 'multiple',
        'sidebar-group': 'multiple',
        'sidebar-container': 'multiple',
      });

      if (this.sideBarScroll && Templates.current.handleBuilderSidebarScroll) {
        Templates.current.handleBuilderSidebarScroll.call(this, this);
      }

      // Add the paste status in form
      if (window.sessionStorage) {
        const data = window.sessionStorage.getItem('formio.clipboard');
        if (data) {
          this.addClass(this.refs.form, 'builder-paste-mode');
        }
      }

      if (!bootstrapVersion(this.options)) {
        // Initialize
        this.refs['sidebar-group'].forEach((group) => {
          group.style.display = (group.getAttribute('data-default') === 'true') ? 'inherit' : 'none';
        });

        // Click event
        this.refs['sidebar-anchor'].forEach((anchor, index) => {
          this.addEventListener(anchor, 'click', () => {
            const clickedParentId = anchor.getAttribute('data-parent').slice('#builder-sidebar-'.length);
            const clickedId = anchor.getAttribute('data-target').slice('#group-'.length);

            this.refs['sidebar-group'].forEach((group, groupIndex) => {
              const openByDefault = group.getAttribute('data-default') === 'true';
              const groupId = group.getAttribute('id').slice('group-'.length);
              const groupParent = group.getAttribute('data-parent').slice('#builder-sidebar-'.length);

              group.style.display =
                (
                  (openByDefault && groupParent === clickedId) ||
                  groupId === clickedParentId ||
                  groupIndex === index
                )
                ? 'inherit' : 'none';
            });
          }, true);
        });
      }

      if (this.dragDropEnabled) {
        this.initDragula();
      }

      if (this.refs.form) {
        return this.webform.attach(this.refs.form);
      }
    });
  }

  initDragula() {
    const options = this.options;

    if (this.dragula) {
      this.dragula.destroy();
    }

    const containersArray = Array.prototype.slice.call(this.refs['sidebar-container']).filter(item => {
      return item.id !== 'group-container-resource';
    });

    this.dragula = dragula(containersArray, {
      moves(el) {
        let moves = true;

        const list = Array.from(el.classList).filter(item => item.indexOf('formio-component-') === 0);
        list.forEach(item => {
          const key = item.slice('formio-component-'.length);
          if (options.disabled && options.disabled.includes(key)) {
            moves = false;
          }
        });

        if (el.classList.contains('no-drag')) {
          moves = false;
        }
        return moves;
      },
      copy(el) {
        return el.classList.contains('drag-copy');
      },
      accepts(el, target) {
        return !el.contains(target) && !target.classList.contains('no-drop');
      }
    }).on('drop', (element, target, source, sibling) => this.onDrop(element, target, source, sibling));
  }

  detach() {
    if (this.dragula) {
      this.dragula.destroy();
    }
    this.dragula = null;
    if (this.sideBarScroll && Templates.current.clearBuilderSidebarScroll) {
      Templates.current.clearBuilderSidebarScroll.call(this, this);
    }

    super.detach();
  }

  getComponentInfo(key, group) {
    let info;
    // This is a new component
    if (this.schemas.hasOwnProperty(key)) {
      info = fastCloneDeep(this.schemas[key]);
    }
    else if (this.groups.hasOwnProperty(group)) {
      const groupComponents = this.groups[group].components;
      if (groupComponents.hasOwnProperty(key)) {
        info = fastCloneDeep(groupComponents[key].schema);
      }
    }
    else {
      // This is an existing resource field.
      const resourceGroups = this.groups.resource.subgroups;
      const resourceGroup = _.find(resourceGroups, { key: group });
      if (resourceGroup && resourceGroup.components.hasOwnProperty(key)) {
        info = fastCloneDeep(resourceGroup.components[key].schema);
      }
    }

    if (info) {
      info.key = _.camelCase(
        info.title ||
        info.label ||
        info.placeholder ||
        info.type
      );
    }

    return info;
  }

  getComponentsPath(component, parent) {
    // Get path to the component in the parent component.
    let path = 'components';
    let columnIndex = 0;
    let tableRowIndex = 0;
    let tableColumnIndex = 0;
    let tabIndex = 0;
    switch (parent.type) {
      case 'table':
        tableRowIndex = _.findIndex(parent.rows, row => row.some(column => column.components.some(comp => comp.key  === component.key)));
        tableColumnIndex = _.findIndex(parent.rows[tableRowIndex], (column => column.components.some(comp => comp.key  === component.key)));
        path = `rows[${tableRowIndex}][${tableColumnIndex}].components`;
        break;
      case 'columns':
        columnIndex = _.findIndex(parent.columns, column => column.components.some(comp => comp.key === component.key));
        path = `columns[${columnIndex}].components`;
        break;
      case 'tabs':
        tabIndex = _.findIndex(parent.components, tab => tab.components.some(comp => comp.key  === component.key));
        path = `components[${tabIndex}].components`;
        break;
    }
    return path;
  }

  /* eslint-disable max-statements */
  onDrop(element, target, source, sibling) {
    if (!target) {
      return;
    }

    // If you try to drop within itself.
    if (element.contains(target)) {
      return;
>>>>>>> newFormio
    }
  }, {
    key: "addBuilderComponentInfo",
    value: function addBuilderComponentInfo(component) {
      if (!component || !component.group || !this.groups[component.group]) {
        return;
      }

<<<<<<< HEAD
      component = _lodash.default.clone(component);
      var groupInfo = this.groups[component.group];

      if (!groupInfo.components) {
        groupInfo.components = {};
      }

      if (!groupInfo.components.hasOwnProperty(component.key)) {
        groupInfo.components[component.key] = component;
=======
    const key = element.getAttribute('data-key');
    const type = element.getAttribute('data-type');
    const group = element.getAttribute('data-group');
    let info, isNew, path, index;

    if (key) {
      // This is a new component.
      info = this.getComponentInfo(key, group);
      if (!info && type) {
        info = this.getComponentInfo(type, group);
      }
      isNew = true;
    }
    else if (source.formioContainer) {
      index = _.findIndex(source.formioContainer, { key: element.formioComponent.component.key });
      if (index !== -1) {
        // Grab and remove the component from the source container.
        info = source.formioContainer.splice(
          _.findIndex(source.formioContainer, { key: element.formioComponent.component.key }), 1
        );

        // Since splice returns an array of one object, we need to destructure it.
        info = info[0];
>>>>>>> newFormio
      }

      return component;
    }
  }, {
    key: "addBuilderComponent",
    value: function addBuilderComponent(component, group) {
      if (!component) {
        return;
      }

      if (!group && component.group && this.groups[component.group]) {
        group = this.groups[component.group];
      }

      if (!group) {
        return;
      }

<<<<<<< HEAD
      component.element = this.ce('span', {
        id: "builder-".concat(component.key),
        class: 'btn btn-primary btn-xs btn-block formcomponent drag-copy'
      });

      if (component.icon) {
        component.element.appendChild(this.ce('i', {
          class: component.icon,
          style: 'margin-right: 5px;'
        }));
      }

      component.element.builderInfo = component;
      component.element.appendChild(this.text(component.title));
      this.insertInOrder(component, group.components, component.element, group.body);
      return component;
    }
  }, {
    key: "addBuilderButton",
    value: function addBuilderButton(info, container) {
      var _this7 = this;

      var button;
      info.element = this.ce('div', {
        style: 'margin: 5px 0;'
      }, button = this.ce('span', {
        class: "btn btn-block ".concat(info.style || 'btn-default')
      }, info.title)); // Make sure it persists across refreshes.

      this.addEventListener(button, 'click', function () {
        return _this7.emit(info.event);
      }, true);
      this.groups[info.key] = info;
      this.insertInOrder(info, this.groups, info.element, container);
    }
  }, {
    key: "buildSidebar",
    value: function buildSidebar() {
      var _this8 = this;

      // Do not rebuild the sidebar.
      if (this.sideBarElement) {
        return;
      }

      this.groups = {};
      this.sidebarContainers = [];
      this.sideBarElement = this.ce('div', {
        id: "builder-sidebar-".concat(this.id),
        class: 'accordion panel-group'
      }); // Add the groups.

      _lodash.default.each(this.options.builder, function (info, group) {
        if (info) {
          info.key = group;

          if (info.type === 'button') {
            _this8.addBuilderButton(info, _this8.sideBarElement);
          } else {
            _this8.addBuilderGroup(info, _this8.sideBarElement);
          }
        }
      }); // Get all of the components builder info grouped and sorted.


      var components = {};

      var allComponents = _lodash.default.filter(_lodash.default.map(_Components.default.components, function (component, type) {
        if (!component.builderInfo) {
          return null;
        }

        component.type = type;
        return component;
      }));

      _lodash.default.map(_lodash.default.sortBy(allComponents, function (component) {
        return component.builderInfo.weight;
      }), function (component) {
        var builderInfo = component.builderInfo;
        builderInfo.key = component.type;
        components[builderInfo.key] = builderInfo;

        _this8.addBuilderComponentInfo(builderInfo);
      }); // Add the components in each group.


      _lodash.default.each(this.groups, function (info) {
        return _lodash.default.each(info.components, function (comp, key) {
          if (comp) {
            _this8.addBuilderComponent(comp === true ? components[key] : comp, info);
          }
        });
      }); // Add the new sidebar element.


      this.builderSidebar.appendChild(this.sideBarElement);
      this.updateDraggable();
      this.sideBarTop = this.sideBarElement.getBoundingClientRect().top + window.scrollY;

      if (this.options.sideBarScroll) {
        this.addEventListener(window, 'scroll', _lodash.default.throttle(this.scrollSidebar.bind(this), 10), true);
      }
    }
  }, {
    key: "getParentElement",
    value: function getParentElement(element) {
      var containerComponent = element;

      do {
        containerComponent = containerComponent.parentNode;
      } while (containerComponent && !containerComponent.component);

      return containerComponent;
    }
  }, {
    key: "addDragContainer",
    value: function addDragContainer(element, component, dragEvents) {
      _lodash.default.remove(this.dragContainers, function (container) {
        return element.id && element.id === container.id;
      });

      element.component = component;

      if (dragEvents) {
        element.dragEvents = dragEvents;
      }

      this.addClass(element, 'drag-container');

      if (!element.id) {
        element.id = "builder-element-".concat(component.id);
      }

      this.dragContainers.push(element);
      this.updateDraggable();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.dragContainers = [];
      return _get(_getPrototypeOf(WebformBuilder.prototype), "clear", this).call(this);
    }
  }, {
    key: "addComponentTo",
    value: function addComponentTo(schema, parent, element, sibling, after) {
      var component = parent.addComponent(schema, element, parent.data, sibling);

      if (after) {
        after(component);
      } // Get path to the component in the parent component.


      var path = 'components';

      switch (component.parent.type) {
        case 'table':
          path = "rows[".concat(component.tableRow, "][").concat(component.tableColumn, "].components");
          break;

        case 'columns':
          path = "columns[".concat(component.column, "].components");
          break;

        case 'tabs':
          path = "components[".concat(component.tab, "].components");
          break;
      } // Index within container


      var index = _lodash.default.findIndex(_lodash.default.get(component.parent.schema, path), {
        key: component.component.key
      }) || 0;
      this.emit('addComponent', component, path, index);
      return component;
    }
    /* eslint-disable  max-statements */

  }, {
    key: "onDrop",
    value: function onDrop(element, target, source, sibling) {
      if (!element || !element.id) {
        console.warn('No element.id defined for dropping');
        return;
=======
    // If we haven't found the component, stop.
    if (!info) {
      return;
    }

    if (target !== source) {
      // Ensure the key remains unique in its new container.
      BuilderUtils.uniquify(this.findNamespaceRoot(target.formioComponent.component), info);
    }

    const parent = target.formioComponent;

    // Insert in the new container.
    if (target.formioContainer) {
      if (sibling) {
        if (!sibling.getAttribute('data-noattach')) {
          index = _.findIndex(target.formioContainer, { key: _.get(sibling, 'formioComponent.component.key') });
          index = (index === -1) ? 0 : index;
        }
        else {
          index = sibling.getAttribute('data-position');
        }
        if (index !== -1) {
          target.formioContainer.splice(index, 0, info);
        }
      }
      else {
        target.formioContainer.push(info);
      }
      path = this.getComponentsPath(info, parent.component);
      index = _.findIndex(_.get(parent.schema, path), { key: info.key });
      if (index === -1) {
        index = 0;
      }
    }
    else if (parent && parent.addChildComponent) {
      parent.addChildComponent(info, element, target, source, sibling);
    }

    if (isNew && !this.options.noNewEdit) {
      this.editComponent(info, target, isNew);
    }

    // Only rebuild the parts needing to be rebuilt.
    let rebuild;
    if (target !== source) {
      if (source.formioContainer && source.contains(target)) {
        rebuild = source.formioComponent.rebuild();
      }
      else if (target.contains(source)) {
        rebuild = target.formioComponent.rebuild();
      }
      else {
        if (source.formioContainer) {
          rebuild = source.formioComponent.rebuild();
        }
        rebuild = target.formioComponent.rebuild();
      }
    }
    else {
      // If they are the same, only rebuild one.
      rebuild = target.formioComponent.rebuild();
    }

    if (!rebuild) {
      rebuild = NativePromise.resolve();
    }

    return rebuild.then(() => {
      this.emit('addComponent', info, parent, path, index, isNew);
    });
  }

  setForm(form) {
    this.emit('change', form);
    return super.setForm(form).then(retVal => {
      setTimeout(() => (this.builderHeight = this.refs.form.offsetHeight), 200);
      return retVal;
    });
  }

  populateRecaptchaSettings(form) {
    //populate isEnabled for recaptcha form settings
    var isRecaptchaEnabled = false;
    if (this.form.components) {
      eachComponent(form.components, component => {
        if (isRecaptchaEnabled) {
          return;
        }
        if (component.type === 'recaptcha') {
          isRecaptchaEnabled = true;
          return false;
        }
      });
      if (isRecaptchaEnabled) {
        _.set(form, 'settings.recaptcha.isEnabled', true);
      }
      else if (_.get(form, 'settings.recaptcha.isEnabled')) {
        _.set(form, 'settings.recaptcha.isEnabled', false);
      }
    }
  }

  removeComponent(component, parent, original) {
    if (!parent) {
      return;
    }
    let remove = true;
    if (
      !component.skipRemoveConfirm &&
      (
        (Array.isArray(component.components) && component.components.length) ||
        (Array.isArray(component.rows) && component.rows.length) ||
        (Array.isArray(component.columns) && component.columns.length)
      )
    ) {
      const message = 'Removing this component will also remove all of its children. Are you sure you want to do this?';
      remove = window.confirm(this.t(message));
    }
    if (!original) {
      original = parent.formioContainer.find((comp) => comp.key === component.key);
    }
    const index = parent.formioContainer ? parent.formioContainer.indexOf(original) : 0;
    if (remove && index !== -1) {
      const path = this.getComponentsPath(component, parent.formioComponent.component);
      if (parent.formioContainer) {
        parent.formioContainer.splice(index, 1);
      }
      else if (parent.formioComponent && parent.formioComponent.removeChildComponent) {
        parent.formioComponent.removeChildComponent(component);
      }
      const rebuild = parent.formioComponent.rebuild() || NativePromise.resolve();
      rebuild.then(() => {
        this.emit('removeComponent', component, parent.formioComponent.schema, path, index);
        this.emit('change', this.form);
      });
    }
    return remove;
  }

  updateComponent(component, changed) {
    // Update the preview.
    if (this.preview) {
      this.preview.form = { components: [_.omit(component, [
        'hidden',
        'conditional',
        'calculateValue',
        'logic',
        'autofocus',
        'customConditional',
      ])] };
      const previewElement = this.componentEdit.querySelector('[ref="preview"]');
      if (previewElement) {
        this.setContent(previewElement, this.preview.render());
        this.preview.attach(previewElement);
      }
    }

    // Change the "default value" field to be reflective of this component.
    const defaultValueComponent = getComponent(this.editForm.components, 'defaultValue');
    if (defaultValueComponent) {
      const defaultChanged = changed && (
        (changed.component && changed.component.key === 'defaultValue')
        || (changed.instance && defaultValueComponent.hasComponent && defaultValueComponent.hasComponent(changed.instance))
      );

      if (!defaultChanged) {
        _.assign(defaultValueComponent.component, _.omit(component, [
          'key',
          'label',
          'placeholder',
          'tooltip',
          'hidden',
          'autofocus',
          'validate',
          'disabled',
          'defaultValue',
          'customDefaultValue',
          'calculateValue',
          'conditional',
          'customConditional',
        ]));
        const parentComponent = defaultValueComponent.parent;
        let tabIndex = -1;
        let index = -1;
        parentComponent.tabs.some((tab, tIndex) => {
          tab.some((comp, compIndex) => {
            if (comp.id === defaultValueComponent.id) {
              tabIndex = tIndex;
              index = compIndex;
              return true;
            }
            return false;
          });
        });

        if (tabIndex !== -1 && index !== -1) {
          const sibling = parentComponent.tabs[tabIndex][index + 1];
          parentComponent.removeComponent(defaultValueComponent);
          const newComp = parentComponent.addComponent(defaultValueComponent.component, defaultValueComponent.data, sibling);
          _.pull(newComp.validators, 'required');
          parentComponent.tabs[tabIndex].splice(index, 1, newComp);
          newComp.checkValidity = () => true;
          newComp.build(defaultValueComponent.element);
        }
      }
    }

    // Called when we update a component.
    this.emit('updateComponent', component);
  }

  highlightInvalidComponents() {
    const formKeys = {};
    const repeatableKeys = [];

    eachComponent(this.form.components, (comp) => {
      if (!comp.key) {
        return;
      }

      if (formKeys[comp.key] && !repeatableKeys.includes(comp.key)) {
        repeatableKeys.push(comp.key);
      }

      formKeys[comp.key] = true;
    });

    const components = this.webform.getComponents();
    repeatableKeys.forEach((key) => {
      const instances = components.filter((comp) => comp.key === key);
      instances.forEach((instance) => instance.setCustomValidity(`API Key is not unique: ${key}`));
    });
  }

  /**
   * Called when a new component is saved.
   *
   * @param parent
   * @param component
   * @return {boolean}
   */
  saveComponent(component, parent, isNew, original) {
    this.editForm.detach();
    const parentContainer = parent ? parent.formioContainer : this.container;
    const parentComponent = parent ? parent.formioComponent : this;
    this.dialog.close();
    const path = parentContainer ? this.getComponentsPath(component, parentComponent.component) : '';
    if (!original) {
      original = parent.formioContainer.find((comp) => comp.key === component.key);
    }
    const index = parentContainer ? parentContainer.indexOf(original) : 0;
    if (index !== -1) {
      let submissionData = this.editForm.submission.data;
      submissionData = submissionData.componentJson || submissionData;
      if (parentContainer) {
        parentContainer[index] = submissionData;
      }
      else if (parentComponent && parentComponent.saveChildComponent) {
        parentComponent.saveChildComponent(submissionData);
      }
      const rebuild = parentComponent.rebuild() || NativePromise.resolve();
      return rebuild.then(() => {
        let schema = parentContainer ? parentContainer[index] : [];
        parentComponent.getComponents().forEach((component) => {
          if (component.key === schema.key) {
            schema = component.schema;
          }
        });
        this.emit('saveComponent',
          schema,
          component,
          parentComponent.schema,
          path,
          index,
          isNew
        );
        this.emit('change', this.form);
        this.highlightInvalidComponents();
      });
    }

    this.highlightInvalidComponents();
    return NativePromise.resolve();
  }

  editComponent(component, parent, isNew, isJsonEdit, original) {
    if (!component.key) {
      return;
    }
    let saved = false;
    const componentCopy = fastCloneDeep(component);
    let ComponentClass = Components.components[componentCopy.type];
    const isCustom = ComponentClass === undefined;
    isJsonEdit = isJsonEdit || isCustom;
    ComponentClass = isCustom ? Components.components.unknown : ComponentClass;
    // Make sure we only have one dialog open at a time.
    if (this.dialog) {
      this.dialog.close();
      this.highlightInvalidComponents();
    }

    // This is the render step.
    const editFormOptions = _.clone(_.get(this, 'options.editForm', {}));
    if (this.editForm) {
      this.editForm.destroy();
    }

    // Allow editForm overrides per component.
    const overrides = _.get(this.options, `editForm.${componentCopy.type}`, {});

    // Pass along the form being edited.
    editFormOptions.editForm = this.form;
    editFormOptions.editComponent = component;
    this.editForm = new Webform(
      {
        ..._.omit(this.options, ['hooks', 'builder', 'events', 'attachMode', 'skipInit']),
        language: this.options.language,
        ...editFormOptions
>>>>>>> newFormio
      }
    );

<<<<<<< HEAD
      var builderElement = source.querySelector("#".concat(element.id));
      var newParent = this.getParentElement(element);

      if (!newParent || !newParent.component) {
        return console.warn('Could not find parent component.');
      } // Remove any instances of the placeholder.


      var placeholder = document.getElementById("".concat(newParent.component.id, "-placeholder"));

      if (placeholder) {
        placeholder = placeholder.parentNode;
        placeholder.parentNode.removeChild(placeholder);
      } // If the sibling is the placeholder, then set it to null.


      if (sibling === placeholder) {
        sibling = null;
      } // Make this element go before the submit button if it is still on the builder.


      if (!sibling && this.submitButton && newParent.contains(this.submitButton.element)) {
        sibling = this.submitButton.element;
      } // If this is a new component, it will come from the builderElement


      if (builderElement && builderElement.builderInfo && builderElement.builderInfo.schema) {
        var componentSchema = _lodash.default.clone(builderElement.builderInfo.schema);

        if (target.dragEvents && target.dragEvents.onDrop) {
          target.dragEvents.onDrop(element, target, source, sibling, componentSchema);
        } // Add the new component.


        var component = this.addComponentTo(componentSchema, newParent.component, newParent, sibling, function (comp) {
          // Set that this is a new component.
          comp.isNew = true; // Pass along the save event.

          if (target.dragEvents) {
            comp.dragEvents = target.dragEvents;
          }
        }); // Edit the component.

        this.editComponent(component); // Remove the element.

        target.removeChild(element);
      } // Check to see if this is a moved component.
      else if (element.component) {
          var _componentSchema = element.component.schema;

          if (target.dragEvents && target.dragEvents.onDrop) {
            target.dragEvents.onDrop(element, target, source, sibling, _componentSchema);
          } // Remove the component from its parent.


          if (element.component.parent) {
            this.emit('deleteComponent', element.component);
            element.component.parent.removeComponent(element.component);
          } // Add the new component.


          var _component = this.addComponentTo(_componentSchema, newParent.component, newParent, sibling);

          if (target.dragEvents && target.dragEvents.onSave) {
            target.dragEvents.onSave(_component);
          } // Refresh the form.


          this.form = this.schema;
        }
    }
    /* eslint-enable  max-statements */

    /**
     * Adds a submit button if there are no components.
     */

  }, {
    key: "addSubmitButton",
    value: function addSubmitButton() {
      if (!this.getComponents().length) {
        this.submitButton = this.addComponent({
          type: 'button',
          label: this.t('Submit'),
          key: 'submit',
          size: 'md',
          block: false,
          action: 'submit',
          disableOnInvalid: true,
          theme: 'primary'
        });
      }
    }
  }, {
    key: "refreshDraggable",
    value: function refreshDraggable() {
      var _this9 = this;

      if (this.dragula) {
        this.dragula.destroy();
=======
    this.editForm.form = (isJsonEdit && !isCustom) ? {
      components: [
        {
          type: 'textarea',
          as: 'json',
          editor: 'ace',
          weight: 10,
          input: true,
          key: 'componentJson',
          label: 'Component JSON',
          tooltip: 'Edit the JSON for this component.'
        }
      ]
    } : ComponentClass.editForm(_.cloneDeep(overrides));
    const instance = new ComponentClass(componentCopy);
    this.editForm.submission = isJsonEdit ? {
      data: {
        componentJson: instance.component
      },
    } : {
      data: instance.component,
    };

    if (this.preview) {
      this.preview.destroy();
    }
    if (!ComponentClass.builderInfo.hasOwnProperty('preview') || ComponentClass.builderInfo.preview) {
      this.preview = new Webform(_.omit({ ...this.options, preview: true }, [
        'hooks',
        'builder',
        'events',
        'attachMode',
        'calculateValue'
      ]));
    }

    this.componentEdit = this.ce('div', { 'class': 'component-edit-container' });
    this.setContent(this.componentEdit, this.renderTemplate('builderEditForm', {
      componentInfo: ComponentClass.builderInfo,
      editForm: this.editForm.render(),
      preview: this.preview ? this.preview.render() : false,
    }));

    this.dialog = this.createModal(this.componentEdit, _.get(this.options, 'dialogAttr', {}));

    // This is the attach step.
    this.editForm.attach(this.componentEdit.querySelector('[ref="editForm"]'));
    this.updateComponent(componentCopy);

    this.editForm.on('change', (event) => {
      if (event.changed) {
        // See if this is a manually modified key. Treat custom component keys as manually modified
        if ((event.changed.component && (event.changed.component.key === 'key')) || isJsonEdit) {
          componentCopy.keyModified = true;
        }

        if (event.changed.component && (['label', 'title'].includes(event.changed.component.key))) {
          // Ensure this component has a key.
          if (isNew) {
            if (!event.data.keyModified) {
              this.editForm.everyComponent(component => {
                if (component.key === 'key' && component.parent.component.key === 'tabs') {
                  component.setValue(_.camelCase(
                    event.data.title ||
                    event.data.label ||
                    event.data.placeholder ||
                    event.data.type
                  ));
                  return false;
                }
              });
            }

            if (this.form) {
              // Set a unique key for this component.
              BuilderUtils.uniquify(this.findNamespaceRoot(parent.formioComponent.component), event.data);
            }
          }
        }

        // Update the component.
        this.updateComponent(event.data.componentJson || event.data, event.changed);
>>>>>>> newFormio
      }
    });
    this.addEventListener(this.componentEdit.querySelector('[ref="cancelButton"]'), 'click', (event) => {
      event.preventDefault();
      this.editForm.detach();
      this.emit('cancelComponent', component);
      this.dialog.close();
      this.highlightInvalidComponents();
    });

<<<<<<< HEAD
      this.dragula = (0, _dragula.default)(this.sidebarContainers.concat(this.dragContainers), {
        moves: function moves(el) {
          return !el.classList.contains('no-drag');
        },
        copy: function copy(el) {
          return el.classList.contains('drag-copy');
        },
        accepts: function accepts(el, target) {
          return !el.contains(target) && !target.classList.contains('no-drop');
        }
      }).on('drop', function (element, target, source, sibling) {
        return _this9.onDrop(element, target, source, sibling);
      }); // If there are no components, then we need to add a default submit button.

      this.addSubmitButton();
      this.builderReadyResolve();
    }
  }, {
    key: "build",
    value: function build(state) {
      this.buildSidebar();

      _get(_getPrototypeOf(WebformBuilder.prototype), "build", this).call(this, state);

      this.updateDraggable();
      this.formReadyResolve();
    }
  }, {
    key: "defaultComponents",
    get: function get() {
      return {
        basic: {
          title: 'Basic Components',
          weight: 0,
          default: true
        },
        advanced: {
          title: 'Advanced',
          weight: 10
        },
        layout: {
          title: 'Layout',
          weight: 20
        },
        data: {
          title: 'Data',
          weight: 30
        }
      };
    }
  }, {
    key: "ready",
    get: function get() {
      return this.builderReady;
    }
  }]);

  return WebformBuilder;
}(_Webform2.default);

exports.default = WebformBuilder;
=======
    this.addEventListener(this.componentEdit.querySelector('[ref="removeButton"]'), 'click', (event) => {
      event.preventDefault();
      // Since we are already removing the component, don't trigger another remove.
      saved = true;
      this.editForm.detach();
      this.removeComponent(component, parent, original);
      this.dialog.close();
      this.highlightInvalidComponents();
    });

    this.addEventListener(this.componentEdit.querySelector('[ref="saveButton"]'), 'click', (event) => {
      event.preventDefault();
      if (!this.editForm.checkValidity(this.editForm.data, true, this.editForm.data)) {
        this.editForm.setPristine(false);
        this.editForm.showErrors();
        return false;
      }
      saved = true;
      this.saveComponent(component, parent, isNew, original);
    });

    const dialogClose = () => {
      this.editForm.destroy();
      if (this.preview) {
        this.preview.destroy();
        this.preview = null;
      }
      if (isNew && !saved) {
        this.removeComponent(component, parent, original);
        this.highlightInvalidComponents();
      }
      // Clean up.
      this.removeEventListener(this.dialog, 'close', dialogClose);
      this.dialog = null;
    };
    this.addEventListener(this.dialog, 'close', dialogClose);

    // Called when we edit a component.
    this.emit('editComponent', component);
  }

  /**
   * Creates copy of component schema and stores it under sessionStorage.
   * @param {Component} component
   * @return {*}
   */
  copyComponent(component) {
    if (!window.sessionStorage) {
      return console.warn('Session storage is not supported in this browser.');
    }
    this.addClass(this.refs.form, 'builder-paste-mode');
    window.sessionStorage.setItem('formio.clipboard', JSON.stringify(component.schema));
  }

  /**
   * Paste copied component after the current component.
   * @param {Component} component
   * @return {*}
   */
  pasteComponent(component) {
    if (!window.sessionStorage) {
      return console.warn('Session storage is not supported in this browser.');
    }
    this.removeClass(this.refs.form, 'builder-paste-mode');
    if (window.sessionStorage) {
      const data = window.sessionStorage.getItem('formio.clipboard');
      if (data) {
        const schema = JSON.parse(data);
        const parent = this.getParentElement(component.element);
        BuilderUtils.uniquify(this.findNamespaceRoot(parent.formioComponent.component), schema);
        let path = '';
        let index = 0;
        if (parent.formioContainer) {
          index = parent.formioContainer.indexOf(component.component);
          path = this.getComponentsPath(schema, parent.formioComponent.component);
          parent.formioContainer.splice(index + 1, 0, schema);
        }
        else if (parent.formioComponent && parent.formioComponent.saveChildComponent) {
          parent.formioComponent.saveChildComponent(schema, false);
        }
        parent.formioComponent.rebuild();
        this.emit('saveComponent', schema, schema, parent.formioComponent.components, path, (index + 1), true);
        this.emit('change', this.form);
      }
    }
  }

  getParentElement(element) {
    let container = element;
    do {
      container = container.parentNode;
    } while (container && !container.formioComponent);
    return container;
  }

  addBuilderComponentInfo(component) {
    if (!component || !component.group || !this.groups[component.group]) {
      return;
    }

    component = _.clone(component);
    const groupInfo = this.groups[component.group];
    if (!groupInfo.components.hasOwnProperty(component.key)) {
      groupInfo.components[component.key] = component;
    }
    return component;
  }

  destroy() {
    if (this.webform.initialized) {
      this.webform.destroy();
    }
    super.destroy();
  }

  addBuilderGroup(name, group) {
    if (!this.groups[name]) {
      this.groups[name] = group;
      this.groupOrder.push(name);
      this.triggerRedraw();
    }
    else {
      this.updateBuilderGroup(name, group);
    }
  }

  updateBuilderGroup(name, group) {
    if (this.groups[name]) {
      this.groups[name] = group;
      this.triggerRedraw();
    }
  }
}
>>>>>>> newFormio

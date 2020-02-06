<<<<<<< HEAD
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");
=======
import Choices from '../../utils/ChoicesWrapper';
import _ from 'lodash';
import Formio from '../../Formio';
import Field from '../_classes/field/Field';
import Form from '../../Form';
import NativePromise from 'native-promise-only';

export default class SelectComponent extends Field {
  static schema(...extend) {
    return Field.schema({
      type: 'select',
      label: 'Select',
      key: 'select',
      data: {
        values: [],
        json: '',
        url: '',
        resource: '',
        custom: ''
      },
      clearOnRefresh: false,
      limit: 100,
      dataSrc: 'values',
      valueProperty: '',
      lazyLoad: true,
      filter: '',
      searchEnabled: true,
      searchField: '',
      minSearch: 0,
      readOnlyValue: false,
      authenticate: false,
      template: '<span>{{ item.label }}</span>',
      selectFields: '',
      searchThreshold: 0.3,
      tableView: true,
      fuseOptions: {
        include: 'score',
        threshold: 0.3,
      },
      customOptions: {}
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Select',
      group: 'basic',
      icon: 'th-list',
      weight: 70,
      documentation: 'http://help.form.io/userguide/#select',
      schema: SelectComponent.schema()
    };
  }

  init() {
    super.init();
    this.validators = this.validators.concat(['select']);
>>>>>>> newFormio

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

<<<<<<< HEAD
require("core-js/modules/es.array.filter");
=======
    if (this.isInfiniteScrollProvided) {
      this.isFromSearch = false;

      this.searchServerCount = null;
      this.defaultServerCount = null;

      this.isScrollLoading = false;

      this.searchDownloadedResources = [];
      this.defaultDownloadedResources = [];
    }
>>>>>>> newFormio

require("core-js/modules/es.array.find");

<<<<<<< HEAD
require("core-js/modules/es.array.from");
=======
    // Determine when the items have been loaded.
    this.itemsLoaded = new NativePromise((resolve) => {
      this.itemsLoadedResolve = resolve;
    });
  }
>>>>>>> newFormio

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

<<<<<<< HEAD
require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");
=======
  get emptyValue() {
    if (this.valueProperty) {
      return '';
    }
    return {};
  }

  get valueProperty() {
    if (this.component.valueProperty) {
      return this.component.valueProperty;
    }
    // Force values datasource to use values without actually setting it on the component settings.
    if (this.component.dataSrc === 'values') {
      return 'value';
    }

    return '';
  }

  get inputInfo() {
    const info = super.elementInfo();
    info.type = 'select';
    info.changeEvent = 'change';
    return info;
  }

  get isSelectResource() {
    return this.component.dataSrc === 'resource';
  }

  get isSelectURL() {
    return this.component.dataSrc === 'url';
  }

  get isInfiniteScrollProvided() {
    return this.isSelectResource || this.isSelectURL;
  }

  get shouldDisabled() {
    return super.shouldDisabled || this.parentDisabled;
  }
>>>>>>> newFormio

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.reflect.set");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _choices = _interopRequireDefault(require("choices.js/public/assets/scripts/choices.js"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Base = _interopRequireDefault(require("../base/Base"));

var _Formio = _interopRequireDefault(require("../../Formio"));

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

<<<<<<< HEAD
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SelectComponent =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(SelectComponent, _BaseComponent);

  _createClass(SelectComponent, null, [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _Base.default.schema.apply(_Base.default, [{
        type: 'select',
        label: 'Select',
        key: 'select',
        data: {
          values: [],
          json: '',
          url: '',
          resource: '',
          custom: ''
        },
        limit: 100,
        dataSrc: 'values',
        valueProperty: '',
        filter: '',
        searchEnabled: true,
        searchField: '',
        minSearch: 0,
        readOnlyValue: false,
        authenticate: false,
        template: '<span>{{ item.label }}</span>',
        selectFields: '',
        searchThreshold: 0.3,
        fuseOptions: {},
        customOptions: {}
      }].concat(extend));
=======
    // If they wish to show the value in read only mode, then just return the itemValue here.
    if (this.options.readOnly && this.component.readOnlyValue) {
      return this.itemValue(data);
    }

    // Perform a fast interpretation if we should not use the template.
    if (data && !this.component.template) {
      const itemLabel = data.label || data;
      return (typeof itemLabel === 'string') ? this.t(itemLabel) : itemLabel;
>>>>>>> newFormio
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Select',
        group: 'basic',
        icon: 'fa fa-th-list',
        weight: 70,
        documentation: 'http://help.form.io/userguide/#select',
        schema: SelectComponent.schema()
      };
    }
  }]);

  function SelectComponent(component, options, data) {
    var _this;

    _classCallCheck(this, SelectComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectComponent).call(this, component, options, data)); // Trigger an update.

    _this.triggerUpdate = _lodash.default.debounce(_this.updateItems.bind(_assertThisInitialized(_this)), 100); // Keep track of the select options.

    _this.selectOptions = []; // Keep track of the last batch of items loaded.

    _this.currentItems = [];
    _this.loadedItems = 0;
    _this.isScrollLoading = false;
    _this.scrollTop = 0; // If this component has been activated.

    _this.activated = false; // Determine when the items have been loaded.

    _this.itemsLoaded = new _nativePromiseOnly.default(function (resolve) {
      _this.itemsLoadedResolve = resolve;
    });
    return _this;
  }

  _createClass(SelectComponent, [{
    key: "elementInfo",
    value: function elementInfo() {
      var info = _get(_getPrototypeOf(SelectComponent.prototype), "elementInfo", this).call(this);

      info.type = 'select';
      info.changeEvent = 'change';
      return info;
    }
  }, {
    key: "createWrapper",
    value: function createWrapper() {
      return false;
    }
  }, {
    key: "itemTemplate",
    value: function itemTemplate(data) {
      if (!data) {
        return '';
      } // If they wish to show the value in read only mode, then just return the itemValue here.

<<<<<<< HEAD

      if (this.options.readOnly && this.component.readOnlyValue) {
        return this.itemValue(data);
      } // Perform a fast interpretation if we should not use the template.


      if (data && !this.component.template) {
        var itemLabel = data.label || data;
        return typeof itemLabel === 'string' ? this.t(itemLabel) : itemLabel;
      }

      if (typeof data === 'string') {
        return this.t(data);
      }

      var template = this.component.template ? this.interpolate(this.component.template, {
        item: data
      }) : data.label;

      if (template) {
        var label = template.replace(/<\/?[^>]+(>|$)/g, '');
        return template.replace(label, this.t(label));
      } else {
        return JSON.stringify(data);
      }
    }
    /**
     * @param {*} data
     * @param {boolean} [forceUseValue=false] - if true, return 'value' property of the data
     * @return {*}
     */

  }, {
    key: "itemValue",
    value: function itemValue(data) {
      var forceUseValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (_lodash.default.isObject(data)) {
        if (this.component.valueProperty) {
          return _lodash.default.get(data, this.component.valueProperty);
        }

        if (forceUseValue) {
          return data.value;
        }
      }

      return data;
    }
  }, {
    key: "addAutofillHoneyInput",
    value: function addAutofillHoneyInput(container, input) {
      var _this2 = this;

      var autofillInput = this.ce('input', {
        type: 'text',
        name: this.info.attr.name,
        style: 'display: none'
      });
      input.addEventListener('change', function (event) {
        autofillInput.value = JSON.stringify(event.detail.value);
      });
      autofillInput.addEventListener('change', function (event) {
        _this2.updateValue({}, JSON.parse(event.target.value));
      });
      container.appendChild(autofillInput);
    }
  }, {
    key: "createInput",
    value: function createInput(container) {
      this.selectContainer = container;
      this.selectInput = _get(_getPrototypeOf(SelectComponent.prototype), "createInput", this).call(this, container);
      this.addAutofillHoneyInput(this.selectContainer, this.selectInput);
    }
    /**
     * Adds an option to the select dropdown.
     *
     * @param value
     * @param label
     */

  }, {
    key: "addOption",
    value: function addOption(value, label, attr) {
      var option = {
        value: value,
        label: label
      };

      if (value) {
        this.selectOptions.push(option);
      }
=======
  /**
   * Adds an option to the select dropdown.
   *
   * @param value
   * @param label
   */
  addOption(value, label, attrs = {}, id) {
    const option = {
      value: _.isObject(value) ? value : String(value),
      label: label
    };

    if (value) {
      this.selectOptions.push(option);
    }

    if (this.refs.selectContainer && (this.component.widget === 'html5')) {
      // Add element to option so we can reference it later.
      const div = document.createElement('div');
      div.innerHTML = this.sanitize(this.renderTemplate('selectOption', {
        selected: _.isEqual(this.dataValue, option.value),
        option,
        attrs,
        id,
        useId: (this.valueProperty === '') && _.isObject(value) && id,
      })).trim();

      option.element = div.firstChild;
      this.refs.selectContainer.appendChild(option.element);
    }
  }
>>>>>>> newFormio

      if (this.choices) {
<<<<<<< HEAD
        return;
      }
=======
        // Add the currently selected choices if they don't already exist.
        const currentChoices = Array.isArray(this.dataValue) ? this.dataValue : [this.dataValue];
        return this.addCurrentChoices(currentChoices, items);
      }
      else if (!this.component.multiple) {
        this.addPlaceholder();
      }
    }
    return false;
  }

  disableInfiniteScroll() {
    if (!this.downloadedResources) {
      return;
    }

    this.downloadedResources.serverCount = this.downloadedResources.length;
    this.serverCount = this.downloadedResources.length;
  }
>>>>>>> newFormio

      option.element = document.createElement('option');

      if (this.dataValue === option.value) {
        option.element.setAttribute('selected', 'selected');
        option.element.selected = 'selected';
      }

      option.element.innerHTML = label;

      if (attr) {
        _lodash.default.each(attr, function (value, key) {
          option.element.setAttribute(key, value);
        });
      }

      this.selectInput.appendChild(option.element);
    }
  }, {
    key: "addValueOptions",
    value: function addValueOptions(items) {
      items = items || [];

      if (!this.selectOptions.length) {
        if (this.choices) {
          // Add the currently selected choices if they don't already exist.
          var currentChoices = Array.isArray(this.dataValue) ? this.dataValue : [this.dataValue];
          return this.addCurrentChoices(currentChoices, items);
        } else if (!this.component.multiple) {
          this.addPlaceholder(this.selectInput);
        }
      }

      return false;
    }
    /**
     * Return if the list is loading from scroll. or not.
     *
     * @return {boolean|*}
     */

  }, {
    key: "stopInfiniteScroll",
    value: function stopInfiniteScroll() {
      // Remove the infinite scroll listener.
      this.scrollLoading = false;

      if (this.scrollList) {
        this.scrollList.removeEventListener('scroll', this.onScroll);
      }
    }
    /* eslint-disable max-statements */

<<<<<<< HEAD
  }, {
    key: "setItems",
    value: function setItems(items, fromSearch) {
      var _this3 = this;

      // If the items is a string, then parse as JSON.
      if (typeof items == 'string') {
        try {
          items = JSON.parse(items);
        } catch (err) {
          console.warn(err.message);
          items = [];
        }
      } // Allow js processing (needed for form builder)


      if (this.component.onSetItems && typeof this.component.onSetItems === 'function') {
        var newItems = this.component.onSetItems(this, items);

        if (newItems) {
          items = newItems;
        }
      }

      if (!this.choices && this.selectInput) {
        if (this.loading) {
          this.removeChildFrom(this.selectInput, this.selectContainer);
        }

        this.selectInput.innerHTML = '';
      } // If they provided select values, then we need to get them instead.

=======
    if (!this.choices && this.refs.selectContainer) {
      if (this.loading) {
        // this.removeChildFrom(this.refs.input[0], this.selectContainer);
      }

      this.empty(this.refs.selectContainer);
    }

    // If they provided select values, then we need to get them instead.
    if (this.component.selectValues) {
      items = _.get(items, this.component.selectValues, items) || [];
    }

    let areItemsEqual;

    if (this.isInfiniteScrollProvided) {
      areItemsEqual = this.isSelectURL ? _.isEqual(items, this.downloadedResources) : false;

      const areItemsEnded = this.component.limit > items.length;
      const areItemsDownloaded = areItemsEqual
        && this.downloadedResources
        && this.downloadedResources.length === items.length;

      if (areItemsEnded) {
        this.disableInfiniteScroll();
      }
      else if (areItemsDownloaded) {
        this.selectOptions = [];
      }
      else {
        this.serverCount = items.serverCount;
      }
    }

    if (this.isScrollLoading && items) {
      if (!areItemsEqual) {
        this.downloadedResources = this.downloadedResources
          ? this.downloadedResources.concat(items)
          : items;
      }

      this.downloadedResources.serverCount = items.serverCount || this.downloadedResources.serverCount;
    }
    else {
      this.downloadedResources = items || [];
      this.selectOptions = [];
    }
>>>>>>> newFormio

      if (this.component.selectValues) {
        items = _lodash.default.get(items, this.component.selectValues);
      }

      if (this.scrollLoading) {
        // Check if the first two items are equal, and if so, then we can assume that this is the same list
        // and we should skip over the loading.
        if (this.currentItems.length && items.length && _lodash.default.isEqual(this.currentItems[0], items[0]) && _lodash.default.isEqual(this.currentItems[1], items[1])) {
          this.stopInfiniteScroll();
          this.loading = false;
          return;
        } // If we have gone beyond our limit, then stop.

<<<<<<< HEAD

        if (items.limit && items.length < items.limit) {
          this.stopInfiniteScroll();
        } // Increment the loadedItems.


        this.loadedItems += items.length;
      } else {
        this.selectOptions = [];
        this.loadedItems = items.length;
=======
    // Iterate through each of the items.
    _.each(items, (item, index) => {
      this.addOption(this.itemValue(item), this.itemTemplate(item), {}, String(index));
    });

    if (this.choices) {
      this.choices.setChoices(this.selectOptions, 'value', 'label', true);
    }
    else if (this.loading) {
      // Re-attach select input.
      // this.appendTo(this.refs.input[0], this.selectContainer);
    }

    // We are no longer loading.
    this.isScrollLoading = false;
    this.loading = false;

    // If a value is provided, then select it.
    if (this.dataValue) {
      this.setValue(this.dataValue, {
        noUpdateEvent: true
      });
    }
    else {
      // If a default value is provided then select it.
      const defaultValue = this.multiple ? this.defaultValue || [] : this.defaultValue;
      if (defaultValue) {
        this.setValue(defaultValue);
>>>>>>> newFormio
      }

      this.currentItems = items; // Add the value options.

      if (!fromSearch) {
        this.addValueOptions(items);
      }

      if (this.component.widget === 'html5' && !this.component.placeholder) {
        this.addOption(null, '');
      } // Iterate through each of the items.


<<<<<<< HEAD
      _lodash.default.each(items, function (item) {
        _this3.addOption(_this3.itemValue(item), _this3.itemTemplate(item));
      });

      if (this.choices) {
        this.choices.setChoices(this.selectOptions, 'value', 'label', true);
      } else if (this.loading) {
        // Re-attach select input.
        this.appendTo(this.selectInput, this.selectContainer);
      } // We are no longer loading.


      this.scrollLoading = false;
      this.loading = false; // If a value is provided, then select it.

      if (this.dataValue) {
        this.setValue(this.dataValue, true);
      } else {
        // If a default value is provided then select it.
        var defaultValue = this.defaultValue;

        if (defaultValue) {
          this.setValue(defaultValue);
        }
      } // Say we are done loading the items.


      this.itemsLoadedResolve();
=======
    // See if they have not met the minimum search requirements.
    const minSearch = parseInt(this.component.minSearch, 10);
    if (
      this.component.searchField &&
      (minSearch > 0) &&
      (!search || (search.length < minSearch))
    ) {
      // Set empty items.
      return this.setItems([]);
    }

    // Ensure we have a method and remove any body if method is get
    method = method || 'GET';
    if (method.toUpperCase() === 'GET') {
      body = null;
>>>>>>> newFormio
    }
    /* eslint-enable max-statements */

<<<<<<< HEAD
  }, {
    key: "loadItems",
    value: function loadItems(url, search, headers, options, method, body) {
      var _this4 = this;

      options = options || {}; // See if they have not met the minimum search requirements.

      var minSearch = parseInt(this.component.minSearch, 10);

      if (this.component.searchField && minSearch > 0 && (!search || search.length < minSearch)) {
        // Set empty items.
        return this.setItems([]);
      } // Ensure we have a method and remove any body if method is get


      method = method || 'GET';

      if (method.toUpperCase() === 'GET') {
        body = null;
      }

      var limit = this.component.limit || 100;
      var skip = this.loadedItems || 0;
      var query = this.component.dataSrc === 'url' ? {} : {
        limit: limit,
        skip: skip
      }; // Allow for url interpolation.

      url = this.interpolate(url, {
        formioBase: _Formio.default.getBaseUrl(),
        search: search,
        limit: limit,
        skip: skip,
        page: Math.abs(Math.floor(skip / limit))
      }); // Add search capability.

      if (this.component.searchField && search) {
        if (Array.isArray(search)) {
          query["".concat(this.component.searchField, "__in")] = search.join(',');
        } else {
          query["".concat(this.component.searchField, "__regex")] = search;
        }
      } // If they wish to return only some fields.


      if (this.component.selectFields) {
        query.select = this.component.selectFields;
      } // Add sort capability


      if (this.component.sort) {
        query.sort = this.component.sort;
=======
    const limit = this.component.limit || 100;
    const skip = this.isScrollLoading ? this.selectOptions.length : 0;
    const query = (this.component.dataSrc === 'url') ? {} : {
      limit,
      skip,
    };

    // Allow for url interpolation.
    url = this.interpolate(url, {
      formioBase: Formio.getBaseUrl(),
      search,
      limit,
      skip,
      page: Math.abs(Math.floor(skip / limit))
    });

    // Add search capability.
    if (this.component.searchField && search) {
      if (Array.isArray(search)) {
        query[`${this.component.searchField}`] = search.join(',');
      }
      else {
        query[`${this.component.searchField}`] = search;
>>>>>>> newFormio
      }

<<<<<<< HEAD
      if (!_lodash.default.isEmpty(query)) {
        // Add the query string.
        url += (!url.includes('?') ? '?' : '&') + _Formio.default.serialize(query, function (item) {
          return _this4.interpolate(item);
        });
      } // Add filter capability


      if (this.component.filter) {
        url += (!url.includes('?') ? '?' : '&') + this.interpolate(this.component.filter);
      } // Make the request.


      options.header = headers;
      this.loading = true;

      _Formio.default.makeRequest(this.options.formio, 'select', url, method, body, options).then(function (response) {
        _this4.loading = false;
        var scrollTop = !_this4.scrollLoading && _this4.currentItems.length === 0;

        _this4.setItems(response, !!search);

        if (scrollTop && _this4.choices) {
          _this4.choices.choiceList.scrollToTop();
        }
      }).catch(function (err) {
        _this4.stopInfiniteScroll();

        _this4.loading = false;

        _this4.itemsLoadedResolve();

        _this4.emit('componentError', {
          component: _this4.component,
          message: err.toString()
=======
    // If they wish to return only some fields.
    if (this.component.selectFields) {
      query.select = this.component.selectFields;
    }

    // Add sort capability
    if (this.component.sort) {
      query.sort = this.component.sort;
    }

    if (!_.isEmpty(query)) {
      // Add the query string.
      url += (!url.includes('?') ? '?' : '&') + Formio.serialize(query, (item) => this.interpolate(item));
    }

    // Add filter capability
    if (this.component.filter) {
      url += (!url.includes('?') ? '?' : '&') + this.interpolate(this.component.filter);
    }

    // Make the request.
    options.header = headers;
    this.loading = true;

    Formio.makeRequest(this.options.formio, 'select', url, method, body, options)
      .then((response) => {
        this.loading = false;
        this.setItems(response, !!search);
      })
      .catch((err) => {
        if (this.isInfiniteScrollProvided) {
          this.setItems([]);
          this.disableInfiniteScroll();
        }

        this.isScrollLoading = false;
        this.loading = false;
        this.itemsLoadedResolve();
        this.emit('componentError', {
          component: this.component,
          message: err.toString(),
>>>>>>> newFormio
        });

        console.warn("Unable to load resources for ".concat(_this4.key));
      });
    }
    /**
     * Get the request headers for this select dropdown.
     */

  }, {
    key: "getCustomItems",
    value: function getCustomItems() {
      return this.evaluate(this.component.data.custom, {
        values: []
      }, 'values');
    }
  }, {
    key: "updateCustomItems",
    value: function updateCustomItems() {
      this.setItems(this.getCustomItems() || []);
    }
    /* eslint-disable max-statements */

  }, {
    key: "updateItems",
    value: function updateItems(searchInput, forceUpdate) {
      if (!this.component.data) {
        console.warn("Select component ".concat(this.key, " does not have data configuration."));
        this.itemsLoadedResolve();
        return;
      } // Only load the data if it is visible.


<<<<<<< HEAD
      if (!this.checkConditions()) {
        this.itemsLoadedResolve();
        return;
      }

      switch (this.component.dataSrc) {
        case 'values':
          this.component.valueProperty = this.originalComponent.valueProperty = 'value';
          this.setItems(this.component.data.values);
          break;

        case 'json':
          this.setItems(this.component.data.json);
          break;

        case 'custom':
          this.updateCustomItems();
          break;

        case 'resource':
          {
            // If there is no resource, or we are lazyLoading, wait until active.
            if (!this.component.data.resource || !forceUpdate && !this.active) {
              return;
            }

            var resourceUrl = this.options.formio ? this.options.formio.formsUrl : "".concat(_Formio.default.getProjectUrl(), "/form");
            resourceUrl += "/".concat(this.component.data.resource, "/submission");

            try {
              this.loadItems(resourceUrl, searchInput, this.requestHeaders);
            } catch (err) {
              console.warn("Unable to load resources for ".concat(this.key));
            }

            break;
          }

        case 'url':
          {
            if (!forceUpdate && !this.active) {
              // If we are lazyLoading, wait until activated.
              return;
            }

            var url = this.component.data.url;
            var method;
            var body;

            if (url.substr(0, 1) === '/') {
              var baseUrl = _Formio.default.getProjectUrl();

              if (!baseUrl) {
                baseUrl = _Formio.default.getBaseUrl();
              }

              url = baseUrl + this.component.data.url;
            }

            if (!this.component.data.method) {
              method = 'GET';
            } else {
              method = this.component.data.method;

              if (method.toUpperCase() === 'POST') {
                body = this.component.data.body;
              } else {
                body = null;
              }
            }

            var options = this.component.authenticate ? {} : {
              noToken: true
            };
            this.loadItems(url, searchInput, this.requestHeaders, options, method, body);
            break;
=======
  /**
   * Get the request headers for this select dropdown.
   */
  get requestHeaders() {
    // Create the headers object.
    const headers = new Formio.Headers();

    // Add custom headers to the url.
    if (this.component.data && this.component.data.headers) {
      try {
        _.each(this.component.data.headers, (header) => {
          if (header.key) {
            headers.set(header.key, this.interpolate(header.value));
>>>>>>> newFormio
          }
      }
    }
    /* eslint-enable max-statements */

  }, {
    key: "addPlaceholder",
    value: function addPlaceholder(input) {
      if (!this.component.placeholder || !input) {
        return;
      }

      var placeholder = document.createElement('option');
      placeholder.setAttribute('placeholder', true);
      placeholder.appendChild(this.text(this.component.placeholder));
      input.appendChild(placeholder);
    }
    /**
     * Activate this select control.
     */

  }, {
    key: "activate",
    value: function activate() {
      if (this.active) {
        return;
      }

      this.activated = true;

<<<<<<< HEAD
      if (this.choices) {
        this.choices.setChoices([{
          value: '',
          label: "<i class=\"".concat(this.iconClass('refresh'), "\" style=\"font-size:1.3em;\"></i>")
        }], 'value', 'label', true);
      } else {
        this.addOption('', this.t('loading...'));
      }

      this.triggerUpdate();
=======
  getCustomItems() {
    return this.evaluate(this.component.data.custom, {
      values: []
    }, 'values');
  }

  updateCustomItems() {
    this.setItems(this.getCustomItems() || []);
  }

  refresh() {
    if (this.component.clearOnRefresh) {
      this.setValue(this.emptyValue);
    }

    if (this.component.lazyLoad) {
      this.activated = false;
      this.loading = true;
      this.setItems([]);
    }

    this.updateItems(null, true);
  }

  get additionalResourcesAvailable() {
    return _.isNil(this.serverCount) || (this.serverCount > this.downloadedResources.length);
  }

  get serverCount() {
    if (this.isFromSearch) {
      return this.searchServerCount;
    }

    return this.defaultServerCount;
  }

  set serverCount(value) {
    if (this.isFromSearch) {
      this.searchServerCount = value;
    }
    else {
      this.defaultServerCount = value;
    }
  }

  get downloadedResources() {
    if (this.isFromSearch) {
      return this.searchDownloadedResources;
    }

    return this.defaultDownloadedResources;
  }

  set downloadedResources(value) {
    if (this.isFromSearch) {
      this.searchDownloadedResources = value;
    }
    else {
      this.defaultDownloadedResources = value;
    }
  }

  /* eslint-disable max-statements */
  updateItems(searchInput, forceUpdate) {
    if (!this.component.data) {
      console.warn(`Select component ${this.key} does not have data configuration.`);
      this.itemsLoadedResolve();
      return;
>>>>>>> newFormio
    }
  }, {
    key: "addInput",

<<<<<<< HEAD
    /* eslint-disable max-statements */
    value: function addInput(input, container) {
      var _this5 = this;

      _get(_getPrototypeOf(SelectComponent.prototype), "addInput", this).call(this, input, container);

      if (this.component.multiple) {
        input.setAttribute('multiple', true);
      }

      if (this.component.widget === 'html5') {
        this.triggerUpdate();
        this.focusableElement = input;
        this.addEventListener(input, 'focus', function () {
          return _this5.update();
        });
        this.addEventListener(input, 'keydown', function (event) {
          var keyCode = event.keyCode;

          if ([8, 46].includes(keyCode)) {
            _this5.setValue(null);
          }
        });
        return;
      }

      var useSearch = this.component.hasOwnProperty('searchEnabled') ? this.component.searchEnabled : true;
      var placeholderValue = this.t(this.component.placeholder);
      var customOptions = this.component.customOptions || {};

      if (typeof customOptions == 'string') {
        try {
          customOptions = JSON.parse(customOptions);
        } catch (err) {
          console.warn(err.message);
          customOptions = {};
=======
    // Only load the data if it is visible.
    if (!this.checkConditions()) {
      this.itemsLoadedResolve();
      return;
    }

    switch (this.component.dataSrc) {
      case 'values':
        this.setItems(this.component.data.values);
        break;
      case 'json':
        this.setItems(this.component.data.json);
        break;
      case 'custom':
        this.updateCustomItems();
        break;
      case 'resource': {
        // If there is no resource, or we are lazyLoading, wait until active.
        if (!this.component.data.resource || (!forceUpdate && !this.active)) {
          return;
        }

        let resourceUrl = this.options.formio ? this.options.formio.formsUrl : `${Formio.getProjectUrl()}/form`;
        resourceUrl += (`/${this.component.data.resource}/submission`);

        if (forceUpdate || this.additionalResourcesAvailable) {
          try {
            this.loadItems(resourceUrl, searchInput, this.requestHeaders);
          }
          catch (err) {
            console.warn(`Unable to load resources for ${this.key}`);
          }
        }
        else {
          this.setItems(this.downloadedResources);
>>>>>>> newFormio
        }
      }
<<<<<<< HEAD

      var searchField = this.component.searchField;

      var choicesOptions = _objectSpread({
        removeItemButton: this.component.disabled ? false : _lodash.default.get(this.component, 'removeItemButton', true),
        itemSelectText: '',
        classNames: {
          containerOuter: 'choices form-group formio-choices',
          containerInner: 'form-control'
        },
        addItemText: false,
        placeholder: !!this.component.placeholder,
        placeholderValue: placeholderValue,
        noResultsText: this.t('No results found'),
        noChoicesText: this.t('No choices to choose from'),
        searchPlaceholderValue: this.t('Type to search'),
        shouldSort: false,
        position: this.component.dropdown || 'auto',
        searchEnabled: useSearch,
        searchChoices: !searchField,
        searchFields: this.component.searchFields || (searchField ? ["value.".concat(searchField)] : ['label']),
        fuseOptions: Object.assign({
          include: 'score',
          threshold: _lodash.default.get(this, 'component.searchThreshold', 0.3)
        }, _lodash.default.get(this, 'component.fuseOptions', {})),
        itemComparer: _lodash.default.isEqual
      }, customOptions);

      var tabIndex = input.tabIndex;
      this.addPlaceholder(input);
      input.setAttribute('dir', this.i18next.dir());
      this.choices = new _choices.default(input, choicesOptions);

      if (this.component.multiple) {
        this.focusableElement = this.choices.input.element;
      } else {
        this.focusableElement = this.choices.containerInner.element;
        this.choices.containerOuter.element.setAttribute('tabIndex', '-1');

        if (useSearch) {
          this.addEventListener(this.choices.containerOuter.element, 'focus', function () {
            return _this5.focusableElement.focus();
          });
=======
      case 'url': {
        if (!forceUpdate && !this.active) {
          // If we are lazyLoading, wait until activated.
          return;
        }
        let { url } = this.component.data;
        let method;
        let body;

        if (url.startsWith('/')) {
          const baseUrl = Formio.getProjectUrl() || Formio.getBaseUrl();
          url = baseUrl + url;
>>>>>>> newFormio
        }
      }

      this.scrollList = this.choices.choiceList.element;

      this.onScroll = function () {
        if (!_this5.scrollLoading && _this5.scrollList.scrollTop + _this5.scrollList.clientHeight >= _this5.scrollList.scrollHeight) {
          _this5.scrollTop = _this5.scrollList.scrollTop;
          _this5.scrollLoading = true;

          _this5.triggerUpdate(_this5.choices.input.element.value);
        }
      };

      this.scrollList.addEventListener('scroll', this.onScroll);
      this.addFocusBlurEvents(this.focusableElement);
      this.focusableElement.setAttribute('tabIndex', tabIndex);
      this.setInputStyles(this.choices.containerOuter.element); // If a search field is provided, then add an event listener to update items on search.

      if (this.component.searchField) {
        // Make sure to clear the search when no value is provided.
        if (this.choices && this.choices.input && this.choices.input.element) {
          this.addEventListener(this.choices.input.element, 'input', function (event) {
            if (!event.target.value) {
              _this5.triggerUpdate();
            }
          });
        }
<<<<<<< HEAD

        this.addEventListener(input, 'search', function (event) {
          return _this5.triggerUpdate(event.detail.value);
        });
        this.addEventListener(input, 'stopSearch', function () {
          return _this5.triggerUpdate();
        });
      }

      this.addEventListener(input, 'showDropdown', function () {
        if (_this5.dataValue) {
          _this5.triggerUpdate();
        }

        _this5.update();
      });

      if (placeholderValue && this.choices._isSelectOneElement) {
        this.addEventListener(input, 'removeItem', function () {
          var items = _this5.choices._store.activeItems;

          if (!items.length) {
            _this5.choices._addItem({
              value: placeholderValue,
              label: placeholderValue,
              choiceId: 0,
              groupId: -1,
              customProperties: null,
              placeholder: true,
              keyCode: null
            });
          }
        });
      } // Add value options.


      if (this.addValueOptions()) {
        this.restoreValue();
      } // Force the disabled state with getters and setters.
=======
        const options = this.component.authenticate ? {} : { noToken: true };
        this.loadItems(url, searchInput, this.requestHeaders, options, method, body);
        break;
      }
      case 'indexeddb': {
        if (!window.indexedDB) {
          window.alert("Your browser doesn't support current version of indexedDB");
        }

        if (this.component.indexeddb && this.component.indexeddb.database && this.component.indexeddb.table) {
          const request = window.indexedDB.open(this.component.indexeddb.database);

          request.onupgradeneeded = (event) => {
            if (this.component.customOptions) {
              const db = event.target.result;
              const objectStore = db.createObjectStore(this.component.indexeddb.table, { keyPath: 'myKey', autoIncrement: true });
              objectStore.transaction.oncomplete = () => {
                const transaction = db.transaction(this.component.indexeddb.table, 'readwrite');
                this.component.customOptions.forEach((item) => {
                  transaction.objectStore(this.component.indexeddb.table).put(item);
                });
              };
            }
          };

          request.onerror = () => {
            window.alert(request.errorCode);
          };

          request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction(this.component.indexeddb.table, 'readwrite');
            const objectStore = transaction.objectStore(this.component.indexeddb.table);
            new NativePromise((resolve) => {
              const responseItems = [];
              objectStore.getAll().onsuccess = (event) => {
                event.target.result.forEach((item) => {
                  responseItems.push(item);
                });
                resolve(responseItems);
              };
            }).then((items) => {
              if (!_.isEmpty(this.component.indexeddb.filter)) {
                items = _.filter(items, this.component.indexeddb.filter);
              }
              this.setItems(items);
            });
          };
        }
      }
    }
  }
  /* eslint-enable max-statements */

  addPlaceholder() {
    if (!this.component.placeholder) {
      return;
    }

    this.addOption('', this.component.placeholder, { placeholder: true });
  }
>>>>>>> newFormio


      this.disabled = this.disabled;
      this.triggerUpdate();
    }
<<<<<<< HEAD
    /* eslint-enable max-statements */

  }, {
    key: "update",
    value: function update() {
      if (this.component.dataSrc === 'custom') {
        this.updateCustomItems();
      } // Activate the control.


      this.activate();
    }
  }, {
    key: "show",
    value: function show(_show) {
      // If we go from hidden to visible, trigger a refresh.
      var triggerUpdate = _show && this._visible !== _show;
      _show = _get(_getPrototypeOf(SelectComponent.prototype), "show", this).call(this, _show);

      if (triggerUpdate) {
        this.triggerUpdate();
      }

      return _show;
    }
    /**
     * @param {*} value
     * @param {Array} items
     */

  }, {
    key: "addCurrentChoices",
    value: function addCurrentChoices(values, items, keyValue) {
      var _this6 = this;

      if (!values) {
        return false;
      }

      var notFoundValuesToAdd = [];
      var added = values.reduce(function (defaultAdded, value) {
        if (!value) {
          return defaultAdded;
        }

        var found = false; // Make sure that `items` and `this.selectOptions` points
        // to the same reference. Because `this.selectOptions` is
        // internal property and all items are populated by
        // `this.addOption` method, we assume that items has
        // 'label' and 'value' properties. This assumption allows
        // us to read correct value from the item.

        var isSelectOptions = items === _this6.selectOptions;

        if (items && items.length) {
          _lodash.default.each(items, function (choice) {
            if (choice._id && value._id && choice._id === value._id) {
              found = true;
              return false;
            }

            var itemValue = keyValue ? choice.value : _this6.itemValue(choice, isSelectOptions);
            found |= _lodash.default.isEqual(itemValue, value);
            return found ? false : true;
          });
        } // Add the default option if no item is found.


        if (!found) {
          notFoundValuesToAdd.push({
            value: _this6.itemValue(value),
            label: _this6.itemTemplate(value)
          });
          return true;
        }

        return found || defaultAdded;
      }, false);

      if (notFoundValuesToAdd.length) {
        if (this.choices) {
          this.choices.setChoices(notFoundValuesToAdd, 'value', 'label');
        } else {
          notFoundValuesToAdd.map(function (notFoundValue) {
            _this6.addOption(notFoundValue.value, notFoundValue.label);
          });
        }
      }

      return added;
    }
  }, {
    key: "getView",
    value: function getView(data) {
      return this.component.multiple && Array.isArray(data) ? data.map(this.asString.bind(this)).join(', ') : this.asString(data);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (this.viewOnly || this.loading || !this.selectOptions.length) {
        return this.dataValue;
      }

      var value = '';

      if (this.choices) {
        value = this.choices.getValue(true); // Make sure we don't get the placeholder

        if (!this.component.multiple && this.component.placeholder && value === this.t(this.component.placeholder)) {
          value = '';
        }
      } else {
        var values = [];

        _lodash.default.each(this.selectOptions, function (selectOption) {
          if (selectOption.element && selectOption.element.selected) {
            values.push(selectOption.value);
=======
    this.activated = true;
    if (this.choices) {
      this.choices.setChoices([{
        value: '',
        label: `<i class="${this.iconClass('refresh')}" style="font-size:1.3em;"></i>`,
        disabled: true,
      }], 'value', 'label', true);
    }
    else if (this.component.dataSrc === 'url' || this.component.dataSrc === 'resource') {
      this.addOption('', this.t('loading...'));
    }
    this.triggerUpdate();
  }

  get active() {
    return !this.component.lazyLoad || this.activated || this.options.readOnly;
  }

  render() {
    const info = this.inputInfo;
    info.attr = info.attr || {};
    info.multiple = this.component.multiple;
    return super.render(this.wrapElement(this.renderTemplate('select', {
      input: info,
      selectOptions: '',
      index: null,
    })));
  }

  wrapElement(element) {
    return this.component.addResource
      ? (
        this.renderTemplate('resourceAdd', {
          element
        })
      )
      : element;
  }

  /* eslint-disable max-statements */
  attach(element) {
    const superAttach = super.attach(element);
    this.loadRefs(element, {
      selectContainer: 'single',
      addResource: 'single',
      autocompleteInput: 'single'
    });
    //enable autocomplete for select
    const autocompleteInput = this.refs.autocompleteInput;
    if (autocompleteInput) {
      this.addEventListener(autocompleteInput, 'change', (event) => {
        this.setValue(event.target.value);
      });
    }
    const input = this.refs.selectContainer;
    if (!input) {
      return;
    }
    this.addEventListener(input, this.inputInfo.changeEvent, () => this.updateValue(null, {
      modified: true
    }));

    if (this.component.widget === 'html5') {
      this.triggerUpdate();
      this.focusableElement = input;
      this.addEventListener(input, 'focus', () => this.update());
      this.addEventListener(input, 'keydown', (event) => {
        const { key } = event;

        if (['Backspace', 'Delete'].includes(key)) {
          this.setValue(this.emptyValue);
        }
      });

      return;
    }

    const useSearch = this.component.hasOwnProperty('searchEnabled') ? this.component.searchEnabled : true;
    const placeholderValue = this.t(this.component.placeholder);
    let customOptions = this.component.customOptions || {};
    if (typeof customOptions == 'string') {
      try {
        customOptions = JSON.parse(customOptions);
      }
      catch (err) {
        console.warn(err.message);
        customOptions = {};
      }
    }

    const choicesOptions = {
      removeItemButton: this.component.disabled ? false : _.get(this.component, 'removeItemButton', true),
      itemSelectText: '',
      classNames: {
        containerOuter: 'choices form-group formio-choices',
        containerInner: this.transform('class', 'form-control ui fluid selection dropdown')
      },
      addItemText: false,
      placeholder: !!this.component.placeholder,
      placeholderValue: placeholderValue,
      noResultsText: this.t('No results found'),
      noChoicesText: this.t('No choices to choose from'),
      searchPlaceholderValue: this.t('Type to search'),
      shouldSort: false,
      position: (this.component.dropdown || 'auto'),
      searchEnabled: useSearch,
      searchChoices: !this.component.searchField,
      searchFields: _.get(this, 'component.searchFields', ['label']),
      fuseOptions: Object.assign(
        {},
        _.get(this, 'component.fuseOptions', {}),
        {
          include: 'score',
          threshold: _.get(this, 'component.searchThreshold', 0.3),
        }
      ),
      itemComparer: _.isEqual,
      resetScrollPosition: false,
      ...customOptions,
    };

    const tabIndex = input.tabIndex;
    this.addPlaceholder();
    input.setAttribute('dir', this.i18next.dir());
    this.choices = new Choices(input, choicesOptions);

    this.addEventListener(input, 'hideDropdown', () => {
      this.choices.input.element.value = '';
      this.updateItems(null, true);
    });

    if (this.selectOptions && this.selectOptions.length) {
      this.choices.setChoices(this.selectOptions, 'value', 'label', true);
    }

    if (this.component.multiple) {
      this.focusableElement = this.choices.input.element;
    }
    else {
      this.focusableElement = this.choices.containerInner.element;
      this.choices.containerOuter.element.setAttribute('tabIndex', '-1');
      if (useSearch) {
        this.addEventListener(this.choices.containerOuter.element, 'focus', () => this.focusableElement.focus());
      }
    }

    if (this.isInfiniteScrollProvided) {
      this.scrollList = this.choices.choiceList.element;
      this.onScroll = () => {
        const isLoadingAvailable = !this.isScrollLoading
          && this.additionalResourcesAvailable
          && ((this.scrollList.scrollTop + this.scrollList.clientHeight) >= this.scrollList.scrollHeight);

        if (isLoadingAvailable) {
          this.isScrollLoading = true;
          this.choices.setChoices([{
            value: `${this.id}-loading`,
            label: 'Loading...',
            disabled: true,
          }], 'value', 'label');
          this.triggerUpdate(this.choices.input.element.value);
        }
      };
      this.addEventListener(this.scrollList, 'scroll', this.onScroll);
    }

    this.focusableElement.setAttribute('tabIndex', tabIndex);

    // If a search field is provided, then add an event listener to update items on search.
    if (this.component.searchField) {
      // Make sure to clear the search when no value is provided.
      if (this.choices && this.choices.input && this.choices.input.element) {
        this.addEventListener(this.choices.input.element, 'input', (event) => {
          this.isFromSearch = !!event.target.value;

          if (!event.target.value) {
            this.triggerUpdate();
>>>>>>> newFormio
          }
          else {
            this.serverCount = null;
            this.downloadedResources = [];
          }
        });

<<<<<<< HEAD
        value = this.component.multiple ? values : values.shift();
      } // Choices will return undefined if nothing is selected. We really want '' to be empty.

=======
    this.addEventListener(input, 'showDropdown', () => {
      if (this.dataValue) {
        this.triggerUpdate();
      }
      this.update();
    });

    if (placeholderValue && this.choices._isSelectOneElement) {
      this.addPlaceholderItem(placeholderValue);

      this.addEventListener(input, 'removeItem', () => {
        this.addPlaceholderItem(placeholderValue);
      });
    }

    // Add value options.
    this.addValueOptions();
    this.setChoicesValue(this.dataValue);

    if (this.isSelectResource && this.refs.addResource) {
      this.addEventListener(this.refs.addResource, 'click', (event) => {
        event.preventDefault();

        const formioForm = this.ce('div');
        const dialog = this.createModal(formioForm);

        const projectUrl = _.get(this.root, 'formio.projectUrl', Formio.getBaseUrl());
        const formUrl = `${projectUrl}/form/${this.component.data.resource}`;
        new Form(formioForm, formUrl, {}).ready
          .then((form) => {
            form.on('submit', (submission) => {
              if (this.component.multiple) {
                submission = [...this.dataValue, submission];
              }
              this.setValue(submission);
              dialog.close();
            });
          });
      });
    }

    // Force the disabled state with getters and setters.
    this.disabled = this.shouldDisabled;
    this.triggerUpdate();
    return superAttach;
  }

  addPlaceholderItem(placeholderValue) {
    const items = this.choices._store.activeItems;
    if (!items.length) {
      this.choices._addItem({
        value: placeholderValue,
        label: placeholderValue,
        choiceId: 0,
        groupId: -1,
        customProperties: null,
        placeholder: true,
        keyCode: null });
    }
  }

  /* eslint-enable max-statements */
>>>>>>> newFormio

      if (value === undefined || value === null) {
        value = '';
      }

<<<<<<< HEAD
      return value;
=======
  set disabled(disabled) {
    super.disabled = disabled;
    if (!this.choices) {
      return;
    }
    if (disabled) {
      this.setDisabled(this.choices.containerInner.element, true);
      this.focusableElement.removeAttribute('tabIndex');
      this.choices.disable();
    }
    else {
      this.setDisabled(this.choices.containerInner.element, false);
      this.focusableElement.setAttribute('tabIndex', this.component.tabindex || 0);
      this.choices.enable();
>>>>>>> newFormio
    }
  }, {
    key: "redraw",
    value: function redraw() {
      _get(_getPrototypeOf(SelectComponent.prototype), "redraw", this).call(this);

<<<<<<< HEAD
      this.triggerUpdate();
    }
  }, {
    key: "setValue",
    value: function setValue(value, flags) {
      flags = this.getFlags.apply(this, arguments);
      var previousValue = this.dataValue;

      if (this.component.multiple && !Array.isArray(value)) {
        value = value ? [value] : [];
      }

      var hasPreviousValue = Array.isArray(previousValue) ? previousValue.length : previousValue;
      var hasValue = Array.isArray(value) ? value.length : value;
      var changed = this.hasChanged(value, previousValue);
      this.dataValue = value; // Do not set the value if we are loading... that will happen after it is done.

      if (this.loading) {
        return changed;
      } // Determine if we need to perform an initial lazyLoad api call if searchField is provided.


      if (this.component.searchField && this.component.lazyLoad && !this.lazyLoadInit && !this.active && !this.selectOptions.length && hasValue) {
        this.loading = true;
        this.lazyLoadInit = true;
        this.triggerUpdate(this.dataValue, true);
        return changed;
      } // Add the value options.

=======
  get disabled() {
    return super.disabled;
  }

  set visible(value) {
    // If we go from hidden to visible, trigger a refresh.
    if (value && (!this._visible !== !value)) {
      this.triggerUpdate();
    }
    super.visible = value;
  }

  get visible() {
    return super.visible;
  }

  /**
   * @param {*} value
   * @param {Array} items
   */
  addCurrentChoices(values, items, keyValue) {
    if (!values) {
      return false;
    }
    const notFoundValuesToAdd = [];
    const added = values.reduce((defaultAdded, value) => {
      if (!value || _.isEmpty(value)) {
        return defaultAdded;
      }
      let found = false;

      // Make sure that `items` and `this.selectOptions` points
      // to the same reference. Because `this.selectOptions` is
      // internal property and all items are populated by
      // `this.addOption` method, we assume that items has
      // 'label' and 'value' properties. This assumption allows
      // us to read correct value from the item.
      const isSelectOptions = items === this.selectOptions;
      if (items && items.length) {
        _.each(items, (choice) => {
          if (choice._id && value._id && (choice._id === value._id)) {
            found = true;
            return false;
          }
          const itemValue = keyValue ? choice.value : this.itemValue(choice, isSelectOptions);
          found |= _.isEqual(itemValue, value);
          return found ? false : true;
        });
      }

      // Add the default option if no item is found.
      if (!found) {
        notFoundValuesToAdd.push({
          value: this.itemValue(value),
          label: this.itemTemplate(value)
        });
        return true;
      }
      return found || defaultAdded;
    }, false);

    if (notFoundValuesToAdd.length) {
      if (this.choices) {
        this.choices.setChoices(notFoundValuesToAdd, 'value', 'label');
      }
      else {
        notFoundValuesToAdd.map(notFoundValue => {
          this.addOption(notFoundValue.value, notFoundValue.label);
        });
      }
    }
    return added;
  }

  getValueAsString(data) {
    return (this.component.multiple && Array.isArray(data))
      ? data.map(this.asString.bind(this)).join(', ')
      : this.asString(data);
  }

  getValue() {
    // If the widget isn't active.
    if (
      this.viewOnly || this.loading
      || (!this.component.lazyLoad && !this.selectOptions.length)
      || !this.element
    ) {
      return this.dataValue;
    }

    let value = this.emptyValue;
    if (this.choices) {
      value = this.choices.getValue(true);

      // Make sure we don't get the placeholder
      if (
        !this.component.multiple &&
        this.component.placeholder &&
        (value === this.t(this.component.placeholder))
      ) {
        value = this.emptyValue;
      }
    }
    else if (this.refs.selectContainer) {
      value = this.refs.selectContainer.value;

      if (this.valueProperty === '') {
        if (value === '') {
          return {};
        }

        const option = this.selectOptions[value];
        if (option && _.isObject(option.value)) {
          value = option.value;
        }
      }
    }
    else {
      value = this.dataValue;
    }
    // Choices will return undefined if nothing is selected. We really want '' to be empty.
    if (value === undefined || value === null) {
      value = '';
    }
    return value;
  }

  redraw() {
    const done = super.redraw();
    this.triggerUpdate();
    return done;
  }

  normalizeSingleValue(value) {
    const dataType = _.get(this.component, 'dataType', 'auto');

    switch (dataType) {
      case 'auto':
        if (!isNaN(parseFloat(value)) && isFinite(value)) {
          value = +value;
        }
        if (value === 'true') {
          value = true;
        }
        if (value === 'false') {
          value = false;
        }
        break;
      case 'number':
        value = +value;
        break;
      case 'string':
        if (typeof value === 'object') {
          value = JSON.stringify(value);
        }
        else {
          value = value.toString();
        }
        break;
      case 'boolean':
        value = !!value;
        break;
    }

    return value;
  }

  /**
   * Normalize values coming into updateValue.
   *
   * @param value
   * @return {*}
   */
  normalizeValue(value) {
    if (this.component.multiple && Array.isArray(value)) {
      return value.map((singleValue) => this.normalizeSingleValue(singleValue));
    }

    return super.normalizeValue(this.normalizeSingleValue(value));
  }

  setValue(value, flags) {
    flags = flags || {};
    const previousValue = this.dataValue;
    const changed = this.updateValue(value, flags);
    value = this.dataValue;
    const hasPreviousValue = Array.isArray(previousValue) ? previousValue.length : previousValue;
    const hasValue = Array.isArray(value) ? value.length : value;

    // Undo typing when searching to set the value.
    if (this.component.multiple && Array.isArray(value)) {
      value = value.map(value => {
        if (typeof value === 'boolean' || typeof value === 'number') {
          return value.toString();
        }
        return value;
      });
    }
    else {
      if (typeof value === 'boolean' || typeof value === 'number') {
        value = value.toString();
      }
    }
>>>>>>> newFormio

      this.addValueOptions();

      if (this.choices) {
        // Now set the value.
        if (hasValue) {
          this.choices.removeActiveItems(); // Add the currently selected choices if they don't already exist.

          var currentChoices = Array.isArray(this.dataValue) ? this.dataValue : [this.dataValue];

          if (!this.addCurrentChoices(currentChoices, this.selectOptions, true)) {
            this.choices.setChoices(this.selectOptions, 'value', 'label', true);
          }

          this.choices.setChoiceByValue(value);
        } else if (hasPreviousValue) {
          this.choices.removeActiveItems();
        }
      } else {
        if (hasValue) {
          var values = Array.isArray(value) ? value : [value];

          _lodash.default.each(this.selectOptions, function (selectOption) {
            _lodash.default.each(values, function (val) {
              if (_lodash.default.isEqual(val, selectOption.value)) {
                selectOption.element.selected = true;
                selectOption.element.setAttribute('selected', 'selected');
                return false;
              }
            });
          });
        } else {
          _lodash.default.each(this.selectOptions, function (selectOption) {
            selectOption.element.selected = false;
            selectOption.element.removeAttribute('selected');
          });
        }
      }

      this.updateOnChange(flags, changed);
      return changed;
    }
    /**
     * Deletes the value of the component.
     */

  }, {
    key: "deleteValue",
    value: function deleteValue() {
      this.setValue('', {
        noUpdateEvent: true
      });

<<<<<<< HEAD
      _lodash.default.unset(this.data, this.key);
    }
    /**
     * Check if a component is eligible for multiple validation
     *
     * @return {boolean}
     */

  }, {
    key: "validateMultiple",
    value: function validateMultiple() {
      // Select component will contain one input when flagged as multiple.
      return false;
=======
    // Determine if we need to perform an initial lazyLoad api call if searchField is provided.
    if (
      this.component.searchField &&
      this.component.lazyLoad &&
      !this.lazyLoadInit &&
      !this.active &&
      !this.selectOptions.length &&
      hasValue
    ) {
      this.loading = true;
      this.lazyLoadInit = true;
      this.triggerUpdate(value, true);
      return changed;
>>>>>>> newFormio
    }
    /**
     * Ouput this select dropdown as a string value.
     * @return {*}
     */

  }, {
    key: "asString",
    value: function asString(value) {
      var _this7 = this;

      value = value || this.getValue();

      if (['values', 'custom'].includes(this.component.dataSrc)) {
        var _ref = this.component.dataSrc === 'values' ? {
          items: this.component.data.values,
          valueProperty: 'value'
        } : {
          items: this.getCustomItems(),
          valueProperty: this.component.valueProperty
        },
            items = _ref.items,
            valueProperty = _ref.valueProperty;

        value = this.component.multiple && Array.isArray(value) ? _lodash.default.filter(items, function (item) {
          return value.includes(item.value);
        }) : valueProperty ? _lodash.default.find(items, [valueProperty, value]) : value;
      }

<<<<<<< HEAD
      if (_lodash.default.isString(value)) {
        return value;
      }

      if (Array.isArray(value)) {
        var _items = [];
        value.forEach(function (item) {
          return _items.push(_this7.itemTemplate(item));
        });
        return _items.length > 0 ? _items.join('<br />') : '-';
=======
    // Add the value options.
    this.addValueOptions();
    this.setChoicesValue(value, hasPreviousValue);
    return changed;
  }

  setChoicesValue(value, hasPreviousValue) {
    const hasValue = Array.isArray(value) ? value.length : value;
    hasPreviousValue = (hasPreviousValue === undefined) ? true : hasPreviousValue;
    if (this.choices) {
      // Now set the value.
      if (hasValue) {
        this.choices.removeActiveItems();
        // Add the currently selected choices if they don't already exist.
        const currentChoices = Array.isArray(value) ? value : [value];
        if (!this.addCurrentChoices(currentChoices, this.selectOptions, true)) {
          this.choices.setChoices(this.selectOptions, 'value', 'label', true);
        }
        this.choices.setChoiceByValue(value);
>>>>>>> newFormio
      }

      return !_lodash.default.isNil(value) ? this.itemTemplate(value) : '-';
    }
  }, {
    key: "setupValueElement",
    value: function setupValueElement(element) {
      element.innerHTML = this.asString();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(SelectComponent.prototype), "destroy", this).call(this);

      if (this.choices) {
        this.choices.destroyed = true;
        this.choices.destroy();
        this.choices = null;
      }
    }
<<<<<<< HEAD
  }, {
    key: "focus",
    value: function focus() {
      this.focusableElement.focus();
    }
  }, {
    key: "dataReady",
    get: function get() {
      return this.itemsLoaded;
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return SelectComponent.schema();
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return '';
    }
  }, {
    key: "scrollLoading",
    get: function get() {
      return this.isScrollLoading;
    }
    /**
     * Sets the scroll loading state.
     *
     * @param isScrolling
     * @return {*}
     */
    ,
    set: function set(isScrolling) {
      // Only continue if they are different.
      if (this.isScrollLoading === isScrolling) {
        return;
      }

      if (isScrolling) {
        this.choices.setChoices([].concat(_toConsumableArray(this.selectOptions), [{
          value: '',
          label: 'Loading...',
          disabled: true
        }]), 'value', 'label', true);
      } else if (this.scrollList) {
        var loadingItem = this.scrollList.querySelector('.choices__item--disabled');

        if (loadingItem) {
          // Remove the loading text.
          this.scrollList.removeChild(loadingItem);
        }
=======
    else {
      if (hasValue) {
        const values = Array.isArray(value) ? value : [value];
        _.each(this.selectOptions, (selectOption) => {
          _.each(values, (val) => {
            if (_.isEqual(val, selectOption.value) && selectOption.element) {
              selectOption.element.selected = true;
              selectOption.element.setAttribute('selected', 'selected');
              return false;
            }
          });
        });
      }
      else {
        _.each(this.selectOptions, (selectOption) => {
          if (selectOption.element) {
            selectOption.element.selected = false;
            selectOption.element.removeAttribute('selected');
          }
        });
>>>>>>> newFormio
      }

      this.scrollList.scrollTo(0, this.scrollTop);
      this.isScrollLoading = isScrolling;
      return isScrolling;
    }
<<<<<<< HEAD
  }, {
    key: "requestHeaders",
    get: function get() {
      var _this8 = this;

      // Create the headers object.
      var headers = new _Formio.default.Headers(); // Add custom headers to the url.

      if (this.component.data && this.component.data.headers) {
        try {
          _lodash.default.each(this.component.data.headers, function (header) {
            if (header.key) {
              headers.set(header.key, _this8.interpolate(header.value));
            }
          });
        } catch (err) {
          console.warn(err.message);
        }
      }

      return headers;
=======
  }

  /**
   * Deletes the value of the component.
   */
  deleteValue() {
    this.setValue('', {
      noUpdateEvent: true
    });
    this.unset();
  }

  /**
   * Check if a component is eligible for multiple validation
   *
   * @return {boolean}
   */
  validateMultiple() {
    // Select component will contain one input when flagged as multiple.
    return false;
  }

  /**
   * Output this select dropdown as a string value.
   * @return {*}
   */
  asString(value) {
    value = value || this.getValue();

    if (['values', 'custom'].includes(this.component.dataSrc)) {
      const {
        items,
        valueProperty,
      } = this.component.dataSrc === 'values'
        ? {
          items: this.component.data.values,
          valueProperty: 'value',
        }
        : {
          items: this.getCustomItems(),
          valueProperty: this.valueProperty,
        };

      value = (this.component.multiple && Array.isArray(value))
        ? _.filter(items, (item) => value.includes(item.value))
        : valueProperty
          ? _.find(items, [valueProperty, value])
          : value;
>>>>>>> newFormio
    }
  }, {
    key: "active",
    get: function get() {
      return !this.component.lazyLoad || this.activated;
    }
  }, {
    key: "disabled",
    set: function set(disabled) {
      _set(_getPrototypeOf(SelectComponent.prototype), "disabled", disabled, this, true);

<<<<<<< HEAD
      if (!this.choices) {
        return;
      }

      if (disabled) {
        this.setDisabled(this.choices.containerInner.element, true);
        this.focusableElement.removeAttribute('tabIndex');
        this.choices.disable();
      } else {
        this.setDisabled(this.choices.containerInner.element, false);
        this.focusableElement.setAttribute('tabIndex', this.component.tabindex || 0);
        this.choices.enable();
      }
=======
    if (Array.isArray(value)) {
      const items = [];
      value.forEach(item => items.push(this.itemTemplate(item)));
      return items.length > 0 ? items.join('<br />') : '-';
    }

    return !_.isNil(value)
      ? this.itemTemplate(value)
      : '-';
  }

  detach() {
    super.detach();
    if (this.choices) {
      this.choices.destroyed = true;
      this.choices.destroy();
      this.choices = null;
>>>>>>> newFormio
    }
  }]);

<<<<<<< HEAD
  return SelectComponent;
}(_Base.default);

exports.default = SelectComponent;
=======
  focus() {
    if (this.focusableElement) {
      this.focusableElement.focus();
    }
  }

  setErrorClasses(elements, dirty, hasError) {
    super.setErrorClasses(elements, dirty, hasError);
    if (this.choices) {
      super.setErrorClasses([this.choices.containerInner.element], dirty, hasError);
    }
    else {
      super.setErrorClasses([this.refs.selectContainer], dirty, hasError);
    }
  }
}
>>>>>>> newFormio

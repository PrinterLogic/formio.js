<<<<<<< HEAD
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");
=======
import _ from 'lodash';
import equal from 'fast-deep-equal';

import NestedArrayComponent from '../_classes/nestedarray/NestedArrayComponent';
import Component from '../_classes/component/Component';
import { fastCloneDeep, Evaluator } from '../../utils/utils';
import templates from './templates';

export default class EditGridComponent extends NestedArrayComponent {
  static schema(...extend) {
    return NestedArrayComponent.schema({
      type: 'editgrid',
      label: 'Edit Grid',
      key: 'editGrid',
      clearOnHide: true,
      input: true,
      tree: true,
      removeRow: 'Cancel',
      defaultOpen: false,
      openWhenEmpty: false,
      components: [],
      inlineEdit: false,
      templates: {
        header: EditGridComponent.defaultHeaderTemplate,
        row: EditGridComponent.defaultRowTemplate,
        footer: ''
      }
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Edit Grid',
      icon: 'tasks',
      group: 'data',
      documentation: 'http://help.form.io/userguide/#editgrid',
      weight: 30,
      schema: EditGridComponent.schema()
    };
  }

  static get defaultHeaderTemplate() {
    return `<div class="row">
  {% util.eachComponent(components, function(component) { %}
    <div class="col-sm-2">{{ component.label }}</div>
  {% }) %}
</div>`;
  }

  static get defaultRowTemplate() {
    return `<div class="row">
  {% util.eachComponent(components, function(component) { %}
    <div class="col-sm-2">
      {{ getView(component, row[component.key]) }}
    </div>
  {% }) %}
  {% if (!instance.options.readOnly && !instance.originalComponent.disabled) { %}
    <div class="col-sm-2">
      <div class="btn-group pull-right">
        <button class="btn btn-default btn-light btn-sm editRow"><i class="{{ iconClass('edit') }}"></i></button>
        {% if (!instance.hasRemoveButtons || instance.hasRemoveButtons()) { %}
          <button class="btn btn-danger btn-sm removeRow"><i class="{{ iconClass('trash') }}"></i></button>
        {% } %}
      </div>
    </div>
  {% } %}
</div>`;
  }

  get defaultSchema() {
    return EditGridComponent.schema();
  }
>>>>>>> newFormio

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _NestedComponent2 = _interopRequireDefault(require("../nested/NestedComponent"));

var _Base = _interopRequireDefault(require("../base/Base"));

var _Components = _interopRequireDefault(require("../Components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

<<<<<<< HEAD
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EditGridComponent =
/*#__PURE__*/
function (_NestedComponent) {
  _inherits(EditGridComponent, _NestedComponent);

  _createClass(EditGridComponent, null, [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _NestedComponent2.default.schema.apply(_NestedComponent2.default, [{
        type: 'editgrid',
        label: 'Edit Grid',
        key: 'editGrid',
        clearOnHide: true,
        input: true,
        tree: true,
        defaultOpen: false,
        removeRow: '',
        components: [],
        inlineEdit: false,
        templates: {
          header: this.defaultHeaderTemplate,
          row: this.defaultRowTemplate,
          footer: ''
        }
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Edit Grid',
        icon: 'fa fa-tasks',
        group: 'data',
        documentation: 'http://help.form.io/userguide/#editgrid',
        weight: 40,
        schema: EditGridComponent.schema()
      };
    }
  }, {
    key: "defaultHeaderTemplate",
    get: function get() {
      return "<div class=\"row\">\n  {% util.eachComponent(components, function(component) { %}\n    <div class=\"col-sm-2\">{{ component.label }}</div>\n  {% }) %}\n</div>";
    }
  }, {
    key: "defaultRowTemplate",
    get: function get() {
      return "<div class=\"row\">\n  {% util.eachComponent(components, function(component) { %}\n    <div class=\"col-sm-2\">\n      {{ getView(component, row[component.key]) }}\n    </div>\n  {% }) %}\n  {% if (!instance.options.readOnly) { %}\n    <div class=\"col-sm-2\">\n      <div class=\"btn-group pull-right\">\n        <button class=\"btn btn-default btn-sm editRow\">Edit</button>\n        <button class=\"btn btn-danger btn-sm removeRow\">Delete</button>\n      </div>\n    </div>\n  {% } %}\n</div>";
    }
  }]);

  function EditGridComponent(component, options, data) {
    var _this;

    _classCallCheck(this, EditGridComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditGridComponent).call(this, component, options, data));
    _this.type = 'datagrid';
    _this.editRows = [];
    return _this;
  }

  _createClass(EditGridComponent, [{
    key: "build",
    value: function build(state) {
      var _this2 = this;

      if (this.options.builder) {
        return _get(_getPrototypeOf(EditGridComponent.prototype), "build", this).call(this, state, true);
      }

      this.createElement();
      this.createLabel(this.element);
      var dataValue = this.dataValue;

      if (Array.isArray(dataValue)) {
        // Ensure we always have rows for each dataValue available.
        dataValue.forEach(function (row, rowIndex) {
          if (_this2.editRows[rowIndex]) {
            _this2.editRows[rowIndex].data = row;
          } else {
            _this2.editRows[rowIndex] = {
              components: [],
              isOpen: !!_this2.options.defaultOpen,
              data: row
            };
          }
        });
      }

      this.buildTable();
      this.createAddButton();
      this.createDescription(this.element);
      this.element.appendChild(this.errorContainer = this.ce('div', {
        class: 'has-error'
      }));
      this.attachLogic();
    }
  }, {
    key: "buildTable",
    value: function buildTable(fromBuild) {
      var _this3 = this;

      // Do not show the table when in builder mode.
      if (this.options.builder) {
        return;
      }

      if (!fromBuild && !this.editRows.length && this.component.defaultOpen) {
        return this.addRow(true);
      }

      var tableClass = 'editgrid-listgroup list-group ';
      ['striped', 'bordered', 'hover', 'condensed'].forEach(function (prop) {
        if (_this3.component[prop]) {
          tableClass += "table-".concat(prop, " ");
        }
      });
      var tableElement = this.ce('ul', {
        class: tableClass
      }, [this.headerElement = this.createHeader(), this.rowElements = this.editRows.map(this.createRow.bind(this)), this.footerElement = this.createFooter()]);

      if (this.tableElement && this.element.contains(this.tableElement)) {
        this.element.replaceChild(tableElement, this.tableElement);
      } else {
        this.element.appendChild(tableElement);
      } //add open class to the element if any edit grid row is open


      var isAnyRowOpen = this.editRows.some(function (row) {
        return row.isOpen;
      });

      if (isAnyRowOpen) {
        this.addClass(this.element, "formio-component-".concat(this.component.type, "-row-open"));
      } else {
        this.removeClass(this.element, "formio-component-".concat(this.component.type, "-row-open"));
      }

      this.tableElement = tableElement;

      if (this.allowReorder) {
        this.addDraggable([this.tableElement]);
      }
    }
  }, {
    key: "getRowDragulaOptions",
    value: function getRowDragulaOptions() {
      var superOptions = _get(_getPrototypeOf(EditGridComponent.prototype), "getRowDragulaOptions", this).call(this);

      superOptions.accepts = function (draggedElement, newParent, oldParent, nextSibling) {
        //disallow dragging above Edit Grid header
        return !nextSibling || !nextSibling.classList.contains('formio-edit-grid-header');
      };

      return superOptions;
    }
  }, {
    key: "onRowDrop",
    value: function onRowDrop(droppedElement, newParent, oldParent, nextSibling) {
      _get(_getPrototypeOf(EditGridComponent.prototype), "onRowDrop", this).call(this, droppedElement, newParent, oldParent, nextSibling);

      this.triggerChange();
    }
  }, {
    key: "createHeader",
    value: function createHeader() {
      var templateHeader = _lodash.default.get(this.component, 'templates.header');

      if (!templateHeader) {
        return this.text('');
      }

      var headerMarkup = this.renderTemplate(templateHeader, {
        components: this.component.components,
        value: this.dataValue
      });
      var headerElement;

      if (this.allowReorder) {
        headerElement = this.ce('div', {
          class: 'row'
        }, [this.ce('div', {
          class: 'col-xs-1'
        }), this.ce('div', {
          class: 'col-xs-11'
        }, headerMarkup)]);
      } else {
        headerElement = headerMarkup;
      }

      return this.ce('li', {
        class: 'list-group-item list-group-header formio-edit-grid-header'
      }, headerElement);
    }
  }, {
    key: "createRow",
    value: function createRow(row, rowIndex) {
      var _this4 = this;

      var wrapper = this.ce('li', {
        class: 'list-group-item'
      });

      var rowTemplate = _lodash.default.get(this.component, 'templates.row', EditGridComponent.defaultRowTemplate); // Store info so we can detect changes later.


      wrapper.rowData = row.data;
      wrapper.rowIndex = rowIndex;
      wrapper.rowOpen = row.isOpen;
      row.components = [];

      if (wrapper.rowOpen) {
        var editForm = this.component.components.map(function (comp) {
          var component = _lodash.default.cloneDeep(comp);

          var options = _lodash.default.clone(_this4.options);

          options.row = "".concat(_this4.row, "-").concat(rowIndex);
          options.name += "[".concat(rowIndex, "]");

          var instance = _this4.createComponent(component, options, row.data);

          instance.rowIndex = rowIndex;
          row.components.push(instance);
          return instance.element;
        });

        if (!this.options.readOnly) {
          editForm.push(this.ce('div', {
            class: 'editgrid-actions'
          }, [this.ce('button', {
            class: 'btn btn-primary',
            onClick: this.saveRow.bind(this, rowIndex)
          }, this.component.saveRow || 'Save'), ' ', this.component.removeRow ? this.ce('button', {
            class: 'btn btn-danger',
            onClick: this.cancelRow.bind(this, rowIndex)
          }, this.component.removeRow || 'Cancel') : null]));
        }

        wrapper.appendChild(this.ce('div', {
          class: 'editgrid-edit'
        }, this.ce('div', {
          class: 'editgrid-body'
        }, editForm)));
      } else {
        var rowMarkup = this.renderTemplate(rowTemplate, {
          row: row.data,
          data: this.data,
          rowIndex: rowIndex,
          components: this.component.components,
          getView: function getView(component, data) {
            return _Components.default.create(component, _this4.options, data, true).getView(data);
          }
        }, [{
          class: 'removeRow',
          event: 'click',
          action: this.removeRow.bind(this, rowIndex)
        }, {
          class: 'editRow',
          event: 'click',
          action: this.editRow.bind(this, rowIndex)
        }]);
        var rowElement;

        if (this.allowReorder) {
          rowElement = this.ce('div', {
            class: 'row'
          }, [this.ce('div', {
            class: 'col-xs-1 formio-drag-column'
          }, this.dragButton()), this.ce('div', {
            class: 'col-xs-11'
          }, rowMarkup)]);
        } else {
          rowElement = rowMarkup;
        }

        wrapper.appendChild(rowElement);
      }

      wrapper.appendChild(row.errorContainer = this.ce('div', {
        class: 'has-error'
      }));
      this.checkData(this.data, {
        noValidate: true
      }, rowIndex);

      if (this.allowReorder) {
        wrapper.dragInfo = {
          index: rowIndex
        };
      }

      return wrapper;
=======
  get editgridKey() {
    return `editgrid-${this.key}`;
  }

  get minLength() {
    return _.get(this.component, 'validate.minLength', 0);
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;

    const data = this.dataValue;

    (this.editRows || []).forEach((row, index) => {
      const rowData = data[index];

      row.data = rowData;
      row.components.forEach((component) => {
        component.data = rowData;
      });
    });
  }

  constructor(...args) {
    super(...args);
    this.type = 'editgrid';
    // this.editRows = [];
  }

  hasAddButton() {
    const maxLength = _.get(this.component, 'validate.maxLength');
    return !this.component.disableAddingRemovingRows &&
      !this.options.readOnly &&
      !this.disabled &&
      this.fullMode &&
      !this.options.preview &&
      (!maxLength || (this.editRows.length < maxLength));
  }

  hasRemoveButtons() {
    return !this.component.disableAddingRemovingRows &&
      !this.options.readOnly &&
      !this.disabled &&
      this.fullMode &&
      (this.dataValue.length > _.get(this.component, 'validate.minLength', 0));
  }

  init() {
    if (this.builderMode) {
      this.editRows = [];
      return super.init();
    }

    this.components = this.components || [];
    const dataValue = this.dataValue || [];
    const openWhenEmpty = !dataValue.length && this.component.openWhenEmpty;
    if (openWhenEmpty) {
      const dataObj = {};
      this.editRows = [{
        isOpen: true,
        data: dataObj,
        emptyOpen: true,
        components: this.createRowComponents(dataObj, 0),
      }];
    }
    else {
      this.editRows = dataValue.map((row, rowIndex) => ({
        isOpen: false,
        data: row,
        components: this.createRowComponents(row, rowIndex),
      }));
    }
    this.checkData();
  }

  render(children) {
    if (this.builderMode) {
      return super.render();
    }

    const dataValue = this.dataValue || [];
    const headerTemplate = Evaluator.noeval ? templates.header : _.get(this.component, 'templates.header');
    return super.render(children || this.renderTemplate('editgrid', {
      editgridKey: this.editgridKey,
      header: this.renderString(headerTemplate, {
        components: this.component.components,
        value: dataValue
      }),
      footer: this.renderString(_.get(this.component, 'templates.footer'), {
        components: this.component.components,
        value: dataValue
      }),
      rows: this.editRows.map(this.renderRow.bind(this)),
      openRows: this.editRows.map(row => row.isOpen),
      errors: this.editRows.map(row => row.error),
      hasAddButton: this.hasAddButton(),
      hasRemoveButtons: this.hasRemoveButtons()
    }));
  }

  attach(element) {
    if (this.builderMode) {
      return super.attach(element);
>>>>>>> newFormio
    }
  }, {
    key: "createFooter",
    value: function createFooter() {
      var footerTemplate = _lodash.default.get(this.component, 'templates.footer');

      if (!footerTemplate) {
        return this.text('');
      }

<<<<<<< HEAD
      return this.ce('li', {
        class: 'list-group-item list-group-footer'
      }, this.renderTemplate(footerTemplate, {
        components: this.component.components,
        value: this.dataValue
      }));
    }
  }, {
    key: "checkData",
    value: function checkData(data) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var index = arguments.length > 2 ? arguments[2] : undefined;
      var valid = true;

      if (flags.noCheck) {
        return;
      } // Update the value.


      var changed = this.updateValue({
        noUpdateEvent: true
      });
      var editRow = this.editRows[index]; // Iterate through all components and check conditions, and calculate values.

      editRow.components.forEach(function (comp) {
        changed |= comp.calculateValue(data, {
          noUpdateEvent: true
        });
        comp.checkConditions(data);

        if (!flags.noValidate) {
          valid &= comp.checkValidity(data, !editRow.isOpen);
        }
      });
      valid &= this.validateRow(index); // Trigger the change if the values changed.

      if (changed) {
        this.triggerChange(flags);
      } // Return if the value is valid.


      return valid;
    }
  }, {
    key: "createAddButton",
    value: function createAddButton() {
      if (this.options.readOnly) {
        return;
      }

      this.element.appendChild(this.ce('div', {
        class: 'editgrid-add'
      }, this.ce('button', {
        class: 'btn btn-primary',
        role: 'button',
        onClick: this.addRow.bind(this)
      }, [this.ce('span', {
        class: this.iconClass('plus'),
        'aria-hidden': true
      }), ' ', this.t(this.component.addAnother ? this.component.addAnother : 'Add Another', {})])));
    }
  }, {
    key: "addRow",
    value: function addRow(fromBuild) {
      if (this.options.readOnly) {
        return;
      }

      var dataObj = {};
      this.editRows.push({
        components: [],
        isOpen: true,
        data: dataObj
      });

      if (this.component.inlineEdit) {
        this.dataValue.push(dataObj);
      }

      this.emit('editGridAddRow', {
        component: this.component,
        row: this.editRows[this.editRows.length - 1]
      });

      if (this.component.inlineEdit) {
        this.updateGrid();
      } else {
        this.buildTable(fromBuild);
      }
    }
  }, {
    key: "editRow",
    value: function editRow(rowIndex) {
      var editRow = this.editRows[rowIndex];
      editRow.dirty = false;
      editRow.isOpen = true;
      editRow.editing = true;

      var dataSnapshot = _lodash.default.cloneDeep(this.dataValue[rowIndex]);

      if (this.component.inlineEdit) {
        editRow.backup = dataSnapshot;
        this.updateGrid();
      } else {
        editRow.data = dataSnapshot;
        this.buildTable();
      }
    }
  }, {
    key: "updateGrid",
    value: function updateGrid() {
      this.updateValue();
      this.triggerChange();
      this.buildTable();
    }
  }, {
    key: "clearErrors",
    value: function clearErrors(rowIndex) {
      var editRow = this.editRows[rowIndex];

      if (editRow && Array.isArray(editRow.components)) {
        editRow.components.forEach(function (comp) {
          comp.setPristine(true);
          comp.setCustomValidity('');
        });
      }
    }
  }, {
    key: "cancelRow",
    value: function cancelRow(rowIndex) {
      var editRow = this.editRows[rowIndex];

      if (this.options.readOnly) {
        editRow.dirty = false;
        editRow.isOpen = false;
        this.buildTable();
        return;
      }

      if (editRow.editing) {
        editRow.dirty = false;
        editRow.isOpen = false;

        if (this.component.inlineEdit) {
          this.dataValue[rowIndex] = editRow.backup;
        }

        editRow.data = this.dataValue[rowIndex];
        this.clearErrors(rowIndex);
      } else {
        this.clearErrors(rowIndex);

        if (this.component.inlineEdit) {
          this.splice(rowIndex);
        }

        this.removeChildFrom(editRow.element, this.tableElement);
        this.editRows.splice(rowIndex, 1);
      }

      this.updateGrid();
    }
  }, {
    key: "saveRow",
    value: function saveRow(rowIndex) {
      var editRow = this.editRows[rowIndex];

      if (this.options.readOnly) {
        editRow.dirty = false;
        editRow.isOpen = false;
        this.buildTable();
        return;
      }

      editRow.dirty = true;

      if (!this.validateRow(rowIndex)) {
        return;
      }

      editRow.dirty = false;
      editRow.isOpen = false;

      if (!this.component.inlineEdit) {
        if (editRow.editing) {
          this.dataValue[rowIndex] = editRow.data;
        } else {
          // Insert this row into its proper place.
          var newIndex = this.dataValue.length;
          this.dataValue.push(editRow.data);
          this.editRows.splice(rowIndex, 1);
          this.editRows.splice(newIndex, 0, editRow);
        }
      }

      this.updateGrid();
    }
  }, {
    key: "removeRow",
    value: function removeRow(rowIndex) {
      if (this.options.readOnly) {
        return;
      }
=======
    this.loadRefs(element, {
      [`${this.editgridKey}-addRow`]: 'multiple',
      [`${this.editgridKey}-removeRow`]: 'multiple',
      [`${this.editgridKey}-saveRow`]: 'multiple',
      [`${this.editgridKey}-cancelRow`]: 'multiple',
      [this.editgridKey]: 'multiple',
    });

    this.refs[`${this.editgridKey}-addRow`].forEach((addButton) => {
      this.addEventListener(addButton, 'click', this.addRow.bind(this));
    });

    let openRowCount = 0;
    this.refs[this.editgridKey].forEach((row, rowIndex) => {
      if (this.editRows[rowIndex].isOpen) {
        this.attachComponents(row, this.editRows[rowIndex].components);
        this.addEventListener(this.refs[`${this.editgridKey}-saveRow`][openRowCount], 'click', () =>
          this.saveRow(rowIndex)
        );
        this.addEventListener(this.refs[`${this.editgridKey}-cancelRow`][openRowCount], 'click', () =>
          this.cancelRow(rowIndex)
        );
        openRowCount++;
      }
      else {
        // Attach edit and remove button events.
        [
          {
            class: 'removeRow',
            event: 'click',
            action: this.removeRow.bind(this, rowIndex)
          },
          {
            class: 'editRow',
            event: 'click',
            action: this.editRow.bind(this, rowIndex)
          },
        ].forEach(action => {
          const elements = row.getElementsByClassName(action.class);
          Array.prototype.forEach.call(elements, element => {
            this.addEventListener(element, action.event, action.action);
          });
        });
      }
    });

    // Add open class to the element if any edit grid row is open
    if (openRowCount) {
      this.addClass(this.refs.component, `formio-component-${this.component.type}-row-open`);
    }
    else {
      this.removeClass(this.refs.component, `formio-component-${this.component.type}-row-open`);
    }

    return super.attach(element);
  }

  clearOnHide(show) {
    super.clearOnHide(show);

    if (this.component.clearOnHide && !this.visible) {
      if (!this.editRows) {
        return;
      }

      this.removeAllRows();
    }
  }

  renderRow(row, rowIndex) {
    const dataValue = this.dataValue || [];
    if (row.isOpen) {
      return this.renderComponents(row.components);
    }
    else {
      const flattenedComponents = this.flattenComponents(rowIndex);
      const rowTemplate = Evaluator.noeval ? templates.row : _.get(this.component, 'templates.row', EditGridComponent.defaultRowTemplate);
      return this.renderString(
        rowTemplate,
        {
          row: dataValue[rowIndex] || {},
          data: this.data,
          rowIndex,
          components: this.component.components,
          flattenedComponents,
          getView: (component, data) => {
            const instance = flattenedComponents[component.key];
            return instance ? instance.getView(data) : '';
          },
        },
      );
    }
  }

  checkData(data, flags, row) {
    data = data || this.rootValue;
    flags = flags || {};
    row = row || this.data;
    Component.prototype.checkData.call(this, data, flags, row);
    return this.editRows.reduce(
      (valid, editRow) => this.checkRow(data, editRow, flags, editRow.data) && valid,
      true
    );
  }

  checkRow(data, editRow, flags, row) {
    return super.checkData(data, flags, row, editRow.components);
  }

  everyComponent(fn, rowIndex) {
    const components = this.getComponents(rowIndex);
    _.each(components, (component, index) => {
      if (fn(component, components, index) === false) {
        return false;
      }

      if (typeof component.everyComponent === 'function') {
        if (component.everyComponent(fn) === false) {
          return false;
        }
      }
    });
  }

  flattenComponents(rowIndex) {
    const result = {};

    this.everyComponent((component) => {
      result[component.key] = component;
    }, rowIndex);

    return result;
  }

  getComponents(rowIndex) {
    // Ensure editrows is set.
    this.editRows = this.editRows || [];
    return this.builderMode
      ? super.getComponents()
      : _.isNumber(rowIndex)
        ? (this.editRows[rowIndex].components || [])
        : this.editRows.reduce((result, row) => result.concat(row.components || []), []);
  }

  destroyComponents(rowIndex) {
    if (this.builderMode) {
      return super.destroyComponents();
    }

    const components = this.getComponents(rowIndex).slice();
    components.forEach((comp) => comp.destroy());
  }

  addRow() {
    if (this.options.readOnly) {
      return;
    }
    const dataObj = {};
    this.editRows.push({
      components: [],
      isOpen: true,
      data: dataObj
    });
    if (this.component.inlineEdit) {
      this.dataValue.push(dataObj);
    }
    const rowIndex = this.editRows.length - 1;
    const editRow = this.editRows[rowIndex];
    this.emit('editGridAddRow', {
      component: this.component,
      row: editRow
    });
    editRow.components = this.createRowComponents(editRow.data, rowIndex);
    this.checkRow(null, editRow, {}, editRow.data);
    if (this.component.modal) {
      this.addRowModal(rowIndex);
    }
    else {
      this.redraw();
    }
    return editRow;
  }

  addRowModal(rowIndex) {
    const formComponents =  this.ce('div');
    formComponents.innerHTML = this.renderComponents(this.editRows[rowIndex].components);
    const dialog = this.component.modal ? this.createModal(formComponents) : undefined;
    dialog.refs.dialogContents.appendChild( this.ce('button', {
      class: 'btn btn-primary',
      onClick: () => {
        if (this.validateRow(this.editRows[rowIndex], true)) {
          dialog.close();
          this.saveRow(rowIndex);
        }
      }
    }, this.component.saveRow || 'Save'));
    this.attachComponents(formComponents, this.editRows[rowIndex].components);
  }

  setEditRowSettings(editRow) {
    editRow.dirty = false;
    editRow.isOpen = true;
    editRow.editing = true;
  }

  editRow(rowIndex) {
    const dataValue = this.dataValue || [];
    const editRow = this.editRows[rowIndex];
    this.setEditRowSettings(editRow);
    const dataSnapshot = dataValue[rowIndex] ? fastCloneDeep(dataValue[rowIndex]) : {};
    if (this.component.inlineEdit) {
      editRow.backup = dataSnapshot;
    }
    else {
      editRow.data = dataSnapshot;
      this.restoreRowContext(editRow);
    }
    if (this.component.modal) {
      this.addRowModal(rowIndex);
    }
    else {
      this.redraw();
    }
  }

  clearErrors(rowIndex) {
    const editRow = this.editRows[rowIndex];
    if (editRow && Array.isArray(editRow.components)) {
      editRow.components.forEach(comp => {
        comp.setPristine(true);
        comp.setCustomValidity('');
      });
    }
  }

  cancelRow(rowIndex) {
    const editRow = this.editRows[rowIndex];
    if (this.options.readOnly) {
      editRow.dirty = false;
      editRow.isOpen = false;
      editRow.editing = false;
      this.redraw();
      return;
    }
    if (editRow.editing) {
      const dataValue = this.dataValue || [];
      editRow.dirty = false;
      editRow.isOpen = false;
      editRow.editing = false;
      if (this.component.inlineEdit) {
        this.dataValue[rowIndex] = editRow.backup;
        editRow.data = editRow.backup;
        this.restoreRowContext(editRow);
      }
      editRow.data = dataValue[rowIndex] || {};
      this.clearErrors(rowIndex);
    }
    else {
      this.clearErrors(rowIndex);
      this.destroyComponents(rowIndex);
      if (this.component.inlineEdit) {
        this.splice(rowIndex);
      }
      this.editRows.splice(rowIndex, 1);
    }

    this.checkValidity(null, true);
    this.redraw();
  }

  saveRow(rowIndex) {
    const editRow = this.editRows[rowIndex];
    if (this.options.readOnly) {
      editRow.dirty = false;
      editRow.isOpen = false;
      this.redraw();
      return;
    }
    editRow.dirty = true;
    if (!!this.validateRow(editRow, true) !== true) {
      return false;
    }

    if (!this.component.inlineEdit) {
      const dataValue = this.dataValue || [];
      if (editRow.editing) {
        dataValue[rowIndex] = editRow.data;
      }
      else {
        // Insert this row into its proper place.
        const newIndex = dataValue.length;
        dataValue.push(editRow.data);
        this.editRows.splice(rowIndex, 1);
        this.editRows.splice(newIndex, 0, editRow);
        rowIndex = newIndex;
      }
    }
    editRow.dirty = false;
    editRow.isOpen = false;
    editRow.editing = false;
    this.updateValue();
    this.triggerChange();
    this.checkValidity(null, true);
    this.redraw();

    return true;
  }

  updateRowsComponents(rowIndex) {
    for (let i = rowIndex; i < this.editRows.length; i++) {
      this.updateComponentsRowIndex(this.editRows[i].components, i);
    }
  }
>>>>>>> newFormio

      this.splice(rowIndex);
      this.removeChildFrom(this.editRows[rowIndex].element, this.tableElement);
      this.editRows.splice(rowIndex, 1);
      this.updateGrid();
    }
<<<<<<< HEAD
  }, {
    key: "validateRow",
    value: function validateRow(rowIndex, dirty) {
      var check = true;
      var editRow = this.editRows[rowIndex];
      var isDirty = dirty || !!editRow.dirty;
      editRow.components.forEach(function (comp) {
        comp.setPristine(!isDirty);
        check &= comp.checkValidity(null, isDirty, editRow.data);
      });

      if (this.component.validate && this.component.validate.row) {
        var valid = this.evaluate(this.component.validate.row, {
          valid: true,
          row: editRow.data
        }, 'valid', true);

        if (valid === null) {
          valid = "Invalid row validation for ".concat(this.key);
        }

        editRow.errorContainer.innerHTML = '';

        if (valid !== true) {
          editRow.errorContainer.appendChild(this.ce('div', {
            class: 'editgrid-row-error help-block'
          }, valid));
          return false;
        }
      }

      return check;
=======
    this.destroyComponents(rowIndex);
    this.splice(rowIndex);
    this.editRows.splice(rowIndex, 1);
    this.updateRowsComponents(rowIndex);
    this.updateValue();
    this.triggerChange();
    this.checkValidity(null, true);
    this.checkData();
    this.redraw();
  }

  removeAllRows() {
    if (this.options.readOnly) {
      return;
    }

    const editRows = this.editRows || [];
    const rowIndex = editRows.length - 1;

    for (let index = rowIndex; index >= 0; index--) {
      this.removeRow(index);
    }
  }

  updateComponentsRowIndex(components, rowIndex) {
    components.forEach((component, colIndex) => {
      component.rowIndex = rowIndex;
      component.row = `${rowIndex}-${colIndex}`;
    });
  }

  createRowComponents(row, rowIndex) {
    const components = [];
    this.component.components.map((col, colIndex) => {
      const column = _.clone(col);
      const options = _.clone(this.options);
      options.name += `[${rowIndex}]`;
      options.row = `${rowIndex}-${colIndex}`;
      options.onChange = (flags, changed, modified) => {
        if (this.component.inlineEdit && this.options.onChange) {
          this.options.onChange(flags, changed, modified);
        }
        else if (this.editRows[rowIndex]) {
          this.checkRow(null, this.editRows[rowIndex], {
            changed
          }, this.editRows[rowIndex].data);
        }
      };
      const comp = this.createComponent(_.assign({}, column, {
        row: options.row
      }), options, row);
      comp.rowIndex = rowIndex;
      if (comp.path && column.key) {
        comp.path = comp.path.replace(new RegExp(`\\.${column.key}$`), `[${rowIndex}].${column.key}`);
      }
      components.push(comp);
    });
    return components;
  }

  validateRow(editRow, dirty) {
    let valid = true;
    const isDirty = dirty || !!editRow.dirty;
    if (editRow.editing || isDirty) {
      editRow.components.forEach(comp => {
        comp.setPristine(!isDirty);
        valid &= comp.checkValidity(null, isDirty, editRow.data);
      });
    }

    if (this.component.validate && this.component.validate.row) {
      valid = this.evaluate(this.component.validate.row, {
        valid,
        row: editRow.data
      }, 'valid', true);
      if (valid.toString() !== 'true') {
        editRow.error = valid;
        valid = false;
      }
      else {
        delete editRow.error;
      }
      if (valid === null) {
        valid = `Invalid row validation for ${this.key}`;
      }
>>>>>>> newFormio
    }
  }, {
    key: "checkValidity",
    value: function checkValidity(data, dirty) {
      var _this5 = this;

      if (!this.checkCondition(null, data)) {
        this.setCustomValidity('');
        return true;
      }

<<<<<<< HEAD
      var rowsValid = true;
      var rowsClosed = true;
      this.editRows.forEach(function (editRow, rowIndex) {
        // Trigger all errors on the row.
        var rowValid = _this5.validateRow(rowIndex, dirty); // Add has-error class to row.


        if (!rowValid) {
          _this5.addClass(editRow.element, 'has-error');
        } else {
          _this5.removeClass(editRow.element, 'has-error');
        }

        rowsValid &= rowValid; // Any open rows causes validation to fail.

        if (dirty) {
          rowsClosed &= !editRow.isOpen;
        }
      });

      if (!rowsValid) {
        this.setCustomValidity('Please correct rows before proceeding.', dirty);
        return false;
      } else if (!rowsClosed && !this.component.inlineEdit) {
        this.setCustomValidity('Please save all rows before proceeding.', dirty);
        return false;
      }

      var message = this.invalid || this.invalidMessage(data, dirty);
      this.setCustomValidity(message, dirty);
      return true;
    }
  }, {
    key: "setCustomValidity",
    value: function setCustomValidity(message, dirty) {
      if (this.errorElement && this.errorContainer) {
        this.errorElement.innerHTML = '';
        this.removeChildFrom(this.errorElement, this.errorContainer);
      }

      this.removeClass(this.element, 'has-error');

      if (this.options.highlightErrors) {
        this.removeClass(this.element, 'alert alert-danger');
      }

      if (message) {
        this.emit('componentError', this.error);
        this.createErrorElement();
        var errorMessage = this.ce('p', {
          class: 'help-block'
        });
        errorMessage.appendChild(this.text(message));
        this.appendTo(errorMessage, this.errorElement); // Add error classes
=======
    return !!valid;
  }

  checkValidity(data, dirty, row) {
    data = data || this.rootValue;
    row = row || this.data;

    if (!this.checkCondition(row, data)) {
      this.setCustomValidity('');
      return true;
    }

    return this.checkComponentValidity(data, dirty, row);
  }

  checkComponentValidity(data, dirty, row) {
    if (!super.checkComponentValidity(data, dirty, row)) {
      return false;
    }

    let rowsValid = true;
    let rowsEditing = false;
    this.editRows.forEach((editRow) => {
      // Trigger all errors on the row.
      const rowValid = this.validateRow(editRow, dirty);

      rowsValid &= rowValid;

      // If this is a dirty check, and any rows are still editing, we need to throw validation error.
      rowsEditing |= (dirty && (editRow.editing || editRow.isOpen));
    });
>>>>>>> newFormio

        this.addClass(this.element, 'has-error');

        if (dirty && this.options.highlightErrors) {
          this.addClass(this.element, 'alert alert-danger');
        }
      }
    }
<<<<<<< HEAD
  }, {
    key: "updateValue",
    value: function updateValue(flags, value) {
      // Intentionally skip over nested component updateValue method to keep recursive update from occurring with sub components.
      return _Base.default.prototype.updateValue.call(this, flags, value);
=======
    else if (rowsEditing && !this.component.inlineEdit) {
      this.setCustomValidity('Please save all rows before proceeding.', dirty);
      return false;
>>>>>>> newFormio
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var _this6 = this;

      if (!value) {
        this.editRows = this.defaultValue;
        this.buildTable();
        return;
      }

      if (!Array.isArray(value)) {
        if (_typeof(value) === 'object') {
          value = [value];
        } else {
          return;
        }
      }

      var changed = this.hasChanged(value, this.dataValue);
      this.dataValue = value;
      var dataValue = this.dataValue;

      if (Array.isArray(dataValue)) {
        // Refresh editRow data when data changes.
        dataValue.forEach(function (row, rowIndex) {
          if (_this6.editRows[rowIndex]) {
            _this6.editRows[rowIndex].data = row;
          } else {
            _this6.editRows[rowIndex] = {
              components: [],
              isOpen: !!_this6.options.defaultOpen,
              data: row
            };
          }
        }); // Remove any extra edit rows.

        if (dataValue.length < this.editRows.length) {
          for (var rowIndex = this.editRows.length - 1; rowIndex >= dataValue.length; rowIndex--) {
            this.removeChildFrom(this.editRows[rowIndex].element, this.tableElement);
            this.editRows.splice(rowIndex, 1);
          }
        }
      }

<<<<<<< HEAD
      this.buildTable();
      return changed;
    }
    /**
     * Get the value of this component.
     *
     * @returns {*}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.dataValue;
    }
  }, {
    key: "clearOnHide",
    value: function clearOnHide(show) {
      _get(_getPrototypeOf(EditGridComponent.prototype), "clearOnHide", this).call(this, show);

      if (!this.component.clearOnHide) {
        // If some components set to clearOnHide we need to clear them.
        this.buildTable();
      }
    }
  }, {
    key: "restoreComponentsContext",
    value: function restoreComponentsContext() {
      return;
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return EditGridComponent.schema();
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return [];
=======
  get defaultValue() {
    const value = super.defaultValue;
    const defaultValue = Array.isArray(value) ? value : [];

    for (let dIndex = defaultValue.length; dIndex < this.minLength; dIndex++) {
      defaultValue.push({});
    }

    return defaultValue;
  }

  setValue(value, flags) {
    if (equal(this.defaultValue, value)) {
      return false;
    }

    if (!value) {
      this.dataValue = this.defaultValue;
      return false;
    }
    if (!Array.isArray(value)) {
      if (typeof value === 'object') {
        value = [value];
      }
      else {
        return false;
      }
>>>>>>> newFormio
    }
  }, {
    key: "defaultValue",
    get: function get() {
      var value = _get(_getPrototypeOf(EditGridComponent.prototype), "defaultValue", this);

<<<<<<< HEAD
      return Array.isArray(value) ? value : [];
    }
  }]);

  return EditGridComponent;
}(_NestedComponent2.default);

exports.default = EditGridComponent;
=======
    const changed = this.hasChanged(value, this.dataValue);
    this.dataValue = value;
    // Refresh editRow data when data changes.
    this.dataValue.forEach((row, rowIndex) => {
      const editRow = this.editRows[rowIndex];
      if (editRow) {
        editRow.data = row;
        if (editRow.isOpen) {
          if (editRow.emptyOpen) {
            editRow.isOpen = false;
          }
          else {
            editRow.components.forEach(col => {
              col.rowIndex = rowIndex;
              this.setNestedValue(col, row, flags, false);
            });
          }
        }
      }
      else {
        this.editRows[rowIndex] = {
          components: this.createRowComponents(row, rowIndex),
          isOpen: false,
          data: row,
        };
        this.checkRow(null, this.editRows[rowIndex], {}, this.editRows[rowIndex].data);
      }
    });
    this.updateOnChange(flags, changed);
    if (changed) {
      this.redraw();
    }
    return changed;
  }

  restoreComponentsContext() {
    return;
  }

  restoreRowContext(editRow) {
    editRow.components.forEach((component) => {
      component.data = editRow.data;
      if (_.has(editRow.data, component.key)) {
        component.setValue(editRow.data[component.key]);
      }
    });
  }
}

EditGridComponent.prototype.hasChanged = Component.prototype.hasChanged;
>>>>>>> newFormio

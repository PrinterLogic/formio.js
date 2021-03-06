<<<<<<< HEAD
"use strict";

require("core-js/modules/es.symbol");
=======
import Component from '../_classes/component/Component';
import _ from 'lodash';

export default class ContentComponent extends Component {
  static schema(...extend) {
    return Component.schema({
      label: 'Content',
      type: 'content',
      key: 'content',
      input: false,
      html: ''
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Content',
      group: 'layout',
      icon: 'html5',
      preview: false,
      documentation: 'http://help.form.io/userguide/#content-component',
      weight: 5,
      schema: ContentComponent.schema()
    };
  }
>>>>>>> newFormio

require("core-js/modules/es.symbol.description");

<<<<<<< HEAD
require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Base = _interopRequireDefault(require("../base/Base"));

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

var ContentComponent =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(ContentComponent, _BaseComponent);

  function ContentComponent() {
    _classCallCheck(this, ContentComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContentComponent).apply(this, arguments));
  }

  _createClass(ContentComponent, [{
    key: "setHTML",
    value: function setHTML() {
      this.htmlElement.innerHTML = this.interpolate(this.component.html);
    }
  }, {
    key: "build",
    value: function build() {
      var _this = this;

      this.createElement();
      this.htmlElement = this.ce('div', {
        id: this.id,
        class: "form-group ".concat(this.component.className)
      });
      this.htmlElement.component = this;

      if (this.options.builder) {
        var editorElement = this.ce('div');
        this.element.appendChild(editorElement);
        this.editorReady = this.addCKE(editorElement, null, function (html) {
          _this.component.html = html;
        }).then(function (editor) {
          _this.editor = editor;

          _this.editor.data.set(_this.component.html);

          return editor;
        }).catch(function (err) {
          return console.warn(err);
        });
      } else {
        this.setHTML();

        if (this.component.refreshOnChange) {
          this.on('change', function () {
            return _this.setHTML();
          }, true);
        }
      }

      this.element.appendChild(this.htmlElement);
      this.attachLogic();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var state = _get(_getPrototypeOf(ContentComponent.prototype), "destroy", this).call(this);

      if (this.editor) {
        this.editor.destroy();
      }

      return state;
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return ContentComponent.schema();
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return '';
    }
  }], [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _Base.default.schema.apply(_Base.default, [{
        label: 'Content',
        type: 'content',
        key: 'content',
        input: false,
        html: ''
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Content',
        group: 'basic',
        icon: 'fa fa-html5',
        documentation: 'http://help.form.io/userguide/#content-component',
        weight: 100,
        schema: ContentComponent.schema()
      };
    }
  }]);
=======
  get content() {
    if (this.builderMode) {
      return this.component.html;
    }
    const submission = _.get(this.root, 'submission', {});
    return this.component.html ? this.interpolate(this.component.html, {
      metadata: submission.metadata || {},
      submission: submission,
      data: this.rootValue,
      row: this.data
    }) : '';
  }

  render() {
    return super.render(this.renderTemplate('html', {
      tag: 'div',
      attrs: [],
      content: this.content,
    }));
  }

  attach(element) {
    this.loadRefs(element, { html: 'single' });
    if (this.component.refreshOnChange) {
      this.on('change', () => {
        if (this.refs.html) {
          this.setContent(this.refs.html, this.content);
        }
      }, true);
    }
    return super.attach(element);
  }
>>>>>>> newFormio

  return ContentComponent;
}(_Base.default);

exports.default = ContentComponent;
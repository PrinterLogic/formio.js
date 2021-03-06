<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
=======
import _ from 'lodash';
import { eachComponent, uniqueKey } from './utils';
export default {
>>>>>>> newFormio
  /**
   * Appends a number to a component.key to keep it unique
   *
   * @param {Object} form
   *   The components parent form.
   * @param {Object} component
   *   The component to uniquify
   */
<<<<<<< HEAD
  uniquify: function uniquify(form, component) {
    var changed = false;
    var formKeys = {};
    (0, _utils.eachComponent)(form.components, function (comp) {
      formKeys[comp.key] = true;
    }, true); // Recurse into all child components.
=======
  uniquify(container, component) {
    let changed = false;
    const formKeys = {};
    eachComponent(container, function(comp) {
      formKeys[comp.key] = true;
    }, true);
>>>>>>> newFormio

    (0, _utils.eachComponent)([component], function (component) {
      // Skip key uniquification if this component doesn't have a key.
      if (!component.key) {
        return;
      }

<<<<<<< HEAD
      var newKey = (0, _utils.uniqueKey)(formKeys, component.key);

      if (newKey !== component.key) {
        component.key = newKey;
=======
      const newKey = uniqueKey(formKeys, component.key);
      if (newKey !== component.key) {
        component.key = newKey;
        formKeys[newKey] = true;
>>>>>>> newFormio
        changed = true;
      }
    }, true);
    return changed;
  },
  additionalShortcuts: {
    button: ['Enter', 'Esc']
  },
  getAlphaShortcuts: function getAlphaShortcuts() {
    return _lodash.default.range('A'.charCodeAt(), 'Z'.charCodeAt() + 1).map(function (charCode) {
      return String.fromCharCode(charCode);
    });
  },
  getAdditionalShortcuts: function getAdditionalShortcuts(type) {
    return this.additionalShortcuts[type] || [];
  },
<<<<<<< HEAD
  getBindedShortcuts: function getBindedShortcuts(components, input) {
    var result = [];
    (0, _utils.eachComponent)(components, function (component) {
=======

  getBindedShortcuts(components, input) {
    const result = [];

    eachComponent(components, (component) => {
>>>>>>> newFormio
      if (component === input) {
        return;
      }

      if (component.shortcut) {
        result.push(component.shortcut);
      }

      if (component.values) {
        component.values.forEach(function (value) {
          if (value.shortcut) {
            result.push(value.shortcut);
          }
        });
      }
    }, true);
    return result;
  },
  getAvailableShortcuts: function getAvailableShortcuts(form, component) {
    if (!component) {
      return [];
    }
<<<<<<< HEAD

    return [''].concat(_lodash.default.difference(this.getAlphaShortcuts().concat(this.getAdditionalShortcuts(component.type)), this.getBindedShortcuts(form.components, component)));
=======
    return [''].concat(_.difference(
      this.getAlphaShortcuts().concat(this.getAdditionalShortcuts(component.type)),
      this.getBindedShortcuts(form.components, component)),
    ).map((shortcut) => ({
      label: shortcut,
      value: shortcut,
    }));
>>>>>>> newFormio
  }
};
exports.default = _default;
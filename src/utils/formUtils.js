<<<<<<< HEAD
"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLayoutComponent = isLayoutComponent;
exports.eachComponent = eachComponent;
exports.matchComponent = matchComponent;
exports.getComponent = getComponent;
exports.searchComponents = searchComponents;
exports.findComponents = findComponents;
exports.findComponent = findComponent;
exports.removeComponent = removeComponent;
exports.generateFormChange = generateFormChange;
exports.applyFormChanges = applyFormChanges;
exports.flattenComponents = flattenComponents;
exports.hasCondition = hasCondition;
exports.parseFloatExt = parseFloatExt;
exports.formatAsCurrency = formatAsCurrency;
exports.escapeRegExCharacters = escapeRegExCharacters;
exports.getValue = getValue;
exports.getStrings = getStrings;

var _get = _interopRequireDefault(require("lodash/get"));

var _set = _interopRequireDefault(require("lodash/set"));

var _has = _interopRequireDefault(require("lodash/has"));

var _clone = _interopRequireDefault(require("lodash/clone"));

var _forOwn = _interopRequireDefault(require("lodash/forOwn"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _isNaN = _interopRequireDefault(require("lodash/isNaN"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

var _round = _interopRequireDefault(require("lodash/round"));

var _chunk = _interopRequireDefault(require("lodash/chunk"));

var _pad = _interopRequireDefault(require("lodash/pad"));

var _findIndex = _interopRequireDefault(require("lodash/findIndex"));

var _fastJsonPatch = _interopRequireDefault(require("fast-json-patch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
=======
import get from 'lodash/get';
import set from 'lodash/set';
import has from 'lodash/has';
import clone from 'lodash/clone';
import forOwn from 'lodash/forOwn';
import isString from 'lodash/isString';
import isNaN from 'lodash/isNaN';
import isNil from 'lodash/isNil';
import isPlainObject from 'lodash/isPlainObject';
import round from 'lodash/round';
import chunk from 'lodash/chunk';
import pad from 'lodash/pad';
import { compare, applyPatch } from 'fast-json-patch';
>>>>>>> newFormio

/**
 * Determine if a component is a layout component or not.
 *
 * @param {Object} component
 *   The component to check.
 *
 * @returns {Boolean}
 *   Whether or not the component is a layout component.
 */
<<<<<<< HEAD
function isLayoutComponent(component) {
  return Boolean(component.columns && Array.isArray(component.columns) || component.rows && Array.isArray(component.rows) || component.components && Array.isArray(component.components));
}
=======
export function isLayoutComponent(component) {
  return Boolean(
    (component.columns && Array.isArray(component.columns)) ||
    (component.rows && Array.isArray(component.rows)) ||
    (component.components && Array.isArray(component.components))
  );
}

>>>>>>> newFormio
/**
 * Iterate through each component within a form.
 *
 * @param {Object} components
 *   The components to iterate.
 * @param {Function} fn
 *   The iteration function to invoke for each component.
 * @param {Boolean} includeAll
 *   Whether or not to include layout components.
 * @param {String} path
 *   The current data path of the element. Example: data.user.firstName
 * @param {Object} parent
 *   The parent object.
 */
<<<<<<< HEAD


function eachComponent(components, fn, includeAll, path, parent) {
  if (!components) return;
  path = path || '';
  components.forEach(function (component) {
    if (!component) {
      return;
    }

    var hasColumns = component.columns && Array.isArray(component.columns);
    var hasRows = component.rows && Array.isArray(component.rows);
    var hasComps = component.components && Array.isArray(component.components);
    var noRecurse = false;
    var newPath = component.key ? path ? "".concat(path, ".").concat(component.key) : component.key : ''; // Keep track of parent references.

    if (parent) {
      // Ensure we don't create infinite JSON structures.
      component.parent = (0, _clone.default)(parent);
=======
export function eachComponent(components, fn, includeAll, path, parent) {
  if (!components) return;
  path = path || '';
  components.forEach((component) => {
    if (!component) {
      return;
    }
    const hasColumns = component.columns && Array.isArray(component.columns);
    const hasRows = component.rows && Array.isArray(component.rows);
    const hasComps = component.components && Array.isArray(component.components);
    let noRecurse = false;
    const newPath = component.key ? (path ? (`${path}.${component.key}`) : component.key) : '';

    // Keep track of parent references.
    if (parent) {
      // Ensure we don't create infinite JSON structures.
      component.parent = clone(parent);
>>>>>>> newFormio
      delete component.parent.components;
      delete component.parent.componentMap;
      delete component.parent.columns;
      delete component.parent.rows;
    }

<<<<<<< HEAD
    if (includeAll || component.tree || !hasColumns && !hasRows && !hasComps) {
      noRecurse = fn(component, newPath);
    }

    var subPath = function subPath() {
      if (component.key && !['panel', 'table', 'well', 'columns', 'fieldset', 'tabs', 'form'].includes(component.type) && (['datagrid', 'container', 'editgrid'].includes(component.type) || component.tree)) {
        return newPath;
      } else if (component.key && component.type === 'form') {
        return "".concat(newPath, ".data");
      }

=======
    if (includeAll || component.tree || (!hasColumns && !hasRows && !hasComps)) {
      noRecurse = fn(component, newPath);
    }

    const subPath = () => {
      if (
        component.key &&
        !['panel', 'table', 'well', 'columns', 'fieldset', 'tabs', 'form'].includes(component.type) &&
        (
          ['datagrid', 'container', 'editgrid'].includes(component.type) ||
          component.tree
        )
      ) {
        return newPath;
      }
      else if (
        component.key &&
        component.type === 'form'
      ) {
        return `${newPath}.data`;
      }
>>>>>>> newFormio
      return path;
    };

    if (!noRecurse) {
      if (hasColumns) {
<<<<<<< HEAD
        component.columns.forEach(function (column) {
          return eachComponent(column.components, fn, includeAll, subPath(), parent ? component : null);
        });
      } else if (hasRows) {
        component.rows.forEach(function (row) {
          if (Array.isArray(row)) {
            row.forEach(function (column) {
              return eachComponent(column.components, fn, includeAll, subPath(), parent ? component : null);
            });
          }
        });
      } else if (hasComps) {
=======
        component.columns.forEach((column) =>
          eachComponent(column.components, fn, includeAll, subPath(), parent ? component : null));
      }

      else if (hasRows) {
        component.rows.forEach((row) => {
          if (Array.isArray(row)) {
            row.forEach((column) =>
              eachComponent(column.components, fn, includeAll, subPath(), parent ? component : null));
          }
        });
      }

      else if (hasComps) {
>>>>>>> newFormio
        eachComponent(component.components, fn, includeAll, subPath(), parent ? component : null);
      }
    }
  });
}
<<<<<<< HEAD
=======

>>>>>>> newFormio
/**
 * Matches if a component matches the query.
 *
 * @param component
 * @param query
 * @return {boolean}
 */
<<<<<<< HEAD


function matchComponent(component, query) {
  if ((0, _isString.default)(query)) {
    return component.key === query;
  } else {
    var matches = false;
    (0, _forOwn.default)(query, function (value, key) {
      matches = (0, _get.default)(component, key) === value;

=======
export function matchComponent(component, query) {
  if (isString(query)) {
    return (component.key === query) || (component.path === query);
  }
  else {
    let matches = false;
    forOwn(query, (value, key) => {
      matches = (get(component, key) === value);
>>>>>>> newFormio
      if (!matches) {
        return false;
      }
    });
    return matches;
  }
}
<<<<<<< HEAD
=======

>>>>>>> newFormio
/**
 * Get a component by its key
 *
 * @param {Object} components
 *   The components to iterate.
 * @param {String|Object} key
 *   The key of the component to get, or a query of the component to search.
 *
 * @returns {Object}
 *   The component that matches the given key, or undefined if not found.
 */
<<<<<<< HEAD


function getComponent(components, key, includeAll) {
  var result;
  eachComponent(components, function (component, path) {
    if (path === key) {
      component.path = path;
=======
export function getComponent(components, key, includeAll) {
  let result;
  eachComponent(components, (component, path) => {
    if ((path === key) || (component.path === key)) {
>>>>>>> newFormio
      result = component;
      return true;
    }
  }, includeAll);
  return result;
}
<<<<<<< HEAD
=======

>>>>>>> newFormio
/**
 * Finds a component provided a query of properties of that component.
 *
 * @param components
 * @param query
 * @return {*}
 */
<<<<<<< HEAD


function searchComponents(components, query) {
  var results = [];
  eachComponent(components, function (component, path) {
    if (matchComponent(component, query)) {
      component.path = path;
=======
export function searchComponents(components, query) {
  const results = [];
  eachComponent(components, (component) => {
    if (matchComponent(component, query)) {
>>>>>>> newFormio
      results.push(component);
    }
  }, true);
  return results;
}
<<<<<<< HEAD
=======

>>>>>>> newFormio
/**
 * Deprecated version of findComponents. Renamed to searchComponents.
 *
 * @param components
 * @param query
 * @returns {*}
 */
<<<<<<< HEAD


function findComponents(components, query) {
=======
export function findComponents(components, query) {
>>>>>>> newFormio
  console.warn('formio.js/utils findComponents is deprecated. Use searchComponents instead.');
  return searchComponents(components, query);
}

<<<<<<< HEAD
var possibleFind = null;
var possiblePath = [];
var unknownCounter = {};

var checkComponent = function checkComponent(component, key, path) {
  // Search for components without a key as well.
  if (!component.key) {
    if (!unknownCounter.hasOwnProperty(component.type)) {
      unknownCounter[component.type] = 0;
    }

    unknownCounter[component.type]++;

    if (key === component.type + unknownCounter[component.type]) {
      possibleFind = component;
      possiblePath = (0, _clone.default)(path);
    }
  } else if (possibleFind && component.key === possibleFind.key) {
    var nextCount = component.key.match(/([0-9]+)$/g);

    if (nextCount) {
      unknownCounter[component.type] = parseInt(nextCount.pop(), 10);
      possibleFind = null;
      possiblePath = [];
    }
  }

  if (component.key === key) {
    return true;
  }

  return false;
};
=======
>>>>>>> newFormio
/**
 * This function will find a component in a form and return the component AND THE PATH to the component in the form.
 *
 * @param components
 * @param key
 * @param fn
 * @param path
<<<<<<< HEAD
 * @returns boolean - If the component was found.
 */


function findComponent(components, key, path, fn) {
  if (!components || !key) {
    return false;
  }

  if (typeof path === 'function') {
    fn = path;
    path = [];
  }

  path = path || [];

  if (!path.length) {
    // Reset search params.
    possibleFind = null;
    possiblePath = [];
    unknownCounter = {};
  }

  var found = false;
  components.forEach(function (component, index) {
=======
 * @returns {*}
 */
export function findComponent(components, key, path, fn) {
  if (!components) return;
  path = path || [];

  if (!key) {
    return fn(components);
  }

  components.forEach(function(component, index) {
>>>>>>> newFormio
    var newPath = path.slice();
    newPath.push(index);
    if (!component) return;

    if (component.hasOwnProperty('columns') && Array.isArray(component.columns)) {
      newPath.push('columns');
<<<<<<< HEAD
      component.columns.forEach(function (column, index) {
        var colPath = newPath.slice();
        colPath.push(index);
        column.type = 'column';

        if (checkComponent(column, key, colPath)) {
          found = true;
          fn(column, colPath);
        } else if (findComponent(column.components, key, colPath.concat(['components']), fn)) {
          found = true;
        }
=======
      component.columns.forEach(function(column, index) {
        var colPath = newPath.slice();
        colPath.push(index);
        colPath.push('components');
        findComponent(column.components, key, colPath, fn);
>>>>>>> newFormio
      });
    }

    if (component.hasOwnProperty('rows') && Array.isArray(component.rows)) {
      newPath.push('rows');
<<<<<<< HEAD
      component.rows.forEach(function (row, index) {
        var rowPath = newPath.slice();
        rowPath.push(index);
        row.forEach(function (column, index) {
          var colPath = rowPath.slice();
          colPath.push(index);
          column.type = 'cell';

          if (checkComponent(column, key, colPath)) {
            found = true;
            fn(column, colPath);
          } else if (findComponent(column.components, key, colPath.concat(['components']), fn)) {
            found = true;
          }
=======
      component.rows.forEach(function(row, index) {
        var rowPath = newPath.slice();
        rowPath.push(index);
        row.forEach(function(column, index) {
          var colPath = rowPath.slice();
          colPath.push(index);
          colPath.push('components');
          findComponent(column.components, key, colPath, fn);
>>>>>>> newFormio
        });
      });
    }

<<<<<<< HEAD
    if (component.hasOwnProperty('components') && Array.isArray(component.components) && findComponent(component.components, key, newPath.concat(['components']), fn)) {
      found = true;
    } // Check this component.


    if (checkComponent(component, key, newPath)) {
      found = true;
      fn(component, newPath);
    }
  }); // If the component was not found BUT there was a possibility then return it.

  if (!path.length && !found && possibleFind) {
    found = true;
    fn(possibleFind, possiblePath);
  } // Return if this if found.


  return found;
}
=======
    if (component.hasOwnProperty('components') && Array.isArray(component.components)) {
      newPath.push('components');
      findComponent(component.components, key, newPath, fn);
    }

    if (component.key === key) {
      fn(component, newPath);
    }
  });
}

>>>>>>> newFormio
/**
 * Remove a component by path.
 *
 * @param components
 * @param path
 */
<<<<<<< HEAD


function removeComponent(components, path) {
  // Using _.unset() leave a null value. Use Array splice instead.
  var index = path.pop();

  if (path.length !== 0) {
    components = (0, _get.default)(components, path);
  }

  components.splice(index, 1);
}

function generateFormChange(type, data) {
  var change = null;
  var schema = data.schema;

=======
export function removeComponent(components, path) {
  // Using _.unset() leave a null value. Use Array splice instead.
  var index = path.pop();
  if (path.length !== 0) {
    components = get(components, path);
  }
  components.splice(index, 1);
}

export function generateFormChange(type, data) {
  let change;
>>>>>>> newFormio
  switch (type) {
    case 'add':
      change = {
        op: 'add',
<<<<<<< HEAD
        key: schema.key,
        container: data.parent.key,
        index: (0, _findIndex.default)(data.parent.components, {
          id: data.id
        }),
        component: schema
      };
      break;

    case 'edit':
      change = {
        op: 'edit',
        key: schema.key,
        patches: _fastJsonPatch.default.compare(data.originalComponent, schema)
      }; // Don't save if nothing changed.

      if (!change.patches.length) {
        change = null;
      }

      break;

    case 'remove':
      change = {
        op: 'remove',
        key: schema.key
=======
        key: data.component.key,
        container: data.parent.key, // Parent component
        path: data.path, // Path to container within parent component.
        index: data.index, // Index of component in parent container.
        component: data.component
      };
      break;
    case 'edit':
      change = {
        op: 'edit',
        key: data.originalComponent.key,
        patches: compare(data.originalComponent, data.component)
      };

      // Don't save if nothing changed.
      if (!change.patches.length) {
        change = null;
      }
      break;
    case 'remove':
      change = {
        op: 'remove',
        key: data.component.key,
>>>>>>> newFormio
      };
      break;
  }

  return change;
<<<<<<< HEAD
} // Get the parent component provided a component key.


var getParent = function getParent(form, key, fn) {
  if (!findComponent(form.components, key, null, fn)) {
    // Return the root form if no parent is found so it will add the component to the root form.
    fn(form);
  }
};

function applyFormChanges(form, changes) {
  var failed = [];
  changes.forEach(function (change) {
    var found = false;

    switch (change.op) {
      case 'add':
        var newComponent = change.component;
        getParent(form, change.container, function (parent) {
          // A move will first run an add so remove any existing components with matching key before inserting.
          findComponent(form.components, change.key, null, function (component, path) {
=======
}

export function applyFormChanges(form, changes) {
  const failed = [];
  changes.forEach(function(change) {
    var found = false;
    switch (change.op) {
      case 'add':
        var newComponent = change.component;

        // Find the container to set the component in.
        findComponent(form.components, change.container, null, function(parent) {
          if (!change.container) {
            parent = form;
          }

          // A move will first run an add so remove any existing components with matching key before inserting.
          findComponent(form.components, change.key, null, function(component, path) {
>>>>>>> newFormio
            // If found, use the existing component. (If someone else edited it, the changes would be here)
            newComponent = component;
            removeComponent(form.components, path);
          });
<<<<<<< HEAD
          found = true;
          parent.components.splice(change.index, 0, newComponent);
        });
        break;

      case 'remove':
        findComponent(form.components, change.key, null, function (component, path) {
          found = true;
          removeComponent(form.components, path);
        });
        break;

      case 'edit':
        findComponent(form.components, change.key, null, function (component, path) {
          found = true;

          try {
            (0, _set.default)(form.components, path, _fastJsonPatch.default.applyPatch(component, change.patches).newDocument);
          } catch (err) {
=======

          found = true;
          var container = get(parent, change.path);
          container.splice(change.index, 0, newComponent);
        });
        break;
      case 'remove':
        findComponent(form.components, change.key, null, function(component, path) {
          found = true;
          const oldComponent = get(form.components, path);
          if (oldComponent.key !== component.key) {
            path.pop();
          }
          removeComponent(form.components, path);
        });
        break;
      case 'edit':
        findComponent(form.components, change.key, null, function(component, path) {
          found = true;
          try {
            const oldComponent = get(form.components, path);
            const newComponent = applyPatch(component, change.patches).newDocument;

            if (oldComponent.key !== newComponent.key) {
              path.pop();
            }

            set(form.components, path, newComponent);
          }
          catch (err) {
>>>>>>> newFormio
            failed.push(change);
          }
        });
        break;
<<<<<<< HEAD

      case 'move':
        break;
    }

=======
      case 'move':
        break;
    }
>>>>>>> newFormio
    if (!found) {
      failed.push(change);
    }
  });
<<<<<<< HEAD
  return {
    form: form,
    failed: failed
  };
}
=======

  return {
    form,
    failed
  };
}

>>>>>>> newFormio
/**
 * Flatten the form components for data manipulation.
 *
 * @param {Object} components
 *   The components to iterate.
 * @param {Boolean} includeAll
 *   Whether or not to include layout components.
 *
 * @returns {Object}
 *   The flattened components map.
 */
<<<<<<< HEAD


function flattenComponents(components, includeAll) {
  var flattened = {};
  eachComponent(components, function (component, path) {
=======
export function flattenComponents(components, includeAll) {
  const flattened = {};
  eachComponent(components, (component, path) => {
>>>>>>> newFormio
    flattened[path] = component;
  }, includeAll);
  return flattened;
}
<<<<<<< HEAD
=======

>>>>>>> newFormio
/**
 * Returns if this component has a conditional statement.
 *
 * @param component - The component JSON schema.
 *
 * @returns {boolean} - TRUE - This component has a conditional, FALSE - No conditional provided.
 */
<<<<<<< HEAD


function hasCondition(component) {
  return Boolean(component.customConditional || component.conditional && component.conditional.when || component.conditional && component.conditional.json);
}
=======
export function hasCondition(component) {
  return Boolean(
    (component.customConditional) ||
    (component.conditional && component.conditional.when) ||
    (component.conditional && component.conditional.json)
  );
}

>>>>>>> newFormio
/**
 * Extension of standard #parseFloat(value) function, that also clears input string.
 *
 * @param {any} value
 *   The value to parse.
 *
 * @returns {Number}
 *   Parsed value.
 */
<<<<<<< HEAD


function parseFloatExt(value) {
  return parseFloat((0, _isString.default)(value) ? value.replace(/[^\de.+-]/gi, '') : value);
}
=======
export function parseFloatExt(value) {
  return parseFloat(isString(value)
    ? value.replace(/[^\de.+-]/gi, '')
    : value);
}

>>>>>>> newFormio
/**
 * Formats provided value in way how Currency component uses it.
 *
 * @param {any} value
 *   The value to format.
 *
 * @returns {String}
 *   Value formatted for Currency component.
 */
<<<<<<< HEAD


function formatAsCurrency(value) {
  var parsedValue = parseFloatExt(value);

  if ((0, _isNaN.default)(parsedValue)) {
    return '';
  }

  var parts = (0, _round.default)(parsedValue, 2).toString().split('.');
  parts[0] = (0, _chunk.default)(Array.from(parts[0]).reverse(), 3).reverse().map(function (part) {
    return part.reverse().join('');
  }).join(',');
  parts[1] = (0, _pad.default)(parts[1], 2, '0');
  return parts.join('.');
}
=======
export function formatAsCurrency(value) {
  const parsedValue = parseFloatExt(value);

  if (isNaN(parsedValue)) {
    return '';
  }

  const parts = round(parsedValue, 2)
    .toString()
    .split('.');
  parts[0] = chunk(Array.from(parts[0]).reverse(), 3)
    .reverse()
    .map((part) => part
      .reverse()
      .join(''))
    .join(',');
  parts[1] = pad(parts[1], 2, '0');
  return parts.join('.');
}

>>>>>>> newFormio
/**
 * Escapes RegEx characters in provided String value.
 *
 * @param {String} value
 *   String for escaping RegEx characters.
 * @returns {string}
 *   String with escaped RegEx characters.
 */
<<<<<<< HEAD


function escapeRegExCharacters(value) {
  return value.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
=======
export function escapeRegExCharacters(value) {
  return value.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

>>>>>>> newFormio
/**
 * Get the value for a component key, in the given submission.
 *
 * @param {Object} submission
 *   A submission object to search.
 * @param {String} key
 *   A for components API key to search for.
 */
<<<<<<< HEAD


function getValue(submission, key) {
  var search = function search(data) {
    if ((0, _isPlainObject.default)(data)) {
      if ((0, _has.default)(data, key)) {
        return data[key];
      }

      var value = null;
      (0, _forOwn.default)(data, function (prop) {
        var result = search(prop);

        if (!(0, _isNil.default)(result)) {
=======
export function getValue(submission, key) {
  const search = (data) => {
    if (isPlainObject(data)) {
      if (has(data, key)) {
        return data[key];
      }

      let value = null;

      forOwn(data, (prop) => {
        const result = search(prop);
        if (!isNil(result)) {
>>>>>>> newFormio
          value = result;
          return false;
        }
      });
<<<<<<< HEAD
      return value;
    } else {
=======

      return value;
    }
    else {
>>>>>>> newFormio
      return null;
    }
  };

  return search(submission.data);
}
<<<<<<< HEAD
=======

>>>>>>> newFormio
/**
 * Iterate over all components in a form and get string values for translation.
 * @param form
 */
<<<<<<< HEAD


function getStrings(form) {
  var _this = this;

  var properties = ['label', 'title', 'legend', 'tooltip', 'description', 'placeholder', 'prefix', 'suffix', 'errorLabel', 'content', 'html'];
  var strings = [];
  eachComponent(form.components, function (component) {
    properties.forEach(function (property) {
=======
export function getStrings(form) {
  const properties = ['label', 'title', 'legend', 'tooltip', 'description', 'placeholder', 'prefix', 'suffix', 'errorLabel', 'content', 'html'];
  const strings = [];
  eachComponent(form.components, component => {
    properties.forEach(property => {
>>>>>>> newFormio
      if (component.hasOwnProperty(property) && component[property]) {
        strings.push({
          key: component.key,
          type: component.type,
<<<<<<< HEAD
          property: property,
=======
          property,
>>>>>>> newFormio
          string: component[property]
        });
      }
    });
<<<<<<< HEAD

    if ((!component.dataSrc || component.dataSrc === 'values') && component.hasOwnProperty('values') && Array.isArray(component.values) && component.values.length) {
      component.values.forEach(function (value, index) {
        strings.push({
          key: component.key,
          property: "value[".concat(index, "].label"),
          string: component.values[index].label
        });
      });
    } // Hard coded values from Day component


    if (component.type === 'day') {
      ['day', 'month', 'year', 'Day', 'Month', 'Year', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'].forEach(function (string) {
        strings.push({
          key: component.key,
          property: 'day',
          string: string
=======
    if ((!component.dataSrc || component.dataSrc === 'values') && component.hasOwnProperty('values') && Array.isArray(component.values) && component.values.length) {
      component.values.forEach((value, index) => {
        strings.push({
          key: component.key,
          property: `value[${index}].label`,
          string: component.values[index].label
        });
      });
    }

    // Hard coded values from Day component
    if (component.type === 'day') {
      [
        'day',
        'month',
        'year',
        'Day',
        'Month',
        'Year',
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
      ].forEach(string => {
        strings.push({
          key: component.key,
          property: 'day',
          string,
>>>>>>> newFormio
        });
      });

      if (component.fields.day.placeholder) {
        strings.push({
          key: component.key,
          property: 'fields.day.placeholder',
<<<<<<< HEAD
          string: component.fields.day.placeholder
=======
          string: component.fields.day.placeholder,
>>>>>>> newFormio
        });
      }

      if (component.fields.month.placeholder) {
        strings.push({
          key: component.key,
          property: 'fields.month.placeholder',
<<<<<<< HEAD
          string: component.fields.month.placeholder
=======
          string: component.fields.month.placeholder,
>>>>>>> newFormio
        });
      }

      if (component.fields.year.placeholder) {
        strings.push({
          key: component.key,
          property: 'fields.year.placeholder',
<<<<<<< HEAD
          string: component.fields.year.placeholder
=======
          string: component.fields.year.placeholder,
>>>>>>> newFormio
        });
      }
    }

    if (component.type === 'editgrid') {
<<<<<<< HEAD
      var string = _this.component.addAnother || 'Add Another';

=======
      const string = component.addAnother || 'Add Another';
>>>>>>> newFormio
      if (component.addAnother) {
        strings.push({
          key: component.key,
          property: 'addAnother',
<<<<<<< HEAD
          string: string
=======
          string,
>>>>>>> newFormio
        });
      }
    }

    if (component.type === 'select') {
<<<<<<< HEAD
      ['loading...', 'Type to search'].forEach(function (string) {
        strings.push({
          key: component.key,
          property: 'select',
          string: string
=======
      [
        'loading...',
        'Type to search'
      ].forEach(string => {
        strings.push({
          key: component.key,
          property: 'select',
          string,
>>>>>>> newFormio
        });
      });
    }
  }, true);
<<<<<<< HEAD
  return strings;
}
=======

  return strings;
}
>>>>>>> newFormio

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "1c25");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1240":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "16aa":
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installComponents (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }
}


/***/ }),

/***/ "1c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"46e6b0d9-vue-loader-template"}!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/CardFeature.vue?vue&type=template&id=6b7e61aa&
var CardFeaturevue_type_template_id_6b7e61aa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"grid-list-xl":"","pa-0":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","justify-center":""}},_vm._l((_vm.features),function(feature,i){return _c('v-flex',{key:i,attrs:{"xs12":"","sm6":"","md4":"","d-flex":""}},[_c('v-card',{attrs:{"flat":"","tile":""}},[_c('v-img',{attrs:{"src":("/static/" + (feature.img) + ".png"),"height":_vm.cardHeight}}),_c('v-card-title',{staticClass:"title",domProps:{"textContent":_vm._s(feature.title)}}),_c('v-card-text',{domProps:{"textContent":_vm._s(feature.text)}})],1)],1)}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CardFeature.vue?vue&type=template&id=6b7e61aa&

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/CardFeature.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CardFeaturevue_type_script_lang_js_ = ({
  name: 'AlphaCardFeature',

  props: {
    cardHeight: {
      type: String,
      default: '200px'
    },
    features: {
      type: Array,
      default: () => ([])
    }
  }
});

// CONCATENATED MODULE: ./src/components/CardFeature.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CardFeaturevue_type_script_lang_js_ = (CardFeaturevue_type_script_lang_js_); 
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("16aa");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_cards.styl
var _cards = __webpack_require__("cb13");

// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_sheet.styl
var _sheet = __webpack_require__("9351");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/colorable.js
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function isCssColor(color) {
    return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/);
}
/* harmony default export */ var colorable = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'colorable',
    props: {
        color: String
    },
    methods: {
        setBackgroundColor: function setBackgroundColor(color) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (isCssColor(color)) {
                data.style = _extends({}, data.style, {
                    'background-color': '' + color,
                    'border-color': '' + color
                });
            } else if (color) {
                data.class = _extends({}, data.class, _defineProperty({}, color, true));
            }
            return data;
        },
        setTextColor: function setTextColor(color) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (isCssColor(color)) {
                data.style = _extends({}, data.style, {
                    'color': '' + color,
                    'caret-color': '' + color
                });
            } else if (color) {
                var _color$toString$trim$ = color.toString().trim().split(' ', 2),
                    _color$toString$trim$2 = _slicedToArray(_color$toString$trim$, 2),
                    colorName = _color$toString$trim$2[0],
                    colorModifier = _color$toString$trim$2[1];

                data.class = _extends({}, data.class, _defineProperty({}, colorName + '--text', true));
                if (colorModifier) {
                    data.class['text--' + colorModifier] = true;
                }
            }
            return data;
        }
    }
}));
//# sourceMappingURL=colorable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/elevatable.js
function elevatable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var elevatable = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'elevatable',
    props: {
        elevation: [Number, String]
    },
    computed: {
        computedElevation: function computedElevation() {
            return this.elevation;
        },
        elevationClasses: function elevationClasses() {
            if (!this.computedElevation) return {};
            return elevatable_defineProperty({}, 'elevation-' + this.computedElevation, true);
        }
    }
}));
//# sourceMappingURL=elevatable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/util/helpers.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var helpers_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


function createSimpleFunctional(c) {
    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
    var name = arguments[2];

    return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
        name: name || c.replace(/__/g, '-'),
        functional: true,
        render: function render(h, _ref) {
            var data = _ref.data,
                children = _ref.children;

            data.staticClass = (c + ' ' + (data.staticClass || '')).trim();
            return h(el, data, children);
        }
    });
}
function mergeTransitions(transitions, array) {
    if (Array.isArray(transitions)) return transitions.concat(array);
    if (transitions) array.push(transitions);
    return array;
}
function createSimpleTransition(name) {
    var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top center 0';
    var mode = arguments[2];

    return {
        name: name,
        functional: true,
        props: {
            group: {
                type: Boolean,
                default: false
            },
            hideOnLeave: {
                type: Boolean,
                default: false
            },
            leaveAbsolute: {
                type: Boolean,
                default: false
            },
            mode: {
                type: String,
                default: mode
            },
            origin: {
                type: String,
                default: origin
            }
        },
        render: function render(h, context) {
            var tag = 'transition' + (context.props.group ? '-group' : '');
            context.data = context.data || {};
            context.data.props = {
                name: name,
                mode: context.props.mode
            };
            context.data.on = context.data.on || {};
            if (!Object.isExtensible(context.data.on)) {
                context.data.on = helpers_extends({}, context.data.on);
            }
            var ourBeforeEnter = [];
            var ourLeave = [];
            var absolute = function absolute(el) {
                return el.style.position = 'absolute';
            };
            ourBeforeEnter.push(function (el) {
                el.style.transformOrigin = context.props.origin;
                el.style.webkitTransformOrigin = context.props.origin;
            });
            if (context.props.leaveAbsolute) ourLeave.push(absolute);
            if (context.props.hideOnLeave) {
                ourLeave.push(function (el) {
                    return el.style.display = 'none';
                });
            }
            var _context$data$on = context.data.on,
                beforeEnter = _context$data$on.beforeEnter,
                leave = _context$data$on.leave;
            // Type says Function | Function[] but
            // will only work if provided a function

            context.data.on.beforeEnter = function () {
                return mergeTransitions(beforeEnter, ourBeforeEnter);
            };
            context.data.on.leave = mergeTransitions(leave, ourLeave);
            return h(tag, context.data, context.children);
        }
    };
}
function createJavaScriptTransition(name, functions) {
    var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'in-out';

    return {
        name: name,
        functional: true,
        props: {
            mode: {
                type: String,
                default: mode
            }
        },
        render: function render(h, context) {
            var data = {
                props: helpers_extends({}, context.props, {
                    name: name
                }),
                on: functions
            };
            return h('transition', data, context.children);
        }
    };
}
function directiveConfig(binding) {
    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return helpers_extends({}, defaults, binding.modifiers, {
        value: binding.arg
    }, binding.value || {});
}
function addOnceEventListener(el, event, cb) {
    var once = function once() {
        cb();
        el.removeEventListener(event, once, false);
    };
    el.addEventListener(event, once, false);
}
function getNestedValue(obj, path, fallback) {
    var last = path.length - 1;
    if (last < 0) return obj === undefined ? fallback : obj;
    for (var i = 0; i < last; i++) {
        if (obj == null) {
            return fallback;
        }
        obj = obj[path[i]];
    }
    if (obj == null) return fallback;
    return obj[path[last]] === undefined ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) {
        // If the values are Date, they were convert to timestamp with getTime and compare it
        if (a.getTime() !== b.getTime()) return false;
    }
    if (a !== Object(a) || b !== Object(b)) {
        // If the values aren't objects, they were already checked for equality
        return false;
    }
    var props = Object.keys(a);
    if (props.length !== Object.keys(b).length) {
        // Different number of props, don't bother to check
        return false;
    }
    return props.every(function (p) {
        return deepEqual(a[p], b[p]);
    });
}
function getObjectValueByPath(obj, path, fallback) {
    // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
    if (!path || path.constructor !== String) return fallback;
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, ''); // strip a leading dot
    return getNestedValue(obj, path.split('.'), fallback);
}
function getPropertyFromItem(item, property, fallback) {
    if (property == null) return item === undefined ? fallback : item;
    if (item !== Object(item)) return fallback === undefined ? item : fallback;
    if (typeof property === 'string') return getObjectValueByPath(item, property, fallback);
    if (Array.isArray(property)) return getNestedValue(item, property, fallback);
    if (typeof property !== 'function') return fallback;
    var value = property(item, fallback);
    return typeof value === 'undefined' ? fallback : value;
}
function createRange(length) {
    return Array.from({ length: length }, function (v, k) {
        return k;
    });
}
function getZIndex(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;
    var index = +window.getComputedStyle(el).getPropertyValue('z-index');
    if (isNaN(index)) return getZIndex(el.parentNode);
    return index;
}
var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escapeHTML(str) {
    return str.replace(/[&<>]/g, function (tag) {
        return tagsToReplace[tag] || tag;
    });
}
function filterObjectOnKeys(obj, keys) {
    var filtered = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (typeof obj[key] !== 'undefined') {
            filtered[key] = obj[key];
        }
    }
    return filtered;
}
function filterChildren() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var tag = arguments[1];

    return array.filter(function (child) {
        return child.componentOptions && child.componentOptions.Ctor.options.name === tag;
    });
}
function convertToUnit(str) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';

    if (str == null || str === '') {
        return undefined;
    } else if (isNaN(+str)) {
        return String(str);
    } else {
        return '' + Number(str) + unit;
    }
}
function kebabCase(str) {
    return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}
// KeyboardEvent.keyCode aliases
var keyCodes = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34
});
var ICONS_PREFIX = '$vuetify.icons.';
// This remaps internal names like '$vuetify.icons.cancel'
// to the current name or component for that icon.
function remapInternalIcon(vm, iconName) {
    if (!iconName.startsWith(ICONS_PREFIX)) {
        return iconName;
    }
    // Now look up icon indirection name, e.g. '$vuetify.icons.cancel'
    return getObjectValueByPath(vm, iconName, iconName);
}
function keys(o) {
    return Object.keys(o);
}
/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = function camelize(str) {
    return str.replace(camelizeRE, function (_, c) {
        return c ? c.toUpperCase() : '';
    });
};
/**
 * Returns the set difference of B and A, i.e. the set of elements in B but not in A
 */
function arrayDiff(a, b) {
    var diff = [];
    for (var i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) < 0) diff.push(b[i]);
    }
    return diff;
}
/**
 * Makes the first character of a string uppercase
 */
function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Returns:
 *  - 'normal' for old style slots - `<template slot="default">`
 *  - 'scoped' for old style scoped slots (`<template slot="default" slot-scope="data">`) or bound v-slot (`#default="data"`)
 *  - 'v-slot' for unbound v-slot (`#default`) - only if the third param is true, otherwise counts as scoped
 */
function getSlotType(vm, name, split) {
    if (vm.$slots[name] && vm.$scopedSlots[name] && vm.$scopedSlots[name].name) {
        return split ? 'v-slot' : 'scoped';
    }
    if (vm.$slots[name]) return 'normal';
    if (vm.$scopedSlots[name]) return 'scoped';
}
//# sourceMappingURL=helpers.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/measurable.js
// Helpers

// Types

/* harmony default export */ var measurable = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'measurable',
    props: {
        height: [Number, String],
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        width: [Number, String]
    },
    computed: {
        measurableStyles: function measurableStyles() {
            var styles = {};
            var height = convertToUnit(this.height);
            var minHeight = convertToUnit(this.minHeight);
            var minWidth = convertToUnit(this.minWidth);
            var maxHeight = convertToUnit(this.maxHeight);
            var maxWidth = convertToUnit(this.maxWidth);
            var width = convertToUnit(this.width);
            if (height) styles.height = height;
            if (minHeight) styles.minHeight = minHeight;
            if (minWidth) styles.minWidth = minWidth;
            if (maxHeight) styles.maxHeight = maxHeight;
            if (maxWidth) styles.maxWidth = maxWidth;
            if (width) styles.width = width;
            return styles;
        }
    }
}));
//# sourceMappingURL=measurable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/themeable.js
var themeable_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


function functionalThemeClasses(context) {
    var vm = themeable_extends({}, context.props, context.injections);
    var isDark = Themeable.options.computed.isDark.call(vm);
    return Themeable.options.computed.themeClasses.call({ isDark: isDark });
}
/* @vue/component */
var Themeable = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend().extend({
    name: 'themeable',
    provide: function provide() {
        return {
            theme: this.themeableProvide
        };
    },

    inject: {
        theme: {
            default: {
                isDark: false
            }
        }
    },
    props: {
        dark: {
            type: Boolean,
            default: null
        },
        light: {
            type: Boolean,
            default: null
        }
    },
    data: function data() {
        return {
            themeableProvide: {
                isDark: false
            }
        };
    },

    computed: {
        isDark: function isDark() {
            if (this.dark === true) {
                // explicitly dark
                return true;
            } else if (this.light === true) {
                // explicitly light
                return false;
            } else {
                // inherit from parent, or default false if there is none
                return this.theme.isDark;
            }
        },
        themeClasses: function themeClasses() {
            return {
                'theme--dark': this.isDark,
                'theme--light': !this.isDark
            };
        },

        /** Used by menus and dialogs, inherits from v-app instead of the parent */
        rootIsDark: function rootIsDark() {
            if (this.dark === true) {
                // explicitly dark
                return true;
            } else if (this.light === true) {
                // explicitly light
                return false;
            } else {
                // inherit from v-app
                return this.$vuetify.dark;
            }
        },
        rootThemeClasses: function rootThemeClasses() {
            return {
                'theme--dark': this.rootIsDark,
                'theme--light': !this.rootIsDark
            };
        }
    },
    watch: {
        isDark: {
            handler: function handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.themeableProvide.isDark = this.isDark;
                }
            },

            immediate: true
        }
    }
});
/* harmony default export */ var themeable = (Themeable);
//# sourceMappingURL=themeable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/util/mixins.js
/* eslint-disable max-len, import/export, no-use-before-define */

function mixins() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({ mixins: args });
}
//# sourceMappingURL=mixins.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Styles

// Mixins




// Helpers

/* @vue/component */
/* harmony default export */ var VSheet = (mixins(colorable, elevatable, measurable, themeable).extend({
    name: 'v-sheet',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        tile: Boolean
    },
    computed: {
        classes: function classes() {
            return VSheet_extends({
                'v-sheet': true,
                'v-sheet--tile': this.tile
            }, this.themeClasses, this.elevationClasses);
        },
        styles: function styles() {
            return this.measurableStyles;
        }
    },
    render: function render(h) {
        var data = {
            class: this.classes,
            style: this.styles,
            on: this.$listeners
        };
        return h(this.tag, this.setBackgroundColor(this.color, data), this.$slots.default);
    }
}));
//# sourceMappingURL=VSheet.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VSheet/index.js


/* harmony default export */ var components_VSheet = (VSheet);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/util/console.js
function createMessage(message, vm, parent) {
    if (parent) {
        vm = {
            _isVue: true,
            $parent: parent,
            $options: vm
        };
    }
    if (vm) {
        // Only show each message once per instance
        vm.$_alreadyWarned = vm.$_alreadyWarned || [];
        if (vm.$_alreadyWarned.includes(message)) return;
        vm.$_alreadyWarned.push(message);
    }
    return '[Vuetify] ' + message + (vm ? generateComponentTrace(vm) : '');
}
function consoleInfo(message, vm, parent) {
    var newMessage = createMessage(message, vm, parent);
    newMessage != null && console.info(newMessage);
}
function consoleWarn(message, vm, parent) {
    var newMessage = createMessage(message, vm, parent);
    newMessage != null && console.warn(newMessage);
}
function consoleError(message, vm, parent) {
    var newMessage = createMessage(message, vm, parent);
    newMessage != null && console.error(newMessage);
}
function deprecate(original, replacement, vm, parent) {
    consoleWarn('\'' + original + '\' is deprecated, use \'' + replacement + '\' instead', vm, parent);
}
/**
 * Shamelessly stolen from vuejs/vue/blob/dev/src/core/util/debug.js
 */
var classifyRE = /(?:^|[-_])(\w)/g;
var classify = function classify(str) {
    return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
    }).replace(/[-_]/g, '');
};
function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
        return '<Root>';
    }
    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
    }
    return (name ? '<' + classify(name) + '>' : '<Anonymous>') + (file && includeFile !== false ? ' at ' + file : '');
}
function generateComponentTrace(vm) {
    if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
            if (tree.length > 0) {
                var last = tree[tree.length - 1];
                if (last.constructor === vm.constructor) {
                    currentRecursiveSequence++;
                    vm = vm.$parent;
                    continue;
                } else if (currentRecursiveSequence > 0) {
                    tree[tree.length - 1] = [last, currentRecursiveSequence];
                    currentRecursiveSequence = 0;
                }
            }
            tree.push(vm);
            vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
            return '' + (i === 0 ? '---> ' : ' '.repeat(5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + '... (' + vm[1] + ' recursive calls)' : formatComponentName(vm));
        }).join('\n');
    } else {
        return '\n\n(found in ' + formatComponentName(vm) + ')';
    }
}
//# sourceMappingURL=console.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/directives/ripple.js

function transform(el, value) {
    el.style['transform'] = value;
    el.style['webkitTransform'] = value;
}
function opacity(el, value) {
    el.style['opacity'] = value.toString();
}
function isTouchEvent(e) {
    return e.constructor.name === 'TouchEvent';
}
var calculate = function calculate(e, el) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var offset = el.getBoundingClientRect();
    var target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    var localX = target.clientX - offset.left;
    var localY = target.clientY - offset.top;
    var radius = 0;
    var scale = 0.3;
    if (el._ripple && el._ripple.circle) {
        scale = 0.15;
        radius = el.clientWidth / 2;
        radius = value.center ? radius : radius + Math.sqrt(Math.pow(localX - radius, 2) + Math.pow(localY - radius, 2)) / 4;
    } else {
        radius = Math.sqrt(Math.pow(el.clientWidth, 2) + Math.pow(el.clientHeight, 2)) / 2;
    }
    var centerX = (el.clientWidth - radius * 2) / 2 + 'px';
    var centerY = (el.clientHeight - radius * 2) / 2 + 'px';
    var x = value.center ? centerX : localX - radius + 'px';
    var y = value.center ? centerY : localY - radius + 'px';
    return { radius: radius, scale: scale, x: x, y: y, centerX: centerX, centerY: centerY };
};
var ripple = {
    /* eslint-disable max-statements */
    show: function show(e, el) {
        var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (!el._ripple || !el._ripple.enabled) {
            return;
        }
        var container = document.createElement('span');
        var animation = document.createElement('span');
        container.appendChild(animation);
        container.className = 'v-ripple__container';
        if (value.class) {
            container.className += ' ' + value.class;
        }

        var _calculate = calculate(e, el, value),
            radius = _calculate.radius,
            scale = _calculate.scale,
            x = _calculate.x,
            y = _calculate.y,
            centerX = _calculate.centerX,
            centerY = _calculate.centerY;

        var size = radius * 2 + 'px';
        animation.className = 'v-ripple__animation';
        animation.style.width = size;
        animation.style.height = size;
        el.appendChild(container);
        var computed = window.getComputedStyle(el);
        if (computed && computed.position === 'static') {
            el.style.position = 'relative';
            el.dataset.previousPosition = 'static';
        }
        animation.classList.add('v-ripple__animation--enter');
        animation.classList.add('v-ripple__animation--visible');
        transform(animation, 'translate(' + x + ', ' + y + ') scale3d(' + scale + ',' + scale + ',' + scale + ')');
        opacity(animation, 0);
        animation.dataset.activated = String(performance.now());
        setTimeout(function () {
            animation.classList.remove('v-ripple__animation--enter');
            animation.classList.add('v-ripple__animation--in');
            transform(animation, 'translate(' + centerX + ', ' + centerY + ') scale3d(1,1,1)');
            opacity(animation, 0.25);
        }, 0);
    },
    hide: function hide(el) {
        if (!el || !el._ripple || !el._ripple.enabled) return;
        var ripples = el.getElementsByClassName('v-ripple__animation');
        if (ripples.length === 0) return;
        var animation = ripples[ripples.length - 1];
        if (animation.dataset.isHiding) return;else animation.dataset.isHiding = 'true';
        var diff = performance.now() - Number(animation.dataset.activated);
        var delay = Math.max(250 - diff, 0);
        setTimeout(function () {
            animation.classList.remove('v-ripple__animation--in');
            animation.classList.add('v-ripple__animation--out');
            opacity(animation, 0);
            setTimeout(function () {
                var ripples = el.getElementsByClassName('v-ripple__animation');
                if (ripples.length === 1 && el.dataset.previousPosition) {
                    el.style.position = el.dataset.previousPosition;
                    delete el.dataset.previousPosition;
                }
                animation.parentNode && el.removeChild(animation.parentNode);
            }, 300);
        }, delay);
    }
};
function isRippleEnabled(value) {
    return typeof value === 'undefined' || !!value;
}
function rippleShow(e) {
    var value = {};
    var element = e.currentTarget;
    if (!element || element._ripple.touched) return;
    if (isTouchEvent(e)) {
        element._ripple.touched = true;
    }
    value.center = element._ripple.centered;
    if (element._ripple.class) {
        value.class = element._ripple.class;
    }
    ripple.show(e, element, value);
}
function rippleHide(e) {
    var element = e.currentTarget;
    if (!element) return;
    window.setTimeout(function () {
        if (element._ripple) {
            element._ripple.touched = false;
        }
    });
    ripple.hide(element);
}
function updateRipple(el, binding, wasEnabled) {
    var enabled = isRippleEnabled(binding.value);
    if (!enabled) {
        ripple.hide(el);
    }
    el._ripple = el._ripple || {};
    el._ripple.enabled = enabled;
    var value = binding.value || {};
    if (value.center) {
        el._ripple.centered = true;
    }
    if (value.class) {
        el._ripple.class = binding.value.class;
    }
    if (value.circle) {
        el._ripple.circle = value.circle;
    }
    if (enabled && !wasEnabled) {
        el.addEventListener('touchstart', rippleShow, { passive: true });
        el.addEventListener('touchend', rippleHide, { passive: true });
        el.addEventListener('touchcancel', rippleHide);
        el.addEventListener('mousedown', rippleShow);
        el.addEventListener('mouseup', rippleHide);
        el.addEventListener('mouseleave', rippleHide);
        // Anchor tags can be dragged, causes other hides to fail - #1537
        el.addEventListener('dragstart', rippleHide, { passive: true });
    } else if (!enabled && wasEnabled) {
        removeListeners(el);
    }
}
function removeListeners(el) {
    el.removeEventListener('mousedown', rippleShow);
    el.removeEventListener('touchstart', rippleHide);
    el.removeEventListener('touchend', rippleHide);
    el.removeEventListener('touchcancel', rippleHide);
    el.removeEventListener('mouseup', rippleHide);
    el.removeEventListener('mouseleave', rippleHide);
    el.removeEventListener('dragstart', rippleHide);
}
function directive(el, binding, node) {
    updateRipple(el, binding, false);
    // warn if an inline element is used, waiting for el to be in the DOM first
    node.context && node.context.$nextTick(function () {
        var computed = window.getComputedStyle(el);
        if (computed && computed.display === 'inline') {
            var context = node.fnOptions ? [node.fnOptions, node.context] : [node.componentInstance];
            consoleWarn.apply(undefined, ['v-ripple can only be used on block-level elements'].concat(context));
        }
    });
}
function unbind(el) {
    delete el._ripple;
    removeListeners(el);
}
function update(el, binding) {
    if (binding.value === binding.oldValue) {
        return;
    }
    var wasEnabled = isRippleEnabled(binding.oldValue);
    updateRipple(el, binding, wasEnabled);
}
/* harmony default export */ var directives_ripple = ({
    bind: directive,
    unbind: unbind,
    update: update
});
//# sourceMappingURL=ripple.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/routable.js
var routable_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function routable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var routable = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'routable',
    directives: {
        Ripple: directives_ripple
    },
    props: {
        activeClass: String,
        append: Boolean,
        disabled: Boolean,
        exact: {
            type: Boolean,
            default: undefined
        },
        exactActiveClass: String,
        href: [String, Object],
        to: [String, Object],
        nuxt: Boolean,
        replace: Boolean,
        ripple: [Boolean, Object],
        tag: String,
        target: String
    },
    computed: {
        computedRipple: function computedRipple() {
            return this.ripple && !this.disabled ? this.ripple : false;
        }
    },
    methods: {
        click: function click(e) {
            this.$emit('click', e);
        },
        generateRouteLink: function generateRouteLink(classes) {
            var exact = this.exact;
            var tag = void 0;
            var data = routable_defineProperty({
                attrs: { disabled: this.disabled },
                class: classes,
                props: {},
                directives: [{
                    name: 'ripple',
                    value: this.computedRipple
                }]
            }, this.to ? 'nativeOn' : 'on', routable_extends({}, this.$listeners, {
                click: this.click
            }));
            if (typeof this.exact === 'undefined') {
                exact = this.to === '/' || this.to === Object(this.to) && this.to.path === '/';
            }
            if (this.to) {
                // Add a special activeClass hook
                // for component level styles
                var activeClass = this.activeClass;
                var exactActiveClass = this.exactActiveClass || activeClass;
                // TODO: apply only in VListTile
                if (this.proxyClass) {
                    activeClass += ' ' + this.proxyClass;
                    exactActiveClass += ' ' + this.proxyClass;
                }
                tag = this.nuxt ? 'nuxt-link' : 'router-link';
                Object.assign(data.props, {
                    to: this.to,
                    exact: exact,
                    activeClass: activeClass,
                    exactActiveClass: exactActiveClass,
                    append: this.append,
                    replace: this.replace
                });
            } else {
                tag = this.href && 'a' || this.tag || 'a';
                if (tag === 'a' && this.href) data.attrs.href = this.href;
            }
            if (this.target) data.attrs.target = this.target;
            return { tag: tag, data: data };
        }
    }
}));
//# sourceMappingURL=routable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VCard/VCard.js
var VCard_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Styles

// Extensions

// Mixins

// Helpers

/* @vue/component */
/* harmony default export */ var VCard = (mixins(routable, components_VSheet).extend({
    name: 'v-card',
    props: {
        flat: Boolean,
        hover: Boolean,
        img: String,
        raised: Boolean
    },
    computed: {
        classes: function classes() {
            return VCard_extends({
                'v-card': true,
                'v-card--flat': this.flat,
                'v-card--hover': this.hover
            }, components_VSheet.options.computed.classes.call(this));
        },
        styles: function styles() {
            var style = VCard_extends({}, components_VSheet.options.computed.styles.call(this));
            if (this.img) {
                style.background = 'url("' + this.img + '") center center / cover no-repeat';
            }
            return style;
        }
    },
    render: function render(h) {
        var _generateRouteLink = this.generateRouteLink(this.classes),
            tag = _generateRouteLink.tag,
            data = _generateRouteLink.data;

        data.style = this.styles;
        return h(tag, this.setBackgroundColor(this.color, data), this.$slots.default);
    }
}));
//# sourceMappingURL=VCard.js.map
// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_images.styl
var _images = __webpack_require__("d7f1");

// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_responsive.styl
var _responsive = __webpack_require__("ad21");

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VResponsive/VResponsive.js

// Mixins

// Utils

/* @vue/component */
/* harmony default export */ var VResponsive = (mixins(measurable).extend({
    name: 'v-responsive',
    props: {
        aspectRatio: [String, Number]
    },
    computed: {
        computedAspectRatio: function computedAspectRatio() {
            return Number(this.aspectRatio);
        },
        aspectStyle: function aspectStyle() {
            return this.computedAspectRatio ? { paddingBottom: 1 / this.computedAspectRatio * 100 + '%' } : undefined;
        },
        __cachedSizer: function __cachedSizer() {
            if (!this.aspectStyle) return [];
            return this.$createElement('div', {
                style: this.aspectStyle,
                staticClass: 'v-responsive__sizer'
            });
        }
    },
    methods: {
        genContent: function genContent() {
            return this.$createElement('div', {
                staticClass: 'v-responsive__content'
            }, this.$slots.default);
        }
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-responsive',
            style: this.measurableStyles,
            on: this.$listeners
        }, [this.__cachedSizer, this.genContent()]);
    }
}));
//# sourceMappingURL=VResponsive.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VResponsive/index.js


/* harmony default export */ var components_VResponsive = (VResponsive);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VImg/VImg.js

// Components

// Utils

/* @vue/component */
/* harmony default export */ var VImg = (components_VResponsive.extend({
    name: 'v-img',
    props: {
        alt: String,
        contain: Boolean,
        src: {
            type: [String, Object],
            default: ''
        },
        gradient: String,
        lazySrc: String,
        srcset: String,
        sizes: String,
        position: {
            type: String,
            default: 'center center'
        },
        transition: {
            type: [Boolean, String],
            default: 'fade-transition'
        }
    },
    data: function data() {
        return {
            currentSrc: '',
            image: null,
            isLoading: true,
            calculatedAspectRatio: undefined
        };
    },

    computed: {
        computedAspectRatio: function computedAspectRatio() {
            return this.normalisedSrc.aspect;
        },
        normalisedSrc: function normalisedSrc() {
            return typeof this.src === 'string' ? {
                src: this.src,
                srcset: this.srcset,
                lazySrc: this.lazySrc,
                aspect: Number(this.aspectRatio || this.calculatedAspectRatio)
            } : {
                src: this.src.src,
                srcset: this.srcset || this.src.srcset,
                lazySrc: this.lazySrc || this.src.lazySrc,
                aspect: Number(this.aspectRatio || this.src.aspect || this.calculatedAspectRatio)
            };
        },
        __cachedImage: function __cachedImage() {
            if (!(this.normalisedSrc.src || this.normalisedSrc.lazySrc)) return [];
            var backgroundImage = [];
            var src = this.isLoading ? this.normalisedSrc.lazySrc : this.currentSrc;
            if (this.gradient) backgroundImage.push('linear-gradient(' + this.gradient + ')');
            if (src) backgroundImage.push('url("' + src + '")');
            var image = this.$createElement('div', {
                staticClass: 'v-image__image',
                class: {
                    'v-image__image--preload': this.isLoading,
                    'v-image__image--contain': this.contain,
                    'v-image__image--cover': !this.contain
                },
                style: {
                    backgroundImage: backgroundImage.join(', '),
                    backgroundPosition: this.position
                },
                key: +this.isLoading
            });
            if (!this.transition) return image;
            return this.$createElement('transition', {
                attrs: {
                    name: this.transition,
                    mode: 'in-out'
                }
            }, [image]);
        }
    },
    watch: {
        src: function src() {
            if (!this.isLoading) this.init();else this.loadImage();
        },

        '$vuetify.breakpoint.width': 'getSrc'
    },
    mounted: function mounted() {
        this.init();
    },

    methods: {
        init: function init() {
            if (this.normalisedSrc.lazySrc) {
                var lazyImg = new Image();
                lazyImg.src = this.normalisedSrc.lazySrc;
                this.pollForSize(lazyImg, null);
            }
            /* istanbul ignore else */
            if (this.normalisedSrc.src) this.loadImage();
        },
        onLoad: function onLoad() {
            this.getSrc();
            this.isLoading = false;
            this.$emit('load', this.src);
        },
        onError: function onError() {
            consoleError('Image load failed\n\n' + ('src: ' + this.normalisedSrc.src), this);
            this.$emit('error', this.src);
        },
        getSrc: function getSrc() {
            /* istanbul ignore else */
            if (this.image) this.currentSrc = this.image.currentSrc || this.image.src;
        },
        loadImage: function loadImage() {
            var _this = this;

            var image = new Image();
            this.image = image;
            image.onload = function () {
                /* istanbul ignore if */
                if (image.decode) {
                    image.decode().catch(function (err) {
                        consoleWarn('Failed to decode image, trying to render anyway\n\n' + ('src: ' + _this.normalisedSrc.src) + (err.message ? '\nOriginal error: ' + err.message : ''), _this);
                    }).then(_this.onLoad);
                } else {
                    _this.onLoad();
                }
            };
            image.onerror = this.onError;
            image.src = this.normalisedSrc.src;
            this.sizes && (image.sizes = this.sizes);
            this.normalisedSrc.srcset && (image.srcset = this.normalisedSrc.srcset);
            this.aspectRatio || this.pollForSize(image);
            this.getSrc();
        },
        pollForSize: function pollForSize(img) {
            var _this2 = this;

            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

            var poll = function poll() {
                var naturalHeight = img.naturalHeight,
                    naturalWidth = img.naturalWidth;

                if (naturalHeight || naturalWidth) {
                    _this2.calculatedAspectRatio = naturalWidth / naturalHeight;
                } else {
                    timeout != null && setTimeout(poll, timeout);
                }
            };
            poll();
        },
        __genPlaceholder: function __genPlaceholder() {
            if (this.$slots.placeholder) {
                var placeholder = this.isLoading ? [this.$createElement('div', {
                    staticClass: 'v-image__placeholder'
                }, this.$slots.placeholder)] : [];
                if (!this.transition) return placeholder[0];
                return this.$createElement('transition', {
                    attrs: { name: this.transition }
                }, placeholder);
            }
        }
    },
    render: function render(h) {
        var node = components_VResponsive.options.render.call(this, h);
        node.data.staticClass += ' v-image';
        node.data.attrs = {
            role: this.alt ? 'img' : undefined,
            'aria-label': this.alt
        };
        node.children = [this.__cachedSizer, this.__cachedImage, this.__genPlaceholder(), this.genContent()];
        return h(node.tag, node.data, node.children);
    }
}));
//# sourceMappingURL=VImg.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VCard/VCardMedia.js
// Components

// Utils

/* istanbul ignore next */
/* @vue/component */
/* harmony default export */ var VCardMedia = (VImg.extend({
    name: 'v-card-media',
    mounted: function mounted() {
        deprecate('v-card-media', this.src ? 'v-img' : 'v-responsive', this);
    }
}));
//# sourceMappingURL=VCardMedia.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VCard/VCardTitle.js
// Types

/* @vue/component */
/* harmony default export */ var VCardTitle = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'v-card-title',
    functional: true,
    props: {
        primaryTitle: Boolean
    },
    render: function render(h, _ref) {
        var data = _ref.data,
            props = _ref.props,
            children = _ref.children;

        data.staticClass = ('v-card__title ' + (data.staticClass || '')).trim();
        if (props.primaryTitle) data.staticClass += ' v-card__title--primary';
        return h('div', data, children);
    }
}));
//# sourceMappingURL=VCardTitle.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VCard/index.js




var VCardActions = createSimpleFunctional('v-card__actions');
var VCardText = createSimpleFunctional('v-card__text');

/* harmony default export */ var components_VCard = ({
    $_vuetify_subcomponents: {
        VCard: VCard,
        VCardMedia: VCardMedia,
        VCardTitle: VCardTitle,
        VCardActions: VCardActions,
        VCardText: VCardText
    }
});
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_grid.styl
var _grid = __webpack_require__("ce95");

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VGrid/grid.js
function Grid(name) {
    /* @vue/component */
    return {
        name: 'v-' + name,
        functional: true,
        props: {
            id: String,
            tag: {
                type: String,
                default: 'div'
            }
        },
        render: function render(h, _ref) {
            var props = _ref.props,
                data = _ref.data,
                children = _ref.children;

            data.staticClass = (name + ' ' + (data.staticClass || '')).trim();
            var attrs = data.attrs;

            if (attrs) {
                // reset attrs to extract utility clases like pa-3
                data.attrs = {};
                var classes = Object.keys(attrs).filter(function (key) {
                    // TODO: Remove once resolved
                    // https://github.com/vuejs/vue/issues/7841
                    if (key === 'slot') return false;
                    var value = attrs[key];
                    // add back data attributes like data-test="foo" but do not
                    // add them as classes
                    if (key.startsWith('data-')) {
                        data.attrs[key] = value;
                        return false;
                    }
                    return value || typeof value === 'string';
                });
                if (classes.length) data.staticClass += ' ' + classes.join(' ');
            }
            if (props.id) {
                data.domProps = data.domProps || {};
                data.domProps.id = props.id;
            }
            return h(props.tag, data, children);
        }
    };
}
//# sourceMappingURL=grid.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VGrid/VContainer.js


/* harmony default export */ var VContainer = (Grid('container'));
//# sourceMappingURL=VContainer.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VGrid/VFlex.js


/* harmony default export */ var VFlex = (Grid('flex'));
//# sourceMappingURL=VFlex.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VGrid/VLayout.js


/* harmony default export */ var VLayout = (Grid('layout'));
//# sourceMappingURL=VLayout.js.map
// CONCATENATED MODULE: ./src/components/CardFeature.vue





/* normalize component */

var component = normalizeComponent(
  components_CardFeaturevue_type_script_lang_js_,
  CardFeaturevue_type_template_id_6b7e61aa_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "CardFeature.vue"
/* harmony default export */ var CardFeature = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VCard: VCard,VCardText: VCardText,VCardTitle: VCardTitle,VContainer: VContainer,VFlex: VFlex,VImg: VImg,VLayout: VLayout})

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"46e6b0d9-vue-loader-template"}!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=template&id=2cb10664&
var Footervue_type_template_id_2cb10664_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-footer',[_c('v-container',{staticClass:"alpha-footer",attrs:{"fluid":""}},[_c('v-layout',{staticClass:"blue-grey darken-2 fill-height",attrs:{"row":"","wrap":""}},[_c('v-flex',{staticClass:"pa-5 blue-grey darken-3",attrs:{"xs12":"","sm3":""}},[_c('h5',{staticClass:"title pb-3",domProps:{"textContent":_vm._s(_vm.company)}}),_c('ul',_vm._l((_vm.computedSocial),function(item,i){return _c('li',{key:i},[_c('a',{staticClass:"layout align-center",attrs:{"href":item.href}},[_c('v-icon',{staticClass:"mr-3",attrs:{"dark":""},domProps:{"textContent":_vm._s(item.icon)}}),_c('span',{staticClass:"subheading",domProps:{"textContent":_vm._s(item.text)}})],1)])}),0)]),_vm._l((_vm.categories),function(item,i){return _c('v-flex',{key:i,staticClass:"pa-5",attrs:{"xs12":"","sm3":""}},[_c('h5',{staticClass:"title pb-3",domProps:{"textContent":_vm._s(item.text)}}),_c('ul',_vm._l((item.items),function(n,j){return _c('li',{key:j},[_c('a',{attrs:{"href":n.href},domProps:{"textContent":_vm._s(n.text)}})])}),0)])}),_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{staticClass:"blue-grey darken-4 text-xs-center",attrs:{"tile":"","flat":"","dark":""}},[_c('v-card-text',[_vm._t("default")],2)],1)],1)],2)],1)],1)}
var Footervue_type_template_id_2cb10664_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Footer.vue?vue&type=template&id=2cb10664&

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: 'AlphaFooter',

  props: {
    categories: {
      type: Array,
      default: () => ([])
    },
    company: {
      type: String,
      default: ''
    },
    facebook: {
      type: String,
      default: ''
    },
    github: {
      type: String,
      default: ''
    },
    social: {
      type: Array,
      default: () => []
    },
    twitter: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedSocial () {
      if (this.social.length) return this.social

      const social = []

      if (this.github) {
        social.push({
          text: this.$t('Footer.github'),
          icon: 'mdi-github-circle',
          href: this.github
        })
      }

      if (this.twitter) {
        social.push({
          text: this.$t('Footer.twitter'),
          icon: 'mdi-twitter-circle',
          href: this.twitter
        })
      }

      if (this.facebook) {
        social.push({
          text: this.$t('Footer.facebook'),
          icon: 'mdi-facebook-box',
          href: this.facebook
        })
      }

      return social
    }
  }
});

// CONCATENATED MODULE: ./src/components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Footer.vue?vue&type=style&index=0&lang=stylus&
var Footervue_type_style_index_0_lang_stylus_ = __webpack_require__("ee86");

// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_footer.styl
var _footer = __webpack_require__("1240");

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/positionable.js


var availableProps = {
  absolute: Boolean,
  bottom: Boolean,
  fixed: Boolean,
  left: Boolean,
  right: Boolean,
  top: Boolean
};
function factory() {
  var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'positionable',
    props: selected.length ? filterObjectOnKeys(availableProps, selected) : availableProps
  });
}
/* harmony default export */ var positionable = (factory());
// Add a `*` before the second `/`
/* Tests /
let single = factory(['top']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let some = factory(['top', 'bottom']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let all = factory().extend({
  created () {
    this.top
    this.bottom
    this.absolute
    this.foobar
  }
})
/**/
//# sourceMappingURL=positionable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/applicationable.js

// Util

function applicationable(value) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    /* @vue/component */
    return mixins(factory(['absolute', 'fixed'])).extend({
        name: 'applicationable',
        props: {
            app: Boolean
        },
        computed: {
            applicationProperty: function applicationProperty() {
                return value;
            }
        },
        watch: {
            // If previous value was app
            // reset the provided prop
            app: function app(x, prev) {
                prev ? this.removeApplication(true) : this.callUpdate();
            },
            applicationProperty: function applicationProperty(newVal, oldVal) {
                this.$vuetify.application.unbind(this._uid, oldVal);
            }
        },
        activated: function activated() {
            this.callUpdate();
        },
        created: function created() {
            for (var i = 0, length = events.length; i < length; i++) {
                this.$watch(events[i], this.callUpdate);
            }
            this.callUpdate();
        },
        mounted: function mounted() {
            this.callUpdate();
        },
        deactivated: function deactivated() {
            this.removeApplication();
        },
        destroyed: function destroyed() {
            this.removeApplication();
        },

        methods: {
            callUpdate: function callUpdate() {
                if (!this.app) return;
                this.$vuetify.application.bind(this._uid, this.applicationProperty, this.updateApplication());
            },
            removeApplication: function removeApplication() {
                var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                if (!force && !this.app) return;
                this.$vuetify.application.unbind(this._uid, this.applicationProperty);
            },

            updateApplication: function updateApplication() {
                return 0;
            }
        }
    });
}
//# sourceMappingURL=applicationable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VFooter/VFooter.js
var VFooter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Styles

// Mixins



/* @vue/component */
/* harmony default export */ var VFooter = ({
    name: 'v-footer',
    mixins: [applicationable(null, ['height', 'inset']), colorable, themeable],
    props: {
        height: {
            default: 32,
            type: [Number, String]
        },
        inset: Boolean
    },
    computed: {
        applicationProperty: function applicationProperty() {
            return this.inset ? 'insetFooter' : 'footer';
        },
        computedMarginBottom: function computedMarginBottom() {
            if (!this.app) return;
            return this.$vuetify.application.bottom;
        },
        computedPaddingLeft: function computedPaddingLeft() {
            return !this.app || !this.inset ? 0 : this.$vuetify.application.left;
        },
        computedPaddingRight: function computedPaddingRight() {
            return !this.app || !this.inset ? 0 : this.$vuetify.application.right;
        },
        styles: function styles() {
            var styles = {
                height: isNaN(this.height) ? this.height : this.height + 'px'
            };
            if (this.computedPaddingLeft) {
                styles.paddingLeft = this.computedPaddingLeft + 'px';
            }
            if (this.computedPaddingRight) {
                styles.paddingRight = this.computedPaddingRight + 'px';
            }
            if (this.computedMarginBottom) {
                styles.marginBottom = this.computedMarginBottom + 'px';
            }
            return styles;
        }
    },
    methods: {
        /**
         * Update the application layout
         *
         * @return {number}
         */
        updateApplication: function updateApplication() {
            var height = parseInt(this.height);
            return isNaN(height) ? this.$el ? this.$el.clientHeight : 0 : height;
        }
    },
    render: function render(h) {
        var data = this.setBackgroundColor(this.color, {
            staticClass: 'v-footer',
            'class': VFooter_extends({
                'v-footer--absolute': this.absolute,
                'v-footer--fixed': !this.absolute && (this.app || this.fixed),
                'v-footer--inset': this.inset
            }, this.themeClasses),
            style: this.styles,
            ref: 'content'
        });
        return h('footer', data, this.$slots.default);
    }
});
//# sourceMappingURL=VFooter.js.map
// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_icons.styl
var _icons = __webpack_require__("f923");

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/sizeable.js

/* harmony default export */ var sizeable = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'sizeable',
    props: {
        large: Boolean,
        medium: Boolean,
        size: {
            type: [Number, String]
        },
        small: Boolean,
        xLarge: Boolean
    }
}));
//# sourceMappingURL=sizeable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


// Mixins



// Util

// Types


var SIZE_MAP;
(function (SIZE_MAP) {
    SIZE_MAP["small"] = "16px";
    SIZE_MAP["default"] = "24px";
    SIZE_MAP["medium"] = "28px";
    SIZE_MAP["large"] = "36px";
    SIZE_MAP["xLarge"] = "40px";
})(SIZE_MAP || (SIZE_MAP = {}));
function isFontAwesome5(iconType) {
    return ['fas', 'far', 'fal', 'fab'].some(function (val) {
        return iconType.includes(val);
    });
}
var VIcon = mixins(colorable, sizeable, themeable
/* @vue/component */
).extend({
    name: 'v-icon',
    props: {
        disabled: Boolean,
        left: Boolean,
        right: Boolean
    },
    methods: {
        getIcon: function getIcon() {
            var iconName = '';
            if (this.$slots.default) iconName = this.$slots.default[0].text.trim();
            return remapInternalIcon(this, iconName);
        },
        getSize: function getSize() {
            var sizes = {
                small: this.small,
                medium: this.medium,
                large: this.large,
                xLarge: this.xLarge
            };
            var explicitSize = keys(sizes).find(function (key) {
                return sizes[key];
            });
            return explicitSize && SIZE_MAP[explicitSize] || convertToUnit(this.size);
        },

        // Component data for both font and svg icon.
        getDefaultData: function getDefaultData() {
            var data = {
                staticClass: 'v-icon',
                class: {
                    'v-icon--disabled': this.disabled,
                    'v-icon--left': this.left,
                    'v-icon--link': this.$listeners.click || this.$listeners['!click'],
                    'v-icon--right': this.right
                },
                attrs: VIcon_extends({
                    'aria-hidden': true
                }, this.$attrs),
                on: this.$listeners
            };
            return data;
        },
        applyColors: function applyColors(data) {
            data.class = VIcon_extends({}, data.class, this.themeClasses);
            this.setTextColor(this.color, data);
        },
        renderFontIcon: function renderFontIcon(icon, h) {
            var newChildren = [];
            var data = this.getDefaultData();
            var iconType = 'material-icons';
            // Material Icon delimiter is _
            // https://material.io/icons/
            var delimiterIndex = icon.indexOf('-');
            var isMaterialIcon = delimiterIndex <= -1;
            if (isMaterialIcon) {
                // Material icon uses ligatures.
                newChildren.push(icon);
            } else {
                iconType = icon.slice(0, delimiterIndex);
                if (isFontAwesome5(iconType)) iconType = '';
            }
            data.class[iconType] = true;
            data.class[icon] = !isMaterialIcon;
            var fontSize = this.getSize();
            if (fontSize) data.style = { fontSize: fontSize };
            this.applyColors(data);
            return h('i', data, newChildren);
        },
        renderSvgIcon: function renderSvgIcon(icon, h) {
            var data = this.getDefaultData();
            data.class['v-icon--is-component'] = true;
            var size = this.getSize();
            if (size) {
                data.style = {
                    fontSize: size,
                    height: size
                };
            }
            this.applyColors(data);
            var component = icon.component;
            data.props = icon.props;
            data.nativeOn = data.on;
            return h(component, data);
        }
    },
    render: function render(h) {
        var icon = this.getIcon();
        if (typeof icon === 'string') {
            return this.renderFontIcon(icon, h);
        }
        return this.renderSvgIcon(icon, h);
    }
});
/* harmony default export */ var VIcon_VIcon = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'v-icon',
    $_wrapperFor: VIcon,
    functional: true,
    render: function render(h, _ref) {
        var data = _ref.data,
            children = _ref.children;

        var iconName = '';
        // Support usage of v-text and v-html
        if (data.domProps) {
            iconName = data.domProps.textContent || data.domProps.innerHTML || iconName;
            // Remove nodes so it doesn't
            // overwrite our changes
            delete data.domProps.textContent;
            delete data.domProps.innerHTML;
        }
        return h(VIcon, data, iconName ? [iconName] : children);
    }
}));
//# sourceMappingURL=VIcon.js.map
// CONCATENATED MODULE: ./src/components/Footer.vue






/* normalize component */

var Footer_component = normalizeComponent(
  components_Footervue_type_script_lang_js_,
  Footervue_type_template_id_2cb10664_render,
  Footervue_type_template_id_2cb10664_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Footer_component.options.__file = "Footer.vue"
/* harmony default export */ var Footer = (Footer_component.exports);

/* vuetify-loader */








installComponents_default()(Footer_component, {VCard: VCard,VCardText: VCardText,VContainer: VContainer,VFlex: VFlex,VFooter: VFooter,VIcon: VIcon_VIcon,VLayout: VLayout})

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"46e6b0d9-vue-loader-template"}!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/Gallery.vue?vue&type=template&id=4fd34b64&scoped=true&
var Galleryvue_type_template_id_4fd34b64_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"alpha-gallery"},[_c('v-tabs',_vm._l((_vm.categories),function(category,i){return _c('v-tab',{key:i,on:{"click":function($event){return _vm.select(category)}}},[_c('span',{domProps:{"textContent":_vm._s(category.text)}})])}),1),_c('v-container',{attrs:{"grid-list-xl":""}},[_c('transition-group',{staticClass:"wrap child-flex",staticStyle:{"min-height":"450px"},attrs:{"tag":"v-layout","name":"fade-transition"}},_vm._l((_vm.computedProjects),function(project){return _c('v-flex',{key:project.img,attrs:{"xs4":"","gallery-card":""}},[(_vm.$scopedSlots.default)?_vm._t("default",null,{"project":project}):_c('v-card',{staticClass:"white--text",attrs:{"height":"200px","hover":"","img":("/static/" + (project.img))},on:{"click":function($event){return _vm.genAction(project.action)}}})],2)}),1)],1)],1)}
var Galleryvue_type_template_id_4fd34b64_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Gallery.vue?vue&type=template&id=4fd34b64&scoped=true&

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/Gallery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Galleryvue_type_script_lang_js_ = ({
  name: 'AlphaGallery',

  props: {
    categories: {
      type: Array,
      default: () => []
    },
    projects: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    category: null
  }),

  computed: {
    computedProjects () {
      return !this.category
        ? this.projects
        : this.projects.filter(p => p.categories.includes(this.category))
    }
  },

  methods: {
    genAction (cb) {
      return cb || null
    },
    select (category) {
      this.category = category.filter
    }
  }
});

// CONCATENATED MODULE: ./src/components/Gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Galleryvue_type_script_lang_js_ = (Galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Gallery.vue?vue&type=style&index=0&id=4fd34b64&scoped=true&lang=css&
var Galleryvue_type_style_index_0_id_4fd34b64_scoped_true_lang_css_ = __webpack_require__("7061");

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/registrable.js
function registrable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function generateWarning(child, parent) {
    return function () {
        return consoleWarn('The ' + child + ' component must be used inside a ' + parent);
    };
}
function inject(namespace, child, parent) {
    var defaultImpl = child && parent ? {
        register: generateWarning(child, parent),
        unregister: generateWarning(child, parent)
    } : null;
    return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
        name: 'registrable-inject',
        inject: registrable_defineProperty({}, namespace, {
            default: defaultImpl
        })
    });
}
function provide(namespace) {
    return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
        name: 'registrable-provide',
        methods: {
            register: null,
            unregister: null
        },
        provide: function provide() {
            return registrable_defineProperty({}, namespace, {
                register: this.register,
                unregister: this.unregister
            });
        }
    });
}
//# sourceMappingURL=registrable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/groupable.js
function groupable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Mixins

function groupable_factory(namespace, child, parent) {
    return inject(namespace, child, parent).extend({
        name: 'groupable',
        props: {
            activeClass: {
                type: String,
                default: function _default() {
                    if (!this[namespace]) return undefined;
                    return this[namespace].activeClass;
                }
            },
            disabled: Boolean
        },
        data: function data() {
            return {
                isActive: false
            };
        },

        computed: {
            groupClasses: function groupClasses() {
                if (!this.activeClass) return {};
                return groupable_defineProperty({}, this.activeClass, this.isActive);
            }
        },
        created: function created() {
            this[namespace] && this[namespace].register(this);
        },
        beforeDestroy: function beforeDestroy() {
            this[namespace] && this[namespace].unregister(this);
        },

        methods: {
            toggle: function toggle() {
                this.$emit('change');
            }
        }
    });
}
/* eslint-disable-next-line no-redeclare */
var Groupable = groupable_factory('itemGroup');
/* harmony default export */ var groupable = (Groupable);
//# sourceMappingURL=groupable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VTabs/VTab.js
var VTab_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Mixins



// Utilities

/* @vue/component */
/* harmony default export */ var VTab = ({
    name: 'v-tab',
    mixins: [routable,
    // Must be after routable
    // to overwrite activeClass
    groupable_factory('tabGroup'), themeable],
    props: {
        ripple: {
            type: [Boolean, Object],
            default: true
        }
    },
    computed: {
        classes: function classes() {
            return VTab_extends({
                'v-tabs__item': true,
                'v-tabs__item--disabled': this.disabled
            }, this.groupClasses);
        },
        value: function value() {
            var to = this.to || this.href || '';
            if (this.$router && this.to === Object(this.to)) {
                var resolve = this.$router.resolve(this.to, this.$route, this.append);
                to = resolve.href;
            }
            return to.replace('#', '');
        }
    },
    watch: {
        $route: 'onRouteChange'
    },
    mounted: function mounted() {
        this.onRouteChange();
    },

    methods: {
        click: function click(e) {
            // If user provides an
            // actual link, do not
            // prevent default
            if (this.href && this.href.indexOf('#') > -1) e.preventDefault();
            this.$emit('click', e);
            this.to || this.toggle();
        },
        onRouteChange: function onRouteChange() {
            var _this = this;

            if (!this.to || !this.$refs.link) return;
            var path = '_vnode.data.class.' + this.activeClass;
            this.$nextTick(function () {
                if (getObjectValueByPath(_this.$refs.link, path)) {
                    _this.toggle();
                }
            });
        }
    },
    render: function render(h) {
        var link = this.generateRouteLink(this.classes);
        var data = link.data;
        // If disabled, use div as anchor tags do not support
        // being disabled

        var tag = this.disabled ? 'div' : link.tag;
        data.ref = 'link';
        return h('div', {
            staticClass: 'v-tabs__div'
        }, [h(tag, data, this.$slots.default)]);
    }
});
//# sourceMappingURL=VTab.js.map
// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_tabs.styl
var _tabs = __webpack_require__("9eca");

// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_item-group.styl
var _item_group = __webpack_require__("c377");

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/proxyable.js
function proxyable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function proxyable_factory() {
    var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'value';
    var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'change';

    return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
        name: 'proxyable',
        model: {
            prop: prop,
            event: event
        },
        props: proxyable_defineProperty({}, prop, {
            required: false
        }),
        data: function data() {
            return {
                internalLazyValue: this[prop]
            };
        },

        computed: {
            internalValue: {
                get: function get() {
                    return this.internalLazyValue;
                },
                set: function set(val) {
                    if (val === this.internalLazyValue) return;
                    this.internalLazyValue = val;
                    this.$emit(event, val);
                }
            }
        },
        watch: proxyable_defineProperty({}, prop, function (val) {
            this.internalLazyValue = val;
        })
    });
}
/* eslint-disable-next-line no-redeclare */
var Proxyable = proxyable_factory();
/* harmony default export */ var proxyable = (Proxyable);
//# sourceMappingURL=proxyable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Styles



// Utilities


var BaseItemGroup = mixins(proxyable, themeable).extend({
    name: 'base-item-group',
    props: {
        activeClass: {
            type: String,
            default: 'v-item--active'
        },
        mandatory: Boolean,
        max: {
            type: [Number, String],
            default: null
        },
        multiple: Boolean
    },
    data: function data() {
        return {
            // As long as a value is defined, show it
            // Otherwise, check if multiple
            // to determine which default to provide
            internalLazyValue: this.value !== undefined ? this.value : this.multiple ? [] : undefined,
            items: []
        };
    },

    computed: {
        classes: function classes() {
            return VItemGroup_extends({}, this.themeClasses);
        },
        selectedItems: function selectedItems() {
            var _this = this;

            return this.items.filter(function (item, index) {
                return _this.toggleMethod(_this.getValue(item, index));
            });
        },
        selectedValues: function selectedValues() {
            return Array.isArray(this.internalValue) ? this.internalValue : [this.internalValue];
        },
        toggleMethod: function toggleMethod() {
            var _this2 = this;

            if (!this.multiple) {
                return function (v) {
                    return _this2.internalValue === v;
                };
            }
            var internalValue = this.internalValue;
            if (Array.isArray(internalValue)) {
                return function (v) {
                    return internalValue.includes(v);
                };
            }
            return function () {
                return false;
            };
        }
    },
    watch: {
        internalValue: function internalValue() {
            // https://github.com/vuetifyjs/vuetify/issues/5352
            this.$nextTick(this.updateItemsState);
        }
    },
    created: function created() {
        if (this.multiple && !Array.isArray(this.internalValue)) {
            consoleWarn('Model must be bound to an array if the multiple property is true.', this);
        }
    },

    methods: {
        getValue: function getValue(item, i) {
            return item.value == null || item.value === '' ? i : item.value;
        },
        onClick: function onClick(item, index) {
            this.updateInternalValue(this.getValue(item, index));
        },
        register: function register(item) {
            var _this3 = this;

            var index = this.items.push(item) - 1;
            item.$on('change', function () {
                return _this3.onClick(item, index);
            });
            // If no value provided and mandatory,
            // assign first registered item
            if (this.mandatory && this.internalLazyValue == null) {
                this.updateMandatory();
            }
            this.updateItem(item, index);
        },
        unregister: function unregister(item) {
            if (this._isDestroyed) return;
            var index = this.items.indexOf(item);
            var value = this.getValue(item, index);
            this.items.splice(index, 1);
            var valueIndex = this.selectedValues.indexOf(value);
            // Items is not selected, do nothing
            if (valueIndex < 0) return;
            // If not mandatory, use regular update process
            if (!this.mandatory) {
                return this.updateInternalValue(value);
            }
            // Remove the value
            if (this.multiple && Array.isArray(this.internalValue)) {
                this.internalValue = this.internalValue.filter(function (v) {
                    return v !== value;
                });
            } else {
                this.internalValue = undefined;
            }
            // If mandatory and we have no selection
            // add the last item as value
            /* istanbul ignore else */
            if (!this.selectedItems.length) {
                this.updateMandatory(true);
            }
        },
        updateItem: function updateItem(item, index) {
            var value = this.getValue(item, index);
            item.isActive = this.toggleMethod(value);
        },
        updateItemsState: function updateItemsState() {
            if (this.mandatory && !this.selectedItems.length) {
                return this.updateMandatory();
            }
            // TODO: Make this smarter so it
            // doesn't have to iterate every
            // child in an update
            this.items.forEach(this.updateItem);
        },
        updateInternalValue: function updateInternalValue(value) {
            this.multiple ? this.updateMultiple(value) : this.updateSingle(value);
        },
        updateMandatory: function updateMandatory(last) {
            if (!this.items.length) return;
            var index = last ? this.items.length - 1 : 0;
            this.updateInternalValue(this.getValue(this.items[index], index));
        },
        updateMultiple: function updateMultiple(value) {
            var defaultValue = Array.isArray(this.internalValue) ? this.internalValue : [];
            var internalValue = defaultValue.slice();
            var index = internalValue.findIndex(function (val) {
                return val === value;
            });
            if (this.mandatory &&
            // Item already exists
            index > -1 &&
            // value would be reduced below min
            internalValue.length - 1 < 1) return;
            if (
            // Max is set
            this.max != null &&
            // Item doesn't exist
            index < 0 &&
            // value would be increased above max
            internalValue.length + 1 > this.max) return;
            index > -1 ? internalValue.splice(index, 1) : internalValue.push(value);
            this.internalValue = internalValue;
        },
        updateSingle: function updateSingle(value) {
            var isSame = value === this.internalValue;
            if (this.mandatory && isSame) return;
            this.internalValue = isSame ? undefined : value;
        }
    },
    render: function render(h) {
        return h('div', {
            staticClass: 'v-item-group',
            class: this.classes
        }, this.$slots.default);
    }
});
/* harmony default export */ var VItemGroup = (BaseItemGroup.extend({
    name: 'v-item-group',
    provide: function provide() {
        return {
            itemGroup: this
        };
    }
}));
//# sourceMappingURL=VItemGroup.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VTabs/mixins/tabs-computed.js
/**
 * Tabs computed
 *
 * @mixin
 */
/* @vue/component */
/* harmony default export */ var tabs_computed = ({
    computed: {
        activeTab: function activeTab() {
            if (!this.selectedItems.length) return undefined;
            return this.selectedItems[0];
        },
        containerStyles: function containerStyles() {
            return this.height ? {
                height: parseInt(this.height, 10) + 'px'
            } : null;
        },
        hasArrows: function hasArrows() {
            return (this.showArrows || !this.isMobile) && this.isOverflowing;
        },
        isMobile: function isMobile() {
            return this.$vuetify.breakpoint.width < this.mobileBreakPoint;
        },
        sliderStyles: function sliderStyles() {
            return {
                left: this.sliderLeft + 'px',
                transition: this.sliderLeft != null ? null : 'none',
                width: this.sliderWidth + 'px'
            };
        }
    }
});
//# sourceMappingURL=tabs-computed.js.map
// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_windows.styl
var _windows = __webpack_require__("db04");

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/directives/touch.js

var handleGesture = function handleGesture(wrapper) {
    var touchstartX = wrapper.touchstartX,
        touchendX = wrapper.touchendX,
        touchstartY = wrapper.touchstartY,
        touchendY = wrapper.touchendY;

    var dirRatio = 0.5;
    var minDistance = 16;
    wrapper.offsetX = touchendX - touchstartX;
    wrapper.offsetY = touchendY - touchstartY;
    if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
        wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
        wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
    }
    if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
        wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
        wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
    }
};
function _touchstart(event, wrapper) {
    var touch = event.changedTouches[0];
    wrapper.touchstartX = touch.clientX;
    wrapper.touchstartY = touch.clientY;
    wrapper.start && wrapper.start(Object.assign(event, wrapper));
}
function _touchend(event, wrapper) {
    var touch = event.changedTouches[0];
    wrapper.touchendX = touch.clientX;
    wrapper.touchendY = touch.clientY;
    wrapper.end && wrapper.end(Object.assign(event, wrapper));
    handleGesture(wrapper);
}
function _touchmove(event, wrapper) {
    var touch = event.changedTouches[0];
    wrapper.touchmoveX = touch.clientX;
    wrapper.touchmoveY = touch.clientY;
    wrapper.move && wrapper.move(Object.assign(event, wrapper));
}
function createHandlers(value) {
    var wrapper = {
        touchstartX: 0,
        touchstartY: 0,
        touchendX: 0,
        touchendY: 0,
        touchmoveX: 0,
        touchmoveY: 0,
        offsetX: 0,
        offsetY: 0,
        left: value.left,
        right: value.right,
        up: value.up,
        down: value.down,
        start: value.start,
        move: value.move,
        end: value.end
    };
    return {
        touchstart: function touchstart(e) {
            return _touchstart(e, wrapper);
        },
        touchend: function touchend(e) {
            return _touchend(e, wrapper);
        },
        touchmove: function touchmove(e) {
            return _touchmove(e, wrapper);
        }
    };
}
function inserted(el, binding, vnode) {
    var value = binding.value;
    var target = value.parent ? el.parentElement : el;
    var options = value.options || { passive: true };
    // Needed to pass unit tests
    if (!target) return;
    var handlers = createHandlers(binding.value);
    target._touchHandlers = Object(target._touchHandlers);
    target._touchHandlers[vnode.context._uid] = handlers;
    keys(handlers).forEach(function (eventName) {
        target.addEventListener(eventName, handlers[eventName], options);
    });
}
function touch_unbind(el, binding, vnode) {
    var target = binding.value.parent ? el.parentElement : el;
    if (!target || !target._touchHandlers) return;
    var handlers = target._touchHandlers[vnode.context._uid];
    keys(handlers).forEach(function (eventName) {
        target.removeEventListener(eventName, handlers[eventName]);
    });
    delete target._touchHandlers[vnode.context._uid];
}
/* harmony default export */ var touch = ({
    inserted: inserted,
    unbind: touch_unbind
});
//# sourceMappingURL=touch.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VWindow/VWindow.js
// Styles

// Components

// Directives

/* @vue/component */
/* harmony default export */ var VWindow = (BaseItemGroup.extend({
    name: 'v-window',
    provide: function provide() {
        return {
            windowGroup: this
        };
    },

    directives: { Touch: touch },
    props: {
        mandatory: {
            type: Boolean,
            default: true
        },
        reverse: {
            type: Boolean,
            default: undefined
        },
        touch: Object,
        touchless: Boolean,
        value: {
            required: false
        },
        vertical: Boolean
    },
    data: function data() {
        return {
            internalHeight: undefined,
            isActive: false,
            isBooted: false,
            isReverse: false
        };
    },

    computed: {
        computedTransition: function computedTransition() {
            if (!this.isBooted) return '';
            var axis = this.vertical ? 'y' : 'x';
            var direction = this.internalReverse === !this.$vuetify.rtl ? '-reverse' : '';
            return 'v-window-' + axis + direction + '-transition';
        },
        internalIndex: function internalIndex() {
            var _this = this;

            return this.items.findIndex(function (item, i) {
                return _this.internalValue === _this.getValue(item, i);
            });
        },
        internalReverse: function internalReverse() {
            if (this.reverse !== undefined) return this.reverse;
            return this.isReverse;
        }
    },
    watch: {
        internalIndex: 'updateReverse'
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$nextTick(function () {
            return _this2.isBooted = true;
        });
    },

    methods: {
        genContainer: function genContainer() {
            return this.$createElement('div', {
                staticClass: 'v-window__container',
                class: {
                    'v-window__container--is-active': this.isActive
                },
                style: {
                    height: this.internalHeight
                }
            }, this.$slots.default);
        },
        next: function next() {
            this.isReverse = false;
            var nextIndex = (this.internalIndex + 1) % this.items.length;
            var item = this.items[nextIndex];
            this.internalValue = this.getValue(item, nextIndex);
        },
        prev: function prev() {
            this.isReverse = true;
            var lastIndex = (this.internalIndex + this.items.length - 1) % this.items.length;
            var item = this.items[lastIndex];
            this.internalValue = this.getValue(item, lastIndex);
        },
        updateReverse: function updateReverse(val, oldVal) {
            this.isReverse = val < oldVal;
        }
    },
    render: function render(h) {
        var data = {
            staticClass: 'v-window',
            directives: []
        };
        if (!this.touchless) {
            var value = this.touch || {
                left: this.next,
                right: this.prev
            };
            data.directives.push({
                name: 'touch',
                value: value
            });
        }
        return h('div', data, [this.genContainer()]);
    }
}));
//# sourceMappingURL=VWindow.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VTabs/VTabsItems.js
// Extensions

/* @vue/component */
/* harmony default export */ var VTabsItems = (VWindow.extend({
    name: 'v-tabs-items',
    inject: {
        registerItems: {
            default: null
        },
        tabProxy: {
            default: null
        },
        unregisterItems: {
            default: null
        }
    },
    props: {
        cycle: Boolean
    },
    watch: {
        internalValue: function internalValue(val) {
            /* istanbul ignore else */
            if (this.tabProxy) this.tabProxy(val);
        }
    },
    created: function created() {
        this.registerItems && this.registerItems(this.changeModel);
    },
    beforeDestroy: function beforeDestroy() {
        this.unregisterItems && this.unregisterItems();
    },

    methods: {
        changeModel: function changeModel(val) {
            this.internalValue = val;
        },

        // For backwards compatability with v1.2
        getValue: function getValue(item, i) {
            /* istanbul ignore if */
            if (item.id) return item.id;
            return VWindow.options.methods.getValue.call(this, item, i);
        },
        next: function next() {
            if (!this.cycle && this.internalIndex === this.items.length - 1) {
                return;
            }
            VWindow.options.methods.next.call(this);
        },
        prev: function prev() {
            if (!this.cycle && this.internalIndex === 0) {
                return;
            }
            VWindow.options.methods.prev.call(this);
        }
    }
}));
//# sourceMappingURL=VTabsItems.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VTabs/VTabsSlider.js

/* @vue/component */
/* harmony default export */ var VTabsSlider = ({
    name: 'v-tabs-slider',
    mixins: [colorable],
    render: function render(h) {
        return h('div', this.setBackgroundColor(this.color || 'accent', {
            staticClass: 'v-tabs__slider'
        }));
    }
});
//# sourceMappingURL=VTabsSlider.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VIcon/index.js


/* harmony default export */ var components_VIcon = (VIcon_VIcon);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VTabs/mixins/tabs-generators.js



/**
 * Tabs generators
 *
 * @mixin
 */
/* @vue/component */
/* harmony default export */ var tabs_generators = ({
    methods: {
        genBar: function genBar(items) {
            return this.$createElement('div', this.setBackgroundColor(this.color, {
                staticClass: 'v-tabs__bar',
                'class': this.themeClasses,
                ref: 'bar'
            }), [this.genTransition('prev'), this.genWrapper(this.genContainer(items)), this.genTransition('next')]);
        },
        genContainer: function genContainer(items) {
            return this.$createElement('div', {
                staticClass: 'v-tabs__container',
                class: {
                    'v-tabs__container--align-with-title': this.alignWithTitle,
                    'v-tabs__container--centered': this.centered,
                    'v-tabs__container--fixed-tabs': this.fixedTabs,
                    'v-tabs__container--grow': this.grow,
                    'v-tabs__container--icons-and-text': this.iconsAndText,
                    'v-tabs__container--overflow': this.isOverflowing,
                    'v-tabs__container--right': this.right
                },
                style: this.containerStyles,
                ref: 'container'
            }, items);
        },
        genIcon: function genIcon(direction) {
            var _this = this;

            if (!this.hasArrows || !this[direction + 'IconVisible']) return null;
            return this.$createElement(components_VIcon, {
                staticClass: 'v-tabs__icon v-tabs__icon--' + direction,
                props: {
                    disabled: !this[direction + 'IconVisible']
                },
                on: {
                    click: function click() {
                        return _this.scrollTo(direction);
                    }
                }
            }, this[direction + 'Icon']);
        },
        genItems: function genItems(items, item) {
            if (items.length > 0) return items;
            if (!item.length) return null;
            return this.$createElement(VTabsItems, item);
        },
        genTransition: function genTransition(direction) {
            return this.$createElement('transition', {
                props: { name: 'fade-transition' }
            }, [this.genIcon(direction)]);
        },
        genWrapper: function genWrapper(items) {
            var _this2 = this;

            return this.$createElement('div', {
                staticClass: 'v-tabs__wrapper',
                class: {
                    'v-tabs__wrapper--show-arrows': this.hasArrows
                },
                ref: 'wrapper',
                directives: [{
                    name: 'touch',
                    value: {
                        start: function start(e) {
                            return _this2.overflowCheck(e, _this2.onTouchStart);
                        },
                        move: function move(e) {
                            return _this2.overflowCheck(e, _this2.onTouchMove);
                        },
                        end: function end(e) {
                            return _this2.overflowCheck(e, _this2.onTouchEnd);
                        }
                    }
                }]
            }, [items]);
        },
        genSlider: function genSlider(items) {
            if (!items.length) {
                items = [this.$createElement(VTabsSlider, {
                    props: { color: this.sliderColor }
                })];
            }
            return this.$createElement('div', {
                staticClass: 'v-tabs__slider-wrapper',
                style: this.sliderStyles
            }, items);
        }
    }
});
//# sourceMappingURL=tabs-generators.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VTabs/mixins/tabs-props.js
/**
 * Tabs props
 *
 * @mixin
 */
/* @vue/component */
/* harmony default export */ var tabs_props = ({
    props: {
        activeClass: {
            type: String,
            default: 'v-tabs__item--active'
        },
        alignWithTitle: Boolean,
        centered: Boolean,
        fixedTabs: Boolean,
        grow: Boolean,
        height: {
            type: [Number, String],
            default: undefined,
            validator: function validator(v) {
                return !isNaN(parseInt(v));
            }
        },
        hideSlider: Boolean,
        iconsAndText: Boolean,
        mandatory: {
            type: Boolean,
            default: true
        },
        mobileBreakPoint: {
            type: [Number, String],
            default: 1264,
            validator: function validator(v) {
                return !isNaN(parseInt(v));
            }
        },
        nextIcon: {
            type: String,
            default: '$vuetify.icons.next'
        },
        prevIcon: {
            type: String,
            default: '$vuetify.icons.prev'
        },
        right: Boolean,
        showArrows: Boolean,
        sliderColor: {
            type: String,
            default: 'accent'
        },
        value: [Number, String]
    }
});
//# sourceMappingURL=tabs-props.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VTabs/mixins/tabs-touch.js
/**
 * Tabs touch
 *
 * @mixin
 */
/* @vue/component */
/* harmony default export */ var tabs_touch = ({
    methods: {
        newOffset: function newOffset(direction) {
            var clientWidth = this.$refs.wrapper.clientWidth;
            if (direction === 'prev') {
                return Math.max(this.scrollOffset - clientWidth, 0);
            } else {
                return Math.min(this.scrollOffset + clientWidth, this.$refs.container.clientWidth - clientWidth);
            }
        },
        onTouchStart: function onTouchStart(e) {
            this.startX = this.scrollOffset + e.touchstartX;
            this.$refs.container.style.transition = 'none';
            this.$refs.container.style.willChange = 'transform';
        },
        onTouchMove: function onTouchMove(e) {
            this.scrollOffset = this.startX - e.touchmoveX;
        },
        onTouchEnd: function onTouchEnd() {
            var container = this.$refs.container;
            var wrapper = this.$refs.wrapper;
            var maxScrollOffset = container.clientWidth - wrapper.clientWidth;
            container.style.transition = null;
            container.style.willChange = null;
            /* istanbul ignore else */
            if (this.scrollOffset < 0 || !this.isOverflowing) {
                this.scrollOffset = 0;
            } else if (this.scrollOffset >= maxScrollOffset) {
                this.scrollOffset = maxScrollOffset;
            }
        }
    }
});
//# sourceMappingURL=tabs-touch.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VTabs/mixins/tabs-watchers.js
/**
 * Tabs watchers
 *
 * @mixin
 */
/* @vue/component */
/* harmony default export */ var tabs_watchers = ({
    watch: {
        activeTab: function activeTab(val, oldVal) {
            this.setOverflow();
            if (!val) return;
            this.tabItems && this.tabItems(this.getValue(val, this.items.indexOf(val)));
            // Do nothing for first tab
            // is handled from isBooted
            // watcher
            if (oldVal == null) return;
            this.updateTabsView();
        },

        alignWithTitle: 'callSlider',
        centered: 'callSlider',
        fixedTabs: 'callSlider',
        hasArrows: function hasArrows(val) {
            if (!val) this.scrollOffset = 0;
        },

        /* @deprecate */
        internalValue: function internalValue(val) {
            /* istanbul ignore else */
            if (!this.$listeners['input']) return;
            this.$emit('input', val);
        },

        lazyValue: 'updateTabs',
        right: 'callSlider',
        '$vuetify.application.left': 'onResize',
        '$vuetify.application.right': 'onResize',
        scrollOffset: function scrollOffset(val) {
            this.$refs.container.style.transform = 'translateX(' + -val + 'px)';
            if (this.hasArrows) {
                this.prevIconVisible = this.checkPrevIcon();
                this.nextIconVisible = this.checkNextIcon();
            }
        }
    }
});
//# sourceMappingURL=tabs-watchers.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/ssr-bootable.js

/**
 * SSRBootable
 *
 * @mixin
 *
 * Used in layout components (drawer, toolbar, content)
 * to avoid an entry animation when using SSR
 */
/* harmony default export */ var ssr_bootable = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'ssr-bootable',
    data: function data() {
        return {
            isBooted: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        // Use setAttribute instead of dataset
        // because dataset does not work well
        // with unit tests
        window.requestAnimationFrame(function () {
            _this.$el.setAttribute('data-booted', 'true');
            _this.isBooted = true;
        });
    }
}));
//# sourceMappingURL=ssr-bootable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/directives/resize.js
function resize_inserted(el, binding) {
    var callback = binding.value;
    var options = binding.options || { passive: true };
    window.addEventListener('resize', callback, options);
    el._onResize = {
        callback: callback,
        options: options
    };
    if (!binding.modifiers || !binding.modifiers.quiet) {
        callback();
    }
}
function resize_unbind(el) {
    if (!el._onResize) return;
    var _el$_onResize = el._onResize,
        callback = _el$_onResize.callback,
        options = _el$_onResize.options;

    window.removeEventListener('resize', callback, options);
    delete el._onResize;
}
/* harmony default export */ var resize = ({
    inserted: resize_inserted,
    unbind: resize_unbind
});
//# sourceMappingURL=resize.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/util/ThemeProvider.js


/* @vue/component */
/* harmony default export */ var ThemeProvider = (mixins(themeable).extend({
    name: 'theme-provider',
    props: {
        root: Boolean
    },
    computed: {
        isDark: function isDark() {
            return this.root ? this.rootIsDark : themeable.options.computed.isDark.call(this);
        }
    },
    render: function render() {
        return this.$slots.default && this.$slots.default.find(function (node) {
            return !node.isComment && node.text !== ' ';
        });
    }
}));
//# sourceMappingURL=ThemeProvider.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VTabs/VTabs.js
// Styles

// Extensions

// Component level mixins





// Mixins



// Directives



// Utils

/* @vue/component */
/* harmony default export */ var VTabs = (BaseItemGroup.extend({
    name: 'v-tabs',
    directives: {
        Resize: resize,
        Touch: touch
    },
    mixins: [colorable, ssr_bootable, tabs_computed, tabs_props, tabs_generators, tabs_touch, tabs_watchers, themeable],
    provide: function provide() {
        return {
            tabGroup: this,
            tabProxy: this.tabProxy,
            registerItems: this.registerItems,
            unregisterItems: this.unregisterItems
        };
    },
    data: function data() {
        return {
            bar: [],
            content: [],
            isOverflowing: false,
            nextIconVisible: false,
            prevIconVisible: false,
            resizeTimeout: null,
            scrollOffset: 0,
            sliderWidth: null,
            sliderLeft: null,
            startX: 0,
            tabItems: null,
            transitionTime: 300,
            widths: {
                bar: 0,
                container: 0,
                wrapper: 0
            }
        };
    },

    watch: {
        items: 'onResize',
        tabs: 'onResize'
    },
    mounted: function mounted() {
        this.init();
    },

    methods: {
        checkIcons: function checkIcons() {
            this.prevIconVisible = this.checkPrevIcon();
            this.nextIconVisible = this.checkNextIcon();
        },
        checkPrevIcon: function checkPrevIcon() {
            return this.scrollOffset > 0;
        },
        checkNextIcon: function checkNextIcon() {
            // Check one scroll ahead to know the width of right-most item
            return this.widths.container > this.scrollOffset + this.widths.wrapper;
        },
        callSlider: function callSlider() {
            var _this = this;

            if (this.hideSlider || !this.activeTab) return false;
            // Give screen time to paint
            var activeTab = this.activeTab;
            this.$nextTick(function () {
                /* istanbul ignore if */
                if (!activeTab || !activeTab.$el) return;
                _this.sliderWidth = activeTab.$el.scrollWidth;
                _this.sliderLeft = activeTab.$el.offsetLeft;
            });
        },

        // Do not process
        // until DOM is
        // painted
        init: function init() {
            /* istanbul ignore next */
            if (this.$listeners['input']) {
                deprecate('@input', '@change', this);
            }
        },

        /**
         * When v-navigation-drawer changes the
         * width of the container, call resize
         * after the transition is complete
         */
        onResize: function onResize() {
            if (this._isDestroyed) return;
            this.setWidths();
            var delay = this.isBooted ? this.transitionTime : 0;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(this.updateTabsView, delay);
        },
        overflowCheck: function overflowCheck(e, fn) {
            this.isOverflowing && fn(e);
        },
        scrollTo: function scrollTo(direction) {
            this.scrollOffset = this.newOffset(direction);
        },
        setOverflow: function setOverflow() {
            this.isOverflowing = this.widths.bar < this.widths.container;
        },
        setWidths: function setWidths() {
            var bar = this.$refs.bar ? this.$refs.bar.clientWidth : 0;
            var container = this.$refs.container ? this.$refs.container.clientWidth : 0;
            var wrapper = this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0;
            this.widths = { bar: bar, container: container, wrapper: wrapper };
            this.setOverflow();
        },
        parseNodes: function parseNodes() {
            var item = [];
            var items = [];
            var slider = [];
            var tab = [];
            var length = (this.$slots.default || []).length;
            for (var i = 0; i < length; i++) {
                var vnode = this.$slots.default[i];
                if (vnode.componentOptions) {
                    switch (vnode.componentOptions.Ctor.options.name) {
                        case 'v-tabs-slider':
                            slider.push(vnode);
                            break;
                        case 'v-tabs-items':
                            items.push(vnode);
                            break;
                        case 'v-tab-item':
                            item.push(vnode);
                            break;
                        // case 'v-tab' - intentionally omitted
                        default:
                            tab.push(vnode);
                    }
                } else {
                    tab.push(vnode);
                }
            }
            return { tab: tab, slider: slider, items: items, item: item };
        },
        registerItems: function registerItems(fn) {
            this.tabItems = fn;
            fn(this.internalValue);
        },
        unregisterItems: function unregisterItems() {
            this.tabItems = null;
        },
        updateTabsView: function updateTabsView() {
            this.callSlider();
            this.scrollIntoView();
            this.checkIcons();
        },
        scrollIntoView: function scrollIntoView() {
            /* istanbul ignore next */
            if (!this.activeTab) return;
            if (!this.isOverflowing) return this.scrollOffset = 0;
            var totalWidth = this.widths.wrapper + this.scrollOffset;
            var _activeTab$$el = this.activeTab.$el,
                clientWidth = _activeTab$$el.clientWidth,
                offsetLeft = _activeTab$$el.offsetLeft;

            var itemOffset = clientWidth + offsetLeft;
            var additionalOffset = clientWidth * 0.3;
            if (this.activeTab === this.items[this.items.length - 1]) {
                additionalOffset = 0; // don't add an offset if selecting the last tab
            }
            /* istanbul ignore else */
            if (offsetLeft < this.scrollOffset) {
                this.scrollOffset = Math.max(offsetLeft - additionalOffset, 0);
            } else if (totalWidth < itemOffset) {
                this.scrollOffset -= totalWidth - itemOffset - additionalOffset;
            }
        },
        tabProxy: function tabProxy(val) {
            this.internalValue = val;
        }
    },
    render: function render(h) {
        var _parseNodes = this.parseNodes(),
            tab = _parseNodes.tab,
            slider = _parseNodes.slider,
            items = _parseNodes.items,
            item = _parseNodes.item;

        return h('div', {
            staticClass: 'v-tabs',
            directives: [{
                name: 'resize',
                modifiers: { quiet: true },
                value: this.onResize
            }]
        }, [this.genBar([this.hideSlider ? null : this.genSlider(slider), tab]), h(ThemeProvider, {
            props: { dark: this.theme.isDark, light: !this.theme.isDark }
        }, [this.genItems(items, item)])]);
    }
}));
//# sourceMappingURL=VTabs.js.map
// CONCATENATED MODULE: ./src/components/Gallery.vue






/* normalize component */

var Gallery_component = normalizeComponent(
  components_Galleryvue_type_script_lang_js_,
  Galleryvue_type_template_id_4fd34b64_scoped_true_render,
  Galleryvue_type_template_id_4fd34b64_scoped_true_staticRenderFns,
  false,
  null,
  "4fd34b64",
  null
  
)

Gallery_component.options.__file = "Gallery.vue"
/* harmony default export */ var Gallery = (Gallery_component.exports);

/* vuetify-loader */






installComponents_default()(Gallery_component, {VCard: VCard,VContainer: VContainer,VFlex: VFlex,VTab: VTab,VTabs: VTabs})

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"46e6b0d9-vue-loader-template"}!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/Hero.vue?vue&type=template&id=6f48a5f1&
var Herovue_type_template_id_6f48a5f1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-carousel',_vm._g(_vm._b({staticClass:"elevation-0",attrs:{"delimiter-icon":_vm.delimiterIcon,"height":_vm.height,"timeout":_vm.timeout,"hide-controls":_vm.hideControls || _vm.items.length <= 1,"hide-delimiters":_vm.hideDelimiters || _vm.items.length <= 1}},'v-carousel',_vm.$attrs,false),_vm.$listeners),_vm._l((_vm.items),function(item,i){return _c('v-carousel-item',_vm._b({key:i,attrs:{"gradient":_vm.gradient,"height":_vm.height,"src":item === Object(item) ? item.src : item}},'v-carousel-item',item === Object(item) ? item.bind || {} : {},false),[_vm._t("default",null,{"index":i,"item":item})],2)}),1)],1)}
var Herovue_type_template_id_6f48a5f1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Hero.vue?vue&type=template&id=6f48a5f1&

// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_carousel.styl
var _carousel = __webpack_require__("72c4");

// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_buttons.styl
var _buttons = __webpack_require__("76f0");

// EXTERNAL MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/src/stylus/components/_progress-circular.styl
var _progress_circular = __webpack_require__("ef6b");

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js

// Mixins


/* @vue/component */
/* harmony default export */ var VProgressCircular = (mixins(colorable).extend({
    name: 'v-progress-circular',
    props: {
        button: Boolean,
        indeterminate: Boolean,
        rotate: {
            type: [Number, String],
            default: 0
        },
        size: {
            type: [Number, String],
            default: 32
        },
        width: {
            type: [Number, String],
            default: 4
        },
        value: {
            type: [Number, String],
            default: 0
        }
    },
    computed: {
        calculatedSize: function calculatedSize() {
            return Number(this.size) + (this.button ? 8 : 0);
        },
        circumference: function circumference() {
            return 2 * Math.PI * this.radius;
        },
        classes: function classes() {
            return {
                'v-progress-circular--indeterminate': this.indeterminate,
                'v-progress-circular--button': this.button
            };
        },
        normalizedValue: function normalizedValue() {
            if (this.value < 0) {
                return 0;
            }
            if (this.value > 100) {
                return 100;
            }
            return parseFloat(this.value);
        },
        radius: function radius() {
            return 20;
        },
        strokeDashArray: function strokeDashArray() {
            return Math.round(this.circumference * 1000) / 1000;
        },
        strokeDashOffset: function strokeDashOffset() {
            return (100 - this.normalizedValue) / 100 * this.circumference + 'px';
        },
        strokeWidth: function strokeWidth() {
            return Number(this.width) / +this.size * this.viewBoxSize * 2;
        },
        styles: function styles() {
            return {
                height: this.calculatedSize + 'px',
                width: this.calculatedSize + 'px'
            };
        },
        svgStyles: function svgStyles() {
            return {
                transform: 'rotate(' + Number(this.rotate) + 'deg)'
            };
        },
        viewBoxSize: function viewBoxSize() {
            return this.radius / (1 - Number(this.width) / +this.size);
        }
    },
    methods: {
        genCircle: function genCircle(h, name, offset) {
            return h('circle', {
                class: 'v-progress-circular__' + name,
                attrs: {
                    fill: 'transparent',
                    cx: 2 * this.viewBoxSize,
                    cy: 2 * this.viewBoxSize,
                    r: this.radius,
                    'stroke-width': this.strokeWidth,
                    'stroke-dasharray': this.strokeDashArray,
                    'stroke-dashoffset': offset
                }
            });
        },
        genSvg: function genSvg(h) {
            var children = [this.indeterminate || this.genCircle(h, 'underlay', 0), this.genCircle(h, 'overlay', this.strokeDashOffset)];
            return h('svg', {
                style: this.svgStyles,
                attrs: {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: this.viewBoxSize + ' ' + this.viewBoxSize + ' ' + 2 * this.viewBoxSize + ' ' + 2 * this.viewBoxSize
                }
            }, children);
        }
    },
    render: function render(h) {
        var info = h('div', { staticClass: 'v-progress-circular__info' }, this.$slots.default);
        var svg = this.genSvg(h);
        return h('div', this.setTextColor(this.color, {
            staticClass: 'v-progress-circular',
            attrs: {
                'role': 'progressbar',
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-valuenow': this.indeterminate ? undefined : this.normalizedValue
            },
            class: this.classes,
            style: this.styles,
            on: this.$listeners
        }), [svg, info]);
    }
}));
//# sourceMappingURL=VProgressCircular.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VProgressCircular/index.js


/* harmony default export */ var components_VProgressCircular = (VProgressCircular);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/toggleable.js
function toggleable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function toggleable_factory() {
    var _watch;

    var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'value';
    var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'input';

    return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
        name: 'toggleable',
        model: { prop: prop, event: event },
        props: toggleable_defineProperty({}, prop, { required: false }),
        data: function data() {
            return {
                isActive: !!this[prop]
            };
        },

        watch: (_watch = {}, toggleable_defineProperty(_watch, prop, function (val) {
            this.isActive = !!val;
        }), toggleable_defineProperty(_watch, 'isActive', function isActive(val) {
            !!val !== this[prop] && this.$emit(event, val);
        }), _watch)
    });
}
/* eslint-disable-next-line no-redeclare */
var Toggleable = toggleable_factory();
/* harmony default export */ var toggleable = (Toggleable);
//# sourceMappingURL=toggleable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var VBtn_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function VBtn_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Styles


// Components

// Mixins






// Utilities

var baseMixins = mixins(colorable, routable, positionable, themeable, groupable_factory('btnToggle'), toggleable_factory('inputValue')
/* @vue/component */
);
/* harmony default export */ var VBtn = (baseMixins.extend().extend({
    name: 'v-btn',
    props: {
        activeClass: {
            type: String,
            default: 'v-btn--active'
        },
        block: Boolean,
        depressed: Boolean,
        fab: Boolean,
        flat: Boolean,
        icon: Boolean,
        large: Boolean,
        loading: Boolean,
        outline: Boolean,
        ripple: {
            type: [Boolean, Object],
            default: null
        },
        round: Boolean,
        small: Boolean,
        tag: {
            type: String,
            default: 'button'
        },
        type: {
            type: String,
            default: 'button'
        },
        value: null
    },
    computed: {
        classes: function classes() {
            var _extends2;

            return VBtn_extends((_extends2 = {
                'v-btn': true
            }, VBtn_defineProperty(_extends2, this.activeClass, this.isActive), VBtn_defineProperty(_extends2, 'v-btn--absolute', this.absolute), VBtn_defineProperty(_extends2, 'v-btn--block', this.block), VBtn_defineProperty(_extends2, 'v-btn--bottom', this.bottom), VBtn_defineProperty(_extends2, 'v-btn--disabled', this.disabled), VBtn_defineProperty(_extends2, 'v-btn--flat', this.flat), VBtn_defineProperty(_extends2, 'v-btn--floating', this.fab), VBtn_defineProperty(_extends2, 'v-btn--fixed', this.fixed), VBtn_defineProperty(_extends2, 'v-btn--icon', this.icon), VBtn_defineProperty(_extends2, 'v-btn--large', this.large), VBtn_defineProperty(_extends2, 'v-btn--left', this.left), VBtn_defineProperty(_extends2, 'v-btn--loader', this.loading), VBtn_defineProperty(_extends2, 'v-btn--outline', this.outline), VBtn_defineProperty(_extends2, 'v-btn--depressed', this.depressed && !this.flat || this.outline), VBtn_defineProperty(_extends2, 'v-btn--right', this.right), VBtn_defineProperty(_extends2, 'v-btn--round', this.round), VBtn_defineProperty(_extends2, 'v-btn--router', this.to), VBtn_defineProperty(_extends2, 'v-btn--small', this.small), VBtn_defineProperty(_extends2, 'v-btn--top', this.top), _extends2), this.themeClasses);
        },
        computedRipple: function computedRipple() {
            var defaultRipple = this.icon || this.fab ? { circle: true } : true;
            if (this.disabled) return false;else return this.ripple !== null ? this.ripple : defaultRipple;
        }
    },
    watch: {
        '$route': 'onRouteChange'
    },
    methods: {
        // Prevent focus to match md spec
        click: function click(e) {
            !this.fab && e.detail && this.$el.blur();
            this.$emit('click', e);
            this.btnToggle && this.toggle();
        },
        genContent: function genContent() {
            return this.$createElement('div', { 'class': 'v-btn__content' }, this.$slots.default);
        },
        genLoader: function genLoader() {
            return this.$createElement('span', {
                class: 'v-btn__loading'
            }, this.$slots.loader || [this.$createElement(components_VProgressCircular, {
                props: {
                    indeterminate: true,
                    size: 23,
                    width: 2
                }
            })]);
        },
        onRouteChange: function onRouteChange() {
            var _this = this;

            if (!this.to || !this.$refs.link) return;
            var path = '_vnode.data.class.' + this.activeClass;
            this.$nextTick(function () {
                if (getObjectValueByPath(_this.$refs.link, path)) {
                    _this.toggle();
                }
            });
        }
    },
    render: function render(h) {
        var setColor = !this.outline && !this.flat && !this.disabled ? this.setBackgroundColor : this.setTextColor;

        var _generateRouteLink = this.generateRouteLink(this.classes),
            tag = _generateRouteLink.tag,
            data = _generateRouteLink.data;

        var children = [this.genContent(), this.loading && this.genLoader()];
        if (tag === 'button') data.attrs.type = this.type;
        data.attrs.value = ['string', 'number'].includes(VBtn_typeof(this.value)) ? this.value : JSON.stringify(this.value);
        if (this.btnToggle) {
            data.ref = 'link';
        }
        return h(tag, setColor(this.color, data), children);
    }
}));
//# sourceMappingURL=VBtn.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VBtn/index.js


/* harmony default export */ var components_VBtn = (VBtn);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/button-group.js
// Extensions

/* @vue/component */
/* harmony default export */ var button_group = (BaseItemGroup.extend({
    name: 'button-group',
    provide: function provide() {
        return {
            btnToggle: this
        };
    },

    props: {
        activeClass: {
            type: String,
            default: 'v-btn--active'
        }
    },
    computed: {
        classes: function classes() {
            return BaseItemGroup.options.computed.classes.call(this);
        }
    }
}));
//# sourceMappingURL=button-group.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VCarousel/VCarousel.js
// Styles

// Extensions

// Components


// Mixins
// TODO: Move this into core components v2.0

// Utilities


/* harmony default export */ var VCarousel = (VWindow.extend({
    name: 'v-carousel',
    props: {
        cycle: {
            type: Boolean,
            default: true
        },
        delimiterIcon: {
            type: String,
            default: '$vuetify.icons.delimiter'
        },
        height: {
            type: [Number, String],
            default: 500
        },
        hideControls: Boolean,
        hideDelimiters: Boolean,
        interval: {
            type: [Number, String],
            default: 6000,
            validator: function validator(value) {
                return value > 0;
            }
        },
        mandatory: {
            type: Boolean,
            default: true
        },
        nextIcon: {
            type: [Boolean, String],
            default: '$vuetify.icons.next'
        },
        prevIcon: {
            type: [Boolean, String],
            default: '$vuetify.icons.prev'
        }
    },
    data: function data() {
        return {
            changedByDelimiters: false,
            internalHeight: this.height,
            slideTimeout: undefined
        };
    },

    computed: {
        isDark: function isDark() {
            return this.dark || !this.light;
        }
    },
    watch: {
        internalValue: function internalValue(val) {
            this.restartTimeout();
            /* @deprecate */
            /* istanbul ignore else */
            if (!this.$listeners['input']) return;
            this.$emit('input', val);
        },

        interval: 'restartTimeout',
        height: function height(val, oldVal) {
            if (val === oldVal || !val) return;
            this.internalHeight = val;
        },
        cycle: function cycle(val) {
            if (val) {
                this.restartTimeout();
            } else {
                clearTimeout(this.slideTimeout);
                this.slideTimeout = undefined;
            }
        }
    },
    mounted: function mounted() {
        /* @deprecate */
        /* istanbul ignore next */
        if (this.$listeners['input']) {
            deprecate('@input', '@change', this);
        }
        this.startTimeout();
    },

    methods: {
        genDelimiters: function genDelimiters() {
            return this.$createElement('div', {
                staticClass: 'v-carousel__controls'
            }, [this.genItems()]);
        },
        genIcon: function genIcon(direction, icon, fn) {
            var _this = this;

            return this.$createElement('div', {
                staticClass: 'v-carousel__' + direction
            }, [this.$createElement(components_VBtn, {
                props: {
                    icon: true
                },
                attrs: {
                    'aria-label': this.$vuetify.t('$vuetify.carousel.' + direction)
                },
                on: {
                    click: function click() {
                        _this.changedByDelimiters = true;
                        fn();
                    }
                }
            }, [this.$createElement(components_VIcon, {
                props: { 'size': '46px' }
            }, icon)])]);
        },
        genIcons: function genIcons() {
            var icons = [];
            var prevIcon = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
            if (prevIcon && typeof prevIcon === 'string') {
                icons.push(this.genIcon('prev', prevIcon, this.prev));
            }
            var nextIcon = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
            if (nextIcon && typeof nextIcon === 'string') {
                icons.push(this.genIcon('next', nextIcon, this.next));
            }
            return icons;
        },
        genItems: function genItems() {
            var _this2 = this;

            var length = this.items.length;
            var children = [];
            for (var i = 0; i < length; i++) {
                var child = this.$createElement(components_VBtn, {
                    class: {
                        'v-carousel__controls__item': true
                    },
                    props: {
                        icon: true,
                        small: true,
                        value: this.getValue(this.items[i], i)
                    }
                }, [this.$createElement(components_VIcon, {
                    props: { size: 18 }
                }, this.delimiterIcon)]);
                children.push(child);
            }
            return this.$createElement(button_group, {
                props: {
                    value: this.internalValue
                },
                on: {
                    change: function change(val) {
                        _this2.internalValue = val;
                    }
                }
            }, children);
        },
        restartTimeout: function restartTimeout() {
            this.slideTimeout && clearTimeout(this.slideTimeout);
            this.slideTimeout = undefined;
            var raf = requestAnimationFrame || setTimeout;
            raf(this.startTimeout);
        },
        startTimeout: function startTimeout() {
            if (!this.cycle) return;
            this.slideTimeout = window.setTimeout(this.next, +this.interval > 0 ? +this.interval : 6000);
        },
        updateReverse: function updateReverse(val, oldVal) {
            if (this.changedByDelimiters) {
                this.changedByDelimiters = false;
                return;
            }
            VWindow.options.methods.updateReverse.call(this, val, oldVal);
        }
    },
    render: function render(h) {
        var children = [];
        var data = {
            staticClass: 'v-window v-carousel',
            style: {
                height: convertToUnit(this.height)
            },
            directives: []
        };
        if (!this.touchless) {
            data.directives.push({
                name: 'touch',
                value: {
                    left: this.next,
                    right: this.prev
                }
            });
        }
        if (!this.hideControls) {
            children.push(this.genIcons());
        }
        if (!this.hideDelimiters) {
            children.push(this.genDelimiters());
        }
        return h('div', data, [this.genContainer(), children]);
    }
}));
//# sourceMappingURL=VCarousel.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/mixins/bootable.js

/**
 * Bootable
 * @mixin
 *
 * Used to add lazy content functionality to components
 * Looks for change in "isActive" to automatically boot
 * Otherwise can be set manually
 */
/* @vue/component */
/* harmony default export */ var bootable = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend().extend({
    name: 'bootable',
    props: {
        lazy: Boolean
    },
    data: function data() {
        return {
            isBooted: false
        };
    },
    computed: {
        hasContent: function hasContent() {
            return this.isBooted || !this.lazy || this.isActive;
        }
    },
    watch: {
        isActive: function isActive() {
            this.isBooted = true;
        }
    },
    methods: {
        showLazyContent: function showLazyContent(content) {
            return this.hasContent ? content : undefined;
        }
    }
}));
//# sourceMappingURL=bootable.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VWindow/VWindowItem.js
// Mixins


// Directives

// Utilities


/* harmony default export */ var VWindowItem = (mixins(bootable, groupable_factory('windowGroup', 'v-window-item', 'v-window')
/* @vue/component */
).extend({
    name: 'v-window-item',
    directives: {
        Touch: touch
    },
    props: {
        reverseTransition: {
            type: [Boolean, String],
            default: undefined
        },
        transition: {
            type: [Boolean, String],
            default: undefined
        },
        value: {
            required: false
        }
    },
    data: function data() {
        return {
            done: null,
            isActive: false,
            wasCancelled: false
        };
    },

    computed: {
        computedTransition: function computedTransition() {
            if (!this.windowGroup.internalReverse) {
                return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
            }
            return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
        }
    },
    mounted: function mounted() {
        this.$el.addEventListener('transitionend', this.onTransitionEnd, false);
    },
    beforeDestroy: function beforeDestroy() {
        this.$el.removeEventListener('transitionend', this.onTransitionEnd, false);
    },

    methods: {
        genDefaultSlot: function genDefaultSlot() {
            return this.$slots.default;
        },
        onAfterEnter: function onAfterEnter() {
            var _this = this;

            if (this.wasCancelled) {
                this.wasCancelled = false;
                return;
            }
            requestAnimationFrame(function () {
                _this.windowGroup.internalHeight = undefined;
                _this.windowGroup.isActive = false;
            });
        },
        onBeforeEnter: function onBeforeEnter() {
            this.windowGroup.isActive = true;
        },
        onLeave: function onLeave(el) {
            this.windowGroup.internalHeight = convertToUnit(el.clientHeight);
        },
        onEnterCancelled: function onEnterCancelled() {
            this.wasCancelled = true;
        },
        onEnter: function onEnter(el, done) {
            var _this2 = this;

            var isBooted = this.windowGroup.isBooted;
            if (isBooted) this.done = done;
            requestAnimationFrame(function () {
                if (!_this2.computedTransition) return done();
                _this2.windowGroup.internalHeight = convertToUnit(el.clientHeight);
                // On initial render, there is no transition
                // Vue leaves a `enter` transition class
                // if done is called too fast
                !isBooted && setTimeout(done, 100);
            });
        },
        onTransitionEnd: function onTransitionEnd(e) {
            // This ensures we only call done
            // when the element transform
            // completes
            if (e.propertyName !== 'transform' || e.target !== this.$el || !this.done) return;
            this.done();
            this.done = null;
        }
    },
    render: function render(h) {
        var div = h('div', {
            staticClass: 'v-window-item',
            directives: [{
                name: 'show',
                value: this.isActive
            }],
            on: this.$listeners
        }, this.showLazyContent(this.genDefaultSlot()));
        return h('transition', {
            props: {
                name: this.computedTransition
            },
            on: {
                afterEnter: this.onAfterEnter,
                beforeEnter: this.onBeforeEnter,
                leave: this.onLeave,
                enter: this.onEnter,
                enterCancelled: this.onEnterCancelled
            }
        }, [div]);
    }
}));
//# sourceMappingURL=VWindowItem.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js
var VCarouselItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Extensions

// Components

/* @vue/component */
/* harmony default export */ var VCarouselItem = (VWindowItem.extend({
    name: 'v-carousel-item',
    inheritAttrs: false,
    methods: {
        genDefaultSlot: function genDefaultSlot() {
            return [this.$createElement(VImg, {
                staticClass: 'v-carousel__item',
                props: VCarouselItem_extends({}, this.$attrs, {
                    height: this.windowGroup.internalHeight
                }),
                on: this.$listeners
            }, this.$slots.default)];
        },
        onBeforeEnter: function onBeforeEnter() {},
        onEnter: function onEnter() {},
        onAfterEnter: function onAfterEnter() {},
        onBeforeLeave: function onBeforeLeave() {},
        onEnterCancelled: function onEnterCancelled() {}
    }
}));
//# sourceMappingURL=VCarouselItem.js.map
// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/Hero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Components


/* harmony default export */ var Herovue_type_script_lang_js_ = ({
  name: 'AlphaHero',

  components: {
    VCarousel: VCarousel,
    VCarouselItem: VCarouselItem
  },

  inheritAttrs: false,

  props: {
    delimiterIcon: {
      type: String,
      default: 'mdi-minus'
    },
    gradient: {
      type: String,
      default: undefined
    },
    height: {
      type: [Number, String],
      default: 600
    },
    hideControls: {
      type: Boolean,
      default: false
    },
    hideDelimiters: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => ([])
    },
    timeout: {
      type: [Number, String],
      default: 10000
    }
  }
});

// CONCATENATED MODULE: ./src/components/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Hero.vue





/* normalize component */

var Hero_component = normalizeComponent(
  components_Herovue_type_script_lang_js_,
  Herovue_type_template_id_6f48a5f1_render,
  Herovue_type_template_id_6f48a5f1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Hero_component.options.__file = "Hero.vue"
/* harmony default export */ var Hero = (Hero_component.exports);

/* vuetify-loader */



installComponents_default()(Hero_component, {VCarousel: VCarousel,VCarouselItem: VCarouselItem})

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"46e6b0d9-vue-loader-template"}!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/ListFeature.vue?vue&type=template&id=53ddae66&
var ListFeaturevue_type_template_id_53ddae66_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"grid-list-xl":""}},[_c('v-layout',{attrs:{"wrap":""}},_vm._l((_vm.features),function(feature,i){return _c('v-flex',{key:i,attrs:{"xs12":"","sm6":"","md4":""}},[_c('v-card',{staticClass:"transparent",attrs:{"flat":""}},[_c('v-layout',[_c('v-flex',{attrs:{"xs2":""}},[_c('v-icon',{staticClass:"primary--text"},[_vm._v("\n              "+_vm._s(feature.icon)+"\n            ")])],1),_c('v-flex',[_c('div',{staticClass:"subheading mb-3"},[_c('strong',{domProps:{"textContent":_vm._s(feature.title)}})]),_c('p',{domProps:{"innerHTML":_vm._s(feature.text)}})])],1)],1)],1)}),1)],1)}
var ListFeaturevue_type_template_id_53ddae66_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ListFeature.vue?vue&type=template&id=53ddae66&

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/ListFeature.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ListFeaturevue_type_script_lang_js_ = ({
  name: 'AlphaListFeature',

  props: {
    features: {
      type: Array,
      default: () => []
    }
  }
});

// CONCATENATED MODULE: ./src/components/ListFeature.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ListFeaturevue_type_script_lang_js_ = (ListFeaturevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ListFeature.vue





/* normalize component */

var ListFeature_component = normalizeComponent(
  components_ListFeaturevue_type_script_lang_js_,
  ListFeaturevue_type_template_id_53ddae66_render,
  ListFeaturevue_type_template_id_53ddae66_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ListFeature_component.options.__file = "ListFeature.vue"
/* harmony default export */ var ListFeature = (ListFeature_component.exports);

/* vuetify-loader */






installComponents_default()(ListFeature_component, {VCard: VCard,VContainer: VContainer,VFlex: VFlex,VIcon: VIcon_VIcon,VLayout: VLayout})

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"46e6b0d9-vue-loader-template"}!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/Testimonial.vue?vue&type=template&id=be0c90ac&
var Testimonialvue_type_template_id_be0c90ac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alpha-testimonial",class:[_vm.dark ? 'alpha-testimonial--dark' : '']},[_c('div',{staticClass:"alpha-testimonial__content"},[_c('v-icon',{staticClass:"primary--text",attrs:{"x-large":"","dark":_vm.dark}},[_vm._v("\n      mdi-format-quote-open\n    ")]),_c('p',{domProps:{"textContent":_vm._s(_vm.quote)}})],1),_c('footer',[_c('div',{staticClass:"alpha-testimonial__footer-bar",class:[_vm.dark ? 'white' : 'primary']}),_c('div',{staticClass:"headline",domProps:{"textContent":_vm._s(_vm.author)}}),_c('div',{staticClass:"title",domProps:{"textContent":_vm._s(_vm.title)}})])])}
var Testimonialvue_type_template_id_be0c90ac_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Testimonial.vue?vue&type=template&id=be0c90ac&

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/vuetify-loader/lib/loader.js!C:/Users/johnj/Sites/john/alpha-theme/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/johnj/Sites/john/alpha-theme/node_modules/vue-loader/lib??vue-loader-options!./src/components/Testimonial.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Testimonialvue_type_script_lang_js_ = ({
  props: {
    author: {
      type: String,
      default: ''
    },
    dark: Boolean,
    quote: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
});

// CONCATENATED MODULE: ./src/components/Testimonial.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Testimonialvue_type_script_lang_js_ = (Testimonialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Testimonial.vue?vue&type=style&index=0&lang=stylus&
var Testimonialvue_type_style_index_0_lang_stylus_ = __webpack_require__("1f2a");

// CONCATENATED MODULE: ./src/components/Testimonial.vue






/* normalize component */

var Testimonial_component = normalizeComponent(
  components_Testimonialvue_type_script_lang_js_,
  Testimonialvue_type_template_id_be0c90ac_render,
  Testimonialvue_type_template_id_be0c90ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Testimonial_component.options.__file = "Testimonial.vue"
/* harmony default export */ var Testimonial = (Testimonial_component.exports);

/* vuetify-loader */


installComponents_default()(Testimonial_component, {VIcon: VIcon_VIcon})

// CONCATENATED MODULE: ./src/index.js







function install (Vue) {
  Vue.component('alpha-card-feature', CardFeature)
  Vue.component('alpha-footer', Footer)
  Vue.component('alpha-gallery', Gallery)
  Vue.component('alpha-hero', Hero)
  Vue.component('alpha-list-feature', ListFeature)
  Vue.component('alpha-testimonial', Testimonial)
}

// CONCATENATED MODULE: C:/Users/johnj/Sites/john/alpha-theme/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (install);



/***/ }),

/***/ "1f2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("22a6");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonial_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "22a6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7061":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_4fd34b64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcfb");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_4fd34b64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_4fd34b64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_4fd34b64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "72c4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "76f0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9351":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "957c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9eca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ad21":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c377":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cb13":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ce95":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d7f1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "db04":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dcfb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ee86":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("957c");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ef6b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f923":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=alpha.common.js.map
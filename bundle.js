/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template: .3fr 2fr .1fr / 1fr 5fr;\r\n    height: 100vh;\r\n}\r\n\r\n.header,\r\n.footer {\r\n    display: flex;\r\n    align-items: center;\r\n    grid-column: 1 / -1;\r\n    background-color: #003153;\r\n}\r\n\r\n.header h1 {\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    font-weight: 1000;\r\n    font-size: 50px;\r\n    margin-left: 24px;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.sidebar {\r\n    background-color: gainsboro;\r\n    min-width: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.add-project,\r\n.view-projects {\r\n    align-self: center;\r\n    margin-top: 10px;\r\n    font-size: 16px;\r\n}\r\n\r\n.add-todo {\r\n    width: 200px; height: 40px;\r\n    align-items: start;\r\n    margin-top: 10px;\r\n}\r\n\r\n.projects-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.projects-list button {\r\n    font-size: 20px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border: none;\r\n    border-radius: 6px;\r\n}\r\n\r\n.projects-list button:hover {\r\n    border: 1px solid black;\r\n}\r\n\r\n.sidebar button {\r\n    width: 90%; height: 50px;\r\n}\r\n\r\n.main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 16px;\r\n    background-color: #FCFBF4;\r\n}\r\n\r\n.todo-item {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    align-items: center;\r\n    justify-content: start;\r\n    height: 60px;\r\n    padding: 0px 20px;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    background-color: #FCFBF4;\r\n    margin-top: 16px;\r\n    font-size: 20px;\r\n}\r\n\r\n.todo-item input[type='checkbox'] {\r\n    height: 30px; width: 30px;\r\n}\r\n\r\n.btn-remove-todo {\r\n    height: 30px; width: 30px;\r\n    font-size: 25px;\r\n    border: 1px solid black;\r\n    background-color: red;\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 900;\r\n}\r\n\r\ndialog {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\ndialog form {\r\n    height: 350px; width: 250px;\r\n    display: grid;\r\n    grid-template: repeat(5, 1fr) / 1fr;\r\n    padding: 30px;\r\n    gap: 16px;\r\n    font-size: 14px;\r\n}\r\n\r\nform input,\r\nform button,\r\nform textarea,\r\nform select {\r\n    width: 100%;\r\n}\r\n\r\n.project-overview {\r\n    font-size: 20px;\r\n    \r\n}\r\n\r\n.project-overview ul {\r\n    margin-left: 20px;\r\n}\r\n\r\n.project-overview h3 {\r\n    font-size: 30px;\r\n    margin: 10px 0px 16px 0px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom-manipulator.js":
/*!********************************!*\
  !*** ./src/dom-manipulator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMManipulator: () => (/* binding */ DOMManipulator)\n/* harmony export */ });\n/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-listeners */ \"./src/event-listeners.js\");\n/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-manager */ \"./src/storage-manager.js\");\n\r\n\r\n\r\nclass DOMManipulator {\r\n\r\n    constructor() {\r\n        this.projectsDiv = document.querySelector('.projects-list');\r\n        this.todoDiv = document.querySelector('.todo-list');\r\n    }\r\n\r\n    buildElement(tag, classToAdd = \"\", textContent = \"\", child = null) {\r\n        const element = document.createElement(tag);\r\n        element.classList = classToAdd;\r\n        element.textContent = textContent;\r\n        if(child !== null) {\r\n            element.appendChild(child);\r\n        }\r\n\r\n        return element;\r\n    }\r\n\r\n    buildTodoItem(todoObj, index) {\r\n        const todoItem = this.buildElement('div', 'todo-item');\r\n        todoItem.setAttribute('index', index);\r\n        const projectName = document.querySelector('.project-name').textContent;\r\n\r\n        const checkbox = document.createElement('input');\r\n        checkbox.setAttribute('type', 'checkbox')\r\n        this.addToDom(todoItem, checkbox);\r\n        this.addToDom(todoItem, this.buildElement('h3', null, todoObj.title));\r\n        this.addToDom(todoItem, this.buildElement('p', null, todoObj.dueDate));\r\n        this.addToDom(todoItem, this.buildElement('p', todoObj.priority, \"Priority: \" + todoObj.priority));\r\n\r\n        const removeButton = this.buildElement('button', 'btn-remove-todo', 'x');\r\n        removeButton.addEventListener('click', () => {\r\n            //on click, remove todo from storage and call loadTodos to refresh\r\n            _storage_manager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.removeTodoFromStorage(todoObj, projectName);\r\n            this.loadTodos(projectName);\r\n        });\r\n\r\n        this.addToDom(todoItem, removeButton);\r\n\r\n        todoItem.addEventListener('dblclick', (e) => {\r\n            let index;\r\n            if(e.target.attributes.index === undefined) {\r\n                index = e.target.parentElement.attributes.index.value;\r\n            } else {\r\n                index = e.target.attributes.index.value;\r\n            }\r\n\r\n            document.getElementById('title').value = todoObj.title, \r\n            document.getElementById('description').value = todoObj.description, \r\n            document.getElementById('due-date').value = todoObj.dueDate, \r\n            document.getElementById('priority').value = todoObj.priority, \r\n            document.getElementById('notes').value = todoObj.notes;\r\n            (0,_event_listeners__WEBPACK_IMPORTED_MODULE_0__.showTodoForm)('edit', index);\r\n\r\n        });\r\n\r\n        return todoItem;\r\n    }\r\n\r\n\r\n    addToDom(parent, child) {\r\n        parent.appendChild(child);\r\n    }\r\n\r\n    loadProjects() {\r\n        const projectsList = this.getProjectsList();\r\n        const addTodo = document.querySelector('#add-todo');\r\n\r\n        //clear before loading\r\n        this.projectsDiv.innerHTML = \"\";\r\n    \r\n        for(let project of projectsList) {\r\n            const projectButton = this.buildElement('button', 'project', project);\r\n            projectButton.addEventListener('click', () => {\r\n                this.setProjectName(project);\r\n                this.loadTodos(project);\r\n                addTodo.classList.remove('hide');\r\n            });\r\n\r\n            this.addToDom(this.projectsDiv, projectButton);\r\n            \r\n        }\r\n    }\r\n\r\n    loadTodos(project) {\r\n        const todoList = this.getTodoList(project);\r\n        this.setProjectName(project);\r\n\r\n        this.todoDiv.innerHTML = '';\r\n        if(!todoList) return;\r\n        //index added to track todo items for update functionality\r\n        let index = 0;\r\n        for(let todo of todoList) {\r\n            this.addToDom(this.todoDiv, this.buildTodoItem(todo, index));\r\n            index++;\r\n        }\r\n    }\r\n\r\n    getProjectsList() {\r\n        return Object.keys(JSON.parse(_storage_manager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.retrieve()));\r\n    }\r\n\r\n    getTodoList(project) {\r\n        const todoList = JSON.parse(_storage_manager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.retrieve())[project];\r\n\r\n        return todoList;\r\n    }\r\n\r\n    setProjectName(name) {\r\n        const h2 = document.querySelector('.project-name');\r\n        h2.textContent = name;\r\n    }\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/dom-manipulator.js?");

/***/ }),

/***/ "./src/event-listeners.js":
/*!********************************!*\
  !*** ./src/event-listeners.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   showTodoForm: () => (/* binding */ showTodoForm),\n/* harmony export */   viewProjects: () => (/* binding */ viewProjects)\n/* harmony export */ });\n/* harmony import */ var _initialize_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize-page */ \"./src/initialize-page.js\");\n/* harmony import */ var _todo_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-creator */ \"./src/todo-creator.js\");\n/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-manager */ \"./src/storage-manager.js\");\n/* harmony import */ var _dom_manipulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-manipulator */ \"./src/dom-manipulator.js\");\n\r\n\r\n\r\n\r\n\r\nfunction addProject() {\r\n    //add to localStorage AND add to dom\r\n    //OR add to local storage and REFRESH projects-list\r\n    let newProject = prompt('Please enter name for the new Project:');\r\n\r\n    if(newProject !== null) {\r\n        const projElement = _initialize_page__WEBPACK_IMPORTED_MODULE_0__.importer.projectHandler.createProject(newProject);\r\n        const storageData = JSON.parse(_storage_manager__WEBPACK_IMPORTED_MODULE_2__.StorageManager.retrieve());\r\n        _storage_manager__WEBPACK_IMPORTED_MODULE_2__.StorageManager.save(JSON.stringify({ ...storageData, ...projElement }));\r\n    \r\n        _initialize_page__WEBPACK_IMPORTED_MODULE_0__.importer.domHandler.loadProjects();\r\n    }\r\n    \r\n}\r\n\r\nfunction clearForm() {\r\n    //clear fields\r\n    document.getElementById('title').value = '';\r\n    document.getElementById('description').value = '';\r\n    document.getElementById('due-date').value = '';\r\n    document.getElementById('priority').value = '';\r\n    document.getElementById('notes').value = '';   \r\n}\r\n\r\nfunction showTodoForm(mode, index) {\r\n    const todoForm = document.querySelector(\"dialog\");\r\n\r\n    //change what submit does depending on mode\r\n    const formBtn = document.querySelector('.submit-todo');\r\n    const newBtn = formBtn.cloneNode(true);\r\n    //clone to remove all listeners\r\n    formBtn.parentElement.replaceChild(newBtn, formBtn);\r\n\r\n    if(mode === 'create') {\r\n        clearForm();\r\n        newBtn.addEventListener('click', addTodo);\r\n    } else if(mode === 'edit') {\r\n        newBtn.addEventListener('click', (e) => _storage_manager__WEBPACK_IMPORTED_MODULE_2__.StorageManager.editTodo(index));\r\n    }\r\n    todoForm.showModal();\r\n}\r\n\r\nfunction viewProjects() {\r\n\r\n    //todo-list to get child div for all projects\r\n    const todoDiv = document.querySelector('.todo-list');\r\n    const addTodo = document.querySelector('.add-todo');\r\n    const projectsList = _initialize_page__WEBPACK_IMPORTED_MODULE_0__.importer.domHandler.getProjectsList();\r\n\r\n    _initialize_page__WEBPACK_IMPORTED_MODULE_0__.importer.domHandler.setProjectName('All Projects');\r\n    todoDiv.innerHTML = '';\r\n    addTodo.classList.add('hide');\r\n\r\n    for(let project of projectsList) {\r\n        let todoList = _initialize_page__WEBPACK_IMPORTED_MODULE_0__.importer.domHandler.getTodoList(project);\r\n        todoDiv.appendChild(createProjectElement(project, todoList));\r\n    }\r\n\r\n}\r\n\r\nfunction createProjectElement(project, todoList) {\r\n    const builder = new _dom_manipulator__WEBPACK_IMPORTED_MODULE_3__.DOMManipulator();\r\n    const projectElement = builder.buildElement('div', 'project-overview');\r\n    const ul = builder.buildElement('ul');\r\n\r\n    for(let i = 0; i < todoList.length; i++) {\r\n        ul.appendChild(builder.buildElement('li', '', todoList[i]['title']));\r\n    }\r\n\r\n    projectElement.appendChild(builder.buildElement('h3', '', project));\r\n    projectElement.appendChild(ul);\r\n\r\n    return projectElement;  \r\n}\r\n\r\n\r\nfunction addTodo() {\r\n    const newTodo = (0,_todo_creator__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\r\n        document.getElementById('title').value, \r\n        document.getElementById('description').value, \r\n        document.getElementById('due-date').value, \r\n        document.getElementById('priority').value, \r\n        document.getElementById('notes').value\r\n    );\r\n    let projectName = document.querySelector('.project-name').textContent;\r\n\r\n    //to add todo to project\r\n    _initialize_page__WEBPACK_IMPORTED_MODULE_0__.importer.projectHandler.addToProject(projectName, newTodo);\r\n    _initialize_page__WEBPACK_IMPORTED_MODULE_0__.importer.domHandler.loadTodos(projectName);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/event-listeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _initialize_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialize-page */ \"./src/initialize-page.js\");\n\r\n\r\n\r\n(0,_initialize_page__WEBPACK_IMPORTED_MODULE_1__.initializePage)();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initialize-page.js":
/*!********************************!*\
  !*** ./src/initialize-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   importer: () => (/* binding */ importer),\n/* harmony export */   initializePage: () => (/* binding */ initializePage)\n/* harmony export */ });\n/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ \"./src/project-manager.js\");\n/* harmony import */ var _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulator */ \"./src/dom-manipulator.js\");\n/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-manager */ \"./src/storage-manager.js\");\n/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-listeners */ \"./src/event-listeners.js\");\n\r\n\r\n\r\n\r\n\r\nconst importer = new class {\r\n    constructor() {\r\n        this.projectHandler = new _project_manager__WEBPACK_IMPORTED_MODULE_0__.ProjectManager();\r\n        this.domHandler = new _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__.DOMManipulator();\r\n    }\r\n};\r\n\r\nfunction initializePage() {\r\n    createInitialProject();\r\n    setListeners();\r\n    setPageContent();\r\n}\r\n\r\nfunction createInitialProject() {\r\n    //projects list starts empty, creates 'Today' (default) on first run\r\n    const storageItem = _storage_manager__WEBPACK_IMPORTED_MODULE_2__.StorageManager.retrieve();\r\n\r\n    if(!storageItem || Object.keys(storageItem) === 0) \r\n        _storage_manager__WEBPACK_IMPORTED_MODULE_2__.StorageManager.save(JSON.stringify(importer.projectHandler.createProject(\"Today\")));\r\n\r\n}\r\n\r\nfunction setListeners() {\r\n    const btnAddProject = document.querySelector('.add-project');\r\n    const btnAddTodo = document.querySelector('.add-todo');\r\n    const btnSubmitTodo = document.querySelector('.submit-todo');\r\n    const btnViewProjects = document.querySelector('.view-projects');\r\n\r\n    btnAddProject.addEventListener('click', _event_listeners__WEBPACK_IMPORTED_MODULE_3__.addProject);\r\n    btnAddTodo.addEventListener('click', () => {\r\n        (0,_event_listeners__WEBPACK_IMPORTED_MODULE_3__.showTodoForm)('create')\r\n    });\r\n    btnSubmitTodo.addEventListener('click', _event_listeners__WEBPACK_IMPORTED_MODULE_3__.addTodo);\r\n    btnViewProjects.addEventListener('click', _event_listeners__WEBPACK_IMPORTED_MODULE_3__.viewProjects);\r\n\r\n}\r\n\r\n//checks localstorage for content then displays on page\r\nfunction setPageContent() {\r\n    const DEFAULT_PROJECT = 'Today';\r\n\r\n    importer.domHandler.loadProjects();\r\n    importer.domHandler.loadTodos(DEFAULT_PROJECT);\r\n    importer.domHandler.setProjectName(DEFAULT_PROJECT);\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/initialize-page.js?");

/***/ }),

/***/ "./src/project-manager.js":
/*!********************************!*\
  !*** ./src/project-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager)\n/* harmony export */ });\n/* harmony import */ var _initialize_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize-page */ \"./src/initialize-page.js\");\n/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-manager */ \"./src/storage-manager.js\");\n/* harmony import */ var _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manipulator */ \"./src/dom-manipulator.js\");\n\r\n\r\n\r\n\r\nclass ProjectManager {\r\n\r\n    createProject(name) {\r\n        return { \r\n            [name]: [],\r\n        };\r\n    }\r\n\r\n    addToProject(project, todo) {\r\n        //alert(`add ${JSON.stringify(todo)} to ${project}`);\r\n        //parse, edit then stringify before saving to storage\r\n        const projectList = JSON.parse(_storage_manager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.retrieve());\r\n        projectList[project].push(todo);\r\n\r\n        _storage_manager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.save(JSON.stringify(projectList));\r\n\r\n        new _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__.DOMManipulator().loadTodos();\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/project-manager.js?");

/***/ }),

/***/ "./src/storage-manager.js":
/*!********************************!*\
  !*** ./src/storage-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StorageManager: () => (/* binding */ StorageManager)\n/* harmony export */ });\n/* harmony import */ var _todo_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-creator */ \"./src/todo-creator.js\");\n/* harmony import */ var _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulator */ \"./src/dom-manipulator.js\");\n\r\n\r\n\r\nclass StorageManager {\r\n    //only uses 1 localstorage item for entire app\r\n    static STORAGE_ITEM_NAME = \"todo-main-item\";\r\n\r\n    static save(newItem) {\r\n        localStorage.setItem(this.STORAGE_ITEM_NAME, newItem);\r\n    }\r\n\r\n    static retrieve() {\r\n        return localStorage.getItem(this.STORAGE_ITEM_NAME);\r\n    }\r\n\r\n    static editTodo(index) {\r\n        const storedContent = JSON.parse(StorageManager.retrieve());\r\n        let projectName = document.querySelector('.project-name').textContent;\r\n        \r\n        const newTodo = (0,_todo_creator__WEBPACK_IMPORTED_MODULE_0__.createTodo)(\r\n            document.getElementById('title').value, \r\n            document.getElementById('description').value, \r\n            document.getElementById('due-date').value, \r\n            document.getElementById('priority').value, \r\n            document.getElementById('notes').value\r\n        );\r\n\r\n        storedContent[projectName][index] = newTodo;\r\n        this.save(JSON.stringify(storedContent));\r\n\r\n       new _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__.DOMManipulator().loadTodos(projectName);\r\n    }\r\n\r\n    static removeTodoFromStorage(todo, project) {\r\n        //logic for removing todo\r\n        const storedContent = JSON.parse(this.retrieve());\r\n        const todoList = storedContent[project];\r\n\r\n        for(let obj of storedContent[project]) {\r\n            if(todo['title'] === obj['title']) {\r\n                todoList.splice(todoList.indexOf(obj),1); \r\n                this.save(JSON.stringify(storedContent)); \r\n            }\r\n        }\r\n    }\r\n\r\n    static removeProjectFromStorage(project) {\r\n        //logic for removing project\r\n        const storedContent = JSON.parse(this.retrieve());\r\n        delete storedContent[project];\r\n        this.save(JSON.stringify(storedContent));\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/storage-manager.js?");

/***/ }),

/***/ "./src/todo-creator.js":
/*!*****************************!*\
  !*** ./src/todo-creator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\n\r\n\r\nfunction createTodo(title, description, dueDate, priority, notes) {\r\n    return { title, description, dueDate, priority, notes };\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/todo-creator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
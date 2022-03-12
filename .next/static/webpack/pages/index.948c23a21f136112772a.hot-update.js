"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.throttle */ \"./node_modules/lodash.throttle/index.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo */ \"./components/header/logo/index.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mac/Documents/Code/slugs-homepage/components/header/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar HeaderTopLine = function HeaderTopLine(_ref) {\n  _s();\n\n  var className = _ref.className,\n      isShowStaking = _ref.isShowStaking,\n      buttonText = _ref.buttonText,\n      linkText = _ref.linkText;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      hasScrolled = _useState[0],\n      setHasScrolled = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isCollapse = _useState2[0],\n      setIsCollapse = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      hamburger = _useState3[0],\n      setHamburger = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function () {\n      var offset = 0;\n      var scrollTop = document.documentElement.scrollTop;\n      var scrolled = scrollTop > offset;\n\n      if (hasScrolled !== scrolled) {\n        setHasScrolled(scrolled);\n      }\n    }, 200);\n    document.addEventListener('scroll', handleScroll);\n    return function () {\n      document.removeEventListener('scroll', handleScroll);\n    };\n  }, [hasScrolled]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper), hasScrolled ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().floatingNav) : ''),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().leftBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_5__.default, {\n        black: false\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rightBox),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().links), isCollapse ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().expandedMenu) : ''),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n          href: \"https://docs.slugsdao.xyz/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n            target: \"_blank\",\n            children: \"Documentation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n          href: \"\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n            target: \"_blank\",\n            children: \"Events\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n          href: \"\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n            target: \"_blank\",\n            children: \"Calendar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n          href: \"https://www.digitalax.xyz/engineering\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n            target: \"_blank\",\n            children: \"Web3 Syncopation Residency\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), hamburger ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mobileMenu),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"https://docs.slugsdao.xyz/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n          target: \"_blank\",\n          children: \"Documentation\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n          target: \"_blank\",\n          children: \"Events\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n          target: \"_blank\",\n          children: \"Calendar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"https://docs.slugsdao.xyz/core-form/web3-syncopation-residency\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n          target: \"_blank\",\n          children: \"Web3 Syncopation Residency\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HeaderTopLine, \"3IAwHf8C5nA/S6DfEEBQ5LHAMEE=\");\n\n_c = HeaderTopLine;\nHeaderTopLine.propTypes = {\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  isShowStaking: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  buttonText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  linkText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)\n};\nHeaderTopLine.defaultProps = {\n  className: '',\n  isShowStaking: false,\n  buttonText: 'SIGN IN',\n  linkText: 'Staking'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderTopLine);\n\nvar _c;\n\n$RefreshReg$(_c, \"HeaderTopLine\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkRELENBbkZEOztHQUFNQzs7S0FBQUE7QUFxRk5BLGFBQWEsQ0FBQzJCLFNBQWQsR0FBMEI7QUFDeEIxQixFQUFBQSxTQUFTLEVBQUVQLDBEQURhO0FBRXhCUSxFQUFBQSxhQUFhLEVBQUVSLHdEQUZTO0FBR3hCUyxFQUFBQSxVQUFVLEVBQUVULDBEQUhZO0FBSXhCVSxFQUFBQSxRQUFRLEVBQUVWLDBEQUFnQmtDO0FBSkYsQ0FBMUI7QUFPQTVCLGFBQWEsQ0FBQzhCLFlBQWQsR0FBNkI7QUFDM0I3QixFQUFBQSxTQUFTLEVBQUUsRUFEZ0I7QUFFM0JDLEVBQUFBLGFBQWEsRUFBRSxLQUZZO0FBRzNCQyxFQUFBQSxVQUFVLEVBQUUsU0FIZTtBQUkzQkMsRUFBQUEsUUFBUSxFQUFFO0FBSmlCLENBQTdCO0FBT0EsK0RBQWVKLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanM/NDMyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nbyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgSGVhZGVyVG9wTGluZSA9ICh7IGNsYXNzTmFtZSwgaXNTaG93U3Rha2luZywgYnV0dG9uVGV4dCwgbGlua1RleHQgfSkgPT4ge1xuICBjb25zdCBbaGFzU2Nyb2xsZWQsIHNldEhhc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ29sbGFwc2UsIHNldElzQ29sbGFwc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFtYnVyZ2VyLCBzZXRIYW1idXJnZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdGhyb3R0bGUoKCkgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gMDtcbiAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBzY3JvbGxlZCA9IHNjcm9sbFRvcCA+IG9mZnNldDtcblxuICAgICAgaWYgKGhhc1Njcm9sbGVkICE9PSBzY3JvbGxlZCkge1xuICAgICAgICBzZXRIYXNTY3JvbGxlZChzY3JvbGxlZCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW2hhc1Njcm9sbGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcy53cmFwcGVyLFxuICAgICAgICBoYXNTY3JvbGxlZCA/IHN0eWxlcy5mbG9hdGluZ05hdiA6ICcnXG4gICAgICApfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdEJveH0+XG4gICAgICAgIDxMb2dvIGJsYWNrPXtmYWxzZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodEJveH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMubGlua3MsIGlzQ29sbGFwc2UgPyBzdHlsZXMuZXhwYW5kZWRNZW51IDogJycpfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9kb2NzLnNsdWdzZGFvLnh5ei9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBFdmVudHNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIENhbGVuZGFyXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5kaWdpdGFsYXgueHl6L2VuZ2luZWVyaW5nXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIFdlYjMgU3luY29wYXRpb24gUmVzaWRlbmN5XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7aGFtYnVyZ2VyID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZU1lbnV9PlxuICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZG9jcy5zbHVnc2Rhby54eXovXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgRXZlbnRzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBDYWxlbmRhclxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9kb2NzLnNsdWdzZGFvLnh5ei9jb3JlLWZvcm0vd2ViMy1zeW5jb3BhdGlvbi1yZXNpZGVuY3lcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBXZWIzIFN5bmNvcGF0aW9uIFJlc2lkZW5jeVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhlYWRlclRvcExpbmUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzU2hvd1N0YWtpbmc6IFByb3BUeXBlcy5ib29sLFxuICBidXR0b25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsaW5rVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkhlYWRlclRvcExpbmUuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBpc1Nob3dTdGFraW5nOiBmYWxzZSxcbiAgYnV0dG9uVGV4dDogJ1NJR04gSU4nLFxuICBsaW5rVGV4dDogJ1N0YWtpbmcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyVG9wTGluZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwidGhyb3R0bGUiLCJjbiIsIkxpbmsiLCJMb2dvIiwic3R5bGVzIiwiSGVhZGVyVG9wTGluZSIsImNsYXNzTmFtZSIsImlzU2hvd1N0YWtpbmciLCJidXR0b25UZXh0IiwibGlua1RleHQiLCJoYXNTY3JvbGxlZCIsInNldEhhc1Njcm9sbGVkIiwiaXNDb2xsYXBzZSIsInNldElzQ29sbGFwc2UiLCJoYW1idXJnZXIiLCJzZXRIYW1idXJnZXIiLCJoYW5kbGVTY3JvbGwiLCJvZmZzZXQiLCJzY3JvbGxUb3AiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3cmFwcGVyIiwiZmxvYXRpbmdOYXYiLCJsZWZ0Qm94IiwicmlnaHRCb3giLCJsaW5rcyIsImV4cGFuZGVkTWVudSIsImxpbmsiLCJtb2JpbGVNZW51IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/index.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/my-nfts",{

/***/ "./pages/my-nfts.js":
/*!**************************!*\
  !*** ./pages/my-nfts.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ \"./artifacts/contracts/NFT.sol/NFT.json\");\n/* harmony import */ var _artifacts_contracts_Market_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/Market.sol/NFTMarket.json */ \"./artifacts/contracts/Market.sol/NFTMarket.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n// get the references of the addresses\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MyNFTs = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"not-loaded\"), loadingState = ref1[0], setLoadingState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadSoldNFTS();\n    }, []);\n    /*Load the the */ var loadSoldNFTS = function() {\n        var _ref = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, marketContract;\n            return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default());\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        _ctx.next = 6;\n                        return ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(connection);\n                    case 6:\n                        provider = _ctx.sent;\n                        _ctx.next = 9;\n                        return provider.getSigner();\n                    case 9:\n                        signer = _ctx.sent;\n                        marketContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_Market_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, signer);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function loadSoldNFTS() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Hello\"\n    }, void 0, false, {\n        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, _this));\n};\n_s(MyNFTs, \"Nqw+XtYQoLjeCkY/zbxMInMKbHA=\");\n_c = MyNFTs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (myNFTs);\nvar _c;\n$RefreshReg$(_c, \"MyNFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9teS1uZnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNWO0FBQ0U7QUFDUjtBQUV6QixFQUFzQztBQUNnQjtBQUVHO0FBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3JFLEdBQUssQ0FBQ1MsTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNsQixHQUFLLENBQW1CVCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTVCVSxJQUFJLEdBQWFWLEdBQVksS0FBdkJXLE9BQU8sR0FBSVgsR0FBWTtJQUNwQyxHQUFLLENBQW1DQSxJQUFzQixHQUF0QkEsK0NBQVEsQ0FBQyxDQUFZLGNBQXREWSxZQUFZLEdBQXFCWixJQUFzQixLQUF6Q2EsZUFBZSxHQUFJYixJQUFzQjtJQUU5REMsZ0RBQVMsQ0FBQyxRQUNkLEdBRG1CLENBQUM7UUFDWmEsWUFBWTtJQUNoQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosRUFBaUIsZ0JBQ2pCLEdBQUssQ0FBQ0EsWUFBWTs4UEFBRyxRQUFRLFdBQUksQ0FBQztnQkFFeEJDLFNBQVMsRUFDVEMsVUFBVSxFQUVWQyxRQUFRLEVBRVJDLE1BQU0sRUFHTkMsY0FBYzs7Ozt3QkFSZEosU0FBUyxHQUFHLEdBQUcsQ0FBQ1osa0RBQVM7OytCQUNOWSxTQUFTLENBQUNLLE9BQU87O3dCQUFwQ0osVUFBVTs7K0JBRU9kLGlFQUE2QixDQUFDYyxVQUFVOzt3QkFBekRDLFFBQVE7OytCQUVPQSxRQUFRLENBQUNNLFNBQVM7O3dCQUFqQ0wsTUFBTTt3QkFHTkMsY0FBYyxHQUFHLEdBQUcsQ0FBQ2pCLG1EQUFlLENBQUNHLHFEQUFnQixFQUFFRywrRUFBVSxFQUFFVSxNQUFNOzs7Ozs7UUFFbkYsQ0FBQzt3QkFaS0osWUFBWTs7OztJQWNsQixNQUFNLDZFQUNEWSxDQUFFO2tCQUFDLENBQUs7Ozs7OztBQUVqQixDQUFDO0dBMUJLakIsTUFBTTtLQUFOQSxNQUFNO0FBNEJaLCtEQUFla0IsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL215LW5mdHMuanM/OGQ3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBnZXQgdGhlIHJlZmVyZW5jZXMgb2YgdGhlIGFkZHJlc3Nlc1xyXG5pbXBvcnQge25mdG1hcmtldGFkZHJlc3MsIG5mdGFkZHJlc3N9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBORlQgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZULnNvbC9ORlQuanNvblwiO1xyXG5pbXBvcnQgTWFya2V0IGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL01hcmtldC5zb2wvTkZUTWFya2V0Lmpzb25cIjtcclxuXHJcblxyXG5jb25zdCBNeU5GVHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoXCJub3QtbG9hZGVkXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBsb2FkU29sZE5GVFMoKTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgLypMb2FkIHRoZSB0aGUgKi9cclxuICAgIGNvbnN0IGxvYWRTb2xkTkZUUyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjcmVhdGUgYW4gaW5zdGFuY2Ugb2Ygd2ViM1xyXG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWw7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgcHJvdmlkZXIgd2l0aCB0aGUgdXNlciBjb25uZWN0aW9uXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuICAgICAgICAvLyBnaXZlIHRoZSB1c2VyIHRoZSByaWdodCB0byBleGVjdXRlIGFuZCBzaWduIHRoZSB0cmFuc2FjdGlvblxyXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgdGhlIGluc3RhbmNlIG9mIGJvdGggc21hcnQgY29udHJhY3RcclxuICAgICAgICBjb25zdCBtYXJrZXRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0bWFya2V0YWRkcmVzcywgTWFya2V0LmFiaSwgc2lnbmVyKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGgxPkhlbGxvPC9oMT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXlORlRzO1xyXG5cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiV2ViM01vZGFsIiwiYXhpb3MiLCJuZnRtYXJrZXRhZGRyZXNzIiwibmZ0YWRkcmVzcyIsIk5GVCIsIk1hcmtldCIsIk15TkZUcyIsIm5mdHMiLCJzZXROZnRzIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwibG9hZFNvbGRORlRTIiwid2ViM01vZGFsIiwiY29ubmVjdGlvbiIsInByb3ZpZGVyIiwic2lnbmVyIiwibWFya2V0Q29udHJhY3QiLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJoMSIsIm15TkZUcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/my-nfts.js\n");

/***/ })

});
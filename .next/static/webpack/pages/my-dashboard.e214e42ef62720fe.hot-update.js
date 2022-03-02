"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/my-dashboard",{

/***/ "./pages/my-dashboard.js":
/*!*******************************!*\
  !*** ./pages/my-dashboard.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ \"./artifacts/contracts/NFT.sol/NFT.json\");\n/* harmony import */ var _artifacts_contracts_Market_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/Market.sol/NFTMarket.json */ \"./artifacts/contracts/Market.sol/NFTMarket.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MyDashboard = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), nfts = ref[0], setNFTS = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"not-loaded\"), loadingState = ref1[0], setLoadingState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadNfts();\n    });\n    // Load all the sold nft & the created nft\n    var loadNfts = function() {\n        var _ref1 = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var web3Modal, connection, provider, signer, marketContract, tokenContract, data, items, soldItems;\n            return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default());\n                        _ctx1.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx1.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        marketContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_Market_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, signer);\n                        tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftaddress, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx1.next = 10;\n                        return marketContract.fetchItemsCreated();\n                    case 10:\n                        data = _ctx1.sent;\n                        _ctx1.next = 13;\n                        return Promise.all(data.map(function() {\n                            var _ref = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                                var tokenUri, meta, price, item;\n                                return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return tokenContract.tokenURI(i.tokenId);\n                                        case 2:\n                                            tokenUri = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return axios__WEBPACK_IMPORTED_MODULE_4___default().get(tokenUri);\n                                        case 5:\n                                            meta = _ctx.sent;\n                                            price = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(i.price.toString(), \"ether\");\n                                            item = {\n                                                price: price,\n                                                tokenId: i.tokenId.toNumber(),\n                                                seller: i.seller,\n                                                owner: i.owner,\n                                                name: meta.data.name\n                                            };\n                                            return _ctx.abrupt(\"return\", item);\n                                        case 9:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(i) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()));\n                    case 13:\n                        items = _ctx1.sent;\n                        soldItems = items.filter(function(i) {\n                            return i.sold;\n                        });\n                        setNFTS(items);\n                        setLoadingState(\"loaded\");\n                    case 17:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function loadNfts() {\n            return _ref1.apply(this, arguments);\n        };\n    }();\n    if (loadingState === 'loaded' && !nfts.length) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"py-10 px-20 text-3xl\",\n        children: \"No NFTs listed\"\n    }, void 0, false, {\n        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-dashboard.js\",\n        lineNumber: 57,\n        columnNumber: 60\n    }, _this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Hi!\"\n    }, void 0, false, {\n        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-dashboard.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, _this));\n};\n_s(MyDashboard, \"Nqw+XtYQoLjeCkY/zbxMInMKbHA=\");\n_c = MyDashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyDashboard);\nvar _c;\n$RefreshReg$(_c, \"MyDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFHMUcsTUFBTSw2RUFDREQsQ0FBRTtrQkFBQyxDQUFHOzs7Ozs7QUFFZixDQUFDO0dBbkRLM0MsV0FBVztLQUFYQSxXQUFXO0FBcURqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teS1kYXNoYm9hcmQuanM/ZWU4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCB7bmZ0bWFya2V0YWRkcmVzcyxuZnRhZGRyZXNzfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgTkZUIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVC5zb2wvTkZULmpzb25cIjtcclxuaW1wb3J0IE1BUktFVCBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9NYXJrZXQuc29sL05GVE1hcmtldC5qc29uXCI7XHJcblxyXG5cclxuY29uc3QgTXlEYXNoYm9hcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25mdHMsIHNldE5GVFNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKFwibm90LWxvYWRlZFwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgbG9hZE5mdHMoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gTG9hZCBhbGwgdGhlIHNvbGQgbmZ0ICYgdGhlIGNyZWF0ZWQgbmZ0XHJcbiAgICBjb25zdCBsb2FkTmZ0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjcmVhdGUgYW4gaW5zdGFuY2Ugb2Ygd2ViMyBtb2RhbFxyXG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWw7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtldENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRtYXJrZXRhZGRyZXNzLCBNQVJLRVQuYWJpLCBzaWduZXIpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdGFkZHJlc3MsIE5GVC5hYmksIHNpZ25lcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtYXJrZXRDb250cmFjdC5mZXRjaEl0ZW1zQ3JlYXRlZCgpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEubWFwKGFzeW5jIGkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlblVyaSA9IGF3YWl0IHRva2VuQ29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKTtcclxuICAgICAgICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IGF4aW9zLmdldCh0b2tlblVyaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgICAgIHRva2VuSWQ6IGkudG9rZW5JZC50b051bWJlcigpLFxyXG4gICAgICAgICAgICAgICAgc2VsbGVyOiBpLnNlbGxlcixcclxuICAgICAgICAgICAgICAgIG93bmVyOiBpLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbWV0YS5kYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNvbGRJdGVtcyA9IGl0ZW1zLmZpbHRlcigoaSk9PiBpLnNvbGQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldE5GVFMoaXRlbXMpO1xyXG4gICAgICAgIHNldExvYWRpbmdTdGF0ZShcImxvYWRlZFwiKTtcclxuXHJcbiAgICB9XHJcbiAgICBpZiAobG9hZGluZ1N0YXRlID09PSAnbG9hZGVkJyAmJiAhbmZ0cy5sZW5ndGgpIHJldHVybiAoPGgxIGNsYXNzTmFtZT1cInB5LTEwIHB4LTIwIHRleHQtM3hsXCI+Tm8gTkZUcyBsaXN0ZWQ8L2gxPilcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGgxPkhpITwvaDE+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RGFzaGJvYXJkIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiV2ViM01vZGFsIiwiYXhpb3MiLCJuZnRtYXJrZXRhZGRyZXNzIiwibmZ0YWRkcmVzcyIsIk5GVCIsIk1BUktFVCIsIk15RGFzaGJvYXJkIiwibmZ0cyIsInNldE5GVFMiLCJsb2FkaW5nU3RhdGUiLCJzZXRMb2FkaW5nU3RhdGUiLCJsb2FkTmZ0cyIsIndlYjNNb2RhbCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsInNpZ25lciIsIm1hcmtldENvbnRyYWN0IiwidG9rZW5Db250cmFjdCIsImRhdGEiLCJpdGVtcyIsInNvbGRJdGVtcyIsImNvbm5lY3QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImFiaSIsImZldGNoSXRlbXNDcmVhdGVkIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImkiLCJ0b2tlblVyaSIsIm1ldGEiLCJwcmljZSIsIml0ZW0iLCJ0b2tlblVSSSIsInRva2VuSWQiLCJnZXQiLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9TdHJpbmciLCJ0b051bWJlciIsInNlbGxlciIsIm93bmVyIiwibmFtZSIsImZpbHRlciIsInNvbGQiLCJsZW5ndGgiLCJoMSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/my-dashboard.js\n");

/***/ })

});
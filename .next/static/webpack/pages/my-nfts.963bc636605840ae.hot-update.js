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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ \"./artifacts/contracts/NFT.sol/NFT.json\");\n/* harmony import */ var _artifacts_contracts_Market_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/Market.sol/NFTMarket.json */ \"./artifacts/contracts/Market.sol/NFTMarket.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n// get the references of the addresses\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MyNFTs = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"not-loaded\"), loadingState = ref1[0], setLoadingState = ref1[1];\n    console.log(nfts);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadSoldNFTS();\n    }, []);\n    /*Load the the */ var loadSoldNFTS = function() {\n        var _ref1 = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var web3Modal, connection, provider, signer, marketContract, tokenContract, data, items;\n            return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default());\n                        _ctx1.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx1.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        marketContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_Market_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, signer);\n                        tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftaddress, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx1.next = 10;\n                        return marketContract.fetchMyNFTs();\n                    case 10:\n                        data = _ctx1.sent;\n                        items = Promise.all(data.map(function() {\n                            var _ref = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                                var tokenUri, meta, price, item;\n                                return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return tokenContract.tokenURI(i.tokenId);\n                                        case 2:\n                                            tokenUri = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return axios__WEBPACK_IMPORTED_MODULE_4___default().get(tokenUri);\n                                        case 5:\n                                            meta = _ctx.sent;\n                                            console.log(meta);\n                                            price = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(i.price.toString(), \"ether\");\n                                            item = {\n                                                price: price,\n                                                tokenId: i.tokenId.toNumber(),\n                                                seller: i.seller,\n                                                owner: i.owner,\n                                                name: meta.data.name,\n                                                description: meta.data.description,\n                                                image: meta.data.image\n                                            };\n                                            return _ctx.abrupt(\"return\", item);\n                                        case 10:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(i) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()));\n                        setNfts(items);\n                        setLoadingState(\"loaded\");\n                    case 14:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function loadSoldNFTS() {\n            return _ref1.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Hello\"\n    }, void 0, false, {\n        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, _this));\n};\n_s(MyNFTs, \"Nqw+XtYQoLjeCkY/zbxMInMKbHA=\");\n_c = MyNFTs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyNFTs);\nvar _c;\n$RefreshReg$(_c, \"MyNFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFFakIsQ0FBQztHQXJESzNDLE1BQU07S0FBTkEsTUFBTTtBQXVEWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL215LW5mdHMuanM/OGQ3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBnZXQgdGhlIHJlZmVyZW5jZXMgb2YgdGhlIGFkZHJlc3Nlc1xyXG5pbXBvcnQge25mdG1hcmtldGFkZHJlc3MsIG5mdGFkZHJlc3N9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmltcG9ydCBORlQgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZULnNvbC9ORlQuanNvblwiO1xyXG5pbXBvcnQgTWFya2V0IGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL01hcmtldC5zb2wvTkZUTWFya2V0Lmpzb25cIjtcclxuXHJcblxyXG5jb25zdCBNeU5GVHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoXCJub3QtbG9hZGVkXCIpO1xyXG5jb25zb2xlLmxvZyhuZnRzKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBsb2FkU29sZE5GVFMoKTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgLypMb2FkIHRoZSB0aGUgKi9cclxuICAgIGNvbnN0IGxvYWRTb2xkTkZUUyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjcmVhdGUgYW4gaW5zdGFuY2Ugb2Ygd2ViM1xyXG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWw7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgcHJvdmlkZXIgd2l0aCB0aGUgdXNlciBjb25uZWN0aW9uXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XHJcbiAgICAgICAgLy8gZ2l2ZSB0aGUgdXNlciB0aGUgcmlnaHQgdG8gZXhlY3V0ZSBhbmQgc2lnbiB0aGUgdHJhbnNhY3Rpb25cclxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBpbnN0YW5jZSBvZiBib3RoIHNtYXJ0IGNvbnRyYWN0XHJcbiAgICAgICAgY29uc3QgbWFya2V0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdG1hcmtldGFkZHJlc3MsIE1hcmtldC5hYmksIHNpZ25lcik7XHJcbiAgICAgICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0YWRkcmVzcywgTkZULmFiaSwgc2lnbmVyKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIGFsbCB0aGUgTkZUIHRoYXQgSSBib3VnaHRcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbWFya2V0Q29udHJhY3QuZmV0Y2hNeU5GVHMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBQcm9taXNlLmFsbChkYXRhLm1hcCggYXN5bmMgaSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgdG9rZW5Db250cmFjdC50b2tlblVSSShpLnRva2VuSWQpO1xyXG4gICAgICAgICAgICAvLyBmZXRjaCB0aGUgbWV0YWRhdGEgZnJvbSB0aGUgVVJJXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXRhKTtcclxuICAgICAgICAgICAgLy9jb252ZXJ0aW5nIHdlaSB0byBldGhlclxyXG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhpLnByaWNlLnRvU3RyaW5nKCksIFwiZXRoZXJcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b2tlbklkOiBpLnRva2VuSWQudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgICAgICAgICBvd25lcjogaS5vd25lcixcclxuICAgICAgICAgICAgICAgIG5hbWU6IG1ldGEuZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBtZXRhLmRhdGEuZGVzY3JpcHRpb24sICAgXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgc2V0TmZ0cyhpdGVtcyk7XHJcbiAgICAgICAgc2V0TG9hZGluZ1N0YXRlKFwibG9hZGVkXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMT5IZWxsbzwvaDE+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TkZUcztcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsIldlYjNNb2RhbCIsImF4aW9zIiwibmZ0bWFya2V0YWRkcmVzcyIsIm5mdGFkZHJlc3MiLCJORlQiLCJNYXJrZXQiLCJNeU5GVHMiLCJuZnRzIiwic2V0TmZ0cyIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJsb2FkU29sZE5GVFMiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0aW9uIiwicHJvdmlkZXIiLCJzaWduZXIiLCJtYXJrZXRDb250cmFjdCIsInRva2VuQ29udHJhY3QiLCJkYXRhIiwiaXRlbXMiLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJmZXRjaE15TkZUcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VcmkiLCJtZXRhIiwicHJpY2UiLCJpdGVtIiwidG9rZW5VUkkiLCJ0b2tlbklkIiwiZ2V0IiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/my-nfts.js\n");

/***/ })

});
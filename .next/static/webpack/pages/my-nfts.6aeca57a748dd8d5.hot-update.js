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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ \"./artifacts/contracts/NFT.sol/NFT.json\");\n/* harmony import */ var _artifacts_contracts_Market_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/Market.sol/NFTMarket.json */ \"./artifacts/contracts/Market.sol/NFTMarket.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n// get the references of the addresses\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MyNFTs = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"not-loaded\"), loadingState = ref1[0], setLoadingState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadSoldNFTS();\n    }, []);\n    /*Load the the */ var loadSoldNFTS = function() {\n        var _ref1 = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var web3Modal, connection, provider, signer, marketContract, tokenContract, data, items;\n            return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default());\n                        _ctx1.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx1.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        marketContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_Market_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, signer);\n                        tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftaddress, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx1.next = 10;\n                        return marketContract.fetchMyNFTs();\n                    case 10:\n                        data = _ctx1.sent;\n                        _ctx1.next = 13;\n                        return Promise.all(data.map(function() {\n                            var _ref = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                                var tokenUri, meta, price, item;\n                                return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return tokenContract.tokenURI(i.tokenId);\n                                        case 2:\n                                            tokenUri = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return axios__WEBPACK_IMPORTED_MODULE_4___default().get(tokenUri);\n                                        case 5:\n                                            meta = _ctx.sent;\n                                            console.log(meta);\n                                            price = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(i.price.toString(), \"ether\");\n                                            item = {\n                                                price: price,\n                                                tokenId: i.tokenId.toNumber(),\n                                                owner: i.owner,\n                                                name: meta.data.name,\n                                                description: meta.data.description,\n                                                image: meta.data.image\n                                            };\n                                            return _ctx.abrupt(\"return\", item);\n                                        case 10:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(i) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()));\n                    case 13:\n                        items = _ctx1.sent;\n                        setNfts(items);\n                        setLoadingState(\"loaded\");\n                    case 16:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function loadSoldNFTS() {\n            return _ref1.apply(this, arguments);\n        };\n    }();\n    if (loadingState == \"loaded\" && !nfts.length) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"px-20 py-10 text-3xl\",\n        children: \"No items in the marketplace\"\n    }, void 0, false, {\n        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, _this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"px-4\",\n            style: {\n                maxWidth: '1600px'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4\",\n                children: nfts.map(function(nft, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"border shadow rounded-xl overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: nft.image,\n                                alt: nft.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"p-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        style: {\n                                            height: '64px'\n                                        },\n                                        className: \"text-2xl font-semibold\",\n                                        children: nft.name\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        style: {\n                                            height: '70px',\n                                            overflow: 'hidden'\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-400\",\n                                            children: nft.description\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"p-4 bg-black\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-2xl mb-4 font-bold text-white\",\n                                        children: [\n                                            nft.price,\n                                            \" ETH\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        className: \"w-full bg-pink-500 text-white font-bold py-2 px-12 rounded\",\n                                        onClick: function() {\n                                            return buyNft(nft);\n                                        },\n                                        children: \"Buy\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, _this1)\n                        ]\n                    }, i, true, {\n                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                        lineNumber: 72,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this));\n};\n_s(MyNFTs, \"Nqw+XtYQoLjeCkY/zbxMInMKbHA=\");\n_c = MyNFTs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyNFTs);\nvar _c;\n$RefreshReg$(_c, \"MyNFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBQUcsQ0FBRzs7Ozs7Ozs7Ozs7Ozt1QkFWeEd4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnpCLENBQUM7R0E5RUt4QixNQUFNO0tBQU5BLE1BQU07QUFnRlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teS1uZnRzLmpzPzhkN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gZ2V0IHRoZSByZWZlcmVuY2VzIG9mIHRoZSBhZGRyZXNzZXNcclxuaW1wb3J0IHtuZnRtYXJrZXRhZGRyZXNzLCBuZnRhZGRyZXNzfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgTkZUIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVC5zb2wvTkZULmpzb25cIjtcclxuaW1wb3J0IE1hcmtldCBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9NYXJrZXQuc29sL05GVE1hcmtldC5qc29uXCI7XHJcblxyXG5cclxuY29uc3QgTXlORlRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKFwibm90LWxvYWRlZFwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgbG9hZFNvbGRORlRTKCk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIC8qTG9hZCB0aGUgdGhlICovXHJcbiAgICBjb25zdCBsb2FkU29sZE5GVFMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gY3JlYXRlIGFuIGluc3RhbmNlIG9mIHdlYjNcclxuICAgICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBhIHByb3ZpZGVyIHdpdGggdGhlIHVzZXIgY29ubmVjdGlvblxyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xyXG4gICAgICAgIC8vIGdpdmUgdGhlIHVzZXIgdGhlIHJpZ2h0IHRvIGV4ZWN1dGUgYW5kIHNpZ24gdGhlIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgaW5zdGFuY2Ugb2YgYm90aCBzbWFydCBjb250cmFjdFxyXG4gICAgICAgIGNvbnN0IG1hcmtldENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRtYXJrZXRhZGRyZXNzLCBNYXJrZXQuYWJpLCBzaWduZXIpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdGFkZHJlc3MsIE5GVC5hYmksIHNpZ25lcik7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBhbGwgdGhlIE5GVCB0aGF0IEkgYm91Z2h0XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG1hcmtldENvbnRyYWN0LmZldGNoTXlORlRzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoIGFzeW5jIGkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlblVyaSA9IGF3YWl0IHRva2VuQ29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKTtcclxuICAgICAgICAgICAgLy8gZmV0Y2ggdGhlIG1ldGFkYXRhIGZyb20gdGhlIFVSSVxyXG4gICAgICAgICAgICBjb25zdCBtZXRhID0gYXdhaXQgYXhpb3MuZ2V0KHRva2VuVXJpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWV0YSk7XHJcbiAgICAgICAgICAgIC8vY29udmVydGluZyB3ZWkgdG8gZXRoZXJcclxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoaS5wcmljZS50b1N0cmluZygpLCBcImV0aGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICBvd25lcjogaS5vd25lcixcclxuICAgICAgICAgICAgICAgIG5hbWU6IG1ldGEuZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBtZXRhLmRhdGEuZGVzY3JpcHRpb24sICAgXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgc2V0TmZ0cyhpdGVtcyk7XHJcbiAgICAgICAgc2V0TG9hZGluZ1N0YXRlKFwibG9hZGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGxvYWRpbmdTdGF0ZSA9PSBcImxvYWRlZFwiICYmICFuZnRzLmxlbmd0aCkgcmV0dXJuIChcclxuICAgIDxoMSBjbGFzc05hbWU9XCJweC0yMCBweS0xMCB0ZXh0LTN4bFwiPk5vIGl0ZW1zIGluIHRoZSBtYXJrZXRwbGFjZTwvaDE+XHJcbiAgKVxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTRcIiBzdHlsZT17eyBtYXhXaWR0aDogJzE2MDBweCcgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IHB0LTRcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmZ0cy5tYXAoKG5mdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXIgc2hhZG93IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmZ0LmltYWdlfSBhbHQ9e25mdC5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBoZWlnaHQ6ICc2NHB4JyB9fSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+e25mdC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc3MHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57bmZ0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTQgZm9udC1ib2xkIHRleHQtd2hpdGVcIj57bmZ0LnByaWNlfSBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXBpbmstNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtMTIgcm91bmRlZFwiIG9uQ2xpY2s9eygpID0+IGJ1eU5mdChuZnQpfT5CdXk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlORlRzO1xyXG5cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiV2ViM01vZGFsIiwiYXhpb3MiLCJuZnRtYXJrZXRhZGRyZXNzIiwibmZ0YWRkcmVzcyIsIk5GVCIsIk1hcmtldCIsIk15TkZUcyIsIm5mdHMiLCJzZXROZnRzIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwibG9hZFNvbGRORlRTIiwid2ViM01vZGFsIiwiY29ubmVjdGlvbiIsInByb3ZpZGVyIiwic2lnbmVyIiwibWFya2V0Q29udHJhY3QiLCJ0b2tlbkNvbnRyYWN0IiwiZGF0YSIsIml0ZW1zIiwiY29ubmVjdCIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiYWJpIiwiZmV0Y2hNeU5GVHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaSIsInRva2VuVXJpIiwibWV0YSIsInByaWNlIiwiaXRlbSIsInRva2VuVVJJIiwidG9rZW5JZCIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9TdHJpbmciLCJ0b051bWJlciIsIm93bmVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJsZW5ndGgiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwibWF4V2lkdGgiLCJuZnQiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJidXR0b24iLCJvbkNsaWNrIiwiYnV5TmZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/my-nfts.js\n");

/***/ })

});
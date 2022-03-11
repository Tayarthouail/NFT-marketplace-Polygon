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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/Marketplace.sol/Marketplace.json */ \"./artifacts/contracts/Marketplace.sol/Marketplace.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\n// get the references of the addresses\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MyNFTs = function() {\n    var _this1 = _this;\n    var fetchIdURI = //fetch the nft.id & nft.URI using Routing\n    function fetchIdURI(nft) {\n        console.log(\"nft\", nft);\n        router.push(\"/resell-nft?id=\".concat(nft.tokenId, \"&tokenURI=\").concat(nft.tokenURI));\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"not-loaded\"), loadingState = ref1[0], setLoadingState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadSoldNFTS();\n    }, []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    /*Load the the */ var loadSoldNFTS = function() {\n        var _ref1 = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var web3Modal, connection, provider, signer, marketContract, data, items;\n            return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default());\n                        _ctx1.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx1.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        marketContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_6__.nftmarketaddress, _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_7__.abi, signer);\n                        _ctx1.next = 9;\n                        return marketContract.fetchMyNFTs();\n                    case 9:\n                        data = _ctx1.sent;\n                        _ctx1.next = 12;\n                        return Promise.all(data.map(function() {\n                            var _ref = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                                var tokenURI, meta, price, item;\n                                return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return marketContract.tokenURI(i.tokenId);\n                                        case 2:\n                                            tokenURI = _ctx.sent;\n                                            console.log(tokenURI);\n                                            _ctx.next = 6;\n                                            return axios__WEBPACK_IMPORTED_MODULE_4___default().get(tokenURI);\n                                        case 6:\n                                            meta = _ctx.sent;\n                                            price = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(i.price.toString(), \"ether\");\n                                            item = {\n                                                price: price,\n                                                tokenId: i.tokenId.toNumber(),\n                                                owner: i.owner,\n                                                name: meta.data.name,\n                                                description: meta.data.description,\n                                                image: meta.data.image,\n                                                tokenURI: tokenURI\n                                            };\n                                            return _ctx.abrupt(\"return\", item);\n                                        case 10:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(i) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()));\n                    case 12:\n                        items = _ctx1.sent;\n                        setNfts(items);\n                        setLoadingState(\"loaded\");\n                    case 15:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function loadSoldNFTS() {\n            return _ref1.apply(this, arguments);\n        };\n    }();\n    if (loadingState == \"loaded\" && !nfts.length) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"px-20 py-10 text-3xl\",\n        children: \"No items in the marketplace\"\n    }, void 0, false, {\n        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"px-4\",\n            style: {\n                maxWidth: '1600px'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4\",\n                children: nfts.map(function(nft, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"border shadow rounded-xl overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: nft.image,\n                                alt: nft.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"p-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        style: {\n                                            height: '64px'\n                                        },\n                                        className: \"text-2xl font-semibold\",\n                                        children: nft.name\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        style: {\n                                            height: '70px',\n                                            overflow: 'hidden'\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-400\",\n                                            children: nft.description\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"p-4 bg-black\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-2xl mb-4 font-bold text-white\",\n                                        children: [\n                                            nft.price,\n                                            \" ETH\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        className: \"w-full bg-pink-500 text-white font-bold py-2 px-12 rounded\",\n                                        onClick: function() {\n                                            return fetchIdURI(nft);\n                                        },\n                                        children: \"List\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, _this1)\n                        ]\n                    }, i, true, {\n                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                        lineNumber: 83,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, _this));\n};\n_s(MyNFTs, \"6vE3wD1K1+MF46DctNfgKwL9lWA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MyNFTs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyNFTs);\nvar _c;\n$RefreshReg$(_c, \"MyNFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTVDLEdBQUcsQ0FBQ3dDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O3dHQUdoREssQ0FBRztnQ0FBQ0QsU0FBUyxFQUFDLENBQWM7O2dIQUMxQk8sQ0FBQzt3Q0FBQ1AsU0FBUyxFQUFDLENBQW9DOzs0Q0FBRTVDLEdBQUcsQ0FBQytCLEtBQUs7NENBQUMsQ0FBSTs7Ozs7OztnSEFDaEV1QixDQUFNO3dDQUFDVixTQUFTLEVBQUMsQ0FBNEQ7d0NBQzlFVyxPQUFPLEVBQUUsUUFBUTs0Q0FBSHhELE1BQU0sQ0FBTkEsVUFBVSxDQUFDQyxHQUFHOztrREFBRyxDQUFJOzs7Ozs7Ozs7Ozs7O3VCQVg3QjZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CekIsQ0FBQztHQTFGSy9CLE1BQU07O1FBUU9ILGtEQUFTOzs7S0FSdEJHLE1BQU07QUE0RlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teS1uZnRzLmpzPzhkN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIGdldCB0aGUgcmVmZXJlbmNlcyBvZiB0aGUgYWRkcmVzc2VzXHJcbmltcG9ydCB7bmZ0bWFya2V0YWRkcmVzc30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IE1hcmtldCBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9NYXJrZXRwbGFjZS5zb2wvTWFya2V0cGxhY2UuanNvblwiO1xyXG5cclxuY29uc3QgTXlORlRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKFwibm90LWxvYWRlZFwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgbG9hZFNvbGRORlRTKCk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICAvL2ZldGNoIHRoZSBuZnQuaWQgJiBuZnQuVVJJIHVzaW5nIFJvdXRpbmdcclxuICAgIGZ1bmN0aW9uIGZldGNoSWRVUkkobmZ0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibmZ0XCIsIG5mdCk7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVzZWxsLW5mdD9pZD0ke25mdC50b2tlbklkfSZ0b2tlblVSST0ke25mdC50b2tlblVSSX1gKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLypMb2FkIHRoZSB0aGUgKi9cclxuICAgIGNvbnN0IGxvYWRTb2xkTkZUUyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjcmVhdGUgYW4gaW5zdGFuY2Ugb2Ygd2ViM1xyXG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWw7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgcHJvdmlkZXIgd2l0aCB0aGUgdXNlciBjb25uZWN0aW9uXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XHJcbiAgICAgICAgLy8gZ2l2ZSB0aGUgdXNlciB0aGUgcmlnaHQgdG8gZXhlY3V0ZSBhbmQgc2lnbiB0aGUgdHJhbnNhY3Rpb25cclxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBpbnN0YW5jZSBvZiBib3RoIHNtYXJ0IGNvbnRyYWN0XHJcbiAgICAgICAgY29uc3QgbWFya2V0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdG1hcmtldGFkZHJlc3MsIE1hcmtldC5hYmksIHNpZ25lcik7XHJcbiAgICBcclxuICAgICAgICAvLyByZXR1cm4gYWxsIHRoZSBORlQgdGhhdCBJIGJvdWdodFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtYXJrZXRDb250cmFjdC5mZXRjaE15TkZUcygpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEubWFwKCBhc3luYyBpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5VUkkgPSBhd2FpdCBtYXJrZXRDb250cmFjdC50b2tlblVSSShpLnRva2VuSWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlblVSSSk7XHJcbiAgICAgICAgICAgIC8vIGZldGNoIHRoZSBtZXRhZGF0YSBmcm9tIHRoZSBVUklcclxuICAgICAgICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IGF4aW9zLmdldCh0b2tlblVSSSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnZlcnRpbmcgd2VpIHRvIGV0aGVyXHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgICAgIHRva2VuSWQ6IGkudG9rZW5JZC50b051bWJlcigpLFxyXG4gICAgICAgICAgICAgICAgb3duZXI6IGkub3duZXIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogbWV0YS5kYXRhLmRlc2NyaXB0aW9uLCAgIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG1ldGEuZGF0YS5pbWFnZSxcclxuICAgICAgICAgICAgICAgIHRva2VuVVJJXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgc2V0TmZ0cyhpdGVtcyk7XHJcbiAgICAgICAgc2V0TG9hZGluZ1N0YXRlKFwibG9hZGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGxvYWRpbmdTdGF0ZSA9PSBcImxvYWRlZFwiICYmICFuZnRzLmxlbmd0aCkgcmV0dXJuIChcclxuICAgIDxoMSBjbGFzc05hbWU9XCJweC0yMCBweS0xMCB0ZXh0LTN4bFwiPk5vIGl0ZW1zIGluIHRoZSBtYXJrZXRwbGFjZTwvaDE+XHJcbiAgKVxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTRcIiBzdHlsZT17eyBtYXhXaWR0aDogJzE2MDBweCcgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IHB0LTRcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmZ0cy5tYXAoKG5mdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXIgc2hhZG93IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmZ0LmltYWdlfSBhbHQ9e25mdC5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBoZWlnaHQ6ICc2NHB4JyB9fSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+e25mdC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc3MHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57bmZ0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTQgZm9udC1ib2xkIHRleHQtd2hpdGVcIj57bmZ0LnByaWNlfSBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXBpbmstNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtMTIgcm91bmRlZFwiIFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IGZldGNoSWRVUkkobmZ0KX0+TGlzdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeU5GVHM7XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJXZWIzTW9kYWwiLCJheGlvcyIsInVzZVJvdXRlciIsIm5mdG1hcmtldGFkZHJlc3MiLCJNYXJrZXQiLCJNeU5GVHMiLCJmZXRjaElkVVJJIiwibmZ0IiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInB1c2giLCJ0b2tlbklkIiwidG9rZW5VUkkiLCJuZnRzIiwic2V0TmZ0cyIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsImxvYWRTb2xkTkZUUyIsIndlYjNNb2RhbCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsInNpZ25lciIsIm1hcmtldENvbnRyYWN0IiwiZGF0YSIsIml0ZW1zIiwiY29ubmVjdCIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiYWJpIiwiZmV0Y2hNeU5GVHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaSIsIm1ldGEiLCJwcmljZSIsIml0ZW0iLCJnZXQiLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9TdHJpbmciLCJ0b051bWJlciIsIm93bmVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJsZW5ndGgiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwibWF4V2lkdGgiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/my-nfts.js\n");

/***/ })

});
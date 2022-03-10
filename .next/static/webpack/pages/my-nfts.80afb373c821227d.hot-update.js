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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/Marketplace.sol/Marketplace.json */ \"./artifacts/contracts/Marketplace.sol/Marketplace.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\n// get the references of the addresses\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MyNFTs = function() {\n    var _this1 = _this;\n    var fetchIdURI = //fetch the nft.id & nft.URI using Routing\n    function fetchIdURI(nft) {\n        console.log(\"nft\", nft);\n        router.push(\"/resell-nft?id=\".concat(nft.tokenId, \"&tokenURI=\").concat(nft.tokenURI));\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"not-loaded\"), loadingState = ref1[0], setLoadingState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadSoldNFTS();\n    }, []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    /*Load the the */ var loadSoldNFTS = function() {\n        var _ref1 = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var web3Modal, connection, provider, signer, marketContract, data, items;\n            return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default());\n                        _ctx1.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx1.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        marketContract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_6__.nftmarketaddress, _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_7__.abi, signer);\n                        _ctx1.next = 9;\n                        return marketContract.fetchMyNFTs();\n                    case 9:\n                        data = _ctx1.sent;\n                        _ctx1.next = 12;\n                        return Promise.all(data.map(function() {\n                            var _ref = _asyncToGenerator(E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                                var tokenUri, meta, price, item;\n                                return E_Open_the_door_Learn_And_Grow_Up_Learn_And_Grow_Up_Crypto_WORLD_Cyrpto_projects_nft_marketplace_dapp_polygon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return marketContract.tokenURI(i.tokenId);\n                                        case 2:\n                                            tokenUri = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return axios__WEBPACK_IMPORTED_MODULE_4___default().get(tokenUri);\n                                        case 5:\n                                            meta = _ctx.sent;\n                                            price = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(i.price.toString(), \"ether\");\n                                            item = {\n                                                price: price,\n                                                tokenId: i.tokenId.toNumber(),\n                                                owner: i.owner,\n                                                name: meta.data.name,\n                                                description: meta.data.description,\n                                                image: meta.data.image\n                                            };\n                                            return _ctx.abrupt(\"return\", item);\n                                        case 9:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(i) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()));\n                    case 12:\n                        items = _ctx1.sent;\n                        setNfts(items);\n                        setLoadingState(\"loaded\");\n                    case 15:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function loadSoldNFTS() {\n            return _ref1.apply(this, arguments);\n        };\n    }();\n    if (loadingState == \"loaded\" && !nfts.length) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"px-20 py-10 text-3xl\",\n        children: \"No items in the marketplace\"\n    }, void 0, false, {\n        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"px-4\",\n            style: {\n                maxWidth: '1600px'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4\",\n                children: nfts.map(function(nft, i) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"border shadow rounded-xl overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: nft.image,\n                                alt: nft.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"p-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        style: {\n                                            height: '64px'\n                                        },\n                                        className: \"text-2xl font-semibold\",\n                                        children: nft.name\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        style: {\n                                            height: '70px',\n                                            overflow: 'hidden'\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-400\",\n                                            children: nft.description\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"p-4 bg-black\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-2xl mb-4 font-bold text-white\",\n                                        children: [\n                                            nft.price,\n                                            \" ETH\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        className: \"w-full bg-pink-500 text-white font-bold py-2 px-12 rounded\",\n                                        onClick: function() {\n                                            return buyNft(nft);\n                                        },\n                                        children: \"Buy\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, _this1)\n                        ]\n                    }, i, true, {\n                        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                        lineNumber: 83,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Open the door\\\\Learn And Grow Up\\\\Learn And Grow Up\\\\Crypto WORLD\\\\Cyrpto projects\\\\nft-marketplace-dapp-polygon\\\\pages\\\\my-nfts.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, _this));\n};\n_s(MyNFTs, \"6vE3wD1K1+MF46DctNfgKwL9lWA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MyNFTs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyNFTs);\nvar _c;\n$RefreshReg$(_c, \"MyNFTs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBQyxDQUFjOztnSEFDMUJPLENBQUM7d0NBQUNQLFNBQVMsRUFBQyxDQUFvQzs7NENBQUU3QyxHQUFHLENBQUNnQyxLQUFLOzRDQUFDLENBQUk7Ozs7Ozs7Z0hBQ2hFdUIsQ0FBTTt3Q0FBQ1YsU0FBUyxFQUFDLENBQTREO3dDQUFDVyxPQUFPLEVBQUUsUUFBUTs0Q0FBRkMsTUFBTSxDQUFOQSxNQUFNLENBQUN6RCxHQUFHOztrREFBRyxDQUFHOzs7Ozs7Ozs7Ozs7O3VCQVZ4RzZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CekIsQ0FBQztHQXZGSy9CLE1BQU07O1FBUU9ILGtEQUFTOzs7S0FSdEJHLE1BQU07QUF5RlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9teS1uZnRzLmpzPzhkN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIGdldCB0aGUgcmVmZXJlbmNlcyBvZiB0aGUgYWRkcmVzc2VzXHJcbmltcG9ydCB7bmZ0bWFya2V0YWRkcmVzc30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuXHJcbmltcG9ydCBNYXJrZXQgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvTWFya2V0cGxhY2Uuc29sL01hcmtldHBsYWNlLmpzb25cIjtcclxuXHJcblxyXG5jb25zdCBNeU5GVHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoXCJub3QtbG9hZGVkXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBsb2FkU29sZE5GVFMoKTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIC8vZmV0Y2ggdGhlIG5mdC5pZCAmIG5mdC5VUkkgdXNpbmcgUm91dGluZ1xyXG4gICAgZnVuY3Rpb24gZmV0Y2hJZFVSSShuZnQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJuZnRcIiwgbmZ0KTtcclxuICAgICAgcm91dGVyLnB1c2goYC9yZXNlbGwtbmZ0P2lkPSR7bmZ0LnRva2VuSWR9JnRva2VuVVJJPSR7bmZ0LnRva2VuVVJJfWApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKkxvYWQgdGhlIHRoZSAqL1xyXG4gICAgY29uc3QgbG9hZFNvbGRORlRTID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB3ZWIzXHJcbiAgICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbDtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKTtcclxuICAgICAgICAvLyBjcmVhdGUgYSBwcm92aWRlciB3aXRoIHRoZSB1c2VyIGNvbm5lY3Rpb25cclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuICAgICAgICAvLyBnaXZlIHRoZSB1c2VyIHRoZSByaWdodCB0byBleGVjdXRlIGFuZCBzaWduIHRoZSB0cmFuc2FjdGlvblxyXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgdGhlIGluc3RhbmNlIG9mIGJvdGggc21hcnQgY29udHJhY3RcclxuICAgICAgICBjb25zdCBtYXJrZXRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0bWFya2V0YWRkcmVzcywgTWFya2V0LmFiaSwgc2lnbmVyKTtcclxuICAgIFxyXG4gICAgICAgIC8vIHJldHVybiBhbGwgdGhlIE5GVCB0aGF0IEkgYm91Z2h0XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG1hcmtldENvbnRyYWN0LmZldGNoTXlORlRzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoIGFzeW5jIGkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlblVyaSA9IGF3YWl0IG1hcmtldENvbnRyYWN0LnRva2VuVVJJKGkudG9rZW5JZCk7XHJcbiAgICAgICAgICAgIC8vIGZldGNoIHRoZSBtZXRhZGF0YSBmcm9tIHRoZSBVUklcclxuICAgICAgICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IGF4aW9zLmdldCh0b2tlblVyaSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnZlcnRpbmcgd2VpIHRvIGV0aGVyXHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgICAgIHRva2VuSWQ6IGkudG9rZW5JZC50b051bWJlcigpLFxyXG4gICAgICAgICAgICAgICAgb3duZXI6IGkub3duZXIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogbWV0YS5kYXRhLmRlc2NyaXB0aW9uLCAgIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG1ldGEuZGF0YS5pbWFnZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHNldE5mdHMoaXRlbXMpO1xyXG4gICAgICAgIHNldExvYWRpbmdTdGF0ZShcImxvYWRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihsb2FkaW5nU3RhdGUgPT0gXCJsb2FkZWRcIiAmJiAhbmZ0cy5sZW5ndGgpIHJldHVybiAoXHJcbiAgICA8aDEgY2xhc3NOYW1lPVwicHgtMjAgcHktMTAgdGV4dC0zeGxcIj5ObyBpdGVtcyBpbiB0aGUgbWFya2V0cGxhY2U8L2gxPlxyXG4gIClcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00XCIgc3R5bGU9e3sgbWF4V2lkdGg6ICcxNjAwcHgnIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCBwdC00XCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5mdHMubWFwKChuZnQsIGkpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyIHNoYWRvdyByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e25mdC5pbWFnZX0gYWx0PXtuZnQubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgaGVpZ2h0OiAnNjRweCcgfX0gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPntuZnQubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNzBweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+e25mdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBiZy1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00IGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e25mdC5wcmljZX0gRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1waW5rLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTEyIHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBidXlOZnQobmZ0KX0+QnV5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TkZUcztcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsIldlYjNNb2RhbCIsImF4aW9zIiwidXNlUm91dGVyIiwibmZ0bWFya2V0YWRkcmVzcyIsIk1hcmtldCIsIk15TkZUcyIsImZldGNoSWRVUkkiLCJuZnQiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwicHVzaCIsInRva2VuSWQiLCJ0b2tlblVSSSIsIm5mdHMiLCJzZXROZnRzIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwibG9hZFNvbGRORlRTIiwid2ViM01vZGFsIiwiY29ubmVjdGlvbiIsInByb3ZpZGVyIiwic2lnbmVyIiwibWFya2V0Q29udHJhY3QiLCJkYXRhIiwiaXRlbXMiLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJmZXRjaE15TkZUcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VcmkiLCJtZXRhIiwicHJpY2UiLCJpdGVtIiwiZ2V0IiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJvd25lciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibGVuZ3RoIiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsIm1heFdpZHRoIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImhlaWdodCIsIm92ZXJmbG93IiwiYnV0dG9uIiwib25DbGljayIsImJ1eU5mdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/my-nfts.js\n");

/***/ })

});
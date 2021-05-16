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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/userCtrl */ \"./src/controllers/userCtrl.js\");\n/* harmony import */ var _controllers_furCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/furCtrl */ \"./src/controllers/furCtrl.js\");\n\n\nwindow.allFurnitures = [];\nwindow.msgs = [];\nwindow.formData = {};\nwindow.LoggedIn = true;\nconst app = Sammy('#container', function () {\n  this.use('Handlebars', 'hbs');\n  const userCtrl = new _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_0__.default();\n  const furCtrl = new _controllers_furCtrl__WEBPACK_IMPORTED_MODULE_1__.default(); //@route    GET  /\n  //@desc     render Home Page \n  //@access   Public\n\n  this.get('/', furCtrl.getHome); //@route    GET  /furniture/create\n  //@desc     render create Page \n  //@access   Public\n\n  this.get('/furniture/create', furCtrl.getCreate); //@route    GET  /furniture/profile\n  //@desc     render profile Page \n  //@access   Private\n\n  this.get('/furniture/profile', furCtrl.getProfile); //@route    GET  /furniture/details/:id\n  //@desc     render furniture details view\n  //@access   Public\n\n  this.get('/details/:id', furCtrl.getDetatils); //@route    GET  /user/login\n  //@desc     render login Page \n  //@access   Public\n\n  this.get('/user/login', userCtrl.getLogin); //@route    POST  /user/login\n  //@desc     process and login users\n  //@access   Private\n\n  this.post('/user/login', userCtrl.postLogin); //@route    GET  /user/signup\n  //@desc     render signup Page \n  //@access   Public\n\n  this.get('/user/signup', userCtrl.getSignup); //@route    POST  /user/signup\n  //@desc     process and sigup users\n  //@access   Private\n\n  this.post('/user/signup', userCtrl.postSignup);\n});\napp.run('/');\n\n//# sourceURL=webpack://routinglab-v1/./src/app.js?");

/***/ }),

/***/ "./src/controllers/furCtrl.js":
/*!************************************!*\
  !*** ./src/controllers/furCtrl.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Furniture)\n/* harmony export */ });\nclass Furniture {\n  getHome() {\n    const viewData = {\n      allFurnitures,\n      homeActive: true\n    };\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs'\n    }).then(function () {\n      this.render('../views/app/home.hbs', viewData).swap();\n    });\n  }\n\n  getCreate() {\n    const viewData = {\n      addActive: true\n    };\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs'\n    }).then(function () {\n      this.render('../views/app/create.hbs', viewData).swap();\n    });\n  }\n\n  getProfile() {\n    const viewData = {\n      profileActive: true\n    };\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs'\n    }).then(function () {\n      this.render('../views/app/profile.hbs', viewData).swap();\n    });\n  }\n\n  getDetatils() {\n    const product = allFurnitures.find(item => item.id.toString() === this.params.id);\n\n    if (product) {\n      this.loadPartials({\n        navbar: '../views/partials/navbar.hbs'\n      }).then(function () {\n        this.render('../views/app/details.hbs', {\n          product\n        }).swap();\n      });\n    }\n  }\n\n}\n\n//# sourceURL=webpack://routinglab-v1/./src/controllers/furCtrl.js?");

/***/ }),

/***/ "./src/controllers/userCtrl.js":
/*!*************************************!*\
  !*** ./src/controllers/userCtrl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n  getLogin() {\n    const viewData = {\n      loginActive: true,\n      msgs,\n      formData\n    };\n\n    if (msgs.length >= 1) {\n      let emailError = msgs.find(msg => msg.el === 'email');\n      let passwordError = msgs.find(msg => msg.el === 'password');\n\n      if (emailError) {\n        viewData.emailInvalid = true;\n      } else {\n        viewData.emailValid = true;\n      }\n\n      if (passwordError) {\n        viewData.passwordInvalid = true;\n      } else {\n        viewData.passwordValid = true;\n      }\n    }\n\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs'\n    }).then(function () {\n      this.render('../views/users/login.hbs', viewData).swap();\n      msgs = [];\n      formData = {};\n    });\n  }\n\n  postLogin() {\n    const {\n      email,\n      password\n    } = this.params;\n    formData.email = email;\n    formData.password = password;\n\n    if (!email) {\n      msgs.push({\n        msg: 'Email Field is required',\n        class: 'alert-danger',\n        el: 'email'\n      });\n    } else if (!validator.isEmail(email)) {\n      msgs.push({\n        msg: 'Email format is inccorect',\n        class: 'alert-danger',\n        el: 'email'\n      });\n    }\n\n    if (!password) {\n      msgs.push({\n        msg: 'Password Field is required',\n        class: 'alert-danger',\n        el: 'password'\n      });\n    } else if (!validator.isLength(password, {\n      min: 6,\n      max: 15\n    })) {\n      msgs.push({\n        msg: 'Password should be 6-15 characters',\n        class: 'alert-danger',\n        el: 'password'\n      });\n    }\n\n    this.redirect('/user/login');\n  }\n\n  getSignup() {\n    const viewData = {\n      signupActive: true,\n      msgs,\n      formData\n    };\n\n    if (msgs.length >= 1) {\n      let emailError = msgs.find(msg => msg.el === 'email');\n      let passwordError = msgs.find(msg => msg.el === 'password');\n      let password2Error = msgs.find(msg => msg.el === 'password2');\n\n      if (emailError) {\n        viewData.emailInvalid = true;\n      } else {\n        viewData.emailValid = true;\n      }\n\n      if (passwordError) {\n        viewData.passwordInvalid = true;\n      } else {\n        viewData.passwordValid = true;\n      }\n\n      if (password2Error) {\n        viewData.password2Invalid = true;\n      } else {\n        viewData.password2Valid = true;\n      }\n    }\n\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs'\n    }).then(function () {\n      this.render('../views/users/signup.hbs', viewData).swap();\n      msgs = [];\n      formData = {};\n    });\n  }\n\n  postSignup() {\n    const {\n      email,\n      password,\n      password2\n    } = this.params;\n    formData.email = email;\n    formData.password = password;\n    formData.password2 = password2;\n\n    if (!email) {\n      msgs.push({\n        msg: 'Email Field is required',\n        class: 'alert-danger',\n        el: 'email'\n      });\n    } else if (!validator.isEmail(email)) {\n      msgs.push({\n        msg: 'Email format is inccorect',\n        class: 'alert-danger',\n        el: 'email'\n      });\n    }\n\n    if (!password) {\n      msgs.push({\n        msg: 'Password Field is required',\n        class: 'alert-danger',\n        el: 'password'\n      });\n    } else if (!validator.isLength(password, {\n      min: 6,\n      max: 15\n    })) {\n      msgs.push({\n        msg: 'Password should be 6-15 characters',\n        class: 'alert-danger',\n        el: 'password'\n      });\n    }\n\n    if (!password2) {\n      msgs.push({\n        msg: 'Please confirm your password',\n        class: 'alert-danger',\n        el: 'password2'\n      });\n    } else if (!validator.equals(password2, password)) {\n      msgs.push({\n        msg: 'Passwords not matching',\n        class: 'alert-danger',\n        el: 'password2'\n      });\n    }\n\n    this.redirect('/user/signup');\n  }\n\n}\n\n//# sourceURL=webpack://routinglab-v1/./src/controllers/userCtrl.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
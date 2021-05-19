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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/userCtrl */ \"./src/controllers/userCtrl.js\");\n/* harmony import */ var _controllers_furCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/furCtrl */ \"./src/controllers/furCtrl.js\");\n/* harmony import */ var _helpers_kinvey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/kinvey */ \"./src/helpers/kinvey.js\");\n\n\n // States or global data that are shared with views \n\nwindow.allFurnitures = [];\nwindow.msgs = [];\nwindow.sharedData = {};\nwindow.formData = {};\nwindow.db = new _helpers_kinvey__WEBPACK_IMPORTED_MODULE_2__.default('kid_BkYBymjvd', 'ed0eed3599fa4d5d9d062fae8755f43c');\nwindow.loggedIn = false;\nconst app = Sammy('#container', function () {\n  this.use('Handlebars', 'hbs');\n  const userCtrl = new _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_0__.default();\n  const furCtrl = new _controllers_furCtrl__WEBPACK_IMPORTED_MODULE_1__.default(); //@route    GET  /\n  //@desc     render Home Page \n  //@access   Public\n\n  this.get('/', furCtrl.getHome); //@route    GET  /furniture/create\n  //@desc     render create Page \n  //@access   Private\n\n  this.get('/furniture/create', furCtrl.getCreate); //@route    Post  /furniture/create\n  //@desc     store new furniture in db  \n  //@access   Private\n\n  this.post('/furniture/create', furCtrl.postCreate); //@route    GET  /furniture/profile\n  //@desc     render profile Page \n  //@access   Private\n\n  this.get('/furniture/profile', furCtrl.getProfile); //@route    GET  /furniture/details/:id\n  //@desc     render furniture details view\n  //@access   Public\n\n  this.get('/details/:id', furCtrl.getDetatils); //@route    GET  /user/login\n  //@desc     render login Page \n  //@access   Public\n\n  this.get('/user/login', userCtrl.getLogin); //@route    GET  /user/logout\n  //@desc     logoout a user \n  //@access   Private\n\n  this.get('/user/logout', userCtrl.getLogout); //@route    POST  /user/login\n  //@desc     process and login users\n  //@access   Private\n\n  this.post('/user/login', userCtrl.postLogin); //@route    GET  /user/signup\n  //@desc     render signup Page \n  //@access   Public\n\n  this.get('/user/signup', userCtrl.getSignup); //@route    POST  /user/signup\n  //@desc     process and sigup users\n  //@access   Private\n\n  this.post('/user/signup', userCtrl.postSignup);\n});\napp.run('/');\n\n//# sourceURL=webpack://routinglab-v1/./src/app.js?");

/***/ }),

/***/ "./src/controllers/furCtrl.js":
/*!************************************!*\
  !*** ./src/controllers/furCtrl.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Furniture)\n/* harmony export */ });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ \"./src/validation.js\");\n\n\nfunction clearStates(viewData) {\n  msgs = [];\n  sharedData = {};\n  viewData = {};\n}\n\nclass Furniture {\n  getHome() {\n    const viewData = { ...sharedData,\n      homeActive: true,\n      loggedIn,\n      msgs\n    };\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs'\n    }).then(function () {\n      viewData.isLoading = true;\n      this.render('../views/app/home.hbs', viewData).swap();\n      db.get('furniture', null, {\n        username: 'guest',\n        password: 'guest'\n      }).then(res => {\n        viewData.allFurnitures = res;\n        viewData.isLoading = false;\n        this.render('../views/app/home.hbs', viewData).swap();\n        clearStates(viewData);\n      });\n    });\n  }\n\n  getCreate() {\n    const viewData = { ...sharedData,\n      addActive: true,\n      loggedIn\n    };\n\n    if (formData && msgs.length !== 0) {\n      viewData.maker ? viewData.maker.input = formData.maker : '';\n      viewData.model ? viewData.model.input = formData.model : '';\n      viewData.msgs = msgs;\n    }\n\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs'\n    }).then(function () {\n      this.render('../views/app/create.hbs', viewData).swap();\n    });\n  }\n\n  postCreate() {\n    let {\n      maker,\n      model,\n      year,\n      desc,\n      price,\n      imageUrl,\n      material\n    } = this.params;\n    formData = {\n      maker,\n      model,\n      year,\n      desc,\n      price,\n      imageUrl,\n      material\n    };\n    let isValid = (0,_validation__WEBPACK_IMPORTED_MODULE_0__.createValidation)(formData);\n\n    if (isValid) {\n      let serverData = { ...formData,\n        user: sessionStorage.getItem('user')\n      };\n      db.post('furniture', serverData, sessionStorage.getItem('loggedIn')).then(res => {\n        msgs.push({\n          msg: 'Furniture created successully !',\n          class: 'alert-success'\n        });\n        this.redirect('/');\n      });\n    } else {\n      this.redirect('/furniture/create');\n    }\n  }\n\n  getProfile() {\n    const viewData = {\n      profileActive: true,\n      loggedIn\n    };\n\n    if (msgs.length >= 1) {\n      viewData.msgs = msgs;\n    }\n\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs'\n    }).then(function () {\n      viewData.isLoading = true;\n      this.render('../views/app/profile.hbs', viewData).swap();\n      db.get('furniture', sessionStorage.getItem('loggedIn')).then(res => {\n        console.log(res);\n        let myFurnitures = res.filter(fur => fur.user == sessionStorage.getItem('user'));\n        viewData.myFurnitures = myFurnitures;\n        viewData.isLoading = false;\n        this.render('../views/app/home.hbs', viewData).swap();\n        clearStates(viewData);\n      });\n    });\n  }\n\n  getDetatils() {\n    const product = allFurnitures.find(item => item.id.toString() === this.params.id);\n\n    if (product) {\n      this.loadPartials({\n        navbar: '../views/partials/navbar.hbs',\n        notifications: '../views/partials/notifications.hbs'\n      }).then(function () {\n        this.render('../views/app/details.hbs', {\n          product\n        }).swap();\n      });\n    }\n  }\n\n}\n\n//# sourceURL=webpack://routinglab-v1/./src/controllers/furCtrl.js?");

/***/ }),

/***/ "./src/controllers/userCtrl.js":
/*!*************************************!*\
  !*** ./src/controllers/userCtrl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ \"./src/validation.js\");\n\n\nfunction clearStates(viewData) {\n  msgs = [];\n  sharedData = {};\n  viewData = {};\n}\n\nclass User {\n  getLogin() {\n    const viewData = { ...sharedData,\n      loginActive: true,\n      loggedIn\n    };\n\n    if (formData && msgs.length !== 0) {\n      viewData.email ? viewData.email.input = formData.email : '';\n      viewData.password ? viewData.password.input = formData.password : '';\n      viewData.msgs = msgs;\n    }\n\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs'\n    }).then(function () {\n      this.render('../views/users/login.hbs', viewData).swap();\n      clearStates(viewData);\n    });\n  }\n\n  postLogin() {\n    const {\n      email,\n      password\n    } = this.params;\n    formData = {\n      email,\n      password\n    };\n    let isValid = (0,_validation__WEBPACK_IMPORTED_MODULE_0__.loginValidation)(formData);\n\n    if (!isValid) {\n      this.redirect('/user/login');\n      return;\n    }\n\n    sharedData.isLoading = true;\n    this.redirect('/user/login');\n    db.login({\n      username: email,\n      password\n    }).then(jsonRes => {\n      sessionStorage.setItem('user', jsonRes._id);\n      sessionStorage.setItem('loggedIn', jsonRes._kmd.authtoken);\n      loggedIn = true;\n      msgs.push({\n        msg: 'Logged In successully !',\n        class: 'alert-success'\n      });\n      sharedData.isLoading = false;\n      this.redirect('/furniture/profile');\n    }).catch(err => {\n      msgs.push({\n        msg: err.statusText,\n        class: 'alert-danger'\n      });\n      sharedData.email = {};\n      sharedData.email.invalid = true;\n      sharedData.password = {};\n      sharedData.isLoading = false;\n      this.redirect('/user/login');\n    });\n  }\n\n  getSignup() {\n    const viewData = { ...sharedData,\n      signupActive: true,\n      loggedIn\n    };\n\n    if (formData && msgs.length !== 0) {\n      viewData.email.input = formData.email;\n      viewData.password.input = formData.password;\n      viewData.password2.input = formData.password2;\n      viewData.msgs = msgs;\n    }\n\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs'\n    }).then(function () {\n      this.render('../views/users/signup.hbs', viewData).swap();\n      clearStates(viewData);\n    });\n  }\n\n  postSignup() {\n    const {\n      email,\n      password,\n      password2\n    } = this.params;\n    formData = {\n      email,\n      password2,\n      password\n    };\n    let isValid = (0,_validation__WEBPACK_IMPORTED_MODULE_0__.signupValidation)(formData);\n\n    if (!isValid) {\n      this.redirect('/user/signup');\n      return;\n    }\n\n    sharedData.isLoading = true;\n    this.redirect('/user/signup');\n    db.signup({\n      username: email,\n      password\n    }).then(res => {\n      console.log(res);\n      msgs.push({\n        msg: 'User Created Successfully !',\n        class: 'alert-success'\n      });\n      sharedData.isLoading = false;\n      this.redirect('/user/login');\n      formData = {};\n    }).catch(err => {\n      if (err.status === 409) {\n        msgs.push({\n          msg: 'User Already exists!',\n          class: 'alert-danger'\n        });\n        sharedData.email = {};\n        sharedData.email.invalid = true;\n        sharedData.password = {};\n        sharedData.password2 = {};\n        sharedData.isLoading = false;\n        this.redirect('/user/signup');\n      }\n    });\n  }\n\n  getLogout() {\n    let token = sessionStorage.getItem('loggedIn');\n    db.logout(token).then(res => {\n      msgs.push({\n        msg: 'Logged out Successfully !',\n        class: 'alert-success'\n      });\n      sessionStorage.removeItem('loggedIn');\n      sessionStorage.removeItem('user');\n      loggedIn = false;\n      this.redirect('/user/login');\n    }).catch(err => {\n      msgs.push({\n        msg: err.statusText,\n        class: 'alert-danger'\n      });\n      this.redirect('/');\n    });\n  }\n\n}\n\n//# sourceURL=webpack://routinglab-v1/./src/controllers/userCtrl.js?");

/***/ }),

/***/ "./src/helpers/kinvey.js":
/*!*******************************!*\
  !*** ./src/helpers/kinvey.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Kinvey)\n/* harmony export */ });\nclass Kinvey {\n  constructor(app_id, app_secret) {\n    this.app_id = app_id;\n    this.app_secret = app_secret;\n  }\n\n  test(data) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}`;\n      let {\n        username,\n        password\n      } = data;\n      let headers = {\n        'Content-Type': 'application/json',\n        'Authorization': 'Basic ' + btoa(username + \":\" + password)\n      };\n      fetch(url, {\n        method: 'GET',\n        headers: headers\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  get(endpoint, authToken, loginData) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}`;\n      let headers;\n\n      if (loginData) {\n        let {\n          username,\n          password\n        } = loginData;\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Basic ' + btoa(username + \":\" + password)\n        };\n      }\n\n      if (authToken) {\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Kinvey ' + authToken\n        };\n      }\n\n      fetch(url, {\n        method: 'GET',\n        headers: headers\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  post(endpoint, data, authToken, loginData) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}`;\n      let headers;\n\n      if (loginData) {\n        let {\n          username,\n          password\n        } = loginData;\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Basic ' + btoa(username + \":\" + password)\n        };\n      }\n\n      if (authToken) {\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Kinvey ' + authToken\n        };\n      }\n\n      fetch(url, {\n        method: 'POST',\n        headers: headers,\n        body: JSON.stringify(data)\n      }).then(res => {\n        if (res.status === 201) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  delete(endpoint, id, authToken, loginData) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}/${id}`;\n      let headers;\n\n      if (loginData) {\n        let {\n          username,\n          password\n        } = loginData;\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Basic ' + btoa(username + \":\" + password)\n        };\n      }\n\n      if (authToken) {\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Kinvey ' + authToken\n        };\n      }\n\n      fetch(url, {\n        method: 'DELETE',\n        headers: headers\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  edit(endpoint, id, data, authToken, loginData) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}/${id}`;\n      let headers;\n\n      if (loginData) {\n        let {\n          username,\n          password\n        } = loginData;\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Basic ' + btoa(username + \":\" + password)\n        };\n      }\n\n      if (authToken) {\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Kinvey ' + authToken\n        };\n      }\n\n      fetch(url, {\n        method: 'PUT',\n        headers: headers,\n        body: JSON.stringify(data)\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  signup(data) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/user/${this.app_id}`;\n      const headers = {\n        'Content-Type': 'application/json',\n        'Authorization': 'Basic ' + btoa(this.app_id + \":\" + this.app_secret)\n      };\n      fetch(url, {\n        method: 'POST',\n        headers: headers,\n        body: JSON.stringify(data)\n      }).then(res => {\n        if (res.status === 201) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data._kmd.authtoken)).catch(err => reject(err));\n    });\n  }\n\n  login(data) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/user/${this.app_id}/login`;\n      let {\n        username,\n        password\n      } = data;\n      const headers = {\n        'Content-Type': 'application/json',\n        'Authorization': 'Basic ' + btoa(username + \":\" + password)\n      };\n      fetch(url, {\n        method: 'POST',\n        headers: headers,\n        body: JSON.stringify(data)\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  logout(authToken) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/user/${this.app_id}/_logout`;\n      const headers = {\n        'Content-Type': 'application/json',\n        'Authorization': 'Kinvey ' + authToken\n      };\n      fetch(url, {\n        method: 'POST',\n        headers: headers\n      }).then(res => {\n        if (res.status === 204) {\n          resolve({\n            msg: 'user logged out'\n          });\n        }\n      }).catch(err => reject(err));\n    });\n  }\n\n}\n\n//# sourceURL=webpack://routinglab-v1/./src/helpers/kinvey.js?");

/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginValidation\": () => (/* binding */ loginValidation),\n/* harmony export */   \"signupValidation\": () => (/* binding */ signupValidation),\n/* harmony export */   \"createValidation\": () => (/* binding */ createValidation)\n/* harmony export */ });\nconst loginValidation = ({\n  email,\n  password\n}) => {\n  sharedData = {\n    email: {},\n    password: {}\n  };\n\n  if (!email) {\n    msgs.push({\n      msg: 'Email Field is required',\n      class: 'alert-danger'\n    });\n    sharedData.email.invalid = true;\n  } else if (!validator.isEmail(email)) {\n    msgs.push({\n      msg: 'Email format is inccorect',\n      class: 'alert-danger'\n    });\n    sharedData.email.invalid = true;\n  } else {\n    sharedData.email.valid = true;\n  }\n\n  if (!password) {\n    msgs.push({\n      msg: 'Password Field is required',\n      class: 'alert-danger'\n    });\n    sharedData.password.invalid = true;\n  } else if (!validator.isLength(password, {\n    min: 6,\n    max: 15\n  })) {\n    msgs.push({\n      msg: 'Password should be 6-15 characters',\n      class: 'alert-danger'\n    });\n    sharedData.password.invalid = true;\n  } else {\n    sharedData.password.valid = true;\n  }\n\n  let isValid = msgs.length === 0;\n  return isValid;\n};\nconst signupValidation = ({\n  email,\n  password,\n  password2\n}) => {\n  loginValidation({\n    email,\n    password\n  });\n  sharedData.password2 = {};\n\n  if (!password2) {\n    msgs.push({\n      msg: 'Confirmed Password Field is required',\n      class: 'alert-danger'\n    });\n    sharedData.password2.invalid = true;\n  } else if (!validator.equals(password, password2)) {\n    msgs.push({\n      msg: 'Password not matching',\n      class: 'alert-danger'\n    });\n    sharedData.password2.invalid = true;\n  } else {\n    sharedData.password2.valid = true;\n  }\n\n  let isValid = msgs.length === 0;\n  return isValid;\n};\nconst createValidation = ({\n  maker,\n  model,\n  year,\n  desc,\n  price,\n  imageUrl,\n  material\n}) => {\n  if (!maker) {\n    sharedData.maker = {\n      invalid: true,\n      valid: false,\n      msg: 'Provide Maker'\n    };\n  } else if (!validator.isLength(maker, {\n    min: 4\n  })) {\n    sharedData.maker = {\n      invalid: true,\n      valid: false,\n      msg: 'Maker should be at least 4 characters'\n    };\n  } else {\n    sharedData.maker = {\n      valid: true,\n      invalid: false\n    };\n  }\n\n  if (!model) {\n    sharedData.model = {\n      invalid: true,\n      valid: false,\n      msg: 'Provide model'\n    };\n  } else if (!validator.isLength(model, {\n    min: 4\n  })) {\n    sharedData.model = {\n      invalid: true,\n      valid: false,\n      msg: 'model should be at least 4 characters'\n    };\n  } else {\n    sharedData.model = {\n      valid: true,\n      invalid: false\n    };\n  }\n\n  if (sharedData.maker.invalid || sharedData.model.invalid) {\n    msgs.push({\n      msg: 'Check your input',\n      class: 'alert-danger'\n    });\n  }\n\n  let isValid = msgs.length === 0;\n  return isValid;\n};\n\n//# sourceURL=webpack://routinglab-v1/./src/validation.js?");

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
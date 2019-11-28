function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link\r\n  href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n  rel=\"stylesheet\"\r\n/>\r\n<div class=\"example-container-1\">\r\n  <h2 class=\"subTitle\">Elementos</h2>\r\n\r\n  <div\r\n    cdkDropList\r\n    #todoList=\"cdkDropList\"\r\n    [cdkDropListData]=\"todo\"\r\n    [cdkDropListConnectedTo]=\"[doneList]\"\r\n    class=\"example-list\"\r\n    (cdkDropListDropped)=\"drop($event)\"\r\n  >\r\n    <div\r\n      class=\"centrar\"\r\n      *ngFor=\"let item of todo\"\r\n      [ngClass]=\"item.class\"\r\n      cdkDrag\r\n      [cdkDragDisabled]=\"item.disabled\"\r\n    >\r\n      {{ item.title }}\r\n      <!-- <img *cdkDragPreview [src]=\"item.img\" [alt]=\"item.title\" width=\"500px\" height=\"500px\"> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"example-container-2\" ng-app=\"myApp\" ng-controller=\"myCtrl\">\r\n  <h2 class=\"title\">GUARANITY IDE</h2>\r\n  <div class=\"buttons\">\r\n    <button (click)=\"prueba(true)\" title=\"Play\">\r\n      <i class=\"material-icons\" style=\"transform: rotate(90deg);\">eject</i>\r\n    </button>\r\n    <button (click)=\"prueba(false)\" title=\"Download\">\r\n      <i class=\"material-icons\">file_download</i>\r\n    </button>\r\n    <button (click)=\"limpiar()\" title=\"Clean\">\r\n      <i class=\"material-icons\">delete_sweep</i>\r\n    </button>\r\n    <button title=\"Upload\">\r\n      <i class=\"material-icons\">open_in_browser </i>\r\n    </button>\r\n    <a\r\n      target=\"_blank\"\r\n      href=\"https://drive.google.com/file/d/1uOKrv2nw77F3Y5ACQ2_vLn2RQcCRVCtP/view?usp=sharing\"\r\n      title=\"Help\"\r\n      ><i class=\"material-icons\">live_help</i></a\r\n    >\r\n  </div>\r\n  <div\r\n    cdkDropList\r\n    #doneList=\"cdkDropList\"\r\n    [cdkDropListData]=\"done\"\r\n    [cdkDropListConnectedTo]=\"[todoList]\"\r\n    class=\"example-list\"\r\n    (cdkDropListDropped)=\"drop($event)\"\r\n  >\r\n    <div class=\"start\">\r\n      Inicio\r\n    </div>\r\n    <div\r\n      class=\"centrar inputStyle\"\r\n      *ngFor=\"let item of done\"\r\n      [ngClass]=\"item.class\"\r\n      cdkDrag\r\n      [cdkDragDisabled]=\"item.disabled\"\r\n    >\r\n      {{ item.title }}\r\n      <input\r\n        *ngIf=\"item.condition; else elseBlock\"\r\n        class=\"{{ item.class + 1 }}\"\r\n        style=\"font-size: 1rem;  margin-left: auto; margin-right: auto; width: auto\"\r\n      />\r\n      <ng-template #elseBlock\r\n        ><input type=\"hidden\" class=\"{{ item.class + 1 }}\" value=\"}\"\r\n      /></ng-template>\r\n    </div>\r\n    <div class=\"end\">\r\n      Fin\r\n    </div>\r\n    <div style=\"width: 100%; margin-top: 1rem;\">\r\n      <table id=\"tabla1\"></table>\r\n    </div>\r\n    <div style=\"width: 100%; margin-top: 1rem;\">\r\n      <table id=\"tabla2\"></table>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Baloo+Bhaina|Black+Ops+One&display=swap);\n@import url(https://fonts.googleapis.com/css?family=Acme&display=swap);\n.example-container-1 {\n  width: 20%;\n  display: inline-block;\n  vertical-align: top;\n  height: 100%;\n  background-color: #b2ebf2;\n}\n.example-container-2 {\n  width: 80%;\n  display: inline-block;\n  vertical-align: top;\n  height: 100%;\n  background-color: #e0f7fa;\n}\n.example-list {\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  border: solid #000000;\n  background-color: #E0F7FA;\n}\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.centrar {\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 2.5rem;\n  width: 360px;\n  height: 40px;\n  padding-left: 1rem;\n  color: #ffffff;\n}\n.cdk-drag.centrar {\n  width: 85%;\n  border-radius: 5px;\n}\n.inputStyle {\n  display: flex;\n  flex-direction: row;\n}\n.inputStyle.cdk-drag.centrar {\n  width: 360px;\n}\n.if, .endif {\n  border: solid 2.5px #000000;\n  background: #01579b;\n}\n.else, .endelse {\n  border: solid 2.5px #000000;\n  background: #0165b4;\n}\n.elseif, .endelseif {\n  border: solid 2.5px #000000;\n  background: #0173ce;\n}\n.var {\n  border: solid 2.5px #000000;\n  background: #ff8f00;\n}\n.function, .endfunction {\n  border: solid 2.5px #000000;\n  background: #e68100;\n}\n.instruccion {\n  border: solid 2.5px #000000;\n  background: #007447;\n}\n.while, .endwhile {\n  border: 2.5px #000000;\n  border-style: solid dotted;\n  background: #e53935;\n}\n.for, .endfor {\n  border: 2.5px #000000;\n  border-style: solid dotted;\n  background: #d32f2f;\n}\n.start {\n  width: 400px;\n  height: 60px;\n  border: double 8px #007447;\n  text-align: center;\n  font-size: 2.5rem;\n  border-radius: 50px;\n  margin-right: auto;\n  margin-left: auto;\n  background: #00ba7c;\n  color: #ffffff;\n}\n.end {\n  width: 390px;\n  height: 60px;\n  border: double 8px #007447;\n  text-align: center;\n  font-size: 2.5rem;\n  border-radius: 50px;\n  margin-right: auto;\n  margin-left: auto;\n  background: #00ba7c;\n  color: #ffffff;\n}\n.buttons {\n  display: flex;\n  flex-direction: row;\n}\nbutton {\n  margin: 5px;\n  box-shadow: inset 0px 1px 0px 0px #276873;\n  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);\n  background-color: #599bb3;\n  border-radius: 100px;\n  border: 1px solid #29668f;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 10px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #3d768a;\n}\nbutton:hover {\n  background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);\n  background-color: #408c99;\n}\nbutton:active {\n  position: relative;\n  top: 1px;\n}\na:link, a:visited {\n  margin: 5px;\n  box-shadow: inset 0px 1px 0px 0px #276873;\n  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);\n  background-color: #599bb3;\n  border-radius: 100px;\n  border: 1px solid #29668f;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 10px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #3d768a;\n}\na:hover {\n  background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);\n  background-color: #408c99;\n}\na:active {\n  position: relative;\n  top: 1px;\n}\n.subTitle {\n  font-size: 20px;\n  color: #000;\n  padding-top: 80px;\n  font-family: Acme;\n  text-align: center;\n}\n.title {\n  font-size: 45px;\n  color: #000;\n  font-family: \"Baloo Bhaina\";\n  text-align: center;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERvY3VtZW50c1xcVUNBXFxURU9cXEd1YXJhbml0eVxcR3VhcmFuaXR5XFxndWFyYW5pdHktaWRlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RkFBQTtBQUNBLHNFQUFBO0FBRVI7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0FGO0FER0E7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUY7QURHQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQ0FGO0FESUE7RUFDRSxVQUFBO0FDREY7QURJQTtFQUNFLHNEQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7QUNERjtBRElBO0VBQ0Usc0RBQUE7QUNERjtBRElBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNERjtBREdBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0FDRUY7QURDQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQ0VGO0FEQ0E7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FDRUY7QURDQTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQ0VGO0FEQ0E7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FDRUY7QURDQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0VGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNFRjtBRENBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNFRjtBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRUY7QURFQTtFQUNFLFdBQUE7RUFDQSx5Q0FBQTtFQUNELGdFQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FDQ0Q7QURFQTtFQUNDLGdFQUFBO0VBQ0EseUJBQUE7QUNDRDtBRENBO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0FDRUQ7QURDQTtFQUNFLFdBQUE7RUFDQSx5Q0FBQTtFQUNELGdFQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FDRUQ7QURFQTtFQUNFLGdFQUFBO0VBQ0QseUJBQUE7QUNDRDtBRENBO0VBQ0Usa0JBQUE7RUFDRCxRQUFBO0FDRUQ7QURDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUY7QURBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYWxvbytCaGFpbmF8QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXApO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWNtZSZkaXNwbGF5PXN3YXApO1xyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyLTEge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmViZjI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lci0yIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmN2ZhO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0IHtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEY3RkE7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uY2VudHJhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIHdpZHRoOiAzNjBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5jZGstZHJhZy5jZW50cmFye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5pbnB1dFN0eWxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmlucHV0U3R5bGUuY2RrLWRyYWcuY2VudHJhcntcclxuICB3aWR0aDogMzYwcHg7XHJcbn1cclxuXHJcbi5pZiwgLmVuZGlmIHtcclxuICBib3JkZXI6IHNvbGlkIDIuNXB4ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZDogIzAxNTc5YjtcclxufVxyXG5cclxuLmVsc2UgLCAuZW5kZWxzZXtcclxuICBib3JkZXI6IHNvbGlkIDIuNXB4ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZDogIzAxNjViNDtcclxufVxyXG5cclxuLmVsc2VpZiAsIC5lbmRlbHNlaWZ7XHJcbiAgYm9yZGVyOiBzb2xpZCAyLjVweCAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICMwMTczY2U7XHJcbn1cclxuXHJcbi52YXIge1xyXG4gIGJvcmRlcjogc29saWQgMi41cHggIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kOiAjZmY4ZjAwO1xyXG59XHJcblxyXG4uZnVuY3Rpb24sIC5lbmRmdW5jdGlvbiB7XHJcbiAgYm9yZGVyOiBzb2xpZCAyLjVweCAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNlNjgxMDA7XHJcbn1cclxuXHJcbi5pbnN0cnVjY2lvbiB7XHJcbiAgYm9yZGVyOiBzb2xpZCAyLjVweCAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6ICMwMDc0NDc7XHJcbn1cclxuXHJcbi53aGlsZSAsIC5lbmR3aGlsZXtcclxuICBib3JkZXI6IDIuNXB4ICMwMDAwMDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZCBkb3R0ZWQ7XHJcbiAgYmFja2dyb3VuZDogI2U1MzkzNTtcclxufVxyXG5cclxuLmZvciwgLmVuZGZvciB7XHJcbiAgYm9yZGVyOiAyLjVweCAjMDAwMDAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQgZG90dGVkO1xyXG4gIGJhY2tncm91bmQ6ICNkMzJmMmY7XHJcbn1cclxuXHJcbi5zdGFydCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IGRvdWJsZSA4cHggIzAwNzQ0NztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogIzAwYmE3YztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmVuZCB7XHJcbiAgd2lkdGg6IDM5MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IGRvdWJsZSA4cHggIzAwNzQ0NztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogIzAwYmE3YztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJveC1zaGFkb3c6aW5zZXQgMHB4IDFweCAwcHggMHB4ICMyNzY4NzM7XHJcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTk5YmIzIDUlLCAjNDA4Yzk5IDEwMCUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzU5OWJiMztcclxuXHRib3JkZXItcmFkaXVzOjEwMHB4O1xyXG5cdGJvcmRlcjoxcHggc29saWQgIzI5NjY4ZjtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG5cdGZvbnQtZmFtaWx5OkFyaWFsO1xyXG5cdGZvbnQtc2l6ZToxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0cGFkZGluZzo2cHggMTBweDtcclxuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHR0ZXh0LXNoYWRvdzowcHggMXB4IDBweCAjM2Q3NjhhO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQwOGM5OSA1JSwgIzU5OWJiMyAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiM0MDhjOTk7XHJcbn1cclxuYnV0dG9uOmFjdGl2ZSB7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0dG9wOjFweDtcclxufVxyXG5cclxuYTpsaW5rLCBhOnZpc2l0ZWQge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJveC1zaGFkb3c6aW5zZXQgMHB4IDFweCAwcHggMHB4ICMyNzY4NzM7XHJcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTk5YmIzIDUlLCAjNDA4Yzk5IDEwMCUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzU5OWJiMztcclxuXHRib3JkZXItcmFkaXVzOjEwMHB4O1xyXG5cdGJvcmRlcjoxcHggc29saWQgIzI5NjY4ZjtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG5cdGZvbnQtZmFtaWx5OkFyaWFsO1xyXG5cdGZvbnQtc2l6ZToxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0cGFkZGluZzo2cHggMTBweDtcclxuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHR0ZXh0LXNoYWRvdzowcHggMXB4IDBweCAjM2Q3NjhhO1xyXG4gIFxyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQwOGM5OSA1JSwgIzU5OWJiMyAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiM0MDhjOTk7XHJcbn1cclxuYTphY3RpdmV7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcblx0dG9wOjFweDtcclxufVxyXG5cclxuLnN1YlRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBmb250LWZhbWlseTogQWNtZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LWZhbWlseTogJ0JhbG9vIEJoYWluYSc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBcclxufVxyXG4iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFsb28rQmhhaW5hfEJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BY21lJmRpc3BsYXk9c3dhcCk7XG4uZXhhbXBsZS1jb250YWluZXItMSB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJlYmYyO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXItMiB7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmN2ZhO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEY3RkE7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5jZW50cmFyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIHdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2RrLWRyYWcuY2VudHJhciB7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlucHV0U3R5bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaW5wdXRTdHlsZS5jZGstZHJhZy5jZW50cmFyIHtcbiAgd2lkdGg6IDM2MHB4O1xufVxuXG4uaWYsIC5lbmRpZiB7XG4gIGJvcmRlcjogc29saWQgMi41cHggIzAwMDAwMDtcbiAgYmFja2dyb3VuZDogIzAxNTc5Yjtcbn1cblxuLmVsc2UsIC5lbmRlbHNlIHtcbiAgYm9yZGVyOiBzb2xpZCAyLjVweCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kOiAjMDE2NWI0O1xufVxuXG4uZWxzZWlmLCAuZW5kZWxzZWlmIHtcbiAgYm9yZGVyOiBzb2xpZCAyLjVweCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kOiAjMDE3M2NlO1xufVxuXG4udmFyIHtcbiAgYm9yZGVyOiBzb2xpZCAyLjVweCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmY4ZjAwO1xufVxuXG4uZnVuY3Rpb24sIC5lbmRmdW5jdGlvbiB7XG4gIGJvcmRlcjogc29saWQgMi41cHggIzAwMDAwMDtcbiAgYmFja2dyb3VuZDogI2U2ODEwMDtcbn1cblxuLmluc3RydWNjaW9uIHtcbiAgYm9yZGVyOiBzb2xpZCAyLjVweCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kOiAjMDA3NDQ3O1xufVxuXG4ud2hpbGUsIC5lbmR3aGlsZSB7XG4gIGJvcmRlcjogMi41cHggIzAwMDAwMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZCBkb3R0ZWQ7XG4gIGJhY2tncm91bmQ6ICNlNTM5MzU7XG59XG5cbi5mb3IsIC5lbmRmb3Ige1xuICBib3JkZXI6IDIuNXB4ICMwMDAwMDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQgZG90dGVkO1xuICBiYWNrZ3JvdW5kOiAjZDMyZjJmO1xufVxuXG4uc3RhcnQge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyOiBkb3VibGUgOHB4ICMwMDc0NDc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMwMGJhN2M7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZW5kIHtcbiAgd2lkdGg6IDM5MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogZG91YmxlIDhweCAjMDA3NDQ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMDBiYTdjO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICMyNzY4NzM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1OTliYjMgNSUsICM0MDhjOTkgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTliYjM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjk2NjhmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICMzZDc2OGE7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0MDhjOTkgNSUsICM1OTliYjMgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDhjOTk7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG5hOmxpbmssIGE6dmlzaXRlZCB7XG4gIG1hcmdpbjogNXB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggIzI3Njg3MztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU5OWJiMyA1JSwgIzQwOGM5OSAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5OWJiMztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTY2OGY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggIzNkNzY4YTtcbn1cblxuYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0MDhjOTkgNSUsICM1OTliYjMgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDhjOTk7XG59XG5cbmE6YWN0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuLnN1YlRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIGZvbnQtZmFtaWx5OiBBY21lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIEJoYWluYVwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! axios */
    "./node_modules/axios/index.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "guaranity-ide";
        this.codigoFull = "";
        this.code = "";
        this.codigoP = "";
        this.tabla = [];
        this.todo = [{
          title: "var",
          class: "var",
          disabled: false,
          img: "./assets/equals.fw.png",
          condition: true
        }, {
          title: "",
          class: "instruccion",
          disabled: false,
          condition: true
        }, {
          title: "if",
          class: "if",
          disabled: false,
          condition: true
        }, {
          title: "else",
          class: "else",
          disabled: false,
          condition: false
        }, {
          title: "while",
          class: "while",
          disabled: false,
          condition: true
        }, {
          title: "for",
          class: "for",
          disabled: false,
          condition: true
        }, {
          title: "func",
          class: "function",
          disabled: false,
          condition: true
        }];
        this.done = [];
        this.especiales = ["if", "elseif", "else", "for", "while", "function", "loop", "int", "float", "char", "boolean", "string", "array", "var", "openfile", "readfile", "closefile", "true", "false", "read", "print", "return"];
        this.tokens = ["ifTok", "elseifTok", "elseTok", "forTok", "whileTok", "functionTok", "loopTok", "intTok", "floatTok", "charTok", "booleanTok", "stringTok", "arrayTok", "varTok", "openfileTok", "readfileTok", "closefileTok", "trueTok", "falseTok", "readTok", "printTok", "returnTok"];
        this.caracteres = [";", "{", "}", "<", ">", "==", "<=", ">=", "!=", "+", "-", "*", "/", "%", "++", "--", "=", "#", "[", "]", "(", ")"];
        this.alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
        this.numero = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        this.position_actual = 0; // Todo esto lo ocupo para el Sintactico y unas llamadas en la función del Lexicografico

        this.ToksTable = [];
        this.comparadores = ["<", ">", ">='", ">=", "==", "!="];
        this.posicion = 0;
        this.ret = true;
      }

      _createClass(AppComponent, [{
        key: "prueba",
        value: function prueba(flag) {
          this.code = "";
          this.codigoFull = "";
          var inputs = document.getElementsByTagName("input");

          for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].className == "if1") {
              this.code += "if(" + inputs[i].value + "){\n";
              this.codigoFull += "if ( " + inputs[i].value + " ) { ";
            }

            if (inputs[i].className == "endif1") {
              this.code += "}\n";
              this.codigoFull += "}";
            }

            if (inputs[i].className == "elseif1") {
              this.code += "elseif(" + inputs[i].value + "){\n";
              this.codigoFull += "elseif ( " + inputs[i].value + " ){ ";
            }

            if (inputs[i].className == "endelseif1") {
              this.code += "}\n";
              this.codigoFull += "}";
            }

            if (inputs[i].className == "else1") {
              this.code += "else {\n";
              this.codigoFull += "else { ";
            }

            if (inputs[i].className == "endelse1") {
              this.code += "}\n";
              this.codigoFull += "}";
            }

            if (inputs[i].className == "instruccion1") {
              this.code += inputs[i].value + "\n";
              this.codigoFull += inputs[i].value + " ";
            }

            if (inputs[i].className == "while1") {
              this.code += "while(" + inputs[i].value + "){\n";
              this.codigoFull += "while ( " + inputs[i].value + " ) { ";
            }

            if (inputs[i].className == "endwhile1") {
              this.code += "}\n";
              this.codigoFull += "} ";
            }

            if (inputs[i].className == "for1") {
              this.code += "for(" + inputs[i].value + "){\n";
              this.codigoFull += "for ( " + inputs[i].value + " ) { ";
            }

            if (inputs[i].className == "endfor1") {
              this.code += "}\n";
              this.codigoFull += "}";
            }

            if (inputs[i].className == "var1") {
              this.code += "var " + inputs[i].value + ";\n";
              this.codigoFull += "var " + inputs[i].value + " ; ";
            }

            if (inputs[i].className == "function1") {
              this.code += "function(" + inputs[i].value + "){\n";
              this.codigoFull += "function " + inputs[i].value + " { ";
            }

            if (inputs[i].className == "endfunction1") {
              this.code += "}\n";
              this.codigoFull += "}";
            }
          }

          if (flag) {
            this.callLexicografico();
          } else {
            this.saveFile();
          }
        }
      }, {
        key: "splitCode",
        value: function splitCode() {
          return this.codigoFull.split(" ");
        }
      }, {
        key: "printTexto",
        value: function printTexto(texto) {
          var parrafo = document.createElement("p");
          var textCode = document.createTextNode(texto);
          parrafo.appendChild(textCode);
          document.getElementById("tabla1").appendChild(parrafo);
        }
      }, {
        key: "callLexicografico",
        value: function callLexicografico() {
          var _this = this;

          axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://167.71.113.211:5000/lexi", {
            var1: this.codigoFull
          }).then(function (res) {
            _this.clearTable();

            _this.createTable2();

            _this.tabla = res.data;

            _this.createTable();

            _this.ToksTable = [];

            for (var i = 0; i < _this.tabla.length; i++) {
              _this.ToksTable.push(_this.tabla[i].token);
            }

            _this.callSintactico();
          }).catch(function (error) {
            console.error(error);
          });
        }
      }, {
        key: "callSintactico",
        value: function callSintactico() {
          var _this2 = this;

          axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://167.71.113.211:5000/sintactico", {
            tokens: this.ToksTable
          }).then(function (res) {
            alert(res.data);

            _this2.callIntermedio();
          }).catch(function (error) {
            console.error(error);
          });
        }
      }, {
        key: "callIntermedio",
        value: function callIntermedio() {
          var _this3 = this;

          axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://167.71.113.211:5000/inter", {
            var1: this.tabla
          }).then(function (res) {
            console.log("Codigo p");
            console.log(res.data);
            _this3.codigoP = res.data;

            _this3.createTable2();
          }).catch(function (error) {
            console.error(error);
          });
        }
      }, {
        key: "limpiar",
        value: function limpiar() {
          this.done = [];
          this.codigoFull = "";
          this.clearTable();
        }
      }, {
        key: "createTable2",
        value: function createTable2() {
          this.clearTable2();
          var col2 = document.createElement("tr");
          var row3 = document.createElement("th");
          var textrow3 = document.createTextNode("Código P");
          row3.appendChild(textrow3);
          col2.appendChild(row3);

          for (var i = 0; i < this.codigoP.length; i++) {
            var col2 = document.createElement("tr");
            var row3 = document.createElement("td");
            var textrow1 = document.createTextNode(this.codigoP[i]);
            row3.appendChild(textrow1);
            col2.appendChild(row3);
            document.getElementById("tabla2").appendChild(col2);
          }
        }
      }, {
        key: "createTable",
        value: function createTable() {
          this.clearTable();
          var col = document.createElement("tr");
          var row1 = document.createElement("th");
          var textrow1 = document.createTextNode("Lexema");
          var row2 = document.createElement("th");
          var textrow2 = document.createTextNode("Token");
          row1.appendChild(textrow1);
          row2.appendChild(textrow2);
          col.appendChild(row1);
          col.appendChild(row2);
          document.getElementById("tabla1").appendChild(col);

          for (var i = 0; i < this.tabla.length; i++) {
            var col = document.createElement("tr");
            var row1 = document.createElement("td");
            var textrow1 = document.createTextNode(this.tabla[i].lexema);
            var row2 = document.createElement("td");
            var textrow2 = document.createTextNode(this.tabla[i].token);
            row1.appendChild(textrow1);
            row2.appendChild(textrow2);
            col.appendChild(row1);
            col.appendChild(row2);
            document.getElementById("tabla1").appendChild(col);
          }
        }
      }, {
        key: "clearTable",
        value: function clearTable() {
          var list = document.getElementById("tabla1"); // As long as <ul> has a child node, remove it

          while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
          }
        }
      }, {
        key: "clearTable2",
        value: function clearTable2() {
          var list = document.getElementById("tabla2");

          while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
          }
        }
      }, {
        key: "insertarEnd",
        value: function insertarEnd(clase, num) {
          if (clase == " if ") {
            this.done.splice(num + 1, 0, {
              title: "end if",
              class: "endif",
              disabled: false,
              condition: false
            });
          }

          if (clase == " else ") {
            this.done.splice(num + 1, 0, {
              title: "end else",
              class: "endelse",
              disabled: false,
              condition: false
            });
          }

          if (clase == " elseif ") {
            this.done.splice(num + 1, 0, {
              title: "end elseif",
              class: "endelseif",
              disabled: false,
              condition: false
            });
          }

          if (clase == " for ") {
            this.done.splice(num + 1, 0, {
              title: "end for",
              class: "endfor",
              disabled: false,
              condition: false
            });
          }

          if (clase == " while ") {
            this.done.splice(num + 1, 0, {
              title: "end while",
              class: "endwhile",
              disabled: false,
              condition: false
            });
          }

          if (clase == " func ") {
            this.done.splice(num + 1, 0, {
              title: "end function",
              class: "endfunction",
              disabled: false,
              condition: false
            });
          }
        }
      }, {
        key: "drop",
        value: function drop(event) {
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            console.log(event.item.element);
            this.insertarEnd(event.item.element.nativeElement.textContent, event.currentIndex);
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["copyArrayItem"])(event.container.data, event.previousContainer.data, event.currentIndex, event.previousIndex);
          }
        }
      }, {
        key: "saveFile",
        value: function saveFile() {
          var blob = new Blob([this.code], {
            type: "text/plain"
          });
          Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, "prueba.guat");
        }
      }, {
        key: "lexicograficoFinal",
        value: function lexicograficoFinal() {
          var codigo = this.codigoFull.toLowerCase();
          var aux = "";
          var token = "";
          var flag = false;

          for (var i = 0; i < codigo.length; i++) {
            if (this.alfabeto.indexOf(codigo[i]) != -1) {
              aux += codigo[i];
              flag = true;

              if (this.caracteres.indexOf(codigo[i + 1]) != -1) {
                if (flag) {
                  flag = false;

                  if (this.especiales.indexOf(aux) != -1) {
                    token = this.tokens[this.especiales.indexOf(aux)];
                    this.tabla.push({
                      lexema: aux,
                      token: token
                    });
                    this.ToksTable.push(token);
                  } else {
                    token = "identificador";
                    this.tabla.push({
                      lexema: aux,
                      token: token
                    });
                    this.ToksTable.push(token);
                  }
                }

                ++i;
                token = "";
                aux = codigo[i];
              }
            }

            if (this.numero.indexOf(codigo[i]) != -1) {
              aux += codigo[i];

              if (this.caracteres.indexOf(codigo[i + 1]) != -1) {
                if (flag) {
                  token = "identificador";
                  flag = false;
                  this.tabla.push({
                    lexema: aux,
                    token: token
                  });
                  this.ToksTable.push(token);
                } else {
                  token = "num";
                  this.tabla.push({
                    lexema: aux,
                    token: token
                  });
                  this.ToksTable.push(token);
                }

                ++i;
                token = "";
                aux = codigo[i];
              }
            }

            if (codigo[i] === " " || this.caracteres.indexOf(codigo[i]) != -1) {
              if (this.especiales.indexOf(aux) != -1) {
                token = this.tokens[this.especiales.indexOf(aux)];
                this.tabla.push({
                  lexema: aux,
                  token: token
                });
                this.ToksTable.push(token);
                flag = false;
              } else if (this.caracteres.indexOf(codigo[i]) != -1) {
                var algo = codigo[i] + codigo[i + 1];
                flag = false;

                if (this.caracteres.indexOf(algo) != -1) {
                  this.tabla.push({
                    lexema: algo,
                    token: algo
                  });
                  this.ToksTable.push(algo);
                  i++;
                } else {
                  this.tabla.push({
                    lexema: codigo[i],
                    token: codigo[i]
                  });
                  this.ToksTable.push(codigo[i]);
                  flag = false;
                }

                flag = false;
              } else {
                if (aux != "" && aux != " ") {
                  if (!isNaN(Number(aux))) {
                    this.tabla.push({
                      lexema: aux,
                      token: "num"
                    });
                    this.ToksTable.push("num");
                  } else {
                    this.tabla.push({
                      lexema: aux,
                      token: "identificador"
                    });
                    this.ToksTable.push("identificador");
                    flag = false;
                  }
                }
              }

              aux = "";
              token = "";
            }
          }

          this.createTable();
          this.tokenActual = this.ToksTable[0];
          this.sintactico();
        }
      }, {
        key: "sintactico",
        value: function sintactico() {
          switch (this.tokenActual) {
            case "}":
              //this.tokenActual=this.ToksTable[++this.posicion];
              this.ret = true;
              break;

            case "ifTok":
              this.tokenActual = this.ToksTable[++this.posicion];

              if (this.tokenActual == "(") {
                this.tokenActual = this.ToksTable[++this.posicion];

                if (this.tokenActual == "identificador" || this.tokenActual == "num") {
                  this.tokenActual = this.ToksTable[++this.posicion];

                  if (this.comparadores.indexOf(this.tokenActual) !== -1) {
                    this.tokenActual = this.ToksTable[++this.posicion];

                    if (this.tokenActual == "identificador" || this.tokenActual == "num") {
                      this.tokenActual = this.ToksTable[++this.posicion];

                      if (this.tokenActual == ")") {
                        this.tokenActual = this.ToksTable[++this.posicion];

                        if (this.tokenActual == "{") {
                          this.tokenActual = this.ToksTable[++this.posicion];
                          console.log("Condición del if Correcta");
                          this.ret = true;
                          this.sintactico();
                          this.ret = false;

                          if (this.tokenActual == "}") {
                            this.tokenActual = this.ToksTable[++this.posicion];
                            console.log("If Correcto");
                          } else {
                            console.log('ERROR SINTACTICO: Se  esperaba una "}"');
                          }
                        } else {
                          console.log('ERROR SINTACTICO: Se  esperaba una "{"');
                        }
                      } else {
                        console.log('ERROR SINTACTICO: Se  esperaba un ")"');
                      }
                    } else {
                      console.log("ERROR SINTACTICO: Se  esperaba un identificador o un numero");
                    }
                  } else {
                    console.log("ERROR SINTACTICO: Se  esperaba un comparador");
                  }
                } else {
                  console.log("ERROR SINTACTICO: Se  esperaba un identificador o un número");
                }
              } else {
                console.log('ERROR SINTACTICO: Se  esperaba un "("');
              }

              break;

            case "whileTok":
              this.tokenActual = this.ToksTable[++this.posicion];

              if (this.tokenActual == "(") {
                this.tokenActual = this.ToksTable[++this.posicion];

                if (this.tokenActual == "identificador" || this.tokenActual == "num") {
                  this.tokenActual = this.ToksTable[++this.posicion];

                  if (this.comparadores.indexOf(this.tokenActual) !== -1) {
                    this.tokenActual = this.ToksTable[++this.posicion];

                    if (this.tokenActual == "identificador" || this.tokenActual == "num") {
                      this.tokenActual = this.ToksTable[++this.posicion];

                      if (this.tokenActual == ")") {
                        this.tokenActual = this.ToksTable[++this.posicion];

                        if (this.tokenActual == "{") {
                          this.tokenActual = this.ToksTable[++this.posicion];
                          console.log("Condición del while Correcta");
                          this.ret = true;
                          this.sintactico();
                          this.ret = false;

                          if (this.tokenActual == "}") {
                            this.tokenActual = this.ToksTable[++this.posicion];
                            console.log("While Correcto");
                          } else {
                            console.log('ERROR SINTACTICO: Se  esperaba una "}"');
                          }
                        } else {
                          console.log('ERROR SINTACTICO: Se  esperaba una "{"');
                        }
                      } else {
                        console.log('ERROR SINTACTICO: Se  esperaba un ")"');
                      }
                    } else {
                      console.log("ERROR SINTACTICO: Se  esperaba un identificador o un numero");
                    }
                  } else {
                    console.log("ERROR SINTACTICO: Se  esperaba un comparador");
                  }
                } else {
                  console.log("ERROR SINTACTICO: Se  esperaba un identificador o un número");
                }
              } else {
                console.log('ERROR SINTACTICO: Se  esperaba un "("');
              }

              break;

            case "varTok":
            default:
              console.log('ERROR SINTACTICO: Se  esperaba una instrucción o una "}');
              break;
          }

          if (!this.ret && this.posicion < this.ToksTable.length) {
            this.sintactico();
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Documents\UCA\TEO\Guaranity\Guaranity\guaranity-ide\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"row-xs-12\">\n      <app-header></app-header>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_main_todo_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-main/todo-main.component */ "./src/app/todo-main/todo-main.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _todo_main_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-main/todo-edit/todo-edit.component */ "./src/app/todo-main/todo-edit/todo-edit.component.ts");
/* harmony import */ var _todo_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo.routing */ "./src/app/todo.routing.ts");
/* harmony import */ var _todo_main_todo_completed_todo_completed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo-main/todo-completed/todo-completed.component */ "./src/app/todo-main/todo-completed/todo-completed.component.ts");
/* harmony import */ var _todo_main_todo_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo-main/todo.services */ "./src/app/todo-main/todo.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _todo_main_todo_main_component__WEBPACK_IMPORTED_MODULE_4__["TodoMainComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _todo_main_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_6__["TodoEditComponent"],
                _todo_main_todo_completed_todo_completed_component__WEBPACK_IMPORTED_MODULE_8__["TodoCompletedComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _todo_routing__WEBPACK_IMPORTED_MODULE_7__["ToDoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            providers: [_todo_main_todo_services__WEBPACK_IMPORTED_MODULE_9__["ToDoServices"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <button class=\"navbar-toggle \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\n      <a class=\"navbar-brand\">ToDo App</a>\n      <div class=\"navbar-header\">\n      </div>\n      <ul class=\"nav navbar-nav \">\n        <li routerLinkActive=\"active\"><a routerLink=\"main\">Main</a></li>\n        <li routerLinkActive=\"active\"><a  routerLink=\"completedTasks\">Completed Tasks</a></li>\n      </ul>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/todo-main/todo-completed/todo-completed.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/todo-main/todo-completed/todo-completed.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i:hover {\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n}"

/***/ }),

/***/ "./src/app/todo-main/todo-completed/todo-completed.component.html":
/*!************************************************************************!*\
  !*** ./src/app/todo-main/todo-completed/todo-completed.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Completed Notes</h1>\n<table class=\"table\">\n    <thead>\n      <tr>\n        <th>Notes</th>\n        <th>Date</th>\n        <!-- <th>Edit</th> -->\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let note of completedNotes; let noteId = index\" class=\"success\">\n        <td>{{ note.desc }}</td>\n        <td>{{ note.date }}</td>\n        <td><i class=\"fa fa-remove\" (click)=\"onRemoveCompletedNote(noteId)\"></i></td>\n      </tr>      \n    \n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/todo-main/todo-completed/todo-completed.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/todo-main/todo-completed/todo-completed.component.ts ***!
  \**********************************************************************/
/*! exports provided: TodoCompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoCompletedComponent", function() { return TodoCompletedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.services */ "./src/app/todo-main/todo.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoCompletedComponent = /** @class */ (function () {
    function TodoCompletedComponent(noteServices) {
        this.noteServices = noteServices;
    }
    TodoCompletedComponent.prototype.onRemoveCompletedNote = function (noteId) {
        this.noteServices.removeCompletedOne(noteId);
    };
    TodoCompletedComponent.prototype.ngOnInit = function () {
        this.completedNotes = this.noteServices.getCompletedLocalStorage();
    };
    TodoCompletedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-completed',
            template: __webpack_require__(/*! ./todo-completed.component.html */ "./src/app/todo-main/todo-completed/todo-completed.component.html"),
            styles: [__webpack_require__(/*! ./todo-completed.component.css */ "./src/app/todo-main/todo-completed/todo-completed.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_services__WEBPACK_IMPORTED_MODULE_1__["ToDoServices"]])
    ], TodoCompletedComponent);
    return TodoCompletedComponent;
}());



/***/ }),

/***/ "./src/app/todo-main/todo-edit/todo-edit.component.css":
/*!*************************************************************!*\
  !*** ./src/app/todo-main/todo-edit/todo-edit.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-main/todo-edit/todo-edit.component.html":
/*!**************************************************************!*\
  !*** ./src/app/todo-main/todo-edit/todo-edit.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Edit Note</h1>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <input class=\"form-control\" type=\"text\" name=\"\" id=\"\"  [(ngModel)]=\"updatedContent\" placeholder=\"{{ editableNote.desc }}\">\n    <div>\n      <button class=\"btn btn-success center-block\" (click)=\"onUpdate()\">Update</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/todo-main/todo-edit/todo-edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/todo-main/todo-edit/todo-edit.component.ts ***!
  \************************************************************/
/*! exports provided: TodoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEditComponent", function() { return TodoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.services */ "./src/app/todo-main/todo.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoEditComponent = /** @class */ (function () {
    function TodoEditComponent(noteServices, route, router) {
        this.noteServices = noteServices;
        this.route = route;
        this.router = router;
    }
    TodoEditComponent.prototype.onUpdate = function () {
        this.noteServices.updateNote(this.noteId, this.updatedContent);
        this.router.navigate(['/main']);
    };
    TodoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.editableNote = _this.noteServices.getNoteById(params['id']);
            _this.noteId = params['id'];
        });
    };
    TodoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-edit',
            template: __webpack_require__(/*! ./todo-edit.component.html */ "./src/app/todo-main/todo-edit/todo-edit.component.html"),
            styles: [__webpack_require__(/*! ./todo-edit.component.css */ "./src/app/todo-main/todo-edit/todo-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_services__WEBPACK_IMPORTED_MODULE_1__["ToDoServices"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TodoEditComponent);
    return TodoEditComponent;
}());



/***/ }),

/***/ "./src/app/todo-main/todo-main.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-main/todo-main.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i{\r\n  font-size: 23px;\r\n}\r\ni:hover {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n}\r\ntd {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\ninput{\r\n  padding: 18px;\r\n}"

/***/ }),

/***/ "./src/app/todo-main/todo-main.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-main/todo-main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">To Do App</h1>\n<h3 class=\"text-center\">Add Note</h3>\n<input style=\"text-align: center;\" type=\"text\" [(ngModel)]='noteName' class=\"form-control\">\n<div class=\"row\">\n  <div align='center'>\n    <button class=\"btn btn-success\" (click)=\"onAddNote()\" [disabled]=\"!noteName\">Add Note</button>\n  </div>\n</div>\n<table class=\"table\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Notes</th>\n        <th>Date</th>\n        <th>Edit</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let note of notes; let noteId = index\">\n        <td><input type=\"checkbox\" (click)=\"onNoteRemove(noteId)\" style=\"cursor:pointer\"></td>\n        <td>{{ note.desc }}</td>\n        <td>{{ note.date }}</td>\n        <td><i class=\"fa fa-edit\" (click)=\"onEdit(noteId)\"></i></td>\n      </tr>      \n      <!-- <tr class=\"success\">\n        <td>Success</td>\n        <td>Doe</td>\n        <td>john@example.com</td>\n      </tr> -->\n      <!-- <tr class=\"danger\">\n        <td>Danger</td>\n        <td>Moe</td>\n        <td>mary@example.com</td>\n      </tr>\n      <tr class=\"info\">\n        <td>Info</td>\n        <td>Dooley</td>\n        <td>july@example.com</td>\n      </tr>\n      <tr class=\"warning\">\n        <td>Warning</td>\n        <td>Refs</td>\n        <td>bo@example.com</td>\n      </tr>\n      <tr class=\"active\">\n        <td>Active</td>\n        <td>Activeson</td>\n        <td>act@example.com</td>\n      </tr> -->\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/todo-main/todo-main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-main/todo-main.component.ts ***!
  \**************************************************/
/*! exports provided: TodoMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoMainComponent", function() { return TodoMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.services */ "./src/app/todo-main/todo.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoMainComponent = /** @class */ (function () {
    function TodoMainComponent(noteServices, route, router) {
        this.noteServices = noteServices;
        this.route = route;
        this.router = router;
    }
    TodoMainComponent.prototype.onAddNote = function () {
        if (this.noteName) {
            this.noteServices.addNote(this.noteName);
        }
    };
    TodoMainComponent.prototype.ngDoCheck = function () {
        this.noteServices.saveNoteChangesToLocal();
    };
    TodoMainComponent.prototype.ngOnInit = function () {
        this.notes = this.noteServices.getLocalStorage();
    };
    TodoMainComponent.prototype.onNoteRemove = function (noteId) {
        this.noteServices.removeNote(noteId);
    };
    TodoMainComponent.prototype.onEdit = function (noteId) {
        this.router.navigate(['edit', noteId]);
    };
    TodoMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-main',
            template: __webpack_require__(/*! ./todo-main.component.html */ "./src/app/todo-main/todo-main.component.html"),
            styles: [__webpack_require__(/*! ./todo-main.component.css */ "./src/app/todo-main/todo-main.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_services__WEBPACK_IMPORTED_MODULE_1__["ToDoServices"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TodoMainComponent);
    return TodoMainComponent;
}());



/***/ }),

/***/ "./src/app/todo-main/todo.model.ts":
/*!*****************************************!*\
  !*** ./src/app/todo-main/todo.model.ts ***!
  \*****************************************/
/*! exports provided: NoteModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteModel", function() { return NoteModel; });
var NoteModel = /** @class */ (function () {
    function NoteModel(desc, date) {
        this.desc = desc;
        this.date = date;
    }
    return NoteModel;
}());



/***/ }),

/***/ "./src/app/todo-main/todo.services.ts":
/*!********************************************!*\
  !*** ./src/app/todo-main/todo.services.ts ***!
  \********************************************/
/*! exports provided: ToDoServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoServices", function() { return ToDoServices; });
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.model */ "./src/app/todo-main/todo.model.ts");

var ToDoServices = /** @class */ (function () {
    function ToDoServices() {
        this.notes = [
            new _todo_model__WEBPACK_IMPORTED_MODULE_0__["NoteModel"]('example-1', '12.12.2012'),
        ];
        this.completedNotes = this.getCompletedLocalStorage();
    }
    ToDoServices.prototype.saveNoteChangesToLocal = function () {
        var notesJson = JSON.stringify(this.notes);
        var completedNotesJson = JSON.stringify(this.completedNotes);
        localStorage.setItem('notes', notesJson);
        localStorage.setItem('completedNotes', completedNotesJson);
    };
    ToDoServices.prototype.getLocalStorage = function () {
        if (localStorage.getItem('notes')) {
            var loadedNotes = localStorage.getItem('notes');
            this.notes = JSON.parse(loadedNotes);
            return this.notes;
        }
        else {
            return this.getNotes();
        }
    };
    ToDoServices.prototype.getCompletedLocalStorage = function () {
        if (localStorage.getItem('completedNotes')) {
            var loadedCompletedNotes = localStorage.getItem('completedNotes');
            this.completedNotes = JSON.parse(loadedCompletedNotes);
            return this.completedNotes;
        }
        else {
            return [];
        }
    };
    ToDoServices.prototype.getNotes = function () {
        return this.notes;
    };
    ToDoServices.prototype.getNoteById = function (noteId) {
        return this.notes[noteId];
    };
    ToDoServices.prototype.getCompletedNotes = function () {
        return this.completedNotes;
    };
    ToDoServices.prototype.addNote = function (note) {
        var createdDate = new Date();
        var year = createdDate.getFullYear();
        var month = createdDate.getMonth() + 1;
        var day = createdDate.getDate();
        this.notes.push(new _todo_model__WEBPACK_IMPORTED_MODULE_0__["NoteModel"](note, day + "." + month + "." + year));
    };
    ToDoServices.prototype.updateNote = function (noteId, updatedNote) {
        this.notes[noteId].desc = updatedNote;
        this.saveNoteChangesToLocal();
    };
    ToDoServices.prototype.removeNote = function (id) {
        this.completedNotes.push(this.notes[id]);
        this.notes.splice(id, 1);
    };
    ToDoServices.prototype.removeCompletedOne = function (noteId) {
        this.completedNotes.splice(noteId, 1);
        this.saveNoteChangesToLocal();
    };
    return ToDoServices;
}());



/***/ }),

/***/ "./src/app/todo.routing.ts":
/*!*********************************!*\
  !*** ./src/app/todo.routing.ts ***!
  \*********************************/
/*! exports provided: ToDoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoRoutingModule", function() { return ToDoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_main_todo_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-main/todo-main.component */ "./src/app/todo-main/todo-main.component.ts");
/* harmony import */ var _todo_main_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-main/todo-edit/todo-edit.component */ "./src/app/todo-main/todo-edit/todo-edit.component.ts");
/* harmony import */ var _todo_main_todo_completed_todo_completed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-main/todo-completed/todo-completed.component */ "./src/app/todo-main/todo-completed/todo-completed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRouter = [
    { path: 'main', component: _todo_main_todo_main_component__WEBPACK_IMPORTED_MODULE_2__["TodoMainComponent"], children: [] },
    { path: 'completedTasks', component: _todo_main_todo_completed_todo_completed_component__WEBPACK_IMPORTED_MODULE_4__["TodoCompletedComponent"] },
    { path: 'edit/:id', component: _todo_main_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_3__["TodoEditComponent"], children: [] },
];
var ToDoRoutingModule = /** @class */ (function () {
    function ToDoRoutingModule() {
    }
    ToDoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRouter)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ToDoRoutingModule);
    return ToDoRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GIT\todo-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
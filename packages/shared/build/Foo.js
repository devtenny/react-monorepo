"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Foo = function () { return (react_1.default.createElement("div", { style: {
        color: 'white',
        fontSize: 40,
        width: '100%',
        position: 'fixed',
        top: 100,
        textAlign: 'center',
    } }, "Foo! Foo! Foo! Foo! Foo! Foo!")); };
exports.default = Foo;

"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./p14-myModal.css");

var _react = _interopRequireDefault(require("react"));

var Modal = function Modal(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: props.display === true ? "modal-window" : "hidden"
  }, /*#__PURE__*/_react.default.createElement("p", null, props.message), /*#__PURE__*/_react.default.createElement("button", {
    onClick: props.action
  }, "Close"));
};

var _default = Modal;
exports.default = _default;
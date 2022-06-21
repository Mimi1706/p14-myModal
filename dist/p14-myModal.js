"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./p14-my-modal.css");

var Modal = function Modal(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: props.display === true ? "modal-window" : "hidden"
  }, /*#__PURE__*/React.createElement("p", null, props.message), /*#__PURE__*/React.createElement("button", {
    onClick: props.action
  }, "Close"));
};

var _default = Modal;
exports["default"] = _default;
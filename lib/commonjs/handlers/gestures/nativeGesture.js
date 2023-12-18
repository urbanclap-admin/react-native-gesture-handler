"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NativeGesture = void 0;
var _gesture = require("./gesture");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class NativeGesture extends _gesture.BaseGesture {
  constructor() {
    super();
    _defineProperty(this, "config", {});
    this.handlerName = 'NativeViewGestureHandler';
  }
  shouldActivateOnStart(value) {
    this.config.shouldActivateOnStart = value;
    return this;
  }
  disallowInterruption(value) {
    this.config.disallowInterruption = value;
    return this;
  }
}
exports.NativeGesture = NativeGesture;
//# sourceMappingURL=nativeGesture.js.map
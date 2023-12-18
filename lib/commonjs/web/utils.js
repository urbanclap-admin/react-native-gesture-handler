"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VEC_LEN_SQ = exports.TEST_MIN_IF_NOT_NAN = exports.TEST_MAX_IF_NOT_NAN = void 0;
exports.fireAfterInterval = fireAfterInterval;
exports.isnan = exports.isValidNumber = void 0;
// TODO(TS) remove if not necessary after rewrite
const isnan = v => Number.isNaN(v);

// TODO(TS) remove if not necessary after rewrite
exports.isnan = isnan;
const isValidNumber = v => typeof v === 'number' && !Number.isNaN(v);
exports.isValidNumber = isValidNumber;
const TEST_MIN_IF_NOT_NAN = (value, limit) => !isnan(limit) && (limit < 0 && value <= limit || limit >= 0 && value >= limit);
exports.TEST_MIN_IF_NOT_NAN = TEST_MIN_IF_NOT_NAN;
const VEC_LEN_SQ = function () {
  let {
    x = 0,
    y = 0
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return x * x + y * y;
};
exports.VEC_LEN_SQ = VEC_LEN_SQ;
const TEST_MAX_IF_NOT_NAN = (value, max) => !isnan(max) && (max < 0 && value < max || max >= 0 && value > max);
exports.TEST_MAX_IF_NOT_NAN = TEST_MAX_IF_NOT_NAN;
function fireAfterInterval(method, interval) {
  if (!interval) {
    method();
    return null;
  }
  return setTimeout(() => method(), interval);
}
//# sourceMappingURL=utils.js.map
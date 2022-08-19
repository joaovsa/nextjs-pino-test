(function() {
var exports = {};
exports.id = "pages/api/hello-pino-logflare";
exports.ids = ["pages/api/hello-pino-logflare"];
exports.modules = {

/***/ "./logger/logger.js":
/*!**************************!*\
  !*** ./logger/logger.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pino */ "pino");
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pino_logflare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pino-logflare */ "pino-logflare");
/* harmony import */ var pino_logflare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pino_logflare__WEBPACK_IMPORTED_MODULE_1__);

 // create pino-logflare console stream for serverless functions and send function for browser logs
// Browser logs are going to: https://logflare.app/sources/13989
// Vercel log drain was setup to send logs here: https://logflare.app/sources/13830

const {
  stream,
  send
} = (0,pino_logflare__WEBPACK_IMPORTED_MODULE_1__.logflarePinoVercel)({
  apiKey: "MkSDUasVmiAw",
  sourceToken: "94c4f82a-eb6b-4e5c-ac1d-f059a5891582"
}); // create pino logger

const logger = pino__WEBPACK_IMPORTED_MODULE_0___default()({
  browser: {
    transmit: {
      level: "info",
      send: send
    }
  },
  level: "debug",
  base: {
    env: "development",
    revision: process.env.VERCEL_GITHUB_COMMIT_SHA
  }
}, stream);
/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),

/***/ "./pages/api/hello-pino-logflare.js":
/*!******************************************!*\
  !*** ./pages/api/hello-pino-logflare.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../logger/logger */ "./logger/logger.js");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
  res.status(200);
  const data = {
    request: {
      method: req.method,
      url: req.url
    },
    response: {
      status: res.statusCode
    }
  }; // Logging to pino-logflare

  _logger_logger__WEBPACK_IMPORTED_MODULE_0__.default.info(data, "Handled response. Logged with pino-logflare.");
  res.json({
    name: 'John Doe'
  });
}

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("pino");;

/***/ }),

/***/ "pino-logflare":
/*!********************************!*\
  !*** external "pino-logflare" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("pino-logflare");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/hello-pino-logflare.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXZlcmNlbC1waW5vLWxvZ2ZsYXJlLWxvZ2dpbmctZXhhbXBsZS8uL2xvZ2dlci9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC12ZXJjZWwtcGluby1sb2dmbGFyZS1sb2dnaW5nLWV4YW1wbGUvLi9wYWdlcy9hcGkvaGVsbG8tcGluby1sb2dmbGFyZS5qcyIsIndlYnBhY2s6Ly9uZXh0LXZlcmNlbC1waW5vLWxvZ2ZsYXJlLWxvZ2dpbmctZXhhbXBsZS9leHRlcm5hbCBcInBpbm9cIiIsIndlYnBhY2s6Ly9uZXh0LXZlcmNlbC1waW5vLWxvZ2ZsYXJlLWxvZ2dpbmctZXhhbXBsZS9leHRlcm5hbCBcInBpbm8tbG9nZmxhcmVcIiJdLCJuYW1lcyI6WyJzdHJlYW0iLCJzZW5kIiwibG9nZmxhcmVQaW5vVmVyY2VsIiwiYXBpS2V5Iiwic291cmNlVG9rZW4iLCJsb2dnZXIiLCJwaW5vIiwiYnJvd3NlciIsInRyYW5zbWl0IiwibGV2ZWwiLCJiYXNlIiwiZW52IiwicmV2aXNpb24iLCJwcm9jZXNzIiwiVkVSQ0VMX0dJVEhVQl9DT01NSVRfU0hBIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImRhdGEiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwianNvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFBRUEsUUFBRjtBQUFVQztBQUFWLElBQW1CQyxpRUFBa0IsQ0FBQztBQUN4Q0MsUUFBTSxFQUFFLGNBRGdDO0FBRXhDQyxhQUFXLEVBQUU7QUFGMkIsQ0FBRCxDQUEzQyxDLENBS0E7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQywyQ0FBSSxDQUFDO0FBQ2hCQyxTQUFPLEVBQUU7QUFDTEMsWUFBUSxFQUFFO0FBQ05DLFdBQUssRUFBRSxNQUREO0FBRU5SLFVBQUksRUFBRUE7QUFGQTtBQURMLEdBRE87QUFPaEJRLE9BQUssRUFBRSxPQVBTO0FBUWhCQyxNQUFJLEVBQUU7QUFDRkMsT0FBRyxlQUREO0FBRUZDLFlBQVEsRUFBRUMsT0FBTyxDQUFDRixHQUFSLENBQVlHO0FBRnBCO0FBUlUsQ0FBRCxFQVloQmQsTUFaZ0IsQ0FBbkI7QUFjQSwrREFBZUssTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFHZSxTQUFTVSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDeENBLEtBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVg7QUFFQSxRQUFNQyxJQUFJLEdBQUc7QUFDWEMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRUwsR0FBRyxDQUFDSyxNQURMO0FBRVBDLFNBQUcsRUFBRU4sR0FBRyxDQUFDTTtBQUZGLEtBREU7QUFLWEMsWUFBUSxFQUFFO0FBQ1JMLFlBQU0sRUFBRUQsR0FBRyxDQUFDTztBQURKO0FBTEMsR0FBYixDQUh3QyxDQWF4Qzs7QUFFQW5CLDBEQUFBLENBQVljLElBQVosRUFBa0IsOENBQWxCO0FBRUFGLEtBQUcsQ0FBQ1EsSUFBSixDQUFTO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQVQ7QUFDRCxDOzs7Ozs7Ozs7OztBQ3RCRCxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQyIsImZpbGUiOiJwYWdlcy9hcGkvaGVsbG8tcGluby1sb2dmbGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwaW5vIGZyb20gJ3Bpbm8nXG5pbXBvcnQgeyBsb2dmbGFyZVBpbm9WZXJjZWwgfSBmcm9tICdwaW5vLWxvZ2ZsYXJlJ1xuXG4vLyBjcmVhdGUgcGluby1sb2dmbGFyZSBjb25zb2xlIHN0cmVhbSBmb3Igc2VydmVybGVzcyBmdW5jdGlvbnMgYW5kIHNlbmQgZnVuY3Rpb24gZm9yIGJyb3dzZXIgbG9nc1xuLy8gQnJvd3NlciBsb2dzIGFyZSBnb2luZyB0bzogaHR0cHM6Ly9sb2dmbGFyZS5hcHAvc291cmNlcy8xMzk4OVxuLy8gVmVyY2VsIGxvZyBkcmFpbiB3YXMgc2V0dXAgdG8gc2VuZCBsb2dzIGhlcmU6IGh0dHBzOi8vbG9nZmxhcmUuYXBwL3NvdXJjZXMvMTM4MzBcblxuY29uc3QgeyBzdHJlYW0sIHNlbmQgfSA9IGxvZ2ZsYXJlUGlub1ZlcmNlbCh7XG4gICAgYXBpS2V5OiBcIk1rU0RVYXNWbWlBd1wiLFxuICAgIHNvdXJjZVRva2VuOiBcIjk0YzRmODJhLWViNmItNGU1Yy1hYzFkLWYwNTlhNTg5MTU4MlwiXG59KTtcblxuLy8gY3JlYXRlIHBpbm8gbG9nZ2VyXG5jb25zdCBsb2dnZXIgPSBwaW5vKHtcbiAgICBicm93c2VyOiB7XG4gICAgICAgIHRyYW5zbWl0OiB7XG4gICAgICAgICAgICBsZXZlbDogXCJpbmZvXCIsXG4gICAgICAgICAgICBzZW5kOiBzZW5kLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBsZXZlbDogXCJkZWJ1Z1wiLFxuICAgIGJhc2U6IHtcbiAgICAgICAgZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgICAgICAgcmV2aXNpb246IHByb2Nlc3MuZW52LlZFUkNFTF9HSVRIVUJfQ09NTUlUX1NIQSxcbiAgICB9LFxufSwgc3RyZWFtKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyXG4iLCIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vLi4vbG9nZ2VyL2xvZ2dlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgcmVzLnN0YXR1cygyMDApXG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICByZXF1ZXN0OiB7XG4gICAgICBtZXRob2Q6IHJlcS5tZXRob2QsXG4gICAgICB1cmw6IHJlcS51cmxcbiAgICB9LFxuICAgIHJlc3BvbnNlOiB7XG4gICAgICBzdGF0dXM6IHJlcy5zdGF0dXNDb2RlXG4gICAgfVxuICB9XG5cbiAgLy8gTG9nZ2luZyB0byBwaW5vLWxvZ2ZsYXJlXG5cbiAgbG9nZ2VyLmluZm8oZGF0YSwgXCJIYW5kbGVkIHJlc3BvbnNlLiBMb2dnZWQgd2l0aCBwaW5vLWxvZ2ZsYXJlLlwiKVxuXG4gIHJlcy5qc29uKHsgbmFtZTogJ0pvaG4gRG9lJyB9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGlub1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGluby1sb2dmbGFyZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
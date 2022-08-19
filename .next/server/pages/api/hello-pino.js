(function() {
var exports = {};
exports.id = "pages/api/hello-pino";
exports.ids = ["pages/api/hello-pino"];
exports.modules = {

/***/ "./pages/api/hello-pino.js":
/*!*********************************!*\
  !*** ./pages/api/hello-pino.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
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
  }; // Logging with straight pino. 
  // Both will end up in Vercel's log drains with slight different payloads.

  const onlyPino = __webpack_require__(/*! pino */ "pino")();

  onlyPino.info(data, "Handled response. Logged with pino.");
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/hello-pino.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXZlcmNlbC1waW5vLWxvZ2ZsYXJlLWxvZ2dpbmctZXhhbXBsZS8uL3BhZ2VzL2FwaS9oZWxsby1waW5vLmpzIiwid2VicGFjazovL25leHQtdmVyY2VsLXBpbm8tbG9nZmxhcmUtbG9nZ2luZy1leGFtcGxlL2V4dGVybmFsIFwicGlub1wiIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJkYXRhIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsIm9ubHlQaW5vIiwicmVxdWlyZSIsImluZm8iLCJqc29uIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN4Q0EsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWDtBQUVBLFFBQU1DLElBQUksR0FBRztBQUNYQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFTCxHQUFHLENBQUNLLE1BREw7QUFFUEMsU0FBRyxFQUFFTixHQUFHLENBQUNNO0FBRkYsS0FERTtBQUtYQyxZQUFRLEVBQUU7QUFDUkwsWUFBTSxFQUFFRCxHQUFHLENBQUNPO0FBREo7QUFMQyxHQUFiLENBSHdDLENBYXhDO0FBQ0E7O0FBRUEsUUFBTUMsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFELENBQVAsRUFBakI7O0FBRUFELFVBQVEsQ0FBQ0UsSUFBVCxDQUFjUixJQUFkLEVBQW9CLHFDQUFwQjtBQUVBRixLQUFHLENBQUNXLElBQUosQ0FBUztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFUO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUN2QkQsa0MiLCJmaWxlIjoicGFnZXMvYXBpL2hlbGxvLXBpbm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHJlcy5zdGF0dXMoMjAwKVxuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgcmVxdWVzdDoge1xuICAgICAgbWV0aG9kOiByZXEubWV0aG9kLFxuICAgICAgdXJsOiByZXEudXJsXG4gICAgfSxcbiAgICByZXNwb25zZToge1xuICAgICAgc3RhdHVzOiByZXMuc3RhdHVzQ29kZVxuICAgIH1cbiAgfVxuXG4gIC8vIExvZ2dpbmcgd2l0aCBzdHJhaWdodCBwaW5vLiBcbiAgLy8gQm90aCB3aWxsIGVuZCB1cCBpbiBWZXJjZWwncyBsb2cgZHJhaW5zIHdpdGggc2xpZ2h0IGRpZmZlcmVudCBwYXlsb2Fkcy5cblxuICBjb25zdCBvbmx5UGlubyA9IHJlcXVpcmUoJ3Bpbm8nKSgpXG5cbiAgb25seVBpbm8uaW5mbyhkYXRhLCBcIkhhbmRsZWQgcmVzcG9uc2UuIExvZ2dlZCB3aXRoIHBpbm8uXCIpXG5cbiAgcmVzLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwaW5vXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
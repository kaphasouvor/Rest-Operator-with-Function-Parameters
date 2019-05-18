// ES6: Use the Rest Operator with Function Parameters

const sum = (function() {
  "use strict";
  // sum function takes in three argurments
  return function sum(...args) {
   // const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
// Function.prototype.mycall = function (context) {
//   if (typeof this !== 'function') {
//     throw new TypeError('Error');
//   }

//   context = context || window;
//   context.fn = this;
//   const args = [...arguments].slice(1);
//   const result = context.fn(...args);
//   delete context.fn;
//   return result;
// }

Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

Function.prototype.myapply = function (context) {
  if (this !== 'Function') {
    throw new TypeError('Error')
  }

  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn()
  }
  delete context.fn;
  return result;
}
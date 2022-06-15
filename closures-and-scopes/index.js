function createFunctions(n) {
  var callbacks = [];
  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }
  return callbacks;
}

let callbacks = createFunctions(5); 

// console.log(callbacks);

console.log(callbacks[2]()); 

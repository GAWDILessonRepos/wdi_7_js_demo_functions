// Recursion

function recursiveFunction(val){
  var newVal = val - 1;
  if(val < 1){
    return;
  }
  console.log('val is ' + val);
  console.log('newVal is ' + newVal);
  recursiveFunction(newVal);
}

recursiveFunction(4);


// Write the fibonacci sequence function
var fib = function(num){
  var v1 = 1, v2 = 2;
  if(num === 0){
    return 0;
  }else if(num === 1) {
    return 1;
  }else {
    return (fib(num - 1) + fib(num - 2));
  }

}
console.log("fib 7 = " + fib(7));

var factorial = function(n){
  return (n < 2 ? n : (n * factorial(n-1)));
}

console.log('fact 6 is ' + factorial(6));

// Pass a function to a function
// cmdFunction is a callback
// because it's a function that is passed to another function.
// This second function will call the first at some point when it executes.
var doItWithFunction = function(cmdFunction){
  var x = 5;
  return cmdFunction(x);
}

var square = function(n){
  return n * n;
}
var cube = function(n){
  return n * n * n;
}


console.log('square 5 is ' + doItWithFunction(square));
console.log('cube 5 is ' + doItWithFunction(cube));

// Return a function from another function
var setup = function(){
  // closure
  var count = 0;

  // inner function  
  // captures everything within the environment
  // it's defined in.
  return function(){
    return (count += 1);
  }
}

var next = setup();
console.log('next = ' + next());
console.log('next = ' + next());
console.log('next = ' + next());
console.log('next = ' + next());

// function factory
var make_multiplier = function(multiplier){
  //var multiplier;

  // multiplier is in the closure for this anonymous function
  return function(x){
    return (x * multiplier);
  }
}

var times2 = make_multiplier(2),
times7 = make_multiplier(7);

var result1 = times2(6),
result2 = times7(8);

console.log('2 * 6 = ' +  result1);
console.log('7 * 8 = ' +  result2);





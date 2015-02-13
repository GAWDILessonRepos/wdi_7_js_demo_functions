console.log('simple logger');

// defines a function
function sayHi(){
  console.log('say hi');
}
sayHi();

// functions are just a block of code
// They can be:
// 1. Assigned to variables.
// 2. Passed to functions.
// 3. Returned from functions

// Functions are 'first class objects'
var sayHiAgain = function(){
  console.log('say hi again');
}
// Need the parens to invoke the function
sayHiAgain();

// function can take arguments/params
var saySomething = function(msg){
  console.log(msg);
}
saySomething("Im saying something");

var x = 22;
var doItGlobal = function(){
  console.log("in doItGlobal x = " + x);
}
var doItGlobalAgain = function(){
  x = 33;
  console.log('in doItGlobalAgain x = ' + x);
}

doItGlobal();
doItGlobalAgain();
console.log('Global scope x = ' + x);

var doItLocal = function(){
  var x = 777;
  console.log('in doItLocal x = ' + x);
}
doItLocal();
console.log('Global scope x = ' + x);


// Function arguments
// Must explicitly return, else return 'undefined'
var multiParamsFunc = function(x,y,z){
  var result = "x = " + x + ", y = " + y + ", z = " + z;
  // console.log('multiParamsFunc: result = ' + result);
  return result;
}
var mResult = multiParamsFunc('hey', 'foo', 'bar');
console.log('mResult = ' + mResult);

// lets give this only two args
mResult = multiParamsFunc('hey', 'you');
console.log('mResult = ' + mResult);

// Look at arguments variable for a function.
// Kind of like a Ruby splat, '*'.
var funcArgs = function(arg1){
  console.log('funcArgs has ' + arguments.length + ' arguments');
  for(var i = 0; i < arguments.length; i++){
    console.log("argument [" + i + "] is " + arguments[i]); 
  }
}
funcArgs('this', "is ", 'many', 33, 'args');

// Variable Hoisting
var hoistingVariableFunc = function(arg1){
  var c;
  console.log('c = ' + c);
  c = 55;
}
hoistingVariableFunc();

// Function Hoisting
function hoistMe(){
/*
  Single Var Pattern.
    
  Provides a single place to look for all the local variables
  needed by the function
  
  Prevents logical errors when a variable is used before it’s 
  defined (see “Hoisting: A Problem with Scattered vars” on 
  page 14)
  
  Helps you remember to declare variables and therefore minimize
  globals
  
  Is less code (to type and to transfer over the wire)
*/
  var x = 23,
  bar = function(){
    console.log('local bar')
  },
  foo = function(){
    console.log('local foo');
  };

  console.log(typeof foo); // "function"
  console.log(typeof bar); // 'undefined'

  foo();
  bar();

}
hoistMe();

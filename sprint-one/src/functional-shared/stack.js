var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.count = 0;
  
  extend(newStack, stackMethods);
  
  return newStack;
};

var stackMethods = {};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


stackMethods.size = function() {
  return Math.max(0, this.count);
};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  var popBack = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return popBack;
};
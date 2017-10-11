var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.count = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.pop = function() {
  var disPop = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return disPop;
};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.size = function() {
  return Math.max(0, this.count);
};
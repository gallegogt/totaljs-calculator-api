'use strict';

var ops = {};

ops.sum = function(numbers) {
  var total = 0;
  numbers.forEach(function(number) {
    total += number;
  });
  return total;
};

ops.subtraction = function(numbers) {
  var total = numbers[0];
  numbers.forEach(function(number, index) {
    if (index > 0)
      total -= number;
  });
  return total;
};

ops.multi = function(numbers) {
  var total = 1;
  numbers.forEach(function(number) {
    total *= number;
  });
  return total;
};

ops.div = function(numbers) {
  var total = numbers[0];
  numbers.forEach(function(number, index) {
    if (index > 0) {
      if (number === 0) {
        return 'null';
      }
      total /= number;
    }
  });
  return total;
};

var wrapper = {
  '+': ops.sum,
  '-': ops.subtraction,
  '*': ops.multi,
  '/': ops.div
};

exports.name = 'calc';
exports.version = '1.0';

exports.make_operation = function(op, numbers) {
  if(wrapper.hasOwnProperty(op)) {
    return wrapper[op](numbers);
  }
  return 'null';
};



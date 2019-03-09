var arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

console.log(arr);

var last = arr.pop();

console.log(arr);

var last1 = arr.pop();

console.log(arr);

var last2 = arr.pop();

console.log(arr);

var first = arr.shift();

console.log(arr);

var removedItem = arr.splice(1, 1);

console.log(arr);

var removedItem1 = arr.splice(4, 1);

console.log(arr);

arr[1] = 5;
arr[2] = 2;
arr[3] = 1;
arr[4] = 1;

console.log(arr);

var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert( "Количество воды - " + result );
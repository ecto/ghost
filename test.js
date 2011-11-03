var ghost = require('./');

var add = function add (a, b){
  console.log(a + b);
}

var raw = ghost.decompose(add);

console.log(raw);

var add2 = ghost.compose(raw);

add2(1, 2);

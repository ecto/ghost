# ghost

decompose and recompose functions in a jiffy

![ghost](http://i.imgur.com/3VS5W.png)

# install

    npm install ghost

# usage

````javascript
var ghost = require('ghost');

var add = function(a, b){
  return a + b;
}

var raw = ghost.decompose(add);

console.log(raw);

var add2 = ghost.compose(raw);

add2(1, 2);
````

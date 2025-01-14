"use strict";
function getFirst2(input) {
    return input[0];
}
console.log(getFirst2([1, 2, 3, 4, 5]));
console.log(getFirst2("Hello"));
console.log(getFirst2([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]));

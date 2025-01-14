"use strict";
function merge3(ObjA, ObjB) {
    return Object.assign(ObjA, ObjB);
}
const mergedObj3 = merge3({ name: 'John' }, { age: 30 });

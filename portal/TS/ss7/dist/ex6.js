"use strict";
function sumByProperty(items, key) {
    return items.reduce((sum, item) => sum + Number(item[key]), 0);
}
const orders = [
    { id: 1, total: 100 },
    { id: 2, total: 200 },
    { id: 3, total: 300 },
];
const totalRevenue = sumByProperty(orders, "total");
console.log(totalRevenue);

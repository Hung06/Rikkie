"use strict";
function getRandomColorCode() {
    const randomColor = Math.floor(Math.random() * 6) + 31;
    return `\x1b[${randomColor}m`;
}
for (let i = 0; i < 10; i++) {
    const randomColor = getRandomColorCode();
    console.log(`${randomColor}Màu sác đã được thay đổi`);
}

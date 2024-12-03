// Hàm tạo mã màu ngẫu nhiên
function getRandomColorCode() {
    // Tạo một mã màu ngẫu nhiên từ 31 đến 36 (tương ứng với các màu sắc cơ bản)
    const randomColor = Math.floor(Math.random() * 6) + 31;
    return `\x1b[${randomColor}m`;
}

// In 10 dòng với màu sắc ngẫu nhiên
for (let i = 0; i < 10; i++) {
    const randomColor = getRandomColorCode();
    console.log(`${randomColor}Màu sác đã được thay đổi`);
}

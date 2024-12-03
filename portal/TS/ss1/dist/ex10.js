"use strict";
function getZodiacSign(day, month) {
    let zodiacSign;
    switch (month) {
        case 1:
            zodiacSign = (day <= 19) ? "Ma Kết" : "Bảo Bình";
            break;
        case 2:
            zodiacSign = (day <= 18) ? "Bảo Bình" : "Song Ngư";
            break;
        case 3:
            zodiacSign = (day <= 20) ? "Song Ngư" : "Bạch Dương";
            break;
        case 4:
            zodiacSign = (day <= 19) ? "Bạch Dương" : "Kim Ngưu";
            break;
        case 5:
            zodiacSign = (day <= 20) ? "Kim Ngưu" : "Song Tử";
            break;
        case 6:
            zodiacSign = (day <= 20) ? "Song Tử" : "Cự Giải";
            break;
        case 7:
            zodiacSign = (day <= 22) ? "Cự Giải" : "Sư Tử";
            break;
        case 8:
            zodiacSign = (day <= 22) ? "Sư Tử" : "Xử Nữ";
            break;
        case 9:
            zodiacSign = (day <= 22) ? "Xử Nữ" : "Thiên Bình";
            break;
        case 10:
            zodiacSign = (day <= 22) ? "Thiên Bình" : "Bọ Cạp";
            break;
        case 11:
            zodiacSign = (day <= 21) ? "Bọ Cạp" : "Nhân Mã";
            break;
        case 12:
            zodiacSign = (day <= 21) ? "Nhân Mã" : "Ma Kết";
            break;
        default:
            zodiacSign = "Ngày hoặc tháng không hợp lệ!";
    }
    return zodiacSign;
}
let day = parseInt(prompt("Nhập ngày sinh:"));
let month = parseInt(prompt("Nhập tháng sinh:"));
let zodiac = getZodiacSign(day, month);
alert(`Bạn thuộc cung hoàng đạo: ${zodiac}`);

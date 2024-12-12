// Hàm để kiểm tra cung hoàng đạo dựa trên ngày và tháng sinh
function getZodiacSign(day, month) {
    let zodiacSign;

    switch(month) {
        case 1: // Tháng 1
            zodiacSign = (day <= 19) ? "Ma Kết" : "Bảo Bình";
            break;
        case 2: // Tháng 2
            zodiacSign = (day <= 18) ? "Bảo Bình" : "Song Ngư";
            break;
        case 3: // Tháng 3
            zodiacSign = (day <= 20) ? "Song Ngư" : "Bạch Dương";
            break;
        case 4: // Tháng 4
            zodiacSign = (day <= 19) ? "Bạch Dương" : "Kim Ngưu";
            break;
        case 5: // Tháng 5
            zodiacSign = (day <= 20) ? "Kim Ngưu" : "Song Tử";
            break;
        case 6: // Tháng 6
            zodiacSign = (day <= 20) ? "Song Tử" : "Cự Giải";
            break;
        case 7: // Tháng 7
            zodiacSign = (day <= 22) ? "Cự Giải" : "Sư Tử";
            break;
        case 8: // Tháng 8
            zodiacSign = (day <= 22) ? "Sư Tử" : "Xử Nữ";
            break;
        case 9: // Tháng 9
            zodiacSign = (day <= 22) ? "Xử Nữ" : "Thiên Bình";
            break;
        case 10: // Tháng 10
            zodiacSign = (day <= 22) ? "Thiên Bình" : "Bọ Cạp";
            break;
        case 11: // Tháng 11
            zodiacSign = (day <= 21) ? "Bọ Cạp" : "Nhân Mã";
            break;
        case 12: // Tháng 12
            zodiacSign = (day <= 21) ? "Nhân Mã" : "Ma Kết";
            break;
        default:
            zodiacSign = "Ngày hoặc tháng không hợp lệ!";
    }

    return zodiacSign;
}

// Nhập ngày và tháng sinh
let day = parseInt(prompt("Nhập ngày sinh:") || "0");
let month = parseInt(prompt("Nhập tháng sinh:") || "0");

// Kiểm tra cung hoàng đạo và hiển thị thông báo
let zodiac = getZodiacSign(day, month);
alert(`Bạn thuộc cung hoàng đạo: ${zodiac}`);

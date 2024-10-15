function isLeapYear(year) {
    return (year % 4 === 0);
}

function isValidDate(day, month, year) {
    if (month < 1 || month > 12 || day < 1) {
        return false;
    }

    let daysInMonth;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = isLeapYear(year) ? 29 : 28;
            break;
        default:
            return false;
    }

    return day <= daysInMonth;
}

function getNextDay(day, month, year) {
    let daysInMonth;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = isLeapYear(year) ? 29 : 28;
            break;
    }

    if (day < daysInMonth) {
        day++;
    } else {
        day = 1;
        if (month < 12) {
            month++;
        } else {
            month = 1;
            year++;
        }
    }

    return `${day}/${month}/${year}`;
}

let day = prompt("Nhập ngày: ");
let month = prompt("Nhập tháng: ");
let year = prompt("Nhập năm: ");

if (isValidDate(day, month, year)) {
    console.log(`${day}/${month}/${year} là ngày hợp lệ.`);
    console.log(`Ngày tiếp theo là: ${getNextDay(day, month, year)}`);
} else {
    console.log(`${day}/${month}/${year} là ngày không hợp lệ.`);
}

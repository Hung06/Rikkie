"use strict";
class CD {
    constructor(id, title, artist, year) {
        this._id = id;
        this._title = title;
        this._artist = artist;
        this._year = year;
    }
    get Id() {
        return this._id;
    }
    set Id(value) {
        this._id = value;
    }
    get Title() {
        return this._title;
    }
    set Title(value) {
        this._title = value;
    }
    get Artist() {
        return this._artist;
    }
    set Artist(value) {
        this._artist = value;
    }
    get Year() {
        return this._year;
    }
    set Year(value) {
        this._year = value;
    }
}
class CDStoreManager {
    constructor() {
        this._cds = [];
    }
    get Cds() {
        return this._cds;
    }
    set Cds(value) {
        this._cds = value;
    }
    addCD(title, artist, year) {
        let id = this._cds.length + 1;
        let cd = new CD(id, title, artist, year);
        this._cds.push(cd);
    }
    listCDs() {
        this._cds.forEach(cd => {
            console.log(cd.Id, cd.Title, cd.Artist, cd.Year);
        });
    }
    removeCD(id) {
        let index = this._cds.findIndex(cd => cd.Id === id);
        if (index !== -1 && index < this._cds.length) {
            this._cds.splice(index, 1);
        }
    }
    searchCD(title) {
        let result = this._cds.filter(cd => cd.Title === title);
        if (result.length > 0) {
            result.forEach(cd => {
                console.log(cd.Id, cd.Title, cd.Artist, cd.Year);
            });
        }
        else {
            console.log("No CD found");
        }
    }
}
class Main4 {
    run() {
        const cdStoreManager = new CDStoreManager();
        let choice = 0;
        while (choice !== 5) {
            console.log("1. Thêm CD");
            console.log("2. Hiển thị danh sách CD");
            console.log("3. Xóa CD");
            console.log("4. Tìm kiếm CD");
            console.log("5. Thoát");
            switch (choice) {
                case 1:
                    let title = prompt("Nhập tiêu đề CD: ") || "";
                    let artist = prompt("Nhập nghệ sĩ: ") || "";
                    let year = prompt("Nhập năm phát hành: ") || "0";
                    if (!title || !artist || isNaN(Number(year))) {
                        console.log("Thông tin không hợp lệ");
                    }
                    else {
                        cdStoreManager.addCD(title, artist, Number(year));
                    }
                    break;
                case 2:
                    cdStoreManager.listCDs();
                    break;
                case 3:
                    let id = prompt("Nhập id CD cần xóa: ");
                    let idNumber = Number(id);
                    if (!id || isNaN(idNumber)) {
                        console.log("Id không hợp lệ");
                    }
                    else {
                        cdStoreManager.removeCD(Number(id));
                    }
                    break;
                case 4:
                    let titleSearch = prompt("Nhập tiêu đề CD cần tìm: ");
                    if (!titleSearch) {
                        console.log("Tiêu đề không hợp lệ");
                    }
                    else {
                        cdStoreManager.searchCD(titleSearch);
                    }
                    break;
                case 5:
                    console.log("Thoát");
                    break;
                default:
                    console.log("Không hợp lệ");
                    break;
            }
        }
    }
}
const main4 = new Main4();
main4.run();

"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Member extends Person {
    constructor(id, name, membershipType) {
        super(id, name);
        this.membershipType = membershipType;
    }
    getMembershipType() {
        return this.membershipType;
    }
}
class Librarian extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}
class CD {
    constructor(id, title, artist, isBorrowed) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.isBorrowed = isBorrowed;
    }
    borrow() {
        this.isBorrowed = true;
    }
    returnCD() {
        this.isBorrowed = false;
    }
    getDetails() {
        return this.id + " " + this.title + " " + this.artist + " " + this.isBorrowed;
    }
}
class BorrowRecord {
    constructor(member, librarian, cds) {
        this.member = member;
        this.librarian = librarian;
        this.cds = cds;
        this.borrowRecords = [];
    }
    addMember(name, membershipType) {
        let id = this.member.length + 1;
        this.member.push(new Member(id, name, membershipType));
    }
    addLibrarian(name, position) {
        let id = this.librarian.length + 1;
        this.librarian.push(new Librarian(id, name, position));
    }
    addCD(title, artist) {
        let id = this.cds.length + 1;
        this.cds.push(new CD(id, title, artist, false));
    }
    borrowCD(memberId, cdId) {
        let member = this.member.find(member => member.id === memberId);
        let cd = this.cds.find(cd => cd.id === cdId);
        if (member && cd && !cd.isBorrowed) {
            cd.borrow();
            this.borrowRecords.push(new BorrowRecord([member], this.librarian, [cd]));
        }
    }
    returnCD(cdId) {
        let cd = this.cds.find(cd => cd.id === cdId);
        if (cd) {
            cd.returnCD();
        }
    }
    listBorrowRecords() {
        return this.borrowRecords;
    }
}
class Main {
    run() {
        let libraryManager = new BorrowRecord([], [], []);
        let choice = 0;
        while (choice != 7) {
            console.log("1. Thêm thành viên");
            console.log("2. Thêm thủ thư");
            console.log("3. Thêm CD");
            console.log("4. Mượn CD");
            console.log("5. Trả CD");
            console.log("6. Hiển thị danh sách bản ghi mượn CD");
            console.log("7. Dừng chương trình");
            const input = prompt("Chon: ");
            choice = Number(input);
            switch (choice) {
                case 1:
                    let memberName = prompt("Nhập tên thành viên: ");
                    if (!memberName) {
                        console.log("Tên thành viên không được để trống");
                    }
                    else {
                        let membershipType = prompt("Nhập loại thành viên: ");
                        if (!membershipType) {
                            console.log("Loại thành viên không được để trống");
                        }
                        else {
                            libraryManager.addMember(memberName, membershipType);
                            console.log("Thêm thành viên thành công");
                        }
                    }
                    break;
                case 2:
                    let librarianName = prompt("Nhập tên thủ thư: ");
                    if (!librarianName) {
                        console.log("Tên thủ thư không được để trống");
                    }
                    else {
                        let position = prompt("Nhập chức vụ: ");
                        if (!position) {
                            console.log("Chức vụ không được để trống");
                        }
                        else {
                            libraryManager.addLibrarian(librarianName, position);
                            console.log("Thêm thủ thư thành công");
                        }
                    }
                    break;
                case 3:
                    let title = prompt("Nhập tên CD: ");
                    if (!title) {
                        console.log("Tên CD không được để trống");
                    }
                    else {
                        let artist = prompt("Nhập tên nghệ sĩ: ");
                        if (!artist) {
                            console.log("Tên nghệ sĩ không được để trống");
                        }
                        else {
                            libraryManager.addCD(title, artist);
                            console.log("Thêm CD thành công");
                        }
                    }
                    break;
                case 4:
                    let memberId = Number(prompt("Nhập id thành viên: "));
                    if (!libraryManager.member.find(member => member.id === memberId)) {
                        console.log("Thành viên không tồn tại");
                        break;
                    }
                    else {
                        let cdId = Number(prompt("Nhập id CD: "));
                        if (!libraryManager.cds.find(cd => cd.id === cdId)) {
                            console.log("CD không tồn tại");
                            break;
                        }
                        libraryManager.borrowCD(memberId, cdId);
                    }
                    break;
                case 5:
                    let cdId = Number(prompt("Nhập id CD: "));
                    if (!libraryManager.cds.find(cd => cd.id === cdId)) {
                        console.log("CD không tồn tại");
                        break;
                    }
                    libraryManager.returnCD(cdId);
                    break;
                case 6:
                    console.log(libraryManager.listBorrowRecords());
                    break;
                case 7:
                    console.log("Dừng chương trình");
                    break;
                default:
                    console.log("Chọn không hợp lệ");
            }
        }
    }
}

"use strict";
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Member2 extends Person2 {
    constructor(id, name, membershipType) {
        super(id, name);
        this.membershipType2 = membershipType;
    }
    getMembershipType() {
        return this.membershipType2;
    }
}
class Librarian2 extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}
class Book {
    constructor(id, title, author, isBorrowed) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isBrrowed = isBorrowed;
    }
    borrow() {
        this.isBrrowed = true;
    }
    returnBook() {
        this.isBrrowed = false;
    }
    getDetails() {
        return this.id + " " + this.title + " " + this.author + " " + this.isBrrowed;
    }
}
class BorrowRecord2 {
    constructor(member, book) {
        this.member = member;
        this.book = book;
    }
    getRecordDetails() {
        return this.member[0].getName() + " " + this.book[0].getDetails();
    }
}
class libraryManager {
    constructor(members, librarians, books, borrowRecords) {
        this.members = members;
        this.librarians = librarians;
        this.books = books;
        this.borrowRecords = borrowRecords;
    }
    addMember(name, membershipType) {
        this.members.push(new Member2(this.members.length + 1, name, membershipType));
    }
    addLibrarian(name, position) {
        this.librarians.push(new Librarian2(this.librarians.length + 1, name, position));
    }
    addBook(title, author) {
        this.books.push(new Book(this.books.length + 1, title, author, false));
    }
    borrowBook(memberId, bookId) {
        let member = this.members.find(member => member.id === memberId);
        let book = this.books.find(book => book.id === bookId);
        if (member && book && !book.isBrrowed) {
            book.borrow();
            this.borrowRecords.push(new BorrowRecord2([member], [book]));
        }
    }
    returnBook(bookId) {
        let book = this.books.find(book => book.id === bookId);
        if (book) {
            book.returnBook();
        }
    }
    listBorrowRecords() {
        return this.borrowRecords;
    }
}
class Main2 {
    run() {
        let LibraryManager = new libraryManager([], [], [], []);
        let choice = 0;
        while (choice != 7) {
            console.log("1.Thêm thành viên");
            console.log("2.Thêm thủ thư");
            console.log("3.Thêm sách");
            console.log("4.Mượn sách");
            console.log("5.Trả sách");
            console.log("6.Hiển thị danh sách mượn sách");
            console.log("7.Thoát");
            switch (choice) {
                case 1:
                    let name2 = prompt("Nhập tên thành viên");
                    if (!name2 || name2 == null) {
                        console.log("Tên không hợp lệ");
                        break;
                    }
                    else {
                        let membershipType2 = prompt("Nhập loại thành viên");
                        if (!membershipType2 || membershipType2 == "") {
                            console.log("Loại thành viên không hợp lệ");
                            break;
                        }
                        else {
                            LibraryManager.addMember(name2, membershipType2);
                        }
                    }
                    break;
                case 2:
                    let name3 = prompt("Nhập tên thủ thư");
                    if (!name3 || name3 == null) {
                        console.log("Tên không hợp lệ");
                        break;
                    }
                    else {
                        let position = prompt("Nhập chức vụ");
                        if (!position || position == "") {
                            console.log("Chức vụ không hợp lệ");
                            break;
                        }
                        else {
                            LibraryManager.addLibrarian(name3, position);
                        }
                    }
                    break;
                case 4:
                    let memberId = Number(prompt("Nhập id thành viên"));
                    if (isNaN(memberId) || memberId < 0 || memberId > LibraryManager.members.length || memberId === null || LibraryManager.members.find(member => member.id === memberId) === undefined) {
                        console.log("Id không hợp lệ");
                        break;
                    }
                    else {
                        let bookId = Number(prompt("Nhập id sách"));
                        if (isNaN(bookId) || bookId < 0 || bookId > LibraryManager.books.length || bookId === null || LibraryManager.books.find(book => book.id === bookId) === undefined) {
                            console.log("Id không hợp lệ");
                            break;
                        }
                        else {
                            LibraryManager.borrowBook(memberId, bookId);
                            break;
                        }
                    }
                case 5:
                    let bookId = Number(prompt("Nhập id sách"));
                    if (isNaN(bookId) || bookId < 0 || bookId > LibraryManager.books.length || bookId === null || LibraryManager.books.find(book => book.id === bookId) === undefined) {
                        console.log("Id không hợp lệ");
                        break;
                    }
                    else {
                        LibraryManager.returnBook(bookId);
                        break;
                    }
                case 6:
                    LibraryManager.listBorrowRecords().forEach(record => {
                        console.log(record.getRecordDetails());
                    });
                    break;
                case 7:
                    console.log("Dừng chương trình");
                    break;
                default:
                    console.log("Chọn không hợp lệ");
                    break;
            }
        }
    }
}
let main2 = new Main2();
main2.run();

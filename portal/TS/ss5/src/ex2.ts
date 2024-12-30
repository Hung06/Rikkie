class Person2{
    id:number;
    name:string;
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    getName():string{
        return this.name;

    }
}
class Member2 extends Person2{
    membershipType2:string;
    constructor(id:number, name:string, membershipType:string){
        super(id, name);
        this.membershipType2 = membershipType;
    }
    getMembershipType(): string{
        return this.membershipType2;
    }
}
class Librarian2 extends Person2{
    position:string;
    constructor(id:number, name:string, position:string){
        super(id, name);
        this.position = position;
    }
    getPosition():string{
        return this.position;
    }
}
class Book{
    id:number;
    title:string;
    author:string;
    isBrrowed:boolean;
    constructor(id:number, title:string, author:string, isBorrowed:boolean){
        this.id = id;
        this.title = title;
        this.author = author;
        this.isBrrowed = isBorrowed;
    }
    borrow():void{
        this.isBrrowed = true;
    }
    returnBook():void{
        this.isBrrowed = false;
    }
    getDetails():string{
        return this.id + " " + this.title + " " + this.author + " " + this.isBrrowed;
    }
}
class BorrowRecord2{
    member:Member2[];
    book:Book[];
    constructor(member:Member2[], book:Book[]){
        this.member = member;
        this.book = book;
    }
    getRecordDetails():string{
        return this.member[0].getName() + " " + this.book[0].getDetails();
    }
}
class libraryManager{
    members:Member2[];
    librarians:Librarian2[];
    books:Book[];
    borrowRecords:BorrowRecord2[];
    constructor(members:Member2[], librarians:Librarian2[], books:Book[], borrowRecords:BorrowRecord2[]){
        this.members = members;
        this.librarians = librarians;
        this.books = books;
        this.borrowRecords = borrowRecords;
    }
    addMember(name:string, membershipType:string):void{
        this.members.push(new Member2(this.members.length + 1, name, membershipType));
    }
    addLibrarian(name:string, position:string):void{
        this.librarians.push(new Librarian2(this.librarians.length + 1, name, position));
    }
    addBook(title:string, author:string):void{
        this.books.push(new Book(this.books.length + 1, title, author, false));
    }
    borrowBook(memberId: number, bookId: number): void{
        let member = this.members.find(member => member.id === memberId);
        let book = this.books.find(book => book.id === bookId);
        if(member && book && !book.isBrrowed){
            book.borrow();
            this.borrowRecords.push(new BorrowRecord2([member], [book]));
        }
    }
    returnBook(bookId: number): void{
        let book = this.books.find(book => book.id === bookId);
        if(book){
            book.returnBook();
        }
    }
    listBorrowRecords(): BorrowRecord2[]{
        return this.borrowRecords;
    }
    
}
class Main2{
    run(){
        let LibraryManager = new libraryManager([], [], [], []);
        let choice:number = 0;
        while(choice!=7){
            console.log("1.Thêm thành viên");
            console.log("2.Thêm thủ thư");
            console.log("3.Thêm sách");
            console.log("4.Mượn sách");
            console.log("5.Trả sách");
            console.log("6.Hiển thị danh sách mượn sách");
            console.log("7.Thoát");
            switch(choice){
                case 1:
                    let name2 = prompt("Nhập tên thành viên");
                    if(!name2 || name2 ==null){
                        console.log("Tên không hợp lệ");
                        break;
                    }
                    else{
                        let membershipType2 = prompt("Nhập loại thành viên");
                        if( !membershipType2 || membershipType2 == ""){
                            console.log("Loại thành viên không hợp lệ");
                            break;
                        }else{
                            LibraryManager.addMember(name2, membershipType2);
                        }
                    }
                    break;
                case 2:
                    let name3 = prompt("Nhập tên thủ thư");
                    if(!name3 || name3 == null){
                        console.log("Tên không hợp lệ");
                        break;
                    }
                    else{
                        let position = prompt("Nhập chức vụ");
                        if(!position || position == ""){
                            console.log("Chức vụ không hợp lệ");
                            break;
                        }else{
                            LibraryManager.addLibrarian(name3, position);
                        }
                    }
                    break;
                case 4:
                    let memberId = Number(prompt("Nhập id thành viên"));
                    if (isNaN(memberId) || memberId < 0 || memberId > LibraryManager.members.length || memberId === null || LibraryManager.members.find(member => member.id === memberId) === undefined) {
                        console.log("Id không hợp lệ");
                        break;
                    }else{
                        let bookId = Number(prompt("Nhập id sách"));
                        if (isNaN(bookId) || bookId < 0 || bookId > LibraryManager.books.length || bookId === null || LibraryManager.books.find(book => book.id === bookId) === undefined) {
                            console.log("Id không hợp lệ");
                            break;
                        }else{
                            LibraryManager.borrowBook(memberId, bookId);
                            break;
                        }
                    }
                case 5:
                    let bookId = Number(prompt("Nhập id sách"));
                    if (isNaN(bookId) || bookId < 0 || bookId > LibraryManager.books.length || bookId === null || LibraryManager.books.find(book => book.id === bookId) === undefined) {
                        console.log("Id không hợp lệ");
                        break;
                    }else{
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
let main2= new Main2();
main2.run();
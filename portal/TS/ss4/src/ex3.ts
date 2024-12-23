class Book{
    id : number;
    title : string;
    author : string;
    year : number;  
    constructor(id : number, title : string, author : string, year : number){   
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }   
}
class LibraryManager{
    books: Book[];
    constructor(){
        this.books = [];
    }
    addBook(title: string, author: string, year: number): void {
        let id = this.books.length + 1;
        let book = new Book(id, title, author, year);
        this.books.push(book);
    }
    listBooks(): void {
        this.books.forEach(book => {
            console.log(book.id, book.title, book.author, book.year);
        });
    }
    removeBook(id: number): void{
        let index= this.books.findIndex(book => book.id === id);
        if(index !== -1 && index < this.books.length){
            this.books.splice(index, 1);
        }
    }
    searchBook(title: string): void{
        let result = this.books.filter(book => book.title === title);
        if(result.length > 0){
            result.forEach(book => {
                console.log(book.id, book.title, book.author, book.year);
            });
        }
        else{
            console.log("No book found");
        }
    }
}
class Main3{
    run(){
        const libraryManager = new LibraryManager();
        let choice: number = 0;
        while(choice!==5){
            console.log("1. Thêm sách");
            console.log("2. Hiển thị danh sách sách");
            console.log("3. Xóa sách");
            console.log("4. Tìm kiếm sách");
            console.log("5. Thoát");
            switch(choice){
                case 1:
                    let title = prompt("Nhập tiêu đề sách: ");
                    let author = prompt("Nhập tác giả: ");
                    let year = prompt("Nhập năm xuất bản: ");
                    let yearNumber = Number(year);
                    if(!title || !author || !year || isNaN(yearNumber)){
                        console.log("Thông tin không hợp lệ");
                    }
                    else{
                        libraryManager.addBook(title, author, yearNumber);
                    }
                    break;
                case 2:
                    libraryManager.listBooks();
                    break;
                case 3:
                    let id = prompt("Nhập id sách cần xóa: ");
                    let idNumber = Number(id);
                    if(!id || isNaN(idNumber)){
                        console.log("Id không hợp lệ");
                    }
                    else{
                        libraryManager.removeBook(idNumber);
                    }
                    break;
                case 4:
                    let titleSearch = prompt("Nhập tiêu đề sách cần tìm: ");
                    if(!titleSearch){
                        console.log("Tiêu đề không hợp lệ");
                    }
                    else{
                        libraryManager.searchBook(titleSearch);
                    }
                    break;
                case 5: 
                    console.log("Thoát");
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ");
                    break;
            }
        }
    }
}
const main3 = new Main3();
main3.run();
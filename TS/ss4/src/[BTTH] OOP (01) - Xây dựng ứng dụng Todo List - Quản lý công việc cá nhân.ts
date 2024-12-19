// Lớp Todo:
// Thuộc tính: id, content, status (đã hoàn thành hay chưa).
// Khởi tạo đối tượng công việc với giá trị mặc định status = false.
class Todo{
    id : string;
    content: string;
    status: boolean;
    constructor(id: string ,content: string ,status: boolean =false){
        this.id = id;
        this.content = content;
        this.status = status;
    }
    toString() {
        const statusText = this.status ? "Hoàn thành" : "Chưa hoàn thành";
        return `ID: ${this.id}, Nội dung: ${this.content}, Trạng thái: ${statusText}`;
      }
}
// Lớp TodoListManager:
// Quản lý danh sách công việc todos dưới dạng mảng các đối tượng Todo.
// Các phương thức chính:
// addTodo(content: string): Thêm công việc mới vào cuối danh sách.
// removeTodo(index: number): Xóa công việc tại vị trí bất kỳ.
// updateTodo(index: number, content: string): Cập nhật nội dung công việc tại vị trí bất kỳ.
// sortTodo(): In ra toàn bộ danh sách công việc, hiển thị trạng thái hoàn thành hoặc chưa hoàn thành nhưng sắp xếp các phần tử todo theo alphabet.
// findTodo(content: string): Tìm kiếm todo theo content truyền vào. Hiển thị ra vị trí đầu tiên của todo nếu tìm được, hiển thị ra “Không tìm thấy” nếu không tìm được todo trong danh sách.
// listTodos(): In ra toàn bộ danh sách công việc, hiển thị trạng thái hoàn thành hoặc chưa hoàn thành.
class TodoListManager{
    todo: Todo[] = [];
    addTodo(content:string){
        if(!content){
            console.log("Nội dung không được để trống");
            return;
        }
        const newTodo = new Todo((this.todo.length + 1).toString(), content);
        this.todo.push(newTodo);
        console.log(`Đã thêm công việc mới: ${newTodo.toString()}`);
    }
    removeTodo(index:number){
        if(index<0 || index>=this.todo.length){
            console.log("Vị trí không hợp lệ");
            return;
        }
        const removeTodo= this.todo.splice(index,1);
        console.log(`Đã xóa công việc: ${removeTodo[0].toString()}`);
    }
    updateTodo(index:number,content:string){
        if(index<0 || index>=this.todo.length){
            console.log("Vị trí không hợp lệ");
            return;
        }
        if(!content){
            console.log("Nội dung không được để trống");
            return;
        }
        this.todo[index].content=content;
        console.log(`Đã cập nhật công việc: ${this.todo[index].toString()}`);
    }
    sortTodo(){
        this.todo.sort((a,b)=>a.content.localeCompare(b.content));
        console.log("Danh sách công việc sau khi sắp xếp:");
        this.listTodos();
    }
    findTodo(content:string){
        const index =this.todo.findIndex((todo) => todo.content === content);
        if(index === -1){
            console.log("Không tìm thấy");
            return;
        }
        console.log(`Tìm thấy công việc: ${this.todo[index].toString()} tại vị trí ${index}`);
    }
    listTodos(){
        console.log("Danh sách công việc:");
        this.todo.forEach((todo) => console.log(todo.toString()));
    }
}
// Lớp Main:
// Khởi tạo một đối tượng TodoListManager.
// Chạy chương trình theo menu lựa chọn lặp lại trong vòng lặp while.
class Main{
    static main(){
        let option ;
        const todoListManager = new TodoListManager();
        while(option!=='7'){
            console.log("1. Thêm công việc mới");
            console.log("2. Xóa công việc");
            console.log("3. Cập nhật công việc");
            console.log("4. Sắp xếp công việc");
            console.log("5. Tìm kiếm công việc");
            console.log("6. Hiển thị danh sách công việc");
            console.log("7. Thoát");
            option = prompt("Chọn chức năng:"); 
            switch(option){
                case '1':
                    const content = prompt("Nhập nội dung công việc:");
                    if (!content) {
                        console.log("Nội dung không được để trống");
                    } else {
                        todoListManager.addTodo(content);
                        console.log("Thêm công việc thành công!");
                    }
                    break;
                case '2':
                    const indexInput = prompt("Nhập vị trí công việc cần xóa:");
                    if (indexInput !== null) { 
                        const index = parseInt(indexInput, 10); 
                        if (!isNaN(index)) { 
                            todoListManager.removeTodo(index);
                        } else {
                            console.log("Vui lòng nhập một số hợp lệ.");
                        }
                        } else {
                          console.log("Hủy thao tác xóa.");
                        }
                        break;
                case '3':
                    const indexupdate=  prompt("Nhập vị trí công việc cần cập nhật:");
                    if(!indexupdate){
                        console.log("Vị trí không được để trống");
                    }
                    else{
                        const index= parseInt(indexupdate,10);
                        if(isNaN(index)){
                            console.log("Vui lòng nhập một số hợp lệ");
                        }
                        else{
                            const content = prompt("Nhập nội dung mới:");
                            if(!content){
                                console.log("Nội dung không được để trống");
                            }
                            else{
                                todoListManager.updateTodo(index,content);
                            }
                        }
                    }
                    break;
                case '4':
                    todoListManager.sortTodo();
                    break;
                case '5':
                    const contentFind = prompt("Nhập nội dung cần tìm:");
                    if (!contentFind) {
                        console.log("Nội dung không được để trống");
                    } else {
                        todoListManager.findTodo(contentFind);
                    }
                    break;
                case '6':
                    todoListManager.listTodos();
                    break;
                case '7':
                    console.log("Thoát chương trình");
                    break;
            }
        }
    }
}
Main.main();
"use strict";
class Todo {
    constructor(id, content, status = false) {
        this.id = id;
        this.content = content;
        this.status = status;
    }
    toString() {
        const statusText = this.status ? "Hoàn thành" : "Chưa hoàn thành";
        return `ID: ${this.id}, Nội dung: ${this.content}, Trạng thái: ${statusText}`;
    }
}
class TodoListManager {
    constructor() {
        this.todo = [];
    }
    addTodo(content) {
        if (!content) {
            console.log("Nội dung không được để trống");
            return;
        }
        const newTodo = new Todo((this.todo.length + 1).toString(), content);
        this.todo.push(newTodo);
        console.log(`Đã thêm công việc mới: ${newTodo.toString()}`);
    }
    removeTodo(index) {
        if (index < 0 || index >= this.todo.length) {
            console.log("Vị trí không hợp lệ");
            return;
        }
        const removeTodo = this.todo.splice(index, 1);
        console.log(`Đã xóa công việc: ${removeTodo[0].toString()}`);
    }
    updateTodo(index, content) {
        if (index < 0 || index >= this.todo.length) {
            console.log("Vị trí không hợp lệ");
            return;
        }
        if (!content) {
            console.log("Nội dung không được để trống");
            return;
        }
        this.todo[index].content = content;
        console.log(`Đã cập nhật công việc: ${this.todo[index].toString()}`);
    }
    sortTodo() {
        this.todo.sort((a, b) => a.content.localeCompare(b.content));
        console.log("Danh sách công việc sau khi sắp xếp:");
        this.listTodos();
    }
    findTodo(content) {
        const index = this.todo.findIndex((todo) => todo.content === content);
        if (index === -1) {
            console.log("Không tìm thấy");
            return;
        }
        console.log(`Tìm thấy công việc: ${this.todo[index].toString()} tại vị trí ${index}`);
    }
    listTodos() {
        console.log("Danh sách công việc:");
        this.todo.forEach((todo) => console.log(todo.toString()));
    }
}
class Main {
    static main() {
        let option;
        const todoListManager = new TodoListManager();
        while (option !== '7') {
            console.log("1. Thêm công việc mới");
            console.log("2. Xóa công việc");
            console.log("3. Cập nhật công việc");
            console.log("4. Sắp xếp công việc");
            console.log("5. Tìm kiếm công việc");
            console.log("6. Hiển thị danh sách công việc");
            console.log("7. Thoát");
            option = prompt("Chọn chức năng:");
            switch (option) {
                case '1':
                    const content = prompt("Nhập nội dung công việc:");
                    if (!content) {
                        console.log("Nội dung không được để trống");
                    }
                    else {
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
                        }
                        else {
                            console.log("Vui lòng nhập một số hợp lệ.");
                        }
                    }
                    else {
                        console.log("Hủy thao tác xóa.");
                    }
                    break;
                case '3':
                    const indexupdate = prompt("Nhập vị trí công việc cần cập nhật:");
                    if (!indexupdate) {
                        console.log("Vị trí không được để trống");
                    }
                    else {
                        const index = parseInt(indexupdate, 10);
                        if (isNaN(index)) {
                            console.log("Vui lòng nhập một số hợp lệ");
                        }
                        else {
                            const content = prompt("Nhập nội dung mới:");
                            if (!content) {
                                console.log("Nội dung không được để trống");
                            }
                            else {
                                todoListManager.updateTodo(index, content);
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
                    }
                    else {
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

"use strict";
class Person1 {
    getName() {
        return this.name;
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Employee extends Person1 {
    getRole() {
        return this.role;
    }
    constructor(id, name, role) {
        super(id, name);
        this.role = role;
    }
}
class Manager extends Employee {
    getDepartment() {
        return this.department;
    }
    constructor(id, name, role, department) {
        super(id, name, role);
        this.department = department;
    }
}
class Task {
    constructor(id, title, deadline, isCompleted = false) {
        this.id = id;
        this.title = title;
        this.deadline = deadline;
        this.isCompleted = isCompleted;
    }
    complete() {
        this.isCompleted = true;
    }
    getDetails() {
        return this.id + " " + this.title + " " + this.deadline + " " + this.isCompleted;
    }
}
class Assignment {
    constructor(employee, task) {
        this.employee = employee;
        this.task = task;
    }
    getAssignmentDetails() {
        return this.employee[0].getName() + " " + this.task[0].getDetails();
    }
}
class TaskManager {
    constructor(employee, managers, tasks, assignments) {
        this.employee = employee;
        this.managers = managers;
        this.tasks = tasks;
        this.assignments = assignments;
    }
    addEmployee(name, role) {
        let id = this.employee.length + 1;
        this.employee.push(new Employee(id, name, role));
    }
    addManager(name, role, department) {
        let id = this.managers.length + 1;
        this.managers.push(new Manager(id, name, role, department));
    }
    addTask(title, deadline) {
        let id = this.tasks.length + 1;
        this.tasks.push(new Task(id, title, deadline));
    }
    assignTask(employeeId, taskId) {
        let employee = this.employee.find(emp => emp.id === employeeId);
        if (!employee) {
            throw new Error(`Employee with id ${employeeId} not found`);
        }
        let task = this.tasks.find(task => task.id === taskId);
        if (!task) {
            throw new Error(`Task with id ${taskId} not found`);
        }
        this.assignments.push(new Assignment([employee], [task]));
    }
    completeTask(taskId) {
        let task = this.tasks.find(task => task.id === taskId);
        if (!task) {
            throw new Error(`Task with id ${taskId} not found`);
        }
        task.complete();
    }
    listAssignments() {
        this.assignments.forEach(assignment => {
            console.log(assignment.getAssignmentDetails());
        });
    }
}
class Main1 {
    run() {
        let TaskManager1 = new TaskManager([], [], [], []);
        let choice = 0;
        while (choice != 7) {
            console.log("1. Thêm nhân viên");
            console.log("2. Thêm quản lý");
            console.log("3. Thêm công việc");
            console.log("4. Phân công công việc");
            console.log("5. Hoàn thành công việc");
            console.log("6. Danh sách công việc");
            console.log("7. Thoát");
            switch (choice) {
                case 1:
                    let name = prompt("Nhập tên nhân viên");
                    if (!name || name == null) {
                        console.log("Tên nhân viên không được để trống");
                        break;
                    }
                    else {
                        let role = prompt("Nhập chức vụ");
                        if (!role || role === "") {
                            console.log("Chức vụ không được để trống");
                            break;
                        }
                        else {
                            TaskManager1.addEmployee(name, role);
                            console.log("Thêm nhân viên thành công");
                            break;
                        }
                    }
                case 2:
                    let name1 = prompt("Nhập tên quản lý");
                    if (!name1 || name1 == null) {
                        console.log("Tên quản lý không được để trống");
                        break;
                    }
                    else {
                        let role1 = prompt("Nhập chức vụ");
                        if (!role1 || role1 === "") {
                            console.log("Chức vụ không được để trống");
                            break;
                        }
                        else {
                            let department = prompt("Nhập phòng ban");
                            if (!department || department === "") {
                                console.log("Phòng ban không được để trống");
                                break;
                            }
                            else {
                                TaskManager1.addManager(name1, role1, department);
                                console.log("Thêm quản lý thành công");
                                break;
                            }
                        }
                    }
                case 3:
                    let title = prompt("Nhập tên công việc");
                    if (!title || title == null) {
                        console.log("Tên công việc không được để trống");
                        break;
                    }
                    else {
                        let deadline = prompt("Nhập deadline");
                        if (!deadline || deadline === "") {
                            console.log("Deadline không được để trống");
                            break;
                        }
                        else {
                            TaskManager1.addTask(title, new Date(deadline));
                            console.log("Thêm công việc thành công");
                            break;
                        }
                    }
                case 4:
                    let employeeId = Number(prompt("Nhập id nhân viên"));
                    if (!TaskManager1.employee.find(emp => emp.id === employeeId)) {
                        console.log("Nhân viên không tồn tại");
                        break;
                    }
                    else {
                        let taskId = Number(prompt("Nhập id công việc"));
                        if (!TaskManager1.tasks.find(task => task.id === taskId)) {
                            console.log("Công việc không tồn tại");
                            break;
                        }
                        TaskManager1.assignTask(employeeId, taskId);
                        break;
                    }
                case 5:
                    let taskId = Number(prompt("Nhập id công việc"));
                    if (!TaskManager1.tasks.find(task => task.id === taskId)) {
                        console.log("Công việc không tồn tại");
                        break;
                    }
                    TaskManager1.completeTask(taskId);
                    break;
                case 6:
                    TaskManager1.listAssignments();
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
let main1 = new Main1();
main1.run();

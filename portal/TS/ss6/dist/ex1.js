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
class Employee extends Person {
    constructor(id, name, role) {
        super(id, name);
        this.role = role;
    }
    getRole() {
        return this.role;
    }
}
class Manager extends Employee {
    constructor(id, name, role, department) {
        super(id, name, role);
        this.department = department;
    }
    getDepartment() {
        return this.department;
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
        return `Task: ${this.title} with deadline: ${this.deadline} is ${this.isCompleted ? 'completed' : 'not completed'}`;
    }
}
class Assignment {
    constructor(employee, task) {
        this.employee = employee;
        this.task = task;
    }
    getAssignmentDetails() {
        return `Employee: ${this.employee.getName()} is assigned to task: ${this.task.getDetails()}`;
    }
}
class TaskManager {
    constructor(employees, managers, tasks, assignments) {
        this.employees = employees;
        this.managers = managers;
        this.tasks = tasks;
        this.assignments = assignments;
    }
    addEmployee(name, role) {
        let id = this.employees.length + 1;
        let employee = new Employee(id, name, role);
        this.employees.push(employee);
    }
    listEmployees() {
        return this.employees.map(e => `ID: ${e.id}, Name: ${e.name}, Role: ${e.role}`);
    }
    addManager(name, role, department) {
        let id = this.managers.length + 1;
        let manager = new Manager(id, name, role, department);
        this.managers.push(manager);
    }
    listManagers() {
        return this.managers.map(m => `ID: ${m.id}, Name: ${m.name}, Role: ${m.role}, Department: ${m.department}`);
    }
    addTask(title, deadline) {
        let id = this.tasks.length + 1;
        let task = new Task(id, title, new Date(deadline));
        this.tasks.push(task);
    }
    listTasks() {
        return this.tasks.map(t => t.getDetails());
    }
    assignTask(employeeId, taskId) {
        let employee = this.employees.find(e => e.id == employeeId);
        let task = this.tasks.find(t => t.id == taskId);
        if (employee && task) {
            let assignment = new Assignment(employee, task);
            this.assignments.push(assignment);
        }
        else {
            throw new Error('Employee or Task not found');
        }
    }
    completeTask(taskId) {
        let task = this.tasks.find(t => t.id == taskId);
        if (task) {
            task.complete();
        }
        else {
            throw new Error('Task not found');
        }
    }
    listAssignments() {
        return this.assignments.map(a => a.getAssignmentDetails());
    }
}
class Main1 {
    run() {
        let TaskManager1 = new TaskManager([], [], [], []);
        let choice = 0;
        while (choice != 7) {
            console.log('1.Thêm nhân viên ');
            console.log('2.Thêm quản lý ');
            console.log('3.Thêm công việc ');
            console.log('4.Giao công việc ');
            console.log('5.Hoàn thành công việc ');
            console.log('6.Danh sách công việc ');
            console.log('7.Thoát ');
            const input = prompt('Chọn chức năng: ');
            choice = input !== null ? parseInt(input) : 0;
            switch (choice) {
                case 1:
                    let name1 = prompt('Nhập tên nhân viên: ');
                    if (!name1) {
                        console.log('Tên không được để trống');
                        break;
                    }
                    else {
                        let role1 = prompt('Nhập chức vụ: ');
                        if (!role1) {
                            console.log('Chức vụ không được để trống');
                            break;
                        }
                        else {
                            TaskManager1.addEmployee(name1, role1);
                            console.log('Thêm nhân viên thành công');
                            console.log(TaskManager1.listEmployees());
                            break;
                        }
                    }
                case 2:
                    let name2 = prompt('Nhập tên quản lý: ');
                    if (!name2) {
                        console.log('Tên không được để trống');
                        break;
                    }
                    else {
                        let role2 = prompt('Nhập chức vụ: ');
                        if (!role2) {
                            console.log('Chức vụ không được để trống');
                            break;
                        }
                        else {
                            let department = prompt('Nhập phòng ban: ');
                            if (!department) {
                                console.log('Phòng ban không được để trống');
                                break;
                            }
                            else {
                                TaskManager1.addManager(name2, role2, department);
                                console.log('Thêm quản lý thành công');
                                console.log(TaskManager1.listManagers());
                                break;
                            }
                        }
                    }
                case 3:
                    let title = prompt('Nhập tên công việc: ');
                    if (!title) {
                        console.log('Tên công việc không được để trống');
                        break;
                    }
                    else {
                        let deadline = prompt('Nhập deadline: ');
                        if (!deadline) {
                            console.log('Deadline không được để trống');
                            break;
                        }
                        else {
                            TaskManager1.addTask(title, deadline);
                            console.log('Thêm công việc thành công');
                            console.log(TaskManager1.listTasks());
                            break;
                        }
                    }
                case 4:
                    let ID = prompt('Nhập id nhân viên: ');
                    let employeeId = Number(ID);
                    if (!employeeId || TaskManager1.employees.find(e => e.id == employeeId) == null) {
                        console.log('Id nhân viên không hợp lệ');
                        break;
                    }
                    else {
                        let Id = prompt('Nhập id công việc: ');
                        let taskId = Number(Id);
                        if (!taskId || TaskManager1.tasks.find(t => t.id == Number(taskId)) == null) {
                            console.log('Id công việc không hợp lệ');
                            break;
                        }
                        else {
                            TaskManager1.assignTask(employeeId, taskId);
                            console.log('Giao công việc thành công');
                            console.log(TaskManager1.listAssignments());
                            break;
                        }
                    }
                case 5:
                    let id = prompt('Nhập id công việc: ');
                    let taskId = Number(id);
                    if (!taskId || TaskManager1.tasks.find(t => t.id == taskId) == null) {
                        console.log('Id công việc không hợp lệ');
                        break;
                    }
                    else {
                        TaskManager1.completeTask(taskId);
                        console.log('Hoàn thành công việc thành công');
                        break;
                    }
                case 6:
                    console.log(TaskManager1.listAssignments());
                    break;
                case 7:
                    console.log('Thoát');
                    break;
                default:
                    console.log('Chức năng không hợp lệ');
                    break;
            }
        }
    }
}
let main1 = new Main1();
main1.run();

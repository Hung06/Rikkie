class Person1{
    id: number;
    name:string;
    getName() :string{
        return this.name;
    }
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}
class Employee extends Person1{
    role:string;
    getRole():string{
        return this.role;
    }
    constructor(id: number, name: string, role: string){
        super(id, name);
        this.role = role;
    }
}
class Manager extends Employee{
    department:string;
    getDepartment():string{
        return this.department;
    }
    constructor(id: number, name: string, role: string, department: string){
        super(id, name, role);
        this.department = department;
    }
}
class Task{
    id:number;
    title:string;
    deadline:Date;
    isCompleted:boolean;
    constructor(id: number, title: string, deadline: Date, isCompleted: boolean = false){
        this.id = id;
        this.title = title;
        this.deadline = deadline;
        this.isCompleted = isCompleted;
    }
    complete():void{
        this.isCompleted = true;
    }
    getDetails():string{
        return this.id + " " + this.title + " " + this.deadline + " " + this.isCompleted;
    }
}
class Assignment{
    employee:Employee[];
    task:Task[];
    constructor(employee:Employee[], task:Task[]){
        this.employee = employee;
        this.task = task;
    }
    getAssignmentDetails():string{
        return this.employee[0].getName() + " " + this.task[0].getDetails();
    }
}
class TaskManager{
    employee:Employee[];
    managers:Manager[];
    tasks:Task[];
    assignments:Assignment[];
    constructor(employee:Employee[], managers:Manager[], tasks:Task[] , assignments:Assignment[]){
        this.employee = employee;
        this.managers = managers;
        this.tasks = tasks;
        this.assignments = assignments;
    }
    addEmployee(name:string,role:string):void{
        let id:number = this.employee.length + 1;
        this.employee.push(new Employee(id, name, role));
    }
    addManager(name:string,role:string,department:string):void{
        let id:number = this.managers.length + 1;
        this.managers.push(new Manager(id, name, role, department));
    }
    addTask(title:string,deadline:Date):void{
        let id:number = this.tasks.length + 1;
        this.tasks.push(new Task(id, title, deadline));
    }
    assignTask(employeeId: number, taskId: number): void{
        let employee:Employee | undefined = this.employee.find(emp => emp.id === employeeId);
        if (!employee) {
            throw new Error(`Employee with id ${employeeId} not found`);
        }
        let task:Task | undefined = this.tasks.find(task => task.id === taskId);
        if (!task) {
            throw new Error(`Task with id ${taskId} not found`);
        }
        this.assignments.push(new Assignment([employee], [task]));
    }
    completeTask(taskId: number): void{
        let task:Task | undefined = this.tasks.find(task => task.id === taskId);
        if (!task) {
            throw new Error(`Task with id ${taskId} not found`);
        }
        task.complete();
    }
    listAssignments(): void{
        this.assignments.forEach(assignment => {
            console.log(assignment.getAssignmentDetails());
        });
    }
}
class Main1{
    run(){
        let TaskManager1= new TaskManager([], [], [], []);
        let choice :number=0;
        while(  choice!=7){       
            console.log("1. Thêm nhân viên");
            console.log("2. Thêm quản lý");
            console.log("3. Thêm công việc");
            console.log("4. Phân công công việc");
            console.log("5. Hoàn thành công việc");
            console.log("6. Danh sách công việc");
            console.log("7. Thoát");
            switch(choice){
                case 1:
                    let name= prompt("Nhập tên nhân viên");
                    if(!name || name==null){
                        console.log("Tên nhân viên không được để trống");
                        break;
                    }
                    else{
                        let role = prompt("Nhập chức vụ");
                        if(!role || role === ""){
                            console.log("Chức vụ không được để trống");
                            break;
                        }
                        else{
                            TaskManager1.addEmployee(name, role);
                            console.log("Thêm nhân viên thành công");
                            break;
                        }
                    }
                case 2:
                    let name1= prompt("Nhập tên quản lý");
                    if(!name1 || name1==null){
                        console.log("Tên quản lý không được để trống");
                        break;
                    }
                    else{
                        let role1 = prompt("Nhập chức vụ");
                        if(!role1 || role1 === ""){
                            console.log("Chức vụ không được để trống");
                            break;
                        }
                        else{
                            let department = prompt("Nhập phòng ban");
                            if(!department || department === ""){
                                console.log("Phòng ban không được để trống");
                                break;
                            }
                            else{
                                TaskManager1.addManager(name1, role1, department);
                                console.log("Thêm quản lý thành công");
                                break;
                            }
                        }
                    }
                case 3:
                    let title= prompt("Nhập tên công việc");
                    if(!title || title==null){
                        console.log("Tên công việc không được để trống");
                        break;
                    }
                    else{
                        let deadline = prompt("Nhập deadline");
                        if(!deadline || deadline === ""){
                            console.log("Deadline không được để trống");
                            break;
                        }
                        else{
                            TaskManager1.addTask(title, new Date(deadline));
                            console.log("Thêm công việc thành công");
                            break;
                        }
                    }
                case 4:
                    let employeeId = Number(prompt("Nhập id nhân viên"));
                    if(!TaskManager1.employee.find(emp => emp.id === employeeId)){
                        console.log("Nhân viên không tồn tại");
                        break;
                    }
                    else{
                        let taskId = Number(prompt("Nhập id công việc"));
                        if(!TaskManager1.tasks.find(task => task.id === taskId)){
                            console.log("Công việc không tồn tại");
                            break;
                        }
                        TaskManager1.assignTask(employeeId, taskId);
                        break;
                    }
                case 5:
                    let taskId = Number(prompt("Nhập id công việc"));
                    if(!TaskManager1.tasks.find(task => task.id === taskId)){
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
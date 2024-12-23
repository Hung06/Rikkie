class Employee{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
}
class Task{
    id:number;
    title:string;
    deadline:Date;
    isComplete:boolean;
    constructor(id:number,title:string,deadline:Date,isComplete:boolean=false){
        this.id=id;
        this.title=title;
        this.deadline=deadline;
        this.isComplete=isComplete;
    }
}
class Assignment{
    employee:Employee;
    task:Task;
    constructor(employee:Employee,task:Task){
        this.employee=employee;
        this.task=task;
    }
}
class TaskManager{
    employees:Employee[]=[];
    tasks:Task[]=[];
    assignments:Assignment[]=[];
    constructor(employee:Employee[],task:Task[],assignment:Assignment[]){
        this.employees=employee;
        this.tasks=task;
        this.assignments=assignment;
        
    }
    addEmployee(name:string):void{
        const newEmployee =new Employee(this.employees.length+1,name);
        this.employees.push(newEmployee);
    }
    addTask(title:string,deadline:string):void{
        const newTask=new Task(this.tasks.length+1,title,new Date(deadline));
        this.tasks.push(newTask);
    }
    assignTask(employeeId:Number,taskId:Number):void{
        const employee=this.employees.find((employee)=>employee.id===employeeId);
        const task=this.tasks.find((task) => task.id===taskId);
        if(employee && task){
            const assignment = new Assignment(employee,task);
            this.assignments.push(assignment);
        }
    }
    completeTask(employeeId:Number,taskId:Number):void{
        const assignment=this.assignments.find((assignment)=>assignment.employee.id===employeeId && assignment.task.id===taskId);
        if(assignment){
            assignment.task.isComplete=true;
        }
    }
    listTasks():void{
        console.log("Danh sách công việc:");
        this.tasks.forEach((task) => console.log(task));
    }
}
class Main6{
    run():void{
        const taskManager = new TaskManager([],[],[]);
        let option:number = 0;
        while(option!==6){
            console.log("1. Thêm nhân viên");
            console.log("2. Thêm task mới");
            console.log("3. Phân công công việc");
            console.log("4. Hoàn thành công việc");
            console.log("5. Hiển thị danh sách task");
            console.log("6. Thoát");
            option = parseInt(prompt("Chọn chức năng:") || "0");
            switch(option){
                case 1:
                    const name = prompt("Nhập tên nhân viên:");
                    if (!name) {
                        console.log("Tên không được để trống");
                    } else {
                        taskManager.addEmployee(name);
                        console.log("Thêm nhân viên thành công!");
                        break;
                    }
                case 2:
                    const title = prompt("Nhập tiêu đề task:");
                    if (!title) {
                        console.log("Tiêu đề không được để trống");
                        break;
                    }
                    const deadline = prompt("Nhập deadline task:dd/mm/yyyy");
                    if (!deadline) {
                        console.log("Deadline không được để trống");
                        break;
                    }
                    taskManager.addTask(title,deadline);
                    console.log("Thêm task thành công!");
                    break;
                case 3:
                    const employeeId = parseInt(prompt("Nhập id nhân viên:") || "0");
                    if (!employeeId || !taskManager.employees.find((employee) => employee.id === employeeId)) {
                        console.log("Id nhân viên không hợp lệ");
                        break;
                    }
                    const taskId = parseInt(prompt("Nhập id task:") || "0");
                    if (!taskId  || !taskManager.tasks.find((task) => task.id === taskId)) {
                        console.log("Id task không hợp lệ");
                        break;
                    }
                    taskManager.assignTask(employeeId,taskId);
                    console.log("Phân công công việc thành công!");
                    break;
                case 4:
                    const employeeId2 = parseInt(prompt("Nhập id nhân viên:") || "0");
                    if(!employeeId2 || !taskManager.employees.find((employee) => employee.id === employeeId2)){
                        console.log("Id nhân viên không hợp lệ");
                        break;
                    }
                    const taskId2 = parseInt(prompt("Nhập id task:") || "0");
                    if(!taskId2 || !taskManager.tasks.find((task) => task.id === taskId2)){
                        console.log("Id task không hợp lệ");
                        break;
                    }
                    taskManager.completeTask(employeeId2,taskId2);
                    console.log("Hoàn thành công việc thành công!");
                    break;
                case 5:
                    taskManager.listTasks();
                    break;
                case 6:
                    console.log("Thoát");
                    break;
                default:
                    console.log("Vui lòng chọn chức năng hợp lệ");
                    break;
            }
        }
    }
}

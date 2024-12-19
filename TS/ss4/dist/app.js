"use strict";
class Department {
    constructor(id, name, manager) {
        this.id = id;
        this.name = name;
        this._manager = manager;
    }
    get manager() {
        return this._manager;
    }
    set manager(manager) {
        this._manager = manager;
    }
    describe() {
        console.log(`Department: ${this.name} with ID: ${this.id}`);
    }
}
let educationDepartment = new Department("1", "Education", "Nguyễn Văn A");
console.log(educationDepartment);
let mktDepartment = new Department("2", "Marketing", "Trần Văn B");
console.log(mktDepartment);
console.log("Id:", mktDepartment.id);
console.log("Name:", mktDepartment.name);
mktDepartment.name = "Advanced Marketing";
console.log("Name:", mktDepartment.name);
mktDepartment.describe();
console.log("manager:", mktDepartment.manager);
mktDepartment.manager = "Bill Gates";
console.log("manager:", mktDepartment.manager);
let accounting = {
    describe: educationDepartment.describe.bind({ id: "2", name: "Accounting" }),
};

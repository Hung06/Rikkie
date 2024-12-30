class Person4{
    id: number;
    name:string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    getName() :string{
        return this.name;
    }
}
class Customer extends Person4{
    email:string;
    phone:string;
    constructor(id: number, name: string, email: string ,phone: string){
        super(id, name);
        this.email = email;
        this.phone = phone;
    }
    getContactDetails():string{
        return this.email + " " + this.phone;
    }
}
class Employee4 extends Person4{
    position:string;
    constructor(id: number, name: string, position: string){
        super(id, name);
        this.position = position;
    }
    getPosition():string{
        return this.position;
    }
}
class Product{
    id:number;
    name:string;
    price:number;
    quantity:number;
    constructor(id: number, name: string, price: number, quantity: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    sell(quantity: number):void{
        this.quantity -= quantity;
    }
    restock(quantity: number):void{
        this.quantity += quantity;
    }
    getDetails():string{
        return this.id + " " + this.name + " " + this.price + " " + this.quantity;
    }
}
class Invoice{
    customer:Customer[];
    employee:Employee4[];
    products:Product[];
    totalAmount:number;
    constructor(customer:Customer[], employee:Employee4[], products:Product[] ,totalAmount:number){
        this.customer = customer;
        this.employee = employee;
        this.products = products;
        this.totalAmount = totalAmount;
    }
    calculateTotal():number{
        let total = 0;
        for(let i = 0; i < this.products.length; i++){
            total += this.products[i].price * this.products[i].quantity;
        }
        return total;
    }
    getInvoiceDetails():string{
        return this.customer[0].getName() + " " + this.employee[0].getName() + " " + this.calculateTotal();
    }

}
class StoreManager {
    customers:Customer[];
    employees:Employee4[];
    products:Product[];
    invoices:Invoice[];
    constructor(customers:Customer[], employees:Employee4[], products:Product[], invoices:Invoice[]){
        this.customers = customers;
        this.employees = employees;
        this.products = products;
        this.invoices = invoices;
    }
    addCustomer(name:string, email:string, phone:string):void{
        let id = this.customers.length + 1;
        this.customers.push(new Customer(id, name, email, phone));
    }
    addEmployee(name:string, position:string):void{
        let id = this.employees.length + 1;
        this.employees.push(new Employee4(id, name, position));
    }
    addProduct(name:string, price:number, quantity:number):void{
        let id = this.products.length + 1;
        this.products.push(new Product(id, name, price, quantity));
    }
    sellProduct(customerId: number, employeeId: number, productId: number, quantity: number): void{
        let customer = this.customers.find(customer => customer.id === customerId);
        let employee = this.employees.find(employee => employee.id === employeeId);
        let product = this.products.find(product => product.id === productId);
        if(customer && employee && product && product.quantity >= quantity){
            product.sell(quantity);
            this.invoices.push(new Invoice([customer], [employee], [product], product.price * quantity));
        }
    }
    restockProduct(productId: number, quantity: number):void{
        let product = this.products.find(product => product.id === productId);
        if(product){
            product.restock(quantity);
        }
    }
    listInvoices():Invoice[]{
        return this.invoices;
    }
}
class Main4{
    run(){
        let StoreManager4 = new StoreManager([], [], [], []);
        let choice :number=0;
        while(choice != 7){
            console.log("1.Thêm khách hàng");
            console.log("2.Thêm nhân viên");
            console.log("3.Thêm sản phẩm");
            console.log("4.Bán sản phẩm");
            console.log("5.Nhập hàng");
            console.log("6.Hiển thị danh sách hóa đơn");
            console.log("7.Thoát");
            switch(choice){
            case 1:
                let name = prompt("Nhập tên khách hàng");
                if(!name || name == null){
                    console.log("Tên không hợp lệ");
                    break;
                }else{
                    let email = prompt("Nhập email khách hàng");
                    if(!email || email == null){
                        console.log("Email không hợp lệ");
                        break;
                    }else{
                        let phone = prompt("Nhập số điện thoại khách hàng");
                        if(!phone || phone == null){
                            console.log("Số điện thoại không hợp lệ");
                            break;
                        }else{
                            StoreManager4.addCustomer(name, email, phone);
                        }
                    }
                }
                break;
            case 2:
                let  name1 = prompt("Nhập tên nhân viên");
                if(!name1 || name1 == null){
                    console.log("Tên không hợp lệ");
                    break;
                }else{
                    let position = prompt("Nhập chức vụ");
                    if(!position || position == null){
                        console.log("Chức vụ không hợp lệ");
                        break;
                    }else{
                        StoreManager4.addEmployee(name1, position);
                    }
                }
                break;
            case 3:
                let name2 = prompt("Nhập tên sản phẩm");
                if(!name2 || name2 == null){
                    console.log("Tên không hợp lệ");
                    break;
                }else{
                    let price = prompt("Nhập giá sản phẩm");
                    if(!price || price == null){
                        console.log("Giá không hợp lệ");
                        break;
                    }else{
                        let quantity = prompt("Nhập số lượng sản phẩm");
                        if(!quantity || quantity == null){
                            console.log("Số lượng không hợp lệ");
                            break;
                        }else{
                            StoreManager4.addProduct(name2, Number(price), Number(quantity));
                        }
                    }
                }
                break;
            case 4:
                let customerId = Number(prompt("Nhập id khách hàng"));
                if(!StoreManager4.customers.find(customer => customer.id === customerId)){
                    console.log("Khách hàng không tồn tại");
                    break;
                }else{
                    let employeeId = Number(prompt("Nhập id nhân viên"));
                    if(!StoreManager4.employees.find(employee => employee.id === employeeId)){
                        console.log("Nhân viên không tồn tại");
                        break;
                    }else{
                        let productId = Number(prompt("Nhập id sản phẩm"));
                        if(!StoreManager4.products.find(product => product.id === productId)){
                            console.log("Sản phẩm không tồn tại");
                            break;
                        }else{
                            let quantity = Number(prompt("Nhập số lượng sản phẩm"));
                            if(!quantity){
                                console.log("Số lượng không hợp lệ");
                                break;
                            }else{
                                StoreManager4.sellProduct(customerId, employeeId, productId, quantity);
                            }
                        }
                    }
                }
                break;
            case 5:
                let productId = Number(prompt("Nhập id sản phẩm"));
                if(!StoreManager4.products.find(product => product.id === productId)){
                    console.log("Sản phẩm không tồn tại");
                    break;
                }else{
                    let quantity = Number(prompt("Nhập số lượng sản phẩm"));
                    if(!quantity || quantity == null || quantity < 0){
                        console.log("Số lượng không hợp lệ");
                        break;
                    }else{
                        StoreManager4.restockProduct(productId, quantity);
                    }
                }
                break;
            case 6: 
                console.log(StoreManager4.listInvoices());
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
let main4= new Main4();
main4.run();
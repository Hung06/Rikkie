class Person{
    id:number;
    name:string;
    email:string;
    phone:string;
    constructor(id:number,name:string,email:string,phone:string){
        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
    }
    getDetails():string{
        return `Person: ${this.name} with email: ${this.email} and phone: ${this.phone}`;
    }
}
abstract class Room{
    roomId:number;
    type:string;
    pricePerNight:number;
    isAvaliable:boolean;
    constructor(roomId:number,type:string,pricePerNight:number,isAvaliable:boolean = true){
        this.roomId=roomId;
        this.type=type;
        this.pricePerNight=pricePerNight;
        this.isAvaliable=isAvaliable;
    }
    getDetails():string{
        return `Room ID: ${this.roomId}, Type: ${this.type}, Price per night: ${this.pricePerNight}, Is avaliable: ${this.isAvaliable}`;
    }
    bookRoom(){
        this.isAvaliable=false;
    }
    raleaseRoom(){
        this.isAvaliable=true;
    }
    abstract calculateCost(nights: number): number;
    abstract getAdditionalServices(): string[];
    abstract applyDiscount(discountRate: number): number;
    abstract getCancellationPolicy():string;
}
// StandardRoom:
// Giá cố định, không có dịch vụ bổ sung.
// Chính sách hủy: Hoàn lại 100% nếu hủy trước 1 ngày.
// DeluxeRoom:
// Giá cao hơn, có dịch vụ ăn sáng.
// Chính sách hủy: Hoàn lại 50% nếu hủy trước 2 ngày.
// SuiteRoom:
// Giá cao nhất, có dịch vụ spa, minibar.
// Chính sách hủy: Không hoàn lại tiền nếu hủy.
class StandardRoom extends Room {
    constructor(roomId:number,type:string,pricePerNight:number,isAvaliable:boolean = true){
        super(roomId,type,pricePerNight,isAvaliable);
    }
    calculateCost(nights: number): number{
        return nights*this.pricePerNight;
    }
    getAdditionalServices(): string[]{
        return [];
    }
    applyDiscount(discountRate: number): number {
        if(discountRate<1 || discountRate>0){
            return this.pricePerNight*(1-discountRate);
        }
        else return this.pricePerNight;
    }
    getCancellationPolicy():string{
        return "Hoàn lại 100% nếu hủy trước 1 ngày.";
    }
}
class DeluxeRoom extends Room{
    constructor(roomId:number,type:string,pricePerNight:number,isAvaliable:boolean = true){
        super(roomId,type,pricePerNight,isAvaliable);
    }
    calculateCost(nights: number): number{
        return nights*this.pricePerNight;
    }
    getAdditionalServices(): string[]{
        return ["Ăn sáng"];
    }
    applyDiscount(discountRate: number): number {
        if(discountRate<1 || discountRate>0){
            return this.pricePerNight*(1-discountRate);
        }
        else return this.pricePerNight;
    }
    getCancellationPolicy():string{
        return "Hoàn lại 50% nếu hủy trước 2 ngày.";
    }
}
class SuiteRoom extends Room{
    constructor(roomId:number,type:string,pricePerNight:number,isAvaliable:boolean = true){
        super(roomId,type,pricePerNight,isAvaliable);
    }
    calculateCost(nights: number): number{
        return nights*this.pricePerNight;
    }
    getAdditionalServices(): string[]{
        return ["Spa","Minibar"];
    }
    applyDiscount(discountRate: number): number {
        if(discountRate<1 || discountRate>0){
            return this.pricePerNight*(1-discountRate);
        }
        else return this.pricePerNight;
    }
    getCancellationPolicy():string{
        return "Không hoàn lại tiền nếu hủy.";
    }
}
class Booking{
    bookingId:number;
    customer:Person;
    room:Room;
    nights:number;
    totalCost:number;
    constructor(bookingId:number,customer:Person,room:Room,nights:number,totalCost:number){
        this.bookingId=bookingId;
        this.customer=customer;
        this.room=room;
        this.nights=nights;
        this.totalCost=totalCost;
    }
    getBookingDetails():string{
        return `Booking ID: ${this.bookingId}, Room ID: ${this.room.roomId}, Total cost: ${this.totalCost}`;
    }
}
class HotelManager{
    rooms:Room[];
    bookings:Booking[];
    customer:Person[];
    constructor(){
        this.rooms=[];
        this.bookings=[];
        this.customer=[];
    }
    addRoom(type: string, pricePerNight: number): void{
        let roomID= this.rooms.length+1;
        if(type=="Standard"){
            this.rooms.push(new StandardRoom(roomID,type,pricePerNight));
        }
        else if(type=="Deluxe"){
            this.rooms.push(new DeluxeRoom(roomID,type,pricePerNight));
        }
        else if(type=="Suite"){
            this.rooms.push(new SuiteRoom(roomID,type,pricePerNight));
        }
    }
    addCustomer(name: string, email: string, phone: string): Person{
        let customerID= this.customer.length+1;
        let customer = new Person(customerID,name,email,phone);
        this.customer.push(customer);
        return customer;
    }
    bookRoom(customerId: number, roomId: number, nights: number): Booking{
        let customer=this.customer.find(c=>c.id==customerId);
        let room=this.rooms.find(r=>r.roomId==roomId);
        if(customer && room){
            let totalCost=room.calculateCost(nights);
            let bookingID=this.bookings.length+1;
            let booking=new Booking(bookingID,customer,room,nights,totalCost);
            this.bookings.push(booking);
            room.bookRoom();
            return booking;
        }
        else{
            throw new Error('Không tìm thấy khách hàng hoặc phòng');
        }
    }
    releaseRoom(roomId: number): void{
        let room=this.rooms.find(r=>r.roomId==roomId);
        if(room){
            room.raleaseRoom();
        }
        else{
            throw new Error('Không tìm thấy phòng');
        }
    }
    listAvailableRooms(): void{
        let availableRooms=this.rooms.filter(r=>r.isAvaliable);
        console.log(availableRooms.map(r=>r.getDetails()));
    }
    listBookingsByCustomer(customerId: number): void{
        let bookings=this.bookings.filter(b=>b.customer.id==customerId);
        console.log(bookings.find(b=>b.customer.id==customerId)?.getBookingDetails());
    }
    calculateTotalRevenue(): number{
        let totalCost=0;
        totalCost = this.bookings.reduce((totalCost,booking)=>{
            return totalCost+booking.totalCost;
        },0);
        return totalCost;
    }
    getRoomTypesCount(): void{
        let roomTypes=this.rooms.map(r=>r.type);
        let roomTypesCount: { [key: string]: number } = {};
        roomTypes.forEach(r=>{
            if(roomTypesCount[r]){
                roomTypesCount[r]++;
            }
            else{
                roomTypesCount[r]=1;
            }
        });
        console.log(roomTypesCount);
    }
    applyDiscountToRoom(roomId: number, discountRate: number): void{
        let room=this.rooms.find(r=>r.roomId==roomId);
        if(room){
            room.pricePerNight=room.applyDiscount(discountRate);
        }
    }
    getRoomServices(roomId: number): void{
        let room=this.rooms.find(r=>r.roomId==roomId);
        if(room?.type=="Standard"){
            console.log(StandardRoom.prototype.getAdditionalServices());
        }
        else if(room?.type=="Deluxe"){
            console.log(DeluxeRoom.prototype.getAdditionalServices());
        }
        else if(room?.type=="Suite"){
            console.log(SuiteRoom.prototype.getAdditionalServices());
        }
    }
    getCancellationPolicy(roomId: number): void{
        let room=this.rooms.find(r=>r.roomId==roomId);
        if(room?.type=="Standard"){
            console.log(StandardRoom.prototype.getCancellationPolicy());
        }
        else if(room?.type=="Deluxe"){
            console.log(DeluxeRoom.prototype.getCancellationPolicy());
        }
        else if(room?.type=="Suite"){
            console.log(SuiteRoom.prototype.getCancellationPolicy());
        }
    }
}
//  Thêm khách hàng. 								(10đ)
//  Thêm phòng. 									(10đ)
//  Đặt phòng. 									(10đ)
//  Trả phòng. 									(10đ)
//  Hiển thị danh sách phòng còn trống (sử dụng filter). 			(10đ)
//  Hiển thị danh sách đặt phòng của khách hàng (sử dụng filter). 		(10đ)
//  Tính tổng doanh thu từ các đặt phòng (sử dụng reduce). 			(10đ)	
//  Đếm số lượng từng loại phòng (sử dụng reduce hoặc map). 		(10đ)
//  Áp dụng giảm giá cho phòng (sử dụng findIndex). 			(10đ)
//  Hiển thị các dịch vụ bổ sung của phòng (sử dụng find). 			(10đ)
//  Hiển thị chính sách hủy phòng (sử dụng find). 				(10đ)
//  Thoát chương trình. 								(10đ)
class Main{
    run(){
        let hotelManager=new HotelManager();
        let choice:number=0;
        while(choice!=12){
            console.log('1.Thêm khách hàng ');
            console.log('2.Thêm phòng ');
            console.log('3.Đặt phòng ');
            console.log('4.Trả phòng ');
            console.log('5.Hiển thị danh sách phòng còn trống ');
            console.log('6.Hiển thị danh sách đặt phòng của khách hàng ');
            console.log('7.Tính tổng doanh thu từ các đặt phòng ');
            console.log('8.Đếm số lượng từng loại phòng ');
            console.log('9.Áp dụng giảm giá cho phòng ');
            console.log('10.Hiển thị các dịch vụ bổ sung của phòng ');
            console.log('11.Hiển thị chính sách hủy phòng ');
            console.log('12.Thoát ');
            const input = prompt('Chọn chức năng: ');
            choice = input !== null ? parseInt(input) : 0;
            switch(choice){
                case 1:
                    let name = prompt('Nhập tên khách hàng: ');
                    if(!name){
                        console.log('Tên không được để trống');
                        break;
                    }else{
                        let email = prompt('Nhập email: ');
                        if(!email){
                            console.log('Email không được để trống');
                            break;
                        }
                        else{
                            let phone = prompt('Nhập số điện thoại: ');
                            if(!phone){
                                console.log('Số điện thoại không được để trống');
                                break;
                            }
                            else{
                                hotelManager.addCustomer(name,email,phone);
                                console.log('Thêm khách hàng thành công');
                                hotelManager.customer.forEach(c=>console.log(c.getDetails()));
                                break;
                            }
                        }
                    }
                case 2: 
                    let type = prompt('Chọn loại phòng: Standard-Deluxe-Suite ');
                    if(!type || (type!="Standard" && type!="Deluxe" && type!="Suite")){
                        console.log('Loại phòng không hợp lệ');
                        break;
                    }else{
                        let pricePerNight = prompt('Nhập giá phòng: ');
                        if(!pricePerNight){
                            console.log('Giá phòng không được để trống');
                            break;
                        }
                        else{
                            hotelManager.addRoom(type,parseInt(pricePerNight));
                            console.log('Thêm phòng thành công');
                            hotelManager.rooms.forEach(r=>console.log(r.getDetails()));
                            break;
                        }
                    }
                case 3:
                    let customerid = prompt('Nhập ID khách hàng: ');
                    let customerId=Number(customerid);
                    if(!customerId || customerId>hotelManager.customer.length || customerId<1){
                        console.log('ID không được để trống');
                        break;
                    }else{
                        let roomId = prompt('Nhập ID phòng: ');
                        if(!roomId || hotelManager.rooms.find(r=>r.roomId==parseInt(roomId))?.isAvaliable==false){
                            console.log('ID phòng không hợp lệ hoặc phòng không còn trống');
                            break;
                        }
                        else{
                            let nights = prompt('Nhập số đêm ở: ');
                            if(!nights){
                                console.log('Số đêm ở không được để trống');
                                break;
                            }
                            else{
                                hotelManager.bookRoom(customerId,parseInt(roomId),parseInt(nights));
                                console.log('Đặt phòng thành công');
                                hotelManager.bookings.forEach(b=>console.log(b.getBookingDetails()));
                                break;
                            }
                        }
                    }
                case 4:
                    let roomiD = prompt('Nhập ID phòng: ');
                    let roomId=Number(roomiD);
                    if(!roomId || hotelManager.rooms.find(r=>r.roomId==roomId)?.isAvaliable==true){
                        console.log('ID phòng không hợp lệ hoặc phòng không được đặt');
                        break;
                    }else{
                        hotelManager.releaseRoom(roomId);
                        console.log('Trả phòng thành công');
                        hotelManager.rooms.forEach(r=>console.log(r.getDetails()));
                        break;
                    }
                case 5:
                    console.log('Danh sách phòng còn trống: ');
                    hotelManager.listAvailableRooms();
                    break;
                case 6:
                    let customerid1 = prompt('Nhập ID khách hàng: ');
                    let customerId1=Number(customerid1);
                    if(!customerId1 || customerId1>hotelManager.customer.length || customerId1<1){
                        console.log('ID không hợp lệ');
                        break;
                    }else{
                        console.log('Danh sách đặt phòng của khách hàng: ');
                        hotelManager.listBookingsByCustomer(customerId1);
                        break;
                    }
                case 7:
                    console.log('Tổng doanh thu từ các đặt phòng: '+hotelManager.calculateTotalRevenue());
                    break;
                case 8:
                    console.log('Số lượng từng loại phòng: ');
                    hotelManager.getRoomTypesCount();
                    break;
                case 9:
                    let roomid1 = prompt('Nhập ID phòng: ');
                    let roomId1=Number(roomid1);
                    if(!roomId1 || roomId1>hotelManager.rooms.length || roomId1<1){
                        console.log('ID phòng không hợp lệ');
                        break;
                    }else{
                        let discountRate1= prompt('Nhập tỉ lệ giảm giá: VD: 0.1 là 10%');
                        let discountRate=Number(discountRate1);
                        if(!discountRate || discountRate>1 || discountRate<0){
                            console.log('Tỉ lệ giảm giá không được để trống');
                            break;
                        }
                        else{
                            hotelManager.applyDiscountToRoom(roomId1,discountRate);
                            console.log('Áp dụng giảm giá thành công');
                            hotelManager.rooms.forEach(r=>console.log(r.getDetails()));
                            break;
                        }
                    }
                case 10:
                    let roomid = prompt('Nhập ID phòng: ');
                    let roomId2=Number(roomid);
                    if(!roomId2 || roomId2>hotelManager.rooms.length || roomId2<1){
                        console.log('ID phòng không hợp lệ');
                        break;
                    }else{
                        console.log('Dịch vụ bổ sung của phòng: ');
                        hotelManager.getRoomServices(roomId2);
                        break;
                    }
                case 11:
                    let roomid3 = prompt('Nhập ID phòng: ');
                    let roomId3=Number(roomid3);
                    if(!roomId3 || roomId3>hotelManager.rooms.length || roomId3<1){
                        console.log('ID phòng không hợp lệ');
                        break;
                    }else{
                        console.log('Chính sách hủy phòng: ');
                        hotelManager.getCancellationPolicy(roomId3);
                        break;
                    }
                case 12:
                    choice=12;
                    console.log('Thoát chương trình');
                    break;
                default:
                    console.log('Chức năng không hợp lệ');
                    break;
            }
                
        }
    }
}
let main=new Main();
main.run();
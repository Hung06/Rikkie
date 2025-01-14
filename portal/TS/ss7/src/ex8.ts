abstract class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    abstract getDetails(): string;

    calculateDiscountedPrice(discountRate: number): number {
        return this.price - this.price * discountRate;
    }
}

class Book extends Product {
    category: string;

    constructor(id: number, name: string, price: number, category: string) {
        super(id, name, price);
        this.category = category;
    }

    getDetails(): string {
        return `Book: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
    }
}

class ProductManager<T extends Product> {
    private products: T[] = [];

    addProduct(product: T): void {
        this.products.push(product);
    }

    removeProductById(id: number): void {
        this.products = this.products.filter((product) => product.id !== id);
    }

    listProducts(): void {
        this.products.forEach((product) => console.log(product.getDetails()));
    }

    findProductBy<K extends keyof T>(key: K, value: T[K]): T | undefined {
        return this.products.find((product) => product[key] === value);
    }

    filterProductsBy<K extends keyof T>(key: K, value: T[K]): T[] {
        return this.products.filter((product) => product[key] === value);
    }

    calculateTotalValue(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

class Main {
    run(): void {
        const productManager = new ProductManager<Book>();
        let choice: number;

        do {
            choice = Number(
                prompt(
                    "1. Thêm sách\n2. Xóa sách\n3. Hiển thị danh sách sách\n4. Tìm kiếm sách theo thuộc tính\n5. Lọc sách theo thể loại\n6. Tính tổng giá trị sách\n7. Áp dụng giảm giá\n8. Thoát chương trình\nChọn chức năng: "
                )
            );

            switch (choice) {
                case 1:
                    const name = prompt("Nhập tên sách: ") || "";
                    const price = Number(prompt("Nhập giá sách: "));
                    const category = prompt("Nhập thể loại sách: ") || "";
                    if (!name || !price || !category) {
                        console.log("Dữ liệu không hợp lệ!");
                        break;
                    }
                    const id = productManager['products'].length + 1;
                    productManager.addProduct(new Book(id, name, price, category));
                    console.log("Thêm sách thành công!");
                    break;

                case 2:
                    const idToRemove = Number(prompt("Nhập mã ID sách cần xóa: "));
                    productManager.removeProductById(idToRemove);
                    console.log("Xóa sách thành công!");
                    break;

                case 3:
                    productManager.listProducts();
                    break;

                case 4:
                    const searchKey = prompt("Nhập thuộc tính cần tìm (id, name, category): ") as keyof Book;
                    const searchValue = prompt("Nhập giá trị cần tìm: ");
                    if (!searchKey || !searchValue) {
                        console.log("Dữ liệu không hợp lệ!");
                        break;
                    }
                    const foundProduct = productManager.findProductBy(searchKey, searchValue as any);
                    console.log(foundProduct ? foundProduct.getDetails() : "Không tìm thấy sách!");
                    break;

                case 5:
                    const filterKey = prompt("Nhập thuộc tính cần lọc (id, name, category): ") as keyof Book;
                    const filterValue = prompt("Nhập giá trị cần lọc: ");
                    if (!filterKey || !filterValue) {
                        console.log("Dữ liệu không hợp lệ!");
                        break;
                    }
                    const filteredProducts = productManager.filterProductsBy(filterKey, filterValue as any);
                    filteredProducts.forEach((product) => console.log(product.getDetails()));
                    break;

                case 6:
                    console.log("Tổng giá trị sách:", productManager.calculateTotalValue());
                    break;

                case 7:
                    const discountRate = Number(prompt("Nhập phần trăm giảm giá (0-1): "));
                    if (discountRate <= 0 || discountRate >= 1) {
                        console.log("Phần trăm giảm giá không hợp lệ!");
                        break;
                    }
                    productManager['products'].forEach((product) =>
                        console.log(`${product.name}: ${product.calculateDiscountedPrice(discountRate)}`)
                    );
                    break;

                case 8:
                    console.log("Kết thúc chương trình.");
                    break;

                default:
                    console.log("Chọn chức năng không hợp lệ!");
            }
        } while (choice !== 8);
    }
}

new Main().run();

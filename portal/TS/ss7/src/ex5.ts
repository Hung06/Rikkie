function filterByProperty<T extends { [key: string]: any }>(items: T[], key: string, value: any): T[] {
    return items.filter((item) => item[key] === value);
}
const products = [ 
    { id: 1, name: "Laptop", category: "Electronics" }, 
    { id: 2, name: "Phone", category: "Electronics" },
    { id: 3, name: "Shoes", category: "Fashion" },
];
console.log(filterByProperty(products, "category", "Electronics")); 
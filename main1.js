function product(id, productName, price) {
    this.id = id,
        this.productName = productName,
        this.price = price
}
let products = [
    { id: 5, productName: "Mouse", price: 35 },
    { id: 6, productName: "Keyboard", price: 15 },
    { id: 7, productName: "Monitor", price: 44 }
];
products.push(new product(8, "WebCame", 45))
products.push(new product(19, "Mobiee", 125))
console.log(products)
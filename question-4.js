// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let lowestItem = inventory [0];

for (let item of inventory) {
  if (item.quantity < lowestItem.quantity) {
    lowestItem = item;
  }
}

console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowestItem.name} ซึ่งมี ${lowestItem.quantity} ชิ้น`
);
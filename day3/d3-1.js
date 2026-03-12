const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. filter() → inStock products
const availableProducts = cart.filter(item => item.inStock);

// 2. map() → { name, totalPrice }
const productTotals = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));

// 3. reduce() → grand total
const grandTotal = cart.reduce((acc, item) => 
  acc + item.price * item.quantity, 0
);

// 4. find() → Mouse
const mouseDetails = cart.find(item => item.name === "Mouse");

// 5. findIndex() → Keyboard
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");

console.log("ASSIGNMENT 1 RESULTS");
console.log({ availableProducts, productTotals, grandTotal, mouseDetails, keyboardIndex });
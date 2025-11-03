const products = [
  {
    name: "Wireless Headphones",
    price: 79.99,
    image: "images/Headphones.png",
    description: "High-quality sound with noise cancellation.",
  },
  {
    name: "Smart Watch",
    price: 120.0,
    image: "images/Watch.png",
    description: "Track your fitness and stay connected.",
  },
  {
    name: "Bluetooth Speaker",
    price: 49.5,
    image: "images/Speaker.png",
    description: "Portable and powerful with deep bass.",
  },
  {
    name: "Laptop Bag",
    price: 35.0,
    image: "images/Bag.png",
    description: "Stylish and durable laptop carrying bag.",
  },
  {
    name: "Digital Camera",
    price: 249.99,
    image: "images/camera.png",
    description: "Capture stunning photos with this compact camera.",
  },
  {
    name: "Mechanical Keyboard",
    price: 89.0,
    image: "images/keyboard.png",
    description: "RGB backlit mechanical keyboard for gamers.",
  },
  {
    name: "Wireless Mouse",
    price: 29.99,
    image: "images/mouse.png",
    description: "Ergonomic wireless mouse with long battery life.",
  },
  {
    name: "Smartphone",
    price: 699.99,
    image: "images/phone.png",
    description: "Fast performance and excellent camera quality.",
  },
  {
    name: "Tablet",
    price: 399.99,
    image: "images/tablet.png",
    description: "Slim and powerful tablet for work and play.",
  },
  {
    name: "Fast Charger",
    price: 24.99,
    image: "images/charger.png",
    description: "Quick charging USB-C power adapter.",
  },
  {
    name: "LED Monitor",
    price: 189.99,
    image: "images/monitor.png",
    description: "24-inch Full HD monitor with ultra-slim design.",
  },
  {
    name: "External Hard Drive",
    price: 99.0,
    image: "images/harddrive.png",
    description: "1TB portable hard drive for secure data backup.",
  },
];

// Get container element
const productContainer = document.getElementById("product-container");

// Loop through products and display them
products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}" alt="${
    product.name
  }" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">
    <div class="product-info">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button class="btn">Add to Cart</button>
    </div>
  `;

  productContainer.appendChild(card);
});

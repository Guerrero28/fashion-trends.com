
const products = [
  { id: 1, name: "Chaqueta Negra", price: 59.99, img: "https://source.unsplash.com/300x400/?jacket" },
  { id: 2, name: "Vestido Verano", price: 39.99, img: "https://source.unsplash.com/300x400/?dress" },
  { id: 3, name: "Pantalón Casual", price: 29.99, img: "https://source.unsplash.com/300x400/?pants" },
];

let cart = [];

function renderProducts() {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>€${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Añadir</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  const count = document.getElementById("cart-count");

  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - €${item.price.toFixed(2)}`;
    list.appendChild(li);
    sum += item.price;
  });

  total.textContent = `€${sum.toFixed(2)}`;
  count.textContent = cart.length;
}

function toggleCart() {
  const cartEl = document.getElementById("cart");
  cartEl.style.display = cartEl.style.display === "block" ? "none" : "block";
}

function checkout() {
  alert("Gracias por tu compra.");
  cart = [];
  updateCart();
  toggleCart();
}

document.addEventListener("DOMContentLoaded", renderProducts);

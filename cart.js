let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let cartContainer = document.getElementById("cart-container");

displayCart();

function displayCart() {
  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<h2>Your cart is empty 🛒</h2>";
    document.getElementById("total-price").innerHTML = "";
    return;
  }

  cartContainer.innerHTML = cartItems.map((item, index) => {
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" />
        <h3>${item.title}</h3>
        <p>₹${item.price}</p>
        <div class="quantity-control">
          <button onclick="updateQuantity(${index}, -1)">−</button>
          <span>${item.quantity || 1}</span>
          <button onclick="updateQuantity(${index}, 1)">+</button>
        </div>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  }).join("");

  showTotal(); // 👉 this calls the function below
}

function showTotal() {
  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * (item.quantity || 1);
  }, 0);

  document.getElementById("total-price").innerHTML = `
    <h3>Total: ₹${total.toFixed(2)}</h3>
    <button onclick="buyNow()">Buy Now</button>
  `;
}

function updateQuantity(index, change) {
  let qty = cartItems[index].quantity || 1;
  qty += change;
  if (qty < 1) return;
  cartItems[index].quantity = qty;
  localStorage.setItem("cart", JSON.stringify(cartItems));
  displayCart();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  displayCart();
}

function buyNow() {
  
  window.location.href = "checkout.html";


}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.length;
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = count;
  }
}

updateCartCount();


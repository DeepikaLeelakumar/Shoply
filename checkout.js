const form = document.getElementById("checkout-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  alert(`🎉 Thank you, ${name}! Your order has been placed.`);

  localStorage.removeItem("cart");
  window.location.href = "index.html"; // go back to home
});

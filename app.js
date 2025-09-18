let cart = [];
let total = 0;

// Add item to cart
function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

// Update cart UI
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((c, index) => {
    let li = document.createElement("li");
    li.textContent = `${c.item} - Rs.${c.price}`;

    // Remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.title = "Remove Item";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  // Update total price
  document.getElementById("total").textContent = `Total: Rs. ${total}`;
}

// Remove item from cart
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// Checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Thank you for ordering with Foodigo! 🍴\nYour Total Bill: Rs. ${total}`);
    cart = [];
    total = 0;
    updateCart();
  }
});

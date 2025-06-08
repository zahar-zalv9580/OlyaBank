// payment.js
document.getElementById("payment-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const purpose = document.getElementById("purpose").value;
  const amount = parseFloat(document.getElementById("amount").value);

  let balance = parseFloat(localStorage.getItem("balance") || "25000");

  if (amount > balance || amount <= 0 || !purpose) {
    alert("Помилка введення.");
    return;
  }

  balance -= amount;
  localStorage.setItem("balance", balance.toString());

  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  transactions.unshift({
    date: new Date().toISOString().split("T")[0],
    desc: `Оплата: ${purpose}`,
    amount: -amount
  });
  localStorage.setItem("transactions", JSON.stringify(transactions));

  alert("Оплата виконана!");
  window.location.href = "cab.html";
});

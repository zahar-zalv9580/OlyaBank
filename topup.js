document.getElementById("topup-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("Некоректна сума.");
    return;
  }

  let balance = parseFloat(localStorage.getItem("balance") || "25000");
  balance += amount;
  localStorage.setItem("balance", balance.toString());

  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  transactions.unshift({
    date: new Date().toISOString().split("T")[0],
    desc: `Поповнення`,
    amount: amount
  });
  localStorage.setItem("transactions", JSON.stringify(transactions));

  alert("Рахунок поповнено!");
  window.location.href = "cab.html";
});

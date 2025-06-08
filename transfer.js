document.getElementById("transfer-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const receiver = document.getElementById("receiver").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!receiver || isNaN(amount) || amount <= 0) {
    alert("Перевірте введені дані.");
    return;
  }

  let balance = parseFloat(localStorage.getItem("balance") || "25000");

  if (amount > balance) {
    alert("Недостатньо коштів.");
    return;
  }

  balance -= amount;
  localStorage.setItem("balance", balance.toString());

  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  transactions.unshift({
    date: new Date().toISOString().split("T")[0],
    desc: `Переказ на ${receiver}`,
    amount: -amount
  });
  localStorage.setItem("transactions", JSON.stringify(transactions));

  alert("Успішно переказано!");
  window.location.href = "cab.html";
});

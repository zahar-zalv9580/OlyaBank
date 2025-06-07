// storage.js

function saveTransaction(desc, amount) {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const now = new Date();
  const date = now.toLocaleDateString("uk-UA", {
    year: "numeric", month: "2-digit", day: "2-digit"
  });

  transactions.unshift({
    date,
    desc,
    amount: Number(amount)
  });

  if (transactions.length > 100) transactions.length = 100;
  localStorage.setItem("transactions", JSON.stringify(transactions));

  let balance = parseFloat(localStorage.getItem("balance")) || 0;
  balance += Number(amount);
  localStorage.setItem("balance", balance.toString());
}

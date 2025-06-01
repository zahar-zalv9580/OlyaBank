const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
const table = document.getElementById("history-table");

transactions.forEach(tx => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${tx.date}</td><td>${tx.desc}</td><td>${tx.amount > 0 ? "+" : ""}${tx.amount} ₴</td>`;
  table.appendChild(row);
});

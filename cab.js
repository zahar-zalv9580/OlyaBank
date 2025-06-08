document.addEventListener("DOMContentLoaded", () => {
  const balanceElement = document.querySelector(".balance strong");
  const accountsSection = document.querySelector(".accounts");
  const transactionsSection = document.querySelector(".transactions");

  // --- Завантаження балансу ---
  let balance = parseFloat(localStorage.getItem("balance"));
  if (isNaN(balance)) {
    balance = 25000;
    localStorage.setItem("balance", balance.toString());
  }
  balanceElement.textContent = `${balance.toLocaleString('uk-UA')} ₴`;

  // --- Завантаження рахунків ---
  let accounts = JSON.parse(localStorage.getItem("accounts"));
  if (!Array.isArray(accounts)) {
    accounts = [
      {
        id: 1,
        type: "Основний рахунок",
        number: "UA123456789012345678901234567",
        amount: balance
      }
    ];
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }

  accountsSection.innerHTML = "<h2>Мої рахунки</h2>";
  accounts.forEach(acc => {
    const div = document.createElement("div");
    div.className = "account-card";
    div.innerHTML = `
      <strong>${acc.type}</strong><br>
      Номер рахунку: ${acc.number}<br>
      Баланс: ${acc.amount.toLocaleString('uk-UA')} ₴
    `;
    accountsSection.appendChild(div);
  });

  // --- Завантаження транзакцій ---
  let transactions = JSON.parse(localStorage.getItem("transactions"));
  if (!Array.isArray(transactions)) transactions = [];

  transactionsSection.innerHTML = "<h2>Останні операції</h2>";
  if (transactions.length === 0) {
    transactionsSection.innerHTML += "<p>Операцій ще не було.</p>";
  } else {
    const table = document.createElement("table");
    table.innerHTML = `
      <tr><th>Дата</th><th>Опис</th><th>Сума</th></tr>
    `;

    transactions.slice(0, 5).forEach(tx => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${tx.date}</td>
        <td>${tx.desc}</td>
        <td style="color:${tx.amount > 0 ? 'green' : 'red'};">
          ${tx.amount > 0 ? "+" : ""}${tx.amount.toLocaleString('uk-UA')} ₴
        </td>
      `;
      table.appendChild(row);
    });

    transactionsSection.appendChild(table);
  }

  // --- Повідомлення про зміну пароля ---
  const alertText = document.querySelector(".security-alert p");
  const passwordExpireDays = 7;
  alertText.innerHTML = `Ваш пароль буде недійсний через ${passwordExpireDays} днів. <a href="#">Змінити</a>`;
});

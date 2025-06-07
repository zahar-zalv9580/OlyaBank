document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const loginInput = document.getElementById("login");
  const passwordInput = document.getElementById("password");

  clearErrors();

  let valid = true;

  // Email перевірка
  if (!emailInput.value.includes("@gmail.com")) {
    showError(emailInput, "Невірний email");
    valid = false;
  }

  // Логін перевірка
  if (loginInput.value.trim() === "") {
    showError(loginInput, "Поле логіну обов'язкове");
    valid = false;
  }

  // Пароль перевірка
  const password = passwordInput.value;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  if (!passwordRegex.test(password)) {
    showError(
      passwordInput,
      "Пароль має містити букви, цифри та спецсимволи (мін. 6 символів)"
    );
    valid = false;
  }

  if (valid) {
    alert("Реєстрація успішна! 🎉");
  }
});

// Показ помилки
function showError(input, message) {
  const wrapper = input.closest(".input-wrapper");
  const errorDiv = wrapper.querySelector(".error-message");
  errorDiv.innerText = message;
  errorDiv.classList.add("visible");
}

// Очищення помилок
function clearErrors() {
  document.querySelectorAll(".error-message").forEach((el) => {
    el.innerText = "";
    el.classList.remove("visible");
  });
}
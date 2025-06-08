document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const loginInput = document.getElementById("login");
  const passwordInput = document.getElementById("password");

  clearErrors();

  let valid = true;

  // Email 
  if (!emailInput.value.includes("@gmail.com")) {
    showError(emailInput, "Невірний email");
    valid = false;
  }

  // Логін 
  if (loginInput.value.trim() === "") {
    showError(loginInput, "Невірний логін");
    valid = false;
  }

  // Пароль 
  const password = passwordInput.value;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  if (!passwordRegex.test(password)) {
    showError(
      passwordInput,
      "Невірний пароль"
    );
    valid = false;
  }

  if (valid) {
    alert("Реєстрація успішна! 🎉");
  }
});

//  помилки
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
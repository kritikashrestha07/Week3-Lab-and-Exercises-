// ===============================
// DARK/LIGHT MODE TOGGLE (Works on all pages)
// ===============================

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (themeToggle) themeToggle.textContent = "☀ Light Mode";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀ Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙 Dark Mode";
    }
  });
}

// ===============================
// PRODUCT PAGE - Add to Cart for Multiple Products
// ===============================

const cartButtons = document.querySelectorAll(".cartBtn");

cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const message = btn.nextElementSibling;
    message.textContent = "✅ Added to Cart Successfully!";
  });
});

// ===============================
// REGISTRATION FORM VALIDATION + Redirect
// ===============================

const form = document.getElementById("registerForm");

if (form) {
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passError = document.getElementById("passError");
  const confirmError = document.getElementById("confirmError");

  const formSuccess = document.getElementById("formSuccess");

  function isValidEmail(mail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  }

  function validateInput(input, errorElement, message) {
    if (input.value.trim() === "") {
      errorElement.textContent = message;
      input.classList.add("invalid");
      return false;
    } else {
      errorElement.textContent = "";
      input.classList.remove("invalid");
      return true;
    }
  }

  // Blur Events
  fullName.addEventListener("blur", () =>
    validateInput(fullName, nameError, "Full Name is required!")
  );

  email.addEventListener("blur", () => {
    if (!isValidEmail(email.value)) {
      emailError.textContent = "Enter a valid email!";
      email.classList.add("invalid");
    } else {
      emailError.textContent = "";
      email.classList.remove("invalid");
    }
  });

  // Submit Event
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let validName = validateInput(fullName, nameError, "Full Name is required!");
    let validEmail = isValidEmail(email.value);

    if (!validEmail) {
      emailError.textContent = "Enter a valid email!";
      email.classList.add("invalid");
    }

    let validPass = password.value.length >= 8;

    if (!validPass) {
      passError.textContent = "Password must be at least 8 characters!";
    } else {
      passError.textContent = "";
    }

    let matchPass = password.value === confirmPassword.value;

    if (!matchPass) {
      confirmError.textContent = "Passwords do not match!";
    } else {
      confirmError.textContent = "";
    }

    // SUCCESS
    if (validName && validEmail && validPass && matchPass) {
      formSuccess.textContent = "🎉 Registration Successful! Redirecting...";

      setTimeout(() => {
        window.location.href = "products.html";
      }, 1500);
    }
  });

  // Password Toggle
  function togglePassword(field, toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      field.type = field.type === "password" ? "text" : "password";
    });
  }

  togglePassword(password, document.getElementById("togglePass"));
  togglePassword(confirmPassword, document.getElementById("toggleConfirm"));
}

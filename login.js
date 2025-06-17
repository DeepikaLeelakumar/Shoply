window.onload = function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (enteredEmail === savedUser.email && enteredPassword === savedUser.password) {
      localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password");
    }
  });
};

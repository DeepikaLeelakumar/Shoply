window.onload = function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Please log in.");
    window.location.href = "login.html";
  });
};

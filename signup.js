document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Save signup info (only for demo)
    let user = { username, password };
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Redirect to home page
    alert("Signup successful!");
    window.location.href = "index.html";
  });
});

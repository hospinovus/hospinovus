const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const res = await fetch("https://your-backend-url.onrender.com/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, role })
  });

  const data = await res.json();

  if (res.ok) {
    // Save token and role to localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", role);

    // Redirect to appropriate dashboard
    window.location.href = `${role}-dashboard.html`;
  } else {
    document.getElementById("error").innerText = data.message;
  }
});

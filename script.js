async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const res = await fetch("https://backend-ear3.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, role })
  });

  const data = await res.json();

  if (res.ok) {
    alert("Login successful!");
    localStorage.setItem("token", data.token);
    window.location.href = `${role}-dashboard.html`;
  } else {
    alert(data.message || "Login failed");
  }
}

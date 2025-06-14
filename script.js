document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  try {
    const res = await fetch("https://backend-ear3.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, role })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login successful!");
      localStorage.setItem("token", data.token);
      if (role === "CRE") window.location.href = "cre-dashboard.html";
      else if (role === "doctor") window.location.href = "doctor-dashboard.html";
      else if (role === "admin") window.location.href = "admin-dashboard.html";
      else if (role === "opcoordinator") window.location.href = "op-dashboard.html";
    } else {
      alert(data.message || "Login failed.");
    }

  } catch (err) {
    alert("Something went wrong. Please try again.");
    console.error(err);
  }
});

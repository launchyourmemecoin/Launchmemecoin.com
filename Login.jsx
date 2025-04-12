<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MemeCoinLauncher Auth</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyCLIgCLwkL5Jwobq3ljhchk3bmrvLXANyU",
      authDomain: "meme-coin-launcher.firebaseapp.com",
      projectId: "meme-coin-launcher",
      storageBucket: "meme-coin-launcher.firebasestorage.app",
      messagingSenderId: "996986192295",
      appId: "1:996986192295:web:1560eb4a0187b345f17682",
      measurementId: "G-GWGMV383RD"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Handle sign up
    window.handleSignUp = async () => {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign up successful!");
        window.location.href = "dashboard.html";
      } catch (error) {
        alert(error.message);
      }
    };

    // Handle login
    window.handleLogin = async () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "dashboard.html";
      } catch (error) {
        alert(error.message);
      }
    };

    // Check auth state
    onAuthStateChanged(auth, (user) => {
      const status = document.getElementById("status");
      if (user && status) {
        status.innerText = `Logged in as: ${user.email}`;
      }
    });

    // Handle logout
    window.logout = async () => {
      await signOut(auth);
      alert("Logged out!");
      window.location.href = "index.html";
    }
  </script>
  <style>
    body {
      background-color: #000;
      font-family: 'Inter', sans-serif;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .form {
      background: #111;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(66, 135, 245, 0.3);
      width: 90%;
      max-width: 400px;
      margin-bottom: 2rem;
    }
    input {
      width: 100%;
      padding: 0.75rem;
      margin-top: 0.5rem;
      border: none;
      border-radius: 8px;
      background: #222;
      color: white;
    }
    button {
      margin-top: 1rem;
      background: linear-gradient(to right, #3e6df6, #845ef7);
      color: white;
      padding: 0.75rem;
      width: 100%;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="form">
    <h2>Sign Up</h2>
    <input type="email" id="signup-email" placeholder="Email" />
    <input type="password" id="signup-password" placeholder="Password" />
    <button onclick="handleSignUp()">Sign Up</button>
  </div>

  <div class="form">
    <h2>Login</h2>
    <input type="email" id="login-email" placeholder="Email" />
    <input type="password" id="login-password" placeholder="Password" />
    <button onclick="handleLogin()">Login</button>
  </div>

  <p id="status"></p>
</body>
</html>

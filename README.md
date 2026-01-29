<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>MERN Admin Project</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: #e5e7eb;
      margin: 0;
      padding: 0;
      line-height: 1.7;
    }
    .container {
      max-width: 900px;
      margin: auto;
      padding: 40px 20px;
    }
    h1, h2, h3 {
      color: #38bdf8;
    }
    .card {
      background: #1e293b;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 25px;
      box-shadow: 0 8px 22px rgba(0,0,0,0.3);
    }
    code {
      background: #020617;
      padding: 8px 12px;
      border-radius: 6px;
      color: #a5f3fc;
      display: block;
      margin: 12px 0;
      font-size: 14px;
      white-space: pre-wrap;
    }
    a {
      color: #38bdf8;
      text-decoration: none;
    }
    ul {
      padding-left: 20px;
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="container">

    <h1>Admin Panel – MERN Stack Project</h1>
    <p>A full-stack admin dashboard built using the MERN stack (MongoDB, Express, React, Node.js).  
       This project includes secure admin authentication and REST APIs.</p>

    <div class="card">
      <h2>GitHub Repository</h2>
      <p>View the project source code on GitHub:</p>
      <p><a href="https://github.com/VijayMundargi/admin_project.git" target="_blank">
        https://github.com/VijayMundargi/admin_project.git
      </a></p>
    </div>

    <div class="card">
      <h2>🚀 Features</h2>
      <ul>
        <li>Admin authentication with JWT</li>
        <li>Secure API routes</li>
        <li>MongoDB database with Mongoose</li>
        <li>Express.js backend</li>
        <li>React.js frontend UI (if included)</li>
      </ul>
    </div>

    <div class="card">
      <h2>📦 Setup Instructions</h2>

      <h3>1. Clone the Repository</h3>
      <code>
git clone https://github.com/VijayMundargi/admin_project.git
cd admin_project
      </code>

      <h3>2. Install Dependencies</h3>
      <code>
npm install
      </code>

      <h3>3. Create <code>.env</code> File</h3>
      <p>Create a file named <strong>.env</strong> in the root directory and add:</p>
      <code>
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_admin
      </code>

      <h3>4. Run the Server</h3>
      <code>
npm start
      </code>

      <p>Server runs at: <strong>http://localhost:5000</strong></p>
    </div>

    <div class="card">
      <h2>⚙️ Tech Stack</h2>
      <ul>
        <li><strong>Node.js</strong> & Express.js</li>
        <li><strong>MongoDB</strong> with Mongoose</li>
        <li><strong>React.js</strong> (if frontend included)</li>
        <li><strong>JWT Authentication</strong></li>
      </ul>
    </div>

    <div class="footer">
      <p>© 2026 MERN Admin Project | Built by Vijay Mundargi</p>
    </div>

  </div>
</body>
</html>

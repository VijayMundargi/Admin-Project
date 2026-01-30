# 🛠️ Admin Panel – MERN Stack Project

A full-stack admin dashboard built using the MERN stack (MongoDB, Express, React, Node.js).
This project includes secure admin authentication and REST APIs.

--------------------------------------------------

🔗 GitHub Repository

https://github.com/VijayMundargi/admin_project.git

--------------------------------------------------

🚀 Features

- Admin authentication using JWT
- Secure API routes
- MongoDB database with Mongoose
- Express.js backend
- React.js frontend UI (if included)
- Password hashing using bcrypt

--------------------------------------------------

📦 Setup Instructions

1. Clone the Repository

git clone https://github.com/VijayMundargi/admin_project.git  
cd admin_project

2. Install Dependencies

npm install

3. Create .env File

Create a file named .env in the root directory and add:

PORT=5000  
MONGO_URI=mongodb://localhost:27017/mern_admin  
JWT_SECREAT_KEY=your_secret_key  

4. Run the Server

npm start

Server will run at:  
http://localhost:5000

--------------------------------------------------
## 🔑 JWT Implementation

- JWT tokens are generated on successful login
- Tokens include user identity and expiration time
- Tokens are validated using a secret key
- Expired or invalid tokens are rejected automatically

Security Components Used:
- JwtAuthenticationFilter
- JwtUtil / JwtService
- Spring Security Filter Chain


--------------------------------------------------

⚙️ Tech Stack

- Node.js & Express.js
- MongoDB with Mongoose
- React.js (Frontend)
- JWT Authentication
- bcrypt for password security

--------------------------------------------------

© 2026 MERN Admin Project | Built by Vijay Mundargi

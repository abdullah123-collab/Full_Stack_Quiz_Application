````markdown
# 🧠 QuizMaster Pro — Full-Stack Quiz Application

> A full-stack quiz platform built with React, Node.js, Express, and MySQL, featuring user authentication, interactive quizzes, performance tracking, leaderboards, and a dedicated admin dashboard.

QuizMaster Pro is a complete full-stack web application designed to provide an interactive online quiz experience for users while giving administrators a dedicated interface to manage quizzes and questions.

---

## 🚀 Features

### 👤 User Application

- 🔐 User Registration & Login
- 🛡️ JWT-based Authentication
- 📝 Interactive Multiple-Choice Quizzes
- 📊 Automatic Quiz Score Calculation
- 📈 Quiz History & Performance Tracking
- 🏆 Leaderboard
- 👤 User Profile
- 📱 Responsive User Interface

### 🛠️ Admin Dashboard

- 🔐 Admin Authentication
- 📊 Admin Dashboard
- ➕ Create Quizzes
- ❓ Add Quiz Questions
- ✏️ Manage Quiz Content
- 🗑️ Delete Quizzes & Questions
- 👥 User-related Statistics
- 📈 Quiz Performance Monitoring

---

## 🌐 Live Demo

**QuizMaster Pro:**  
https://quizmasterpro-nine.vercel.app/

---

## 🏗️ Application Architecture

```text
                         QuizMaster Pro
                              │
                ┌─────────────┴─────────────┐
                │                           │
                ▼                           ▼
        React User App                React Admin App
          (frontend/)                    (admin/)
                │                           │
                └─────────────┬─────────────┘
                              │
                              ▼
                       REST API Requests
                              │
                              ▼
                    Node.js + Express
                         (backend/)
                              │
                              ▼
                           MySQL
                          Database
````

| Component     | Directory   | Purpose                                   |
| ------------- | ----------- | ----------------------------------------- |
| User Frontend | `frontend/` | User-facing quiz application              |
| Backend       | `backend/`  | API, authentication & database operations |
| Admin Panel   | `admin/`    | Quiz and question management              |

---

## 🛠️ Tech Stack

### Frontend

* React 18
* React Router DOM
* Axios
* React Icons
* React Scripts
* CSS

### Backend

* Node.js
* Express.js
* MySQL2
* JSON Web Token (JWT)
* bcrypt / bcryptjs
* CORS
* dotenv
* Nodemon

### Database

* MySQL

### Tools

* Git
* GitHub
* npm
* VS Code

---

## 🔐 Authentication

QuizMaster Pro uses token-based authentication to protect user and administrative functionality.

### Authentication Flow

```text
User
  │
  ▼
Register / Login
  │
  ▼
Backend Authentication
  │
  ├── Password Verification
  │
  └── JWT Generation
          │
          ▼
     Authenticated User
          │
          ▼
     Protected Routes
```

Security-related technologies include:

* JWT authentication
* Password hashing with bcrypt
* Protected routes
* Environment variables
* Separate admin authentication

---

## 📝 Quiz Workflow

```text
Login
  │
  ▼
Browse Quizzes
  │
  ▼
Select Quiz
  │
  ▼
Answer Questions
  │
  ▼
Submit Quiz
  │
  ▼
Calculate Score
  │
  ▼
View Result
  │
  ├──────────────► Quiz History
  │
  └──────────────► Leaderboard
```

---

## 🛠️ Admin Workflow

```text
Admin Login
     │
     ▼
Admin Dashboard
     │
     ├──► Create Quiz
     │
     ├──► Add Questions
     │
     ├──► Manage Quiz Content
     │
     └──► Monitor Statistics
```

---

## 📊 Performance & Leaderboard

QuizMaster Pro allows users to review their quiz performance through:

* Quiz scores
* Previous attempts
* Quiz history
* Performance statistics
* Leaderboard rankings

This gives users a way to track their progress and compare their performance with other users.

---

## 📁 Project Structure

```text
Full_Stack_Quiz_Application/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   ├── layout/
│   │   │   ├── pages/
│   │   │   └── user/
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   │
│   │   ├── utils/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   │
│   └── package.json
│
├── admin/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   │
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   └── Login.js
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   └── Dashboard.js
│   │   │   │
│   │   │   └── quiz/
│   │   │       ├── AddQuiz.js
│   │   │       └── AddQuestion.js
│   │   │
│   │   ├── utils/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   │
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MySQL
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/abdullah123-collab/Full_Stack_Quiz_Application.git

cd Full_Stack_Quiz_Application
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=quiz_application
DB_PORT=3306

JWT_SECRET=your_jwt_secret

PORT=5000
NODE_ENV=development
```

Make sure MySQL is running and the required database is available.

Start the backend:

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

### 3. User Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create:

```text
frontend/.env
```

Add:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm start
```

User application:

```text
http://localhost:3000
```

### 4. Admin Panel Setup

Open another terminal:

```bash
cd admin
npm install
```

Create:

```text
admin/.env
```

Add:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the admin panel:

```bash
npm start
```

---

## 🔄 Run the Complete Application

The complete local development environment consists of three processes:

```text
Terminal 1
────────────────
backend/
npm run dev


Terminal 2
────────────────
frontend/
npm start


Terminal 3
────────────────
admin/
npm start
```

Application architecture:

```text
                 ┌─────────────────┐
                 │   User Browser  │
                 └────────┬────────┘
                          │
                          ▼
                 React Frontend
                          │
                          ▼
                    Express API
                          │
                          ▼
                         MySQL


                 ┌─────────────────┐
                 │  Admin Browser  │
                 └────────┬────────┘
                          │
                          ▼
                   React Admin
                          │
                          ▼
                    Express API
```

---

## 🧪 Production Build

### Build User Frontend

```bash
cd frontend
npm run build
```

### Build Admin Panel

```bash
cd admin
npm run build
```

---

## 📸 Screenshots

### User Application

Recommended screenshots:

* Home page
* Login / Registration
* Quiz interface
* Quiz result
* User profile
* Leaderboard

Example:

```markdown
![QuizMaster Pro Home](screenshots/home.png)
```

### Admin Dashboard

Recommended screenshots:

* Admin login
* Dashboard
* Quiz creation
* Question management

Example:

```markdown
![Admin Dashboard](screenshots/admin-dashboard.png)
```

---

## 🧩 Project Highlights

This project demonstrates practical experience with:

* Full-stack application architecture
* React development
* REST API development
* Node.js & Express
* MySQL database integration
* JWT authentication
* Password hashing
* Protected routes
* CRUD operations
* API integration
* React Context
* Admin dashboard development
* User management
* Quiz management
* Performance tracking

---

## 📌 Project Status

### ✅ Completed

QuizMaster Pro is a completed full-stack project containing:

* React user application
* React admin dashboard
* Node.js / Express backend
* MySQL database integration
* User authentication
* Admin authentication
* Quiz management
* Question management
* Quiz result handling
* Performance tracking
* Leaderboard functionality
* Production deployment

---

## 👨‍💻 Author

**Muhammad Abdullah**

🎓 BSCS Student
💻 Full-Stack Developer
🐍 Python Programmer
📊 Data Science & Machine Learning Enthusiast

### GitHub

[https://github.com/abdullah123-collab](https://github.com/abdullah123-collab)

---

## 📄 License

This project is licensed under the MIT License.

See the repository license file for details.

---

⭐ **QuizMaster Pro — Full-stack development, authentication, database integration, and interactive quiz management in one application.**

```
```

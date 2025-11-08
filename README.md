<h1 align="center">🚀 Full Stack Zerodha Application</h1> 

<p align="center">
  <b>A modern MERN stack project</b> integrating a secure backend, a responsive frontend, and a feature-rich dashboard.
  <br />
  Built with ❤️ using <b>MongoDB</b>, <b>Express.js</b>, <b>React</b>, and <b>Node.js</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React_19-blue?logo=react" />
  <img src="https://img.shields.io/badge/Backend-Express_5-green?logo=express" />
  <img src="https://img.shields.io/badge/Database-MongoDB-darkgreen?logo=mongodb" />
  <img src="https://img.shields.io/badge/UI-Material_UI-purple?logo=mui" />
  <img src="https://img.shields.io/badge/Build-Netlify-brightgreen?logo=netlify" />
</p>

---

## 🧩 Overview

This project is a full-stack **Zeroha Web Application** that combines a **public-facing frontend**, a **secure backend API**, and a **data visualization dashboard** for authenticated users.

### ✨ Key Highlights
- 🔐 **User Authentication** with Passport.js + JWT  
- 📊 **Dynamic Charts & Data Visualization** using Chart.js  
- ⚙️ **Modular Express API** with MongoDB Integration  
- 🧱 **Reusable React Components** (frontend + dashboard)  
- 🌐 **Netlify SPA Deployment** with custom redirects  

---

## 📁 Project Structure

```
root/
├── backend/        # Express.js API + MongoDB + Authentication
├── frontend/       # React frontend app (public SPA)
├── dashboard/      # React dashboard (authenticated users)
└── README.md
```

---

## 🧠 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React 19, React Router DOM 7, Axios, React Toastify, React Cookie |
| **Dashboard** | React 18, Material UI (MUI), Chart.js, React ChartJS 2 |
| **Backend** | Node.js, Express 5, MongoDB (Mongoose), Passport.js, JWT, BcryptJS |
| **Dev Tools** | Nodemon, Jest, React Testing Library |
| **Deployment** | Netlify (Frontend & Dashboard), Render/Railway (Backend) |

---

## 🛠️ Setup & Installation

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

#### Dashboard

```bash
cd ../dashboard
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside `/backend`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

If using Netlify, include a `netlify.toml` in `/frontend`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

And for API proxying:

```toml
[[redirects]]
  from = "/api/*"
  to = "https://your-backend-domain.com/:splat"
  status = 200
```

---

## 🚀 Running the Project

### Start Backend

```bash
npm run dev --prefix backend
```

### Start Frontend

```bash
npm start --prefix frontend
```

### Start Dashboard

```bash
npm start --prefix dashboard
```

Your backend will run on `http://localhost:5000`
Frontend/Dashboard will run on `http://localhost:3000` and `http://localhost:3001` (respectively).

---

## 🧪 Testing

### Backend

```bash
npm test --prefix backend
```

### Frontend / Dashboard

```bash
npm test --prefix frontend
```

---

## 🌐 Deployment

### 🖥️ Frontend / Dashboard

* Deployed on **Netlify**
* SPA routing handled via `_redirects` or `netlify.toml`

### ⚙️ Backend

* Can be deployed on **Render**, **Railway**, or **Vercel (serverless)**
* Update frontend `.env` with your API base URL:

```env
REACT_APP_API_URL=https://your-backend-domain.com/api
```

---

## 🧾 Available Scripts

| Command                           | Description                   |
| --------------------------------- | ----------------------------- |
| `npm run dev --prefix backend`    | Run backend in development    |
| `npm start --prefix frontend`     | Start frontend locally        |
| `npm start --prefix dashboard`    | Start dashboard locally       |
| `npm test --prefix backend`       | Run backend tests             |
| `npm run build --prefix frontend` | Build frontend for production |

---

## 📊 Dashboard Preview

> *(Optional: Add your screenshot or dashboard demo image here)*

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Dashboard+Preview" alt="Dashboard Preview" />
</p>

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to your fork (`git push origin feature-name`)
5. Submit a Pull Request 🎉

---

## 🪪 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Mahipal Singh**
<br/>
📎 [GitHub](https://github.com/singhmahipal) &nbsp; • &nbsp; 💼 [LinkedIn](https://www.linkedin.com/in/mahipalsingh7)

---

<p align="center">
  Made with 💙 using <b>MERN Stack</b> | Hosted on <b>Netlify</b>
</p>
```

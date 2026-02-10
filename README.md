# 🚀 EventPilot

EventPilot is a modern web application designed to simplify and streamline event management. With a robust Node.js/Express backend and a fast React (Vite) frontend, EventPilot offers seamless user authentication and a scalable foundation for building your next event platform.

---

## ✨ Features

- **User Registration:** Secure and efficient user registration system.
- **RESTful API:** Built with Express and MongoDB for scalable data management.
- **Modern Frontend:** Lightning-fast React app bootstrapped with Vite.
- **Environment Configuration:** Uses dotenv for secure config management.
- **CORS Support:** Easily connect your frontend and backend.
- **Developer Friendly:** Hot Module Reloading (HMR) and ESLint for productivity.

---

## ⚡ Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) instance or [MongoDB Atlas](https://www.mongodb.com/atlas)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/EventPilot.git
cd EventPilot
```

### 2. Backend Setup

```bash
cd backend
npm install
# or
yarn install
```

Create a `.env` file in `backend/` with the following content:

```
MONGO_URL=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
# or
yarn install
```

Start the frontend development server:

```bash
npm run dev
```

---

## 🚦 Usage

- Access the frontend at: [http://localhost:5173](http://localhost:5173)
- The backend runs by default on [http://localhost:5000](http://localhost:5000)
- Register a new user via the `/register` endpoint or through the frontend UI.

---

## 🤝 Contributing

Contributions are welcome!  
Please follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the [ISC License](./backend/package.json).

---

> Made with ❤️ for the developer community.

---

**Project Structure:**

```
EventPilot/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── dataBase.js
│   │   ├── controlls/
│   │   │   └── authController.js
│   │   ├── model/
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   └── authRoutes.js
│   │   └── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── index.html
│   ├── README.md
│   └── eslint.config.js
└── README.md
```

---

For any questions or suggestions, feel free to open an issue! 🚩

## License
This project is licensed under the **MIT** License.

---
🔗 GitHub Repo: https://github.com/SHARVESH-G/EventPilot
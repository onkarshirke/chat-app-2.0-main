# 🚀 Chat App 2.0

A full-stack, real-time chat application built with React (frontend) and Node.js + Express (backend). It supports group chats, file and media sharing, user authentication, and features a clean, responsive design.

---

## 📸 Deployed Screenshots

<p align="center">
  <img src="https://github.com/onkarshirke/chat-app-2.0-main/raw/main/deployss/chata.png" alt="Chat App - Home" width="300" />
  <img src="https://github.com/onkarshirke/chat-app-2.0-main/raw/main/deployss/chatb.png" alt="Chat App - Chat Window" width="300" />
  <img src="https://github.com/onkarshirke/chat-app-2.0-main/raw/main/deployss/chatc.png" alt="Chat App - Media Upload" width="300" />
</p>

---

## 🧩 Key Features

* 💬 Real-time messaging: Supports one-on-one and group chats powered by Socket.io
* 📎 Media sharing: Easily send images and files
* ✅ Read receipts & typing indicators for better UX
* 🔐 JWT-based authentication & secure profile management
* 🎨 Clean, mobile-first UI using Tailwind CSS
* 🚀 Scalable backend using Node.js + Express and Multer for uploads

---

## ⚙️ Tech Stack

* **Frontend:** React + Vite, Tailwind CSS
* **Backend:** Node.js, Express, Socket.io
* **Database:** MongoDB
* **File Uploads:** Handled via Multer
* **Deployment:** Vercel (frontend) + Heroku/Railway (backend)

---

## 📂 Project Structure

```
chat-app-2.0-main/
├── client/           # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── styles/
└── server/           # Node.js backend
    ├── controllers/
    ├── models/
    ├── routes/
    └── utils/
```

---

## ⚡ Setup & Run Locally

1. **Clone the repo**
   `git clone https://github.com/onkarshirke/chat-app-2.0-main.git && cd chat-app-2.0-main`

2. **Backend Setup**

   ```bash
   cd server
   npm install
   cp .env.example .env   # add MONGO_URI, JWT_SECRET
   npm run dev            # runs on http://localhost:4000
   ```

3. **Frontend Setup**

   ```bash
   cd ../client
   npm install
   npm run dev            # runs on http://localhost:3000
   ```

---

## 🚀 Deployment Workflow

1. Push the monorepo to GitHub
2. Deploy **server** to Heroku or Railway with environment variables (MONGO\_URI, JWT\_SECRET)
3. Deploy **client** to Vercel with API\_BASE\_URL pointing to backend
4. Ensure Socket.io connects securely in production

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or PRs for bug fixes, feature ideas, or enhancements. For major changes, open an issue first.

---

## 📄 License

MIT License. See the [LICENSE](LICENSE) file for details.

---


Here's a polished, non–code‑box GitHub README for your Chat App 2.0 repo, complete with a screenshots section using your provided image links.

---

# 🚀 Chat App 2.0

A modern, full-stack real-time chat application built with React (client) and Node.js + Express (server). Features include group chats, multimedia support, user authentication, and a responsive, mobile-first UI.

---

## 📸 Deployed Screenshots

<p align="center">
  <img src="https://github.com/onkarshirke/chat-app-2.0-main/raw/main/screenshots/chat-home.png" alt="Home View" width="300" />
  <img src="https://github.com/onkarshirke/chat-app-2.0-main/raw/main/screenshots/chat-window.png" alt="Chat Window" width="300" />
  <img src="https://github.com/onkarshirke/chat-app-2.0-main/raw/main/screenshots/media-upload.png" alt="Media Upload" width="300" />
</p>

---

## 🧩 Key Features

* 💬 **Real-time chat**: One-to-one and group messaging powered by Socket.io.
* 🖼️ **Media sharing**: Send images and files seamlessly.
* ✅ **Read receipts & typing indicators**: Know when others are reading or typing.
* 🛡️ **User authentication**: Secure JWT-based login and profile handling.
* 🎨 **Responsive UI**: Built with Tailwind CSS for sleek, adaptive design.
* 🔒 **Secure backend**: Node.js + Express server with structured API routes and file handling via Multer.

---

## ⚙️ Tech Stack

| Layer       | Tech Stack                                  |
| ----------- | ------------------------------------------- |
| Frontend    | React + Vite, Tailwind CSS                  |
| Backend     | Node.js, Express, Socket.io                 |
| Database    | MongoDB                                     |
| File Upload | Multer                                      |
| Deployment  | Vercel (frontend), Heroku/Railway (backend) |

---

## ⚡ Setup Instructions

1. **Clone the repo**

   ```
   git clone https://github.com/onkarshirke/chat-app-2.0-main.git
   cd chat-app-2.0-main
   ```

2. **Backend Setup**

   * Navigate to the server folder:
     `cd server`
   * Install dependencies:
     `npm install`
   * Copy `.env.example` to `.env` and fill in your MongoDB URI and JWT\_SECRET.
   * Start the server:
     `npm run dev`
   * Backend runs on: `http://localhost:4000`

3. **Frontend Setup**

   * Navigate to the client folder:
     `cd ../client`
   * Install dependencies:
     `npm install`
   * Start the frontend server:
     `npm run dev`
   * Frontend runs on: `http://localhost:3000`

---

## 🗂️ Project Structure

```
chat-app-2.0-main/
├── client/         # React + Tailwind UI
└── server/         # Node.js API + Socket.io logic
    ├── controllers
    ├── routes
    ├── models
    └── utils
```

---

## 🚀 Deployment Guide

1. Push the repo to GitHub.
2. Deploy **server** to Heroku or Railway and set environment variables (MONGO\_URI, JWT\_SECRET).
3. Deploy **client** to Vercel, pointing API base URL to your backend.
4. Enable Socket.io realtime in production.

---

## 🤝 Contribution

Contributions are always welcome!
Open issues or submit pull requests. For major changes, please open an issue first to discuss your ideas.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

Need help embedding the actual screenshot links or integrating Docker? Just let me know—I can update this further!

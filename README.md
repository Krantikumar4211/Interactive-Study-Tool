📘 **Interactive Study Tool**

An AI-inspired full-stack educational web application that enables interactive teacher–student dialogue and displays summarized learning content from videos.
This project demonstrates frontend–backend integration, API handling, and a clean UI for learning tools.

---

🚀 **Features**

🧠 Teacher–Student Dialogue

Ask questions and receive intelligent responses

Simulates an interactive learning assistant
---

🎥 **Video Summaries Section**

Displays summarized learning points for videos

Handles empty and loaded states gracefully

---

🎨 **Professional UI**

Clean card-based layout

Responsive design using custom CSS

🔗 Frontend–Backend Integration

React (Vite) frontend

Flask backend with REST APIs
---
🛠️ **Tech Stack**

Frontend

React.js (Vite)

JavaScript (ES6)

CSS (custom index.css)

Fetch API

Backend

Python

Flask

Flask-CORS

---

📂 **Project Structure**

```
interactive-study-tool/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── VideoSummary.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── services/
│   │   ├── qa_engine.py
│   │   └── video_summary.py
│   └── requirements.txt
│
└── README.md
```

⚙️ **Setup Instructions**

1️⃣ Backend Setup

cd backend

python -m venv .venv

source .venv/bin/activate   # Windows: .venv\Scripts\activate

pip install -r requirements.txt

python app.py


Backend runs on:

http://localhost:5000

2️⃣ Frontend Setup

cd frontend

npm install

npm run dev

Frontend runs on:

http://localhost:5173
---
🔗 API Endpoints

Method	Endpoint	Description

GET	/health	Backend health check

POST	/ask	Question–answer interaction

GET	/video-summary	Fetch video summaries
---


👤 Author

Krantikumar Dilip Patil

AI & Data Science Engineer

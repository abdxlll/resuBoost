# ResuBoost

**AI-powered Resume Enhancer using React, Express, and OpenAI GPT-4o**

ResuBoost helps job seekers improve their resumes by analyzing the content and providing smart suggestions on clarity, impact, wording, and completeness. Easily copy or download the AI-generated suggestions as a PDF.

---

## 🚀 Features

- Paste your resume and get AI-powered improvement suggestions.
- Suggestions rendered beautifully with Markdown.
- Download suggestions as PDF.
- Fullstack app: React frontend + Express backend + OpenAI API.

---

## 🚀 Live Demo

🎉 **Try it here → [https://resu-boost.vercel.app](https://resu-boost.vercel.app)**

✅ Paste your resume  
✅ Get AI-powered suggestions  
✅ Download them as PDF

---

## 🛠️ Tech Stack

- **Frontend:** React + TailwindCSS + React-Markdown + jsPDF
- **Backend:** Node.js + Express + OpenAI API
- **AI Model:** OpenAI GPT-4o

---

## 📦 Getting Started (for local development)

### Prerequisites

- Node.js installed on your machine

### Installation

Clone the repository:
  ```bash
  git clone https://github.com/yourusername/resuBoost.git
  cd resuBoost
  ```

Install Frontend
  ```bash
  npm install
  npm start
  ```
Frontend will run on http://localhost:3000

Install Backend
  ```bash
  cd ../backend
  npm install
  ```

Create a .env file inside /backend:
  ```env
  OPENAI_API_KEY=your_openai_key_here
  ```

Run backend server:
  ```bash
  node server.js
  ```

---

## 📤 Deployment

- **Frontend:**  LIVE on Vercel: https://resu-boost.vercel.app
- **Backend:** LIVE on Render: https://resuboost.onrender.com

The frontend is already configured to use the live backend URL → no changes needed.


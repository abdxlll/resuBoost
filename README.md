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

## 🛠️ Tech Stack

- **Frontend:** React + TailwindCSS + React-Markdown + jsPDF
- **Backend:** Node.js + Express + OpenAI API
- **AI Model:** OpenAI GPT-4o

---

## 📦 Getting Started

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
Frontend will run on http://localhost:3000 and backend on http://localhost:3001.

---

## 📤 Deployment

- **Frontend:** Deploy to Vercel or Netlify (easy for React apps).
- **Backend:** Deploy to Render or Railway (free/affordable Node.js hosting).

Make sure to set environment variable OPENAI_API_KEY on your backend host.

Update frontend API endpoint (currently localhost:3001) to point to your deployed backend URL.


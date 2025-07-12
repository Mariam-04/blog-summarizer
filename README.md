# 🧠 Blog Summarizer

A web app that uses OpenAI's GPT model to summarize long blog posts into concise summaries. Built with **Next.js**, styled using **Tailwind CSS**, and powered by the **OpenAI API**.

---

## 🚀 Features

- 📋 Paste any blog or article text
- ⚡ One-click summary using GPT-3.5
- 💾 Optional MongoDB integration (for saving summaries)
- 🎨 Clean and responsive UI with gradient background

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI API](https://platform.openai.com/)
- (Optional) MongoDB with Mongoose

---

## 📦 Installation

### 1. Clone the repo

git clone https://github.com/your-username/blog-summarizer.git
cd blog-summarizer

### 2. Install dependencies
npm install

### 3. Set up environment variables
Create a .env.local file in the root:
OPENAI_API_KEY=your-openai-api-key-here

### 4. Run the development server
npm run dev
Visit http://localhost:3000


### Example Prompt
Paste this to test:

Artificial intelligence, blockchain, and remote work tools are shaping the future. Companies that adapt to these trends will thrive...

### Folder Structure

blog-summarizer/
├── pages/
│   ├── api/
│   │   └── summarize.js
│   └── index.js

├── styles/
│   └── globals.css

├── public/
│   └── (any images like screenshot.png)

├── .env.local

├── package.json

├── tailwind.config.js

├── postcss.confi

├─ .env.local

├─ package.json

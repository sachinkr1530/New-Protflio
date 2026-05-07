# Sachin Kumar Thakur — Developer Portfolio

A premium, modern developer portfolio with futuristic UI, advanced animations, and full-stack architecture.

## 🚀 Tech Stack

### Frontend
- **React.js** — Component architecture
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Fluid animations & transitions
- **React Type Animation** — Typewriter role effects
- **React CountUp** — Animated counters
- **React Icons** — Icon library
- **Axios** — API requests

### Backend
- **Node.js + Express.js** — REST API
- **MongoDB + Mongoose** — Database & ODM
- **Nodemailer** — Email notifications
- **Express Validator** — Input validation
- **Helmet + Rate Limiting** — Security

---

## 📁 Folder Structure

```
portfolio/
├── client/                     # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Loader.jsx
│   │   │   ├── Cursor.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── SectionWrapper.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Leadership.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── server/                     # Express backend
    ├── models/
    │   └── Contact.js
    ├── controllers/
    │   └── contactController.js
    ├── routes/
    │   └── contact.js
    ├── middleware/
    │   └── errorHandler.js
    ├── server.js
    ├── .env.example
    └── package.json
```

---

## ⚙️ Setup & Installation

### 1. Clone & Install

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env` in the `server/` folder:

```bash
cp .env.example .env
```

Fill in:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=your-email@gmail.com
CLIENT_URL=http://localhost:3000
```

> For Gmail: Enable 2FA → Generate an **App Password** at myaccount.google.com/apppasswords

### 3. Run Development Servers

```bash
# Terminal 1 — Backend
cd server
npm run dev

# Terminal 2 — Frontend
cd client
npm start
```

Frontend: http://localhost:3000  
API: http://localhost:5000

---

## 🎨 Features

| Feature | Details |
|---|---|
| **Loader Animation** | Animated counter progress + shimmer logo |
| **Custom Cursor** | Dot + ring with magnetic lag effect |
| **Scroll Progress** | Neon gradient top bar |
| **Particle Network** | Canvas-based animated particle background |
| **Type Animation** | Cycling role titles with cursor blink |
| **Timeline Experience** | Alternating left/right animated cards |
| **Skill Progress Bars** | Animated bars triggered on scroll |
| **Project Cards** | Glow hover, tech badges, live/GitHub links |
| **Animated Counters** | Stats animated when in viewport |
| **Glassmorphism** | Consistent glass card system |
| **Contact Form** | Validated form → MongoDB + email notification |
| **Rate Limiting** | 5 messages/hour per IP |
| **Responsive** | Mobile-first Tailwind layout |

---

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd client
npm run build
# Deploy /build folder to Vercel
```

### Backend (Railway / Render)
```bash
# Set environment variables in dashboard
# Deploy server/ folder
# Update REACT_APP_API_URL in client .env.production
```

### MongoDB
Use **MongoDB Atlas** (free tier) for production:
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
```

---

## ✏️ Customization

- **Personal info**: Update `Hero.jsx`, `About.jsx`, `Contact.jsx`
- **Resume**: Replace `alert()` in Navbar/Hero with your PDF URL
- **GitHub/LinkedIn URLs**: Search `https://github.com` / `https://linkedin.com` and replace
- **Colors**: Modify `tailwind.config.js` accent/glow colors
- **Projects**: Add more objects to the `projects` array in `Projects.jsx`

---

## 📄 License

MIT — feel free to fork and customize.

---

Built with 💙 by **Sachin Kumar Thakur**

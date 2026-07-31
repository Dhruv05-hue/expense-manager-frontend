# 💰 Expense Manager Frontend

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Axios](https://img.shields.io/badge/Axios-API-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

A modern and responsive frontend for the **Expense Manager** application built with **React** and **Vite**.

The application enables users to securely manage expenses, organize trips, upload receipts, analyze spending through interactive dashboards, and export reports in PDF and Excel formats.

---

# 📑 Table of Contents

- Features
- Tech Stack
- Folder Structure
- Installation
- Environment Variables
- Available Scripts
- Project Highlights
- Future Improvements
- Contributing
- License
- Author

---

# ✨ Features

## 🔐 Authentication

- User Registration
- Login
- OTP Verification
- Forgot Password
- Reset Password
- JWT Authentication

---

## 👤 User Profile

- View Profile
- Update Profile
- Change Password
- Delete Account

---

## 💸 Expense Management

- Add Expense
- Edit Expense
- Delete Expense
- View Expense Details
- Upload Expense Receipts
- Search Expenses
- Filter Expenses
- Sort Expenses
- Pagination

---

## ✈️ Expense Trips

- Create Trip
- Update Trip
- Delete Trip
- View Trips
- Associate Expenses with Trips
- Trip Dashboard

---

## 📊 Dashboard

- Total Expenses
- Total Expense Amount
- Highest Expense
- Average Expense
- Monthly Expense Chart
- Category Distribution Chart
- Recent Expenses

---

## 📄 Reports

- Export Expenses to PDF
- Export Expenses to Excel

---

## 🎨 UI Features

- Fully Responsive Design
- Protected Routes
- Modern Dashboard
- Loading States
- Error Handling
- Toast Notifications
- Debounced Search
- Reusable Components

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|-------------|
| Framework | React |
| Build Tool | Vite |
| Routing | React Router DOM |
| HTTP Client | Axios |
| Charts | Chart.js |
| PDF Export | jsPDF |
| Excel Export | xlsx |
| Styling | CSS3 |
| Authentication | JWT |

---

# 📁 Folder Structure

```text
expense-manager-frontend/
│
├── public/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Dhruv05-hue/expense-manager-frontend.git
```

Navigate into the project

```bash
cd expense-manager-frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_API_URL= https://your-backend-api.onrender.com
```

Start the development server

```bash
npm run dev
```

---

# 🔐 Environment Variables

| Variable | Description |
|-----------|-------------|
| VITE_API_URL | Backend API Base URL |

---

# 📜 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Builds the application for production.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint.

---

# 🌟 Project Highlights

- React + Vite Architecture
- Responsive User Interface
- JWT Authentication
- OTP Verification
- Expense & Trip Management
- Dashboard Analytics
- Receipt Upload Support
- Search, Filter & Sorting
- PDF & Excel Export
- Protected Routes
- Reusable Components
- API Integration using Axios

---

# 🚀 Future Improvements

- Dark Mode
- Multi-language Support
- Progressive Web App (PWA)
- Accessibility Enhancements
- Offline Support
- Theme Customization

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Dhruv**

Backend Developer | AI & Machine Learning Enthusiast

⭐ If you found this project useful, consider giving it a star on GitHub.
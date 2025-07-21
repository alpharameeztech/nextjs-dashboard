# 📊 Next.js Dashboard Application

![Invoices Screenshot](/public/dashboard.png) |


This is a modern **dashboard web app** built with [Next.js](https://nextjs.org/). The application displays **customer data**, **invoices**, and **statistics**, including dynamic charts and tables — ideal for extending into any custom dashboard or admin tool.

🔗 [Live Demo](https://nextjs-dashboard-ww9r-1ysuldaxc-krameez56-gmailcoms-projects.vercel.app/)

---

### 🔐 Login Credentials

**Email:** `user@nextmail.com`  
**Password:** `123456`

---

## ✨ Features

- 🧑‍💼 **Customer Management View**
- 📄 **Invoice Overview**
- 📈 **Interactive Graphs & Charts** for key metrics
- ⚡ Server-side rendering and dynamic routing
- 🎨 Styled with Tailwind CSS
- 🧱 Powered by Prisma + PostgreSQL
- ✅ Clean layout with reusable components
- 🧪 Built-in linting and formatting

---

## 📸 Screenshots

| Login | Landing | Dashboard | Invoices |
|-------|---------|-----------|----------|
| ![Login Screenshot](/public/login.png) | ![Landing Screenshot](/public/landing.png) | ![Dashboard Screenshot](/public/dashboard.png) | ![Invoices Screenshot](/public/invoices.png) |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/docs)
- **Database:** [PostgreSQL](https://www.postgresql.org/) hosted on [Vercel](https://vercel.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** [Chart.js](https://www.chartjs.org/) or [Recharts](https://recharts.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone [repo link]
cd <your-repo>

yarn install
# or
npm install

## .env file
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

# Authentication
AUTH_SECRET=<your_generated_secret_key>
AUTH_URL=http://localhost:3000/api/auth

## To generate a secure AUTH_SECRET, run:
openssl rand -base64 32
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

# Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Install dependencies
yarn install
# or
npm install

# Create a .env file in the root directory and add the following:

### PostgreSQL connection strings
POSTGRES_URL="postgres://<USER>:<PASSWORD>@<HOST>:5432/<DATABASE>"
POSTGRES_PRISMA_URL="postgresql://<USER>:<PASSWORD>@<HOST>:5432/<DATABASE>?schema=public"
POSTGRES_URL_NON_POOLING="postgresql://<USER>:<PASSWORD>@<HOST>:5432/<DATABASE>?schema=public&pooling=false"
POSTGRES_USER=<your_postgres_user>
POSTGRES_HOST=<your_postgres_host>
POSTGRES_PASSWORD=<your_postgres_password>
POSTGRES_DATABASE=<your_database_name>

### Authentication
AUTH_SECRET=<your_generated_secret_key>
AUTH_URL=http://localhost:3000/api/auth

# To generate a secure AUTH_SECRET, run the following command in your terminal:
openssl rand -base64 32
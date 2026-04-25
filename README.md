🛒 The Raze Store – Multi-Vendor E-commerce Platform (In Progress)

A full-stack multi-vendor e-commerce platform inspired by Amazon, built using the MERN stack.
The platform enables customers, sellers, and admins to interact through a scalable, secure, and feature-rich ecosystem.

🚀 Features
👤 Customer Experience
Secure OTP-based authentication (passwordless login using NodeMailer)
Advanced product filtering (category, price, discounts)
Real-time cart & wishlist management
Seamless checkout with Razorpay (India) and Stripe (International)
🏪 Seller Ecosystem
Interactive dashboard with revenue analytics (daily, weekly, monthly)
Full product & inventory management (CRUD operations)
Order lifecycle tracking (pending → delivered)
🛡️ Admin Panel
Vendor moderation system (verify, suspend, ban sellers)
Dynamic homepage & banner management
Coupon and promotion engine with validation rules
⚡ Ongoing Work
Developing an AI-powered chatbot for product assistance and recommendations
🛠️ Tech Stack

Frontend: React.js (Vite), Tailwind CSS, Material UI
State Management: Redux Toolkit
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Authentication: JWT, NodeMailer (OTP)
Payments: Razorpay, Stripe
Media Storage: Cloudinary

📁 Project Structure
/frontend   → React application (Admin, Seller, Customer views)
/backend    → Express server (APIs, business logic)
/common     → Shared utilities and components
⚙️ Setup Instructions
🔹 1. Prerequisites
Node.js
MongoDB Atlas
Cloudinary account
🔹 2. Backend Setup
cd backend
npm install

Create a .env file and add:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
EMAIL_PASS=your_app_password
RAZORPAY_KEY=your_key
CLOUDINARY_URL=your_url
GEMINI_API_KEY=your_api_key

Run the backend server:

npm run dev
🔹 3. Frontend Setup
cd frontend
npm install
npm run dev

Open in browser:
👉 http://localhost:5173

📌 Future Improvements
AI chatbot integration
Performance optimization
Deployment (AWS / Vercel)
⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

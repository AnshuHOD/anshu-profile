# 🎂 Hooda's Bakery — Full-Stack AI-Powered Order Automation & CRM System

A production-grade, highly automated e-commerce web application designed for a modern bakery and cafe. This project eliminates manual order collection overhead by utilizing **Generative AI** for conversational ordering, implementing a **smart address parsing engine**, and integrating **live CRM logging** with automatic payment checkout routing.

---

## 🚀 Live Demos
* **Customer Landing Page**: [https://hoodas-bakery.vercel.app](https://hoodas-bakery.vercel.app)
* **Admin Dashboard**: [https://hoodas-bakery-admin.vercel.app](https://hoodas-bakery-admin.vercel.app)

---

## 🛠️ The Tech Stack

* **Frontend**: HTML5, Vanilla CSS3 (Custom Glassmorphism theme, CSS Variables layout), Vanilla JavaScript (ES6+).
* **Admin Dashboard**: ReactJS (Vite framework), Axios, Tailwind CSS, React-Router-DOM.
* **Backend Server**: Node.js, Express.js.
* **Database**: MongoDB Atlas cloud instance with Mongoose schemas.
* **Integrations & APIs**:
  * **Google Gemini AI API** (`gemini-3.1-flash-lite`) powering chatbot logic.
  * **Razorpay Payment Gateway** SDK (Sandbox environment).
  * **Gmail SMTP SMTP Transport** (Nodemailer) for automated invoices/alerts.

---

## ✨ Key Features & Solutions Implemented

### 1. 🧠 Smart BakeBot (Generative AI Chatbot)
* **Context Retention (40-Message Memory)**: Solved short-memory issues by extending conversational logs to 40 messages, preventing duplicate question loops.
* **Multi-lingual Fluidity**: Supports seamless code-switching between English, Hindi, Hinglish, and Punjabi based on customer input.
* **Conversational Form Filling**: Step-by-step info gathering (Item, Phone, Email, Address, Time Slot) which translates raw chat details into a structured JSON database payload.

### 2. 📍 Regex-Based Address Auto-Parser
* **The Problem**: Chatbot captures unstructured address lines (e.g. *"Village Roorkee, near Gandanath temple, Rohtak 124401"*), whereas the payment checkout page requires separate `Street`, `City`, and `Pincode` fields.
* **The Solution**: Wrote a robust JavaScript regex parser on the frontend checkout page that dynamically:
  * Extracts any 6-digit number as the Pincode.
  * Extracts city keywords (defaulting to *"Rohtak"*).
  * Cleans trailing dashes, commas, and spaces to cleanly populate the *"Street Address"* field.

### 3. 💬 CRM & Instant WhatsApp Funnel
* **Lead Generation Log**: Clicking *"Connect on WhatsApp"* displays a modal asking for the visitor's mobile number, logging a CRM lead immediately, and redirecting them to a pre-filled WhatsApp text chat.
* **Admin Email Alerts**: Dispatches automated email notifications to the admin when a new WhatsApp lead or Chatbot booking is logged.
* **Website Auto-Note (Toast Popup)**: Triggers a beautiful slide-up success alert on the screen after redirecting.

### 4. 💳 Secure Payment Checkout & Automatic Invoicing
* Customer receives a booking request email containing a button link that routes them to the checkout page with pre-filled forms.
* Checkout triggers the Razorpay popup. Upon validation, the backend updates the order status to `'received'` (marking it paid in the database) and immediately emails the customer their PDF/HTML invoice.

### 5. 📊 Live React Admin Panel
* **JWT-Secure Portal**: Secured with token authentication.
* **Operational Dashboard**: Allows real-time order status tracking, viewing CRM leads by source channels (`website`, `whatsapp`), reading guest reviews, and dynamic menu item toggling.

---

## 🎨 Visual Design Aesthetics
* **Theme**: Cream, warm beige, and teal/navy accents reflecting a premium cafe brand.
* **UX Highlights**: Glassmorphic review cards, glowing badges, smooth micro-animations, and clean, responsive layouts optimized for mobile and desktop screens.

---

## 📈 Learnings & Deliverables
* Mastered prompt engineering inside Node.js using system instructions for strict JSON payload structures.
* Implemented production-level CORS setups, secure environment variables configuration, and SMTP mailing configurations.
* Designed an automated pipeline that connects user chat sessions to live database entities and secure checkout workflows.

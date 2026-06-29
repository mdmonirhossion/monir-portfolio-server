# 🌟 Portfolio Backend Server - Md Monir Hossion

Node.js/Express backend API for the portfolio project management system. Provides RESTful endpoints for managing portfolio projects, coursework, and resume link management with MongoDB integration.

## 🌐 Live API

**Base URL:** [https://monir-portfolio-server.vercel.app](https://monir-portfolio-server.vercel.app)  
**Portfolio Website:** https://monir-portfolio-three.vercel.app

## ✨ Features

- **RESTful API:** Complete CRUD operations for portfolio projects, coursework, and resume link.
- **MongoDB Integration:** Scalable NoSQL database with proper collections (`projects`, `coursework`, `resume`).
- **Input Validation:** Comprehensive request validation and error handling.
- **CORS Support:** Cross-origin resource sharing enabled for frontend integration.
- **Admin Security:** Protected write operations (POST, PUT, DELETE) restricted to admin email (`mdmonirhossion2002@gmail.com`).
- **Nodemailer Integration:** Handles contact form submissions and sends emails securely via Gmail App Passwords.
- **Environment Configuration:** Secure environment variable management using `.env` file.

## 🛠️ Technology Stack

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL document database
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable loader
- **Nodemailer** - Mail sender module

## 📁 Project Structure

```
Server/
├── index.js          # Main server file with all routes and middleware
├── package.json      # Dependencies and scripts
├── README.md         # This file
└── .env             # Environment variables (git-ignored for security)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm package manager

### Installation

1. **Navigate to server directory**
   ```bash
   cd Portfolio_Monir_Server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI="your_mongodb_connection_string"
   EMAIL_USER="mdmonirhossion2002@gmail.com"
   EMAIL_PASS="your_gmail_app_password"
   ```

4. **Start the server**
   ```bash
   # Development (with nodemon auto-restart)
   npm run dev
   
   # Production
   npm start
   ```

5. **Verify installation**
   Open `http://localhost:5000` in your browser. It should return:
   ```json
   {
       "message": "Portfolio Server is Running....",
       "status": "active"
   }
   ```

## 📝 API Documentation

### Base URL (Development)
```
http://localhost:5000/api
```

### Authentication
- Admin write/modify operations require admin email verification.
- Admin email: `mdmonirhossion2002@gmail.com`

### Endpoints

#### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Server health status |

#### Projects Management
| Method | Endpoint | Description | Admin Only |
|--------|----------|-------------|------------|
| GET | `/api/projects` | Get all projects | No |
| GET | `/api/projects/featured` | Get featured projects only | No |
| GET | `/api/projects/:id` | Get single project by ID | No |
| POST | `/api/projects` | Create a new project | Yes |
| PUT | `/api/projects/:id` | Update an existing project | Yes |
| DELETE | `/api/projects/:id` | Delete a project | Yes |

#### Coursework Management
| Method | Endpoint | Description | Admin Only |
|--------|----------|-------------|------------|
| GET | `/api/coursework` | Get all coursework | No |
| POST | `/api/coursework` | Add new coursework | Yes |
| PUT | `/api/coursework/:id` | Update coursework | Yes |
| DELETE | `/api/coursework/:id` | Delete coursework | Yes |

#### Resume Link Management
| Method | Endpoint | Description | Admin Only |
|--------|----------|-------------|------------|
| GET | `/api/resume` | Get current resume link | No |
| PUT | `/api/resume` | Create or update resume link | Yes |

#### Contact Submission
| Method | Endpoint | Description | Admin Only |
|--------|----------|-------------|------------|
| POST | `/api/contacts` | Send contact form email | No |

---

## 📊 Database Schema

### Projects Collection (`portfolioDB.projects`)
```javascript
{
  _id: ObjectId,                    // Auto-generated MongoDB ID
  title: String,                    // Required - Project title
  description: String,              // Required - Project description
  image: String,                    // Required - Main image URL
  images: Array<String>,            // Optional - Additional images URLs
  clientSourceCode: String | null,  // Optional - Frontend source code URL
  serverSourceCode: String | null,  // Optional - Backend source code URL
  liveLink: String | null,          // Optional - Live demo URL
  liveVideoUrl: String | null,      // Optional - Demo video URL
  isFeatured: Boolean,              // Featured status (default: false)
  tags: Array<String>,              // Array of technology tags
  createdAt: Date,                  // Auto-generated timestamp
  updatedAt: Date                   // Auto-updated timestamp
}
```

### Coursework Collection (`portfolioDB.coursework`)
```javascript
{
  _id: ObjectId,                    // Auto-generated MongoDB ID
  title: String,                    // Required - Course title
  status: String,                   // Status ('Completed', 'Ongoing', 'Upcoming')
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 Security Features

- **Input Sanitization**: All inputs are trimmed and validated before database interaction.
- **Environment Variables**: Sensitive connection details and emails are stored in `.env`.
- **CORS Configured**: Cross-Origin Request parameters restrict unauthorized origin connections.
- **Admin Verification**: Sensitive write/update API operations check for the admin email `mdmonirhossion2002@gmail.com`.

---

## 👤 Developer

**Md Monir Hossion**
- GitHub: [@mdmonirhossion](https://github.com/mdmonirhossion)
- LinkedIn: [mdmonirhossion](https://www.linkedin.com/in/mdmonirhossion/)
- Email: mdmonirhossion2002@gmail.com
- Contact: +8801770183572

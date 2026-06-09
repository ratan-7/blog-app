# 🎥 Vlogify

Vlogify is a full-stack vlog sharing platform where users can create, upload, and explore vlogs. It provides a modern and responsive user interface along with authentication and image upload functionality.

## 🚀 Features

* User Registration & Login
* JWT Authentication
* Create New Vlogs
* Upload Thumbnail Images
* View All Vlogs
* Read Full Vlog Details
* Responsive Design
* Protected Routes
* Modern Dark Theme UI

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* JWT Authentication

## 📂 Project Structure

```bash
BLOG-APPS/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   └── server.js
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd Vlogify
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000/api
```

Start frontend:

```bash
npm run dev
```

## 📸 Screenshots

Add project screenshots here after deployment.

## 🔮 Future Improvements

* Search Functionality
* Like & Comment System
* User Profiles
* Edit/Delete Posts
* Categories & Tags
* Cloudinary Image Upload
* Infinite Scrolling
* Notifications

## 👨‍💻 Author

**Ratan Mahata**

B.Tech Information Technology Student

## 📄 License

This project is created for learning and portfolio purposes.

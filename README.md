[README (1).md](https://github.com/user-attachments/files/22988460/README.1.md)
# 📁 File Management REST API

A **secure RESTful API** built with **Node.js**, **Express**, and **MongoDB** for managing file uploads, downloads, updates, and deletions.  
It uses **Multer** for file handling, **Helmet** for security, and **CORS** for cross-origin access.

---

## 🚀 Features

✅ Upload files to the server  
✅ List all uploaded files  
✅ Download files by ID  
✅ Update file names  
✅ Delete files safely from disk and database  
✅ Secure headers with **Helmet**  
✅ Graceful shutdown with MongoDB disconnection  
✅ Environment configuration via `.env`  

---

## 🏗️ Project Structure

```
project/
│
├── controllers/
│   └── file.js
│
├── middlewares/
│   └── fileUpload.js
│
├── models/
│   └── file.js
│
├── routes/
│   └── file.js
│
├── databases/
│   └── db.js
│
├── uploads/
│   └── (uploaded files)
│
├── app.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/file-management-api.git
cd file-management-api
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create a `.env` file
```env
PORT=5000
MONGO_URI=mongodb+srv://yourMongoURI
```

### 4️⃣ Start the server
```bash
npm start
```

Server will run at:  
👉 **http://localhost:5000**

---

## 📡 API Endpoints

### **Base URL:** `/api`

| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| POST   | `/upload`            | Upload a new file           |
| GET    | `/files`             | Get all uploaded files      |
| GET    | `/download/:fileId`  | Download a file by ID       |
| PUT    | `/update/:fileId`    | Update file name            |
| DELETE | `/delete/:fileId`    | Delete a file by ID         |

---

## 🧩 Example Requests

### ➕ Upload a File
```bash
POST /api/upload
Content-Type: multipart/form-data
Body:
  file: <choose file>
```

**Response:**
```json
{
  "message": "File uploaded successfully",
  "file": {
    "_id": "670fc3e1d87a92bbcc10a98a",
    "originalName": "example.pdf",
    "fileType": "application/pdf",
    "path": "uploads/example.pdf",
    "size": 234567
  }
}
```

### 🧾 Get All Files
```bash
GET /api/files
```

### ⬇️ Download File
```bash
GET /api/download/:fileId
```

### ✏️ Update File Name
```bash
PUT /api/update/:fileId
Content-Type: application/json

{
  "originalName": "new-filename.pdf"
}
```

### ❌ Delete File
```bash
DELETE /api/delete/:fileId
```

---

## 🔒 Security & Best Practices

- **Helmet** secures HTTP headers  
- **CORS** allows safe API access across origins  
- Proper **error handling** and status codes  
- Graceful shutdown on `SIGINT` and `SIGTERM`  
- Files stored safely under `/uploads` directory  

---

## 🧠 Future Improvements

- Add PDF compression middleware  
- File type and size validation  
- JWT authentication and user-based file ownership  
- Cloud storage integration (AWS S3, Cloudinary, etc.)  
- Unit testing using Jest  

---

## 👨‍💻 Author

**Ally A. Ngonyani**  
📧 ally.a.ngonyany36@gmail.com  
💻 https://github.com/allyosman)


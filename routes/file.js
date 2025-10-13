const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");
const multer = require("multer");

const {
  getAllFiles,
  fileUpload,
  fileDelete,
  fileDownload,
  fileUpdate,
} = require("../controllers/file");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "/uploads";
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

//POST:api/upload
router.post("/upload", upload.single("file"), fileUpload);

//GET:api/files
router.get("/files", getAllFiles);

//GET:api/download
router.get("/download", fileDownload);

//PUT:api/update/:fileId
router.put("/update/:fileId", fileUpdate);

//PUT:api/delete/:fileId
router.delete("/delete/:fileId", fileDelete);

module.exports = router;

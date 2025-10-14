const express = require("express");
const router = express.Router();

const upload = require("../utils/file");

const {
  getAllFiles,
  fileUpload,
  fileDelete,
  fileDownload,
  fileUpdate,
} = require("../controllers/file");

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

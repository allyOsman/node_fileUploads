const express = require("express");
const router = express.Router();

const upload = require("../middlewares/fileUpload");
// const compressPdf = require("../middlewares/compressPdf"); I will deal with this later.

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
router.get("/download/:fileId", fileDownload);

//PUT:api/delete/:fileId
router.delete("/delete/:fileId", fileDelete);

//PUT:api/update/:fileId
router.put("/update/:fileId", fileUpdate);

module.exports = router;

const express = require("express");
const router = express.Router();

const fileController = require("../controllers/file");

router.get("/files", fileController.getFiles);
router.post("/upload", fileController.uploadFile);
router.get("/download", fileController.downloadFile);
router.put("/update/:fileId", fileController.updateFile);
router.delete("/delete/:fileId", fileController.deleteFile);

module.exports = router;

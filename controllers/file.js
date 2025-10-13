const fs = require("fs");
const path = require("path");
const File = require("../models/file");

exports.fileUpload = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded. Make sure your form key is 'file'.",
      });
    }

    const fileData = await File.create({
      originalName: req.file.originalname,
      fileType: req.file.mimetype,
      path: req.file.path,
      size: req.file.size,
    });

    res.status(201).json({
      message: "File uploaded successfully",
      file: fileData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
exports.getAllFiles = async (req, res, next) => {
  try {
    const files = await File.find().sort({ uploadDate: -1 });

    if (!files || files.length === 0) {
      return res.status(404).json({ message: "No files found" });
    }

    res.status(200).json(files);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
exports.fileDownload = async (req, res, next) => {};
exports.fileUpdate = async (req, res, next) => {};
exports.fileDelete = async (req, res, next) => {};

const express = require("express");
const app = express();
const helmet = require("helmet");

const fs = require("fs");
const path = require("path");
const multer = require("multer");

const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;

const { handleConnection } = require("./databases/db");

const fileRoutes = require("./routes/file");

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use("/uploads", express.static("uploads"));

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {},
  filename: (req, file, cb) => {},
});

const fileFilter = app.use("/", fileRoutes);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await handleConnection();
});

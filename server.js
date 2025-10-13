const express = require("express");
const app = express();
const helmet = require("helmet");

const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;

const { handleConnection } = require("./databases/db");

const fileRoutes = require("./routes/file");

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", fileRoutes);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await handleConnection();
});

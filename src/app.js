const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

// App Instance
const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Foodtrail API" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
    console.log(`[INFO] Server started on address: http://127.0.0.1:${PORT}/`)
);

const express = require("express");
require("dotenv").config();
const mainRouter = require("./routes/main-route");
const cors = require("cors");

const db = require("./db");
const userRouter = require("./routes/userRoute");
const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRouter);
app.use(userRouter);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`server is on at http://localhost:${PORT}`));

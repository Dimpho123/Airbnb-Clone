const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();


app.use(cors());
app.use(express.json());


const userRoutes = require("./routes/userRoutes");
const accommodationRoutes = require("./routes/accommodationRoutes");
const reservationRoutes = require("./routes/reservationRoutes");


app.use("/api/users", userRoutes);
app.use("/api/accommodations", accommodationRoutes);
app.use("/api/reservations", reservationRoutes);


app.get("/", (req, res) => {
  res.send("Airbnb API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
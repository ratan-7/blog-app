const express = require("express");
const cors = require('cors');
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const postRoutes = require("./routes/postRoutes.js")

const app = express();
const port = 3000;
connectDB();

app.use(express.json());
app.use(cors(
    {
        origin: "https://blog-app-rust-omega-25.vercel.app",
        credentials: true
    }
));

app.use(express.urlencoded({
    extended: true
}));

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api/uploads", express.static("uploads"));



app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})
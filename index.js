import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.route.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*", // or your frontend URL
}));

app.use(express.json());


// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.send("Portfolio Contact API is running");
// });
app.use("/api/contact/", contactRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

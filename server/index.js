import express from "express";
import mongoose from "mongoose";
import PlantsBasics from "./models/plants.js";
import plantRoutes from "./routes/plants.js";

const app = express();
const PORT = 8080;

// // middlewares
app.use(express.json());
app.use("/plants", plantRoutes);

const uri =
  "mongodb+srv://admin:admin123@houseplantsdb.xeznh.mongodb.net/houseplantsDB?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(PORT, () =>
      console.log(`its working on: http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err));
// middlewares
app.use(express.json());

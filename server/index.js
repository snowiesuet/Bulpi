import express from "express";
import mongoose from "mongoose";
import PlantsBasics from "./models/plants.js";
import plantRoutes from "./routes/plants.js";

const app = express();
const PORT = 8080;

// // middlewares
app.use(express.json());
app.use("/plants", plantRoutes);

// const CONNECTION_URL =
//   "mongodb+srv://admin:admin123@houseplantsdb.xeznh.mongodb.net/houseplantsDB?retryWrites=true&w=majority";

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//   )
//   .catch((err) => console.log(err.message));

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

// app.get("/getPlants", (req, res) => {
//   PlantsBasics.find()
//     .limit(20)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

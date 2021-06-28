import mongoose from "mongoose";

const plantSchema = mongoose.Schema(
  {
    name: String,
    family: String,
  },
  { collection: "houseplantsCollection" }
);

const PlantsBasic = mongoose.model("PlantsBasic", plantSchema);
export default PlantsBasic;

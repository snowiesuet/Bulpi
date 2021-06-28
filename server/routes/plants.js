import express from "express";
import { getPlants, getFamily } from "../controllers/plants.js";

const router = express.Router();

router.get("/", getPlants);
router.get("/family", getFamily);

export default router;

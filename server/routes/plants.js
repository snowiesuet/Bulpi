import express from "express";
import { getPlants, getFamily, plantsInFamily } from "../controllers/plants.js";

const router = express.Router();

router.get("/", getPlants);
router.get("/family", getFamily);
router.get("/family/:id", plantsInFamily);

export default router;

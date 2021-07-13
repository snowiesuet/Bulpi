import PlantsBasics from "../models/plants.js";

export const getPlants = (req, res) => {
  PlantsBasics.find()
    // .limit(20)
    .then((result) => {
      const allPlants = result.sort((a, b) => a.name.localeCompare(b.name));
      res.send(allPlants);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFamily = (req, res) => {
  PlantsBasics.find()
    // .limit(20)
    .then((result) => {
      const family = [...new Set(result.map((item) => item.family))];
      res.send(family);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const plantsInFamily = (req, res) => {
  console.log(req.params.id);
  PlantsBasics.find()
    // .limit(20)
    .then((result) => {
      const family = req.params.id;
      const plantsRes = result.filter((item) => item.family === family);
      res.send(plantsRes);
    })
    .catch((err) => {
      console.log(err);
    });
};

const express = require("express");
const router = express.Router();
const carController = require('../controller/carController');
const serviceController = require('../controller/serviceController');

router.get("/cars", carController.listAllCars);
router.get("/cars/:id", carController.listCarById);
router.post("/cars", carController.newCar);
router.put("/cars/:id", carController.editCar);
router.delete("/cars/:id", carController.deleteCar);


router.get("/services", serviceController.listAllServices);
router.get("/services/:car_id", serviceController.listServiceById);
router.post("/services", serviceController.newService);
router.put("/services/:id", serviceController.editService);
router.delete("/services/:id", serviceController.deleteService);


module.exports = router;
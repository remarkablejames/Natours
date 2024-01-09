import express  from "express";
import {createTour, getAllTours, getTour} from "../controllers/tourController.js";

const router = express.Router();

// param middleware
router.param("id", (req, res, next, val) => {
    console.log(`Tour id is ${val}`);
    next();
});

router.use((req, res, next) => {
    console.log("Hello from the middleware nested inside the tour route");
    next();
});

router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour);

export default router;
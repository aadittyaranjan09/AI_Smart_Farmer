import express from "express";
import CropData from "../models/CropData.js";

const router = express.Router();

// Crop Recommendation API
router.post("/crop", async (req, res)=>{
    const { temp } = req.body;

    let crop = "";

    if(temp < 15) crop = "Wheat";
    else if(temp <= 25) crop = "Maize";
    else crop = "Rice";

    let data = new CropData({ temperature: temp, crop });
    await data.save();

    res.json({ crop });
});

// Soil Tips API
router.get("/soil", (req, res)=>{
    const tips = [
        "Soil pH should be between 6 and 7",
        "Add organic compost",
        "Rotate crops every season",
        "Use drip irrigation",
        "Maintain soil moisture"
    ];

    let random = tips[Math.floor(Math.random()*tips.length)];
    res.json({ tip: random });
});

// Disease Detection (dummy AI)
router.post("/disease", (req, res)=>{
    res.json({ result: "Possible Leaf Blight - Use organic pesticide" });
});

export default router;
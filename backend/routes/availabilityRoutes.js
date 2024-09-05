const express = require("express");
const router = express.Router();
const Availability = require("../models/Availability"); // Assuming you have an Availability model

// POST route to add availability
router.post("/", async (req, res) => {
  const { user, start, end, duration } = req.body;
  try {
    // Create a new availability entry
    const newAvailability = new Availability({
      user,
      start,
      end,
      duration,
    });
    await newAvailability.save();
    return res.status(201).json({ message: "Availability added successfully" });
  } catch (error) {
    console.error("Error adding availability:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET route to fetch availability by user ID
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const availability = await Availability.find({ user: userId });

    if (availability.length === 0) {
      return res.status(404).json({ message: "No availability found for this user." });
    }

    return res.status(200).json(availability);
  } catch (error) {
    console.error("Error fetching availability:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

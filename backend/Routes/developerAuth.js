const express = require("express");
const router = express.Router();
const Developer = require("../Models/Developer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Developer Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const developer = await Developer.findOne({ username });
    if (!developer) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, developer.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: developer._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

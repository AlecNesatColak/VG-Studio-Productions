const express = require("express");
const router = express.Router();
const AdminRequest = require("../Models/adminRequest");
const Admin = require("../Models/Admin");
const crypto = require("crypto");

// Handle form submission
router.post("/admin-register", async (req, res) => {
  console.log("Received admin register request:", req.body);
  const { username, email } = req.body;

  const newRequest = new AdminRequest({
    username,
    email,
  });

  try {
    await newRequest.save();
    res
      .status(200)
      .json({ success: true, message: "Request submitted successfully" });
  } catch (error) {
    console.error("Error saving admin request:", error);
    res
      .status(500)
      .json({ success: false, message: "Error submitting request", error });
  }
});

// Fetch all admin requests
router.get("/submissions", async (req, res) => {
  try {
    const submissions = await AdminRequest.find();
    res.status(200).json(submissions);
  } catch (error) {
    console.error("Error fetching submissions:", error);
    res.status(500).json({ message: "Error fetching submissions", error });
  }
});

// Approve a request
router.post("/submissions/:id/accept", async (req, res) => {
  try {
    const adminRequest = await AdminRequest.findById(req.params.id);
    if (!adminRequest) {
      return res.status(404).json({ message: "Request not found" });
    }

    // Generate a random password
    const randomPassword = crypto.randomBytes(8).toString("hex");

    // Create a new admin
    const newAdmin = new Admin({
      username: adminRequest.username,
      password: randomPassword,
    });

    await newAdmin.save();

    // Update the request status to accepted
    await AdminRequest.findByIdAndUpdate(req.params.id, { status: "Accepted" });

    res
      .status(200)
      .json({
        message: "Request accepted and admin created",
        password: randomPassword,
      });
  } catch (error) {
    console.error("Error accepting request:", error);
    res.status(500).json({ message: "Error accepting request", error });
  }
});

// Deny a request
router.post("/submissions/:id/deny", async (req, res) => {
  try {
    await AdminRequest.findByIdAndUpdate(req.params.id, { status: "Denied" });
    res.status(200).json({ message: "Request denied" });
  } catch (error) {
    console.error("Error denying request:", error);
    res.status(500).json({ message: "Error denying request", error });
  }
});

module.exports = router;

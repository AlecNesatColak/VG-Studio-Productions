const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.post(
  "/admin-register",
  [
    body("username")
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("confirmUsername").custom((value, { req }) => {
      if (value !== req.body.username) {
        throw new Error("Usernames do not match");
      }
      return true;
    }),
    body("confirmEmail").custom((value, { req }) => {
      if (value !== req.body.email) {
        throw new Error("Emails do not match");
      }
      return true;
    }),
  ],
  (req, res) => {
    console.log("POST /admin-register hit"); // Log when the route is hit
    console.log("Request body:", req.body); // Log the request body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ success: false, message: errors.array()[0].msg });
    }

    // Simulate successful registration
    res.status(200).json({ success: true, message: "Registration successful" });
  }
);

router.get("/submissions", (req, res) => {
  console.log("GET /submissions hit"); // Log when the route is hit
  res.json([]);
});

router.post("/submissions/:id/accept", (req, res) => {
  console.log("POST /submissions/:id/accept hit"); // Log when the route is hit
  res.json({ message: "Submission accepted" });
});

router.post("/submissions/:id/deny", (req, res) => {
  console.log("POST /submissions/:id/deny hit"); // Log when the route is hit
  res.json({ message: "Submission denied" });
});

module.exports = router;

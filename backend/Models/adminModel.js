const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 12,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "adminSchema",
    },
  },
  {
    timestamps: true,
  }
);

const adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel;

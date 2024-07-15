const mongoose = require("mongoose");

const pendingAdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    confirmUsername: {
      type: String,
      required: true,
      match: username,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    confirmEmail: {
      type: String,
      required: true,
      match: email,
    },
    role: {
      type: String,
      enum: ["pendingAdmin"],
      default: "pendingAdminSchema",
    },
  },
  {
    timestamps: true,
  }
);

const pendingAdminModel = mongoose.model("PendingAdmin", pendingAdminSchema);

module.exports = pendingAdminModel;

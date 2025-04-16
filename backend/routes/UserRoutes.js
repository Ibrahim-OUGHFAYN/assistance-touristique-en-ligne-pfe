const express = require("express");
const router = express.Router();
const User = require("../models/User");
const hashPassword = require("../utiles/pwdutiles");
const generateToken = require("../utiles/generateToken");
const authMiddleware = require("../middlware/authMiddleware");

router.post("/", async (req, res) => {
  try {
    console.log("Received body:", req.body); // Add this
    const { name, email, password, role, experience } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Un utilisateur avec cet e-mail existe déjà." });
    }

    const hashedpwd = await hashPassword(password);

    const newUser = new User({
      name,
      email,
      password: hashedpwd,
      role,
      experience,
    });
    if (newUser) {
      await newUser.save(); // 👈 Save first
      generateToken(newUser._id, res); // 👈 Then set cookie
      res
        .status(201)
        .json({ message: "User added successfully", user: newUser });
    } else {
      res.status(400).json({ msg: "invalid user data" });
    }
  } catch (err) {
    console.error("Erreur serveur:", err); // 👈 Add this
    res.status(500).json({ error: err.message });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // remove password from response
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

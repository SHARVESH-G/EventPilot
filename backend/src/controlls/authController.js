import User from "../model/User.js";

export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      age,
      status,
      organisationName,
      role,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      age,
      status,
      organisationName,
      role,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

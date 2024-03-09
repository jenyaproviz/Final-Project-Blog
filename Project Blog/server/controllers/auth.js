import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { passwordPattern } from "../validators/regex.js";

// Function to validate password
export const validatePassword = (password) => {
  return passwordPattern.test(password);
};

// Function to hash the password
export const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Function to validate the password
export const validatePasswordWithHash = async (
  plainPassword,
  hashedPassword
) => {
  const isPasswordValid = await bcrypt.compare(plainPassword, hashedPassword);
  return isPasswordValid;
};

// Register user
export const register = async (req, res) => {
  try {
    const { username, password, adminCode } = req.body;

    // Validate password
    if (!validatePassword(password)) {
      return res.json({
        message:
          "Invalid password. Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.",
      });
    }

    const isUsed = await User.findOne({ $or: [{ username }] });

    if (isUsed) {
      return res.json({
        message: "This username or email is already taken.",
      });
    }

    // Check if the provided adminCode is correct
    const isAdmin = adminCode === process.env.ADMIN_CODE;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hash,
      isAdmin: isAdmin,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    await newUser.save();

    res.json({
      newUser,
      token,
      message: "Registration successful.",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.json({ message: "Error creating user." });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({
        message: "User does not exist.",
      });
    }

    const isPasswordCorrect = await validatePasswordWithHash(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.json({
        message: "Incorrect password.",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      token,
      user,
      message: "You have successfully logged in.",
    });
  } catch (error) {
    res.json({ message: "Error during authentication." });
  }
};

// Get Me
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.json({
        message: "User does not exist.",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.json({ message: "Access denied." });
  }
};

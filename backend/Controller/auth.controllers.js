
import { UserModel } from "../Model/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  console.log("REGISTER HIT");
  console.log(req.body);

  try {
    let { username, email, mobile, password } = req.body;

    if (!username || !email || !mobile || !password)
      return res.status(400).json({ message: "All fields are required" });
// password hash
    let hasspass = await bcrypt.hash(password, 10);

    let newuser = await UserModel.create({
      username,
      email,
      mobile,
      password: hasspass,
    });
    console.log("User created:", newuser);

    let token = jwt.sign({ id: newuser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", token, { httpOnly: true });

    return res.status(201).json({
      message: "User registered",
      user: newuser,
    });
  } catch (error) {
    console.error("Register Error details:", error);
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log("Login attempt for email:", email);

    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });

    let user = await UserModel.findOne({ email });
    console.log("User found in DB:", user);

    if (!user)
      return res.status(404).json({ message: "User not registered" });

    let checkpass = await bcrypt.compare(password, user.password);
    console.log("Password check result:", checkpass);

    if (!checkpass)
      return res.status(403).json({ message: "Invalid credentials" });

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", token, { httpOnly: true });

    return res.status(200).json({
      message: "User logged in",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

export const logoutController = async (req, res) => {
  try {
    let user = req.body;
    if (!user) return res.status(401).json({
      message: "user is not found",
    });
    res.clearCookie("token");

    return res.status(201).json({
      message: "User Loggout sucessfully ",

    })

  } catch (error) {
    return res.status(500).json({
      message: "Internal server error ",
      error,
    })
  }
};
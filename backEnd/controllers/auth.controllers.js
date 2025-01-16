import { User } from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { generateTokenandSetCookie } from "../utils/generateTokenandSetCookie.js";
export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("All fields should be available.");
    }

    const userAlreadyExits = await User.findOne({ email });

    if (userAlreadyExits) {
      res.status(400).json({ success: false, message: "user Already exits " });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const verificationToken = Math.floor(
      10000 + Math.random() * 900000
    ).toString();
    //create the user.

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
      isVerified: false,
      lastLogin: Date.now(),
    });

    await user.save();

    generateTokenandSetCookie(res, user._id);

    res.status(201).json({
      success: true,
      message: "User created Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const signin = async (req, res) => {
  res.send("sign in page");
};
export const logout = async (req, res) => {
  res.send("logout page");
};

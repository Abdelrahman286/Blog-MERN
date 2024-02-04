import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  // wrap everything in try catch
  // the server may break if we send request with corrupted json data

  try {
    const { username, email, password } = req.body;

    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      // we gonna use error handler util
      return next(errorHandler(400, "SERVER ERROR : All Fields are Required"));
    }

    const hashedPass = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPass });
    await newUser.save();
    res.json({ message: "SERVER : NEW USER ADDED" });
  } catch (error) {
    next(error);
  }
};

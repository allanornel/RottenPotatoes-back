import { CreateUserData, findByEmail, insert, findByUsername } from "../repositories/authRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { conflictError, unauthorizedError } from "../utils/errorUtils.js";
dotenv.config();

export async function signUpService(userData: CreateUserData) {
  userData.email = userData.email.toLowerCase();
  const { email, password, username } = userData;
  const checkEmail = await findByEmail(email);
  if (checkEmail) throw conflictError("Email must be unique");
  const checkUsername = await findByUsername(username);
  if (checkUsername) throw conflictError("Username must be unique");

  const salt = 10;
  userData.password = await bcrypt.hash(password, salt);
  await insert(userData);
}

export async function signInService(userData: CreateUserData) {
  const { email, password } = userData;
  const user = await findByEmail(email);
  if (!user) throw unauthorizedError("Wrong email/password");
  if (!(await bcrypt.compare(password, user.password))) throw unauthorizedError("Wrong email/password");
  const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_KEY, {
    expiresIn: 60 * 60 * 24,
  });
  return { token, picture: user.picture };
}

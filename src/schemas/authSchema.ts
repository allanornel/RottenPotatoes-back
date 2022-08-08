import joi from "joi";
import { CreateUserData } from "../repositories/authRepository.js";

export const signUpSchema = joi.object<CreateUserData>({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(4),
  profile_image_url: joi.string().uri().required(),
});

export const signInSchema = joi.object<CreateUserData>({
  email: joi.string().email().required(),
  password: joi.string().required().min(4),
});

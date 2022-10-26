import { body } from "express-validator";

export const loginValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Password shall be more than 5 simbols").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Password shall be more than 5 simbols").isLength({
    min: 5,
  }),
  body("fullName", "Name shall be more than 3 simbols").isLength({ min: 3 }),
  body("avatarUrl", "Invalid URL to avatar").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Specify title").isLength({ min: 3 }).isString(),
  body("text", "Text shall be not empty")
    .isLength({
      min: 10,
    })
    .isString(),
  body("tags", "Invalid tag format (use array)").optional().isArray(),
  body("imageUrl", "Invalid URL to image").optional().isString(),
];

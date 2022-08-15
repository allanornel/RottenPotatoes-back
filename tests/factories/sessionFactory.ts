import jwt from "jsonwebtoken";

export function getToken(id: number, username: string) {
  const token = jwt.sign({ id, username }, process.env.SECRET_KEY, {
    expiresIn: 60 * 60 * 24,
  });
  return token;
}

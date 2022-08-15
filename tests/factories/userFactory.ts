import { faker } from "@faker-js/faker";

export function generateUser() {
  return {
    username: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.random.numeric(4),
    picture: faker.internet.url(),
  };
}

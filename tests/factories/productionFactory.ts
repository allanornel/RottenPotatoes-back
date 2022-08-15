import { faker } from "@faker-js/faker";
import { Production } from "@prisma/client";

type CreateProductionData = Omit<Production, "id">;

export function generateProduction(): CreateProductionData {
  return {
    name: faker.random.words(),
    image_url: faker.internet.url(),
    description: faker.random.words(),
    release: +faker.random.numeric(4),
    type: "movie",
  };
}

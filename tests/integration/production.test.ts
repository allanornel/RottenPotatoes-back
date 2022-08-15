import app from "../../src";
import supertest from "supertest";
import { prisma } from "../../src/database";
import { faker } from "@faker-js/faker";
import { getToken } from "../factories/sessionFactory";
import { generateProduction } from "../factories/productionFactory";

const agent = supertest(app);

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
});

describe("GET /productions", () => {
  it("Should answer 200 and the array of objects", async () => {
    const token = await getToken("email@gmail.com");
    const response = await agent.get("/productions").set({ Authorization: token });
    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();
  });
});
describe("GET /productions/:id", () => {
  it("Should answer 200 and an object", async () => {
    const token = await getToken("email@gmail.com");
    const bodyProd = generateProduction();
    const production = await prisma.production.create({ data: bodyProd });
    const response = await agent.get(`/productions/${production.id}`).set({ Authorization: token });
    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

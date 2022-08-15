import app from "../../src";
import supertest from "supertest";
import { prisma } from "../../src/database";
import { getToken } from "../factories/sessionFactory";
import { generateProduction } from "../factories/productionFactory";
import { generateUser } from "../factories/userFactory";

const agent = supertest(app);

describe("POST /watched/:id", () => {
  it("Should answer status code 201 and create a watched", async () => {
    const bodyUser = generateUser();
    const user = await prisma.user.create({ data: bodyUser });
    const token = getToken(user.id, user.username);
    const bodyProd = generateProduction();
    const production = await prisma.production.create({ data: bodyProd });
    const response = await agent.post(`/watched/${production.id}`).send({}).set({ Authorization: token });
    expect(response.status).toBe(201);
    const search = await prisma.watched.findFirst({ where: { productionId: production.id } });
    expect(search).not.toBeNull();
  });
});

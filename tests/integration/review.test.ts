import app from "../../src";
import supertest from "supertest";
import { prisma } from "../../src/database";
import { getToken } from "../factories/sessionFactory";
import { generateProduction } from "../factories/productionFactory";
import { generateUser } from "../factories/userFactory";

const agent = supertest(app);

describe("POST /review/:id", () => {
  it("Should answer status code 201 and create a review", async () => {
    const bodyUser = generateUser();
    const user = await prisma.user.create({ data: bodyUser });
    const token = getToken(user.id, user.username);
    console.log(token);
    const bodyProd = generateProduction();
    const production = await prisma.production.create({ data: bodyProd });
    const bodyReview = { rating: 5, ratingComment: "Belo Filme" };
    console.log(process.env.SECRET_KEY);
    const response = await agent.post(`/review/${production.id}`).send(bodyReview).set({ Authorization: token });
    expect(response.status).toBe(201);
    const search = await prisma.review.findFirst({ where: { rating: 5, ratingComment: "Belo Filme" } });
    expect(search).not.toBeNull();
  });
});

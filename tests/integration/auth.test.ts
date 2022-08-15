import app from "../../src";
import supertest from "supertest";
import { prisma } from "../../src/database";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const agent = supertest(app);

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
});

describe("POST /sign-up", () => {
  it("Should answer with status 201 when given valid User", async () => {
    const body = {
      username: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.random.numeric(4),
      picture: faker.internet.url(),
    };
    const response = await agent.post("/sign-up").send(body);
    expect(response.status).toBe(201);

    const userCreated = await prisma.user.findFirst({ where: { username: body.username } });
    expect(userCreated).not.toBeNull();
  });
  it("Should answer with status 422 when given invalid User", async () => {
    const body = {};
    const response = await agent.post("/sign-up").send(body);
    expect(response.status).toBe(422);
  });
  it("Should answer with status 409 when given 2 users with same username/email", async () => {
    const body = {
      username: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.random.numeric(4),
      picture: faker.internet.url(),
    };
    const response = await agent.post("/sign-up").send(body);
    expect(response.status).toBe(201);

    const response2 = await agent.post("/sign-up").send(body);
    expect(response2.status).toBe(409);
  });
});

describe("POST /sign-in", () => {
  it("Should answer with status 200 and TOKEN when you give a valid user", async () => {
    const body = {
      username: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.random.numeric(4),
      picture: faker.internet.url(),
    };

    await prisma.user.create({
      data: {
        ...body,
        password: bcrypt.hashSync(body.password, 10),
      },
    });

    const responseSignIn = await agent.post("/sign-in").send({ email: body.email, password: body.password });
    expect(responseSignIn.status).toBe(200);
    expect(responseSignIn.body).not.toBeNull();
  });
  it("Should answer with status 401 when you give a invalid user", async () => {
    const body = { email: faker.internet.email(), password: faker.random.numeric(4) };
    const responseSignIn = await agent.post("/sign-in").send(body);
    expect(responseSignIn.status).toBe(401);
  });
  it("Should answer with status 422 when you give a empty body", async () => {
    const responseSignIn = await agent.post("/sign-in").send({});
    expect(responseSignIn.status).toBe(422);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

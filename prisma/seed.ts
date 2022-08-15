import { faker } from "@faker-js/faker";
import { prisma } from "../src/database.js";
import { CreateProductionData } from "../tests/factories/productionFactory.js";

async function main() {
  const productionArray: CreateProductionData[] = [
    {
      name: "Star Wars: Episode VII — The Force Awakens",
      image_url: "https://upload.wikimedia.org/wikipedia/pt/a/ae/Starwars_06.jpg",
      release: 2015,
      description: "",
      type: "movie",
    },
    {
      name: "O Poderoso Chefão",
      image_url:
        "https://media.fstatic.com/OTbTIiFGOSTDk9MOelWXnd9gK6c=/210x312/smart/media/movies/covers/2011/08/f623d26a6107a9cdbb2d805ed45675a6.jpg",
      description: faker.random.words(),
      release: 1972,
      type: "movie",
    },
    {
      name: "Abbey Road",
      image_url: "https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2020/05/cb26254-capa-abbey-road-1024x1024.jpg",
      description: faker.random.words(),
      release: 1969,
      type: "album",
    },
    {
      name: "Nevermind",
      image_url:
        "https://img2.migalhas.com.br/_MEDPROC_/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__2022__SL__01__SL__04__SL__56c5333d-e60d-41b3-a635-cbaa6bd54487.jpg._PROC_CP65.jpg",
      description: faker.random.words(),
      release: 1991,
      type: "album",
    },
    {
      name: "Lost",
      image_url: "https://19f75e2c48dd328909426559a48e7d88.oldflix.com.br/images/cover/59037bd41503ce26d05a51bf.jpg",
      description: faker.random.words(),
      release: 2004,
      type: "series",
    },
  ];
  console.log(">Creating Productions...");
  await prisma.production.createMany({ data: productionArray });
}

main()
  .catch(console.error)
  .finally(async () => await prisma.$disconnect());

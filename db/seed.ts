import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

// By running this function via `npx tsx ./db/seed`
// We seed the db with our sample data

async function main() {
  const prisma = new PrismaClient();

  // First we delete everything with deleteMany
  await prisma.product.deleteMany();

  // And then we upload our sample data products
  await prisma.product.createMany({
    data: sampleData.products,
  });

  console.log("Database seeded successfully!");
}

main();

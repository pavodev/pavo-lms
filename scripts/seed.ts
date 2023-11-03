const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        {
          name: "Computer Science",
        },
        {
          name: "Accounting",
        },
        {
          name: "Photography",
        },
        {
          name: "Fitness",
        },
        {
          name: "Marketing",
        },
        {
          name: "Music",
        },
        {
          name: "Biology",
        },
      ],
    });
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await db.$disconnect();
    console.log("Seeding completed");
  }
}

main();

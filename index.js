const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const out = await prisma.annotations
    .findOne({
      where: { id: 1 },
    })
    .author();

  console.log(JSON.stringify(out));
}

main();

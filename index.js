const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const annotations = await prisma.annotations
    .findOne({
      where: { id: 1 },
    })
    .author();
  console.log(JSON.stringify(annotations));
}

main();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getAnnotationAuthor(annotationId) {
  try {
    const out = await prisma.annotations
      .findOne({
        where: { id: annotationId },
      })
      .author();
    console.log(JSON.stringify(out));
  } catch (e) {
    console.error(e);
  }
}

async function test() {
  await getAnnotationAuthor(2); // succeeds
  await getAnnotationAuthor(1); // crashes engine
  await getAnnotationAuthor(2); //will fail because engine crashed
}

test();

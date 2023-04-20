import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (event) => {
  // grab listing id
  const { listingId } = event.context.params;

  return prisma.car.delete({
    // condition
    where: {
      id: parseInt(listingId),
    },
  });
};

export default defineEventHandler(handler);

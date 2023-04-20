import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async(event) => {
    //listing id inside of our params
    const {listingId} = event.context.params
    return prisma.message.findMany({
        where: {
            listingId: parseInt(listingId)
        }
    })
});
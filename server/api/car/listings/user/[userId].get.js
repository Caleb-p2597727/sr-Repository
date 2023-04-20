import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async(event) => {
    //grab user id
    const {userId} = event.context.params;

    return prisma.car.findMany({
        //condition, takes in an object
        where: {
        listerId:  userId
        },
        //select all the different column we want
        select: {
            image: true,
            id: true,
            name: true,
            price: true
        }
    })

})
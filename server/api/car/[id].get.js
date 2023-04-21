import cars from '@/data/cars.json';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {
    //extract id from endpoint from params
    const { id } = event.context.params;

    const car = await prisma.car.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    // const car = cars.find(c => {
    //     return c.id === parseInt(id)
    // })

    // we throw this error if car dosent exists
    //client side 
    if(!car){
        throw createError({
            statusCode: 404,
            statusMessage: `Car with ID of ${id} does not exist`
        })
    }

    return car;
});
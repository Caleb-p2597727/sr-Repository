import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { city } = event.context.params;
    const { make, minPrice, maxPrice } = getQuery(event);

    let filteredCars = await prisma.car.findMany({
        where: {
            city: {
                equals: city.toLowerCase(),
            },
            make: make ? {
                equals: make.toLowerCase(),
            } : undefined,
            price: minPrice && maxPrice ? {
                gte: parseInt(minPrice),
                lte: parseInt(maxPrice),
            } : minPrice ? {
                gte: parseInt(minPrice),
            } : maxPrice ? {
                lte: parseInt(maxPrice),
            } : undefined,
        },
    });

    return filteredCars;
});

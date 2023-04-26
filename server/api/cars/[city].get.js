// Import the PrismaClient from the @prisma/client package
import { PrismaClient } from '@prisma/client';

// Create a new instance of the PrismaClient
const prisma = new PrismaClient();

// Define an event handler function that takes an event as input and returns a Promise
export default defineEventHandler(async (event) => {
    // Extract the 'city' parameter from the context of the event
    const { city } = event.context.params;
    // Extract the 'make', 'minPrice', and 'maxPrice' query parameters from the event
    const { make, minPrice, maxPrice } = getQuery(event);

    // Use Prisma to query the database for cars that match the specified criteria
    let filteredCars = await prisma.car.findMany({
        where: {
            // Filter by city, ensuring that it matches the specified value (case-insensitive)
            city: {
                equals: city.toLowerCase(),
            },
            // Filter by make, if specified
            make: make ? {
                equals: make,
            } : undefined,
            // Filter by price, if minPrice and/or maxPrice are specified
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
    // Return the filtered cars
    return filteredCars;
});

//only used to fetch make and reviews now

//@ takes you to the root directory
import cars from "../data/cars.json"
import listings from "../data/listings.json"
import makes from "../data/makes.json"
import reviews from "../data/reviews.json"

//gets cars from cars.json
export const useCars = () => {
    return {
        cars,
        listings,
        makes,
        reviews
    };
}

// not used anymore, filtered to make sure same value is not reapeated
export const useCarMakes = () => {
    return cars
        .map(car=> car.make)
        .filter((value, index, array) => array.indexOf(value) === index);
}




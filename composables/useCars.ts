//@ takes you to the root directory
import cars from "../data/cars.json"
import listings from "../data/listings.json"
import makes from "../data/makes.json"

//gets cars from cars.json
export const useCars = () => {
    return {
        cars,
        listings,
        makes
    };
}

export const useCarMakes = () => {
    return cars
        .map(car=> car.make)
        .filter((value, index, array) => array.indexOf(value) === index);
}




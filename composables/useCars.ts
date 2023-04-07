//@ takes you to the root directory
import cars from "../data/cars.json"
import listings from "../data/listings.json"

//gets cars from cars.json
export const useCars = () => {
    return {
        cars,
        listings
    };
    
}

export const useCarMakes = () => {
    return cars
        .map(car=> car.make)
        .filter((value, index, array) => array.indexOf(value) === index);

}


import cars from '@/data/cars.json';

export default defineEventHandler((event) => {
    const { city } = event.context.params;
    //gives us an obect of all our query parameters
    const { make, minPrice, maxPrice} = getQuery(event)

    let filteredCars = cars;
    //filter to display only city within route
    filteredCars = filteredCars.filter((car) => {
        return car.city.toLowerCase() === city.toLowerCase()
    });

    // if make query exists|| if make filtered
    if(make){
        filteredCars = filteredCars.filter((car) => {
            return car.make.toLowerCase() === make.toLowerCase();
        });
    }

    // if minPrice query exists|| if minPrice filtered
    if(minPrice){
        filteredCars = filteredCars.filter((car) => {
            // will be a string not a number so parseInt is
            return car.price >= parseInt(minPrice); 
        });
    }
    // if maxPrice query exists|| if maxPrice filtered
    if(maxPrice){
        filteredCars = filteredCars.filter((car) => {
            return car.price <= parseInt(maxPrice); 
        });
    }

    return filteredCars;
})

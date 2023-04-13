export default async (city, filters) => {
    const {data, error, refresh} = await useFetch(`/api/cars/${city}`, {
        //adding the query
        params: {
            ...filters,
        }
    });

    if (error.value){
        throw createError({
            ...console.log(error.value),
        })
    }
    //if no error we return the data
    return {data, refresh};
}
export default async (city, filters) => {
    const {data, error} = await useFetch(`/api/cars/${city}`, {
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
    return data;
}
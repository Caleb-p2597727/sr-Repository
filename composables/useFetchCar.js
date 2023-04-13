export default async (id) => {
    //use fetch is a composbale
    const {data, error} = await useFetch(`/api/cars/${id}`);

    if (error.value){
        throw createError({
            ...console.log(error.value),
            statusMessage: "Unable to fetch Car"
        })
    }
    //if no error we return the data
    return {data};

}
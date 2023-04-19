export default async (id) => {
    //use fetch is a composbale
    //data and error if any error occurs
    const {data, error} = await useFetch(`/api/car/${id}`);

    //error message
    if (error.value){
        throw createError({
            ...error.value,
            statusMessage: "Unable to fetch Car"
        })
    }
    //if no error we return the data
    return {data};

}
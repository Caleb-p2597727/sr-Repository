
export default defineEventHandler(async(event) => {
    //gives us all data within the body
    const body = await readBody(event);

    return body;
})
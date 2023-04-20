import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//we pass in everything we want to validate
const schema = Joi.object({
    email: Joi.string().email({
        minDomainSegments: 2
    }),
    phone: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
    name: Joi.string().required(),
    message: Joi.string().min(10).required()
})


export default defineEventHandler(async(event) => {
    //we will get the data from the body so we are reading the body
    const body = await readBody(event)
    const {listingId} = event.context.params;

    const {error} = await schema.validate(body);

    if(error){
        throw createError({
            statusCode: 412,
            statusMessage: error.message,
        })
    }

    //destructure the body
    const{message, email, phone, name} = body

    return prisma.message.create({
        data: {
        message,
        email,
        name,
        phone,
        listingId:  parseInt(listingId),
        }
    })
})

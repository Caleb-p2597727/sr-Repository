import Joi from "joi";
import { PrismaClient } from "@prisma/client";

//instance of prisma
const prisma = new PrismaClient()

//we pass in everything we want to validate
const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number()
        .min(1886)
        .max(new Date().getFullYear() + 1),
    miles: Joi.number().required().min(0),
    city: Joi.string().min(2).required(),
    numberOfSeats: Joi.number().max(1000).min(1).required(),
    features: Joi.array().items(Joi.string()).required(),
    description: Joi.string().min(20).required(),
    image: Joi.string().required(),
    listerId: Joi.string().required(),
    price: Joi.number().min(0).required(),
    name: Joi.string().required(),
})

export default defineEventHandler(async(event) => {
    //gives us all data within the body(data in the form)
    const body = await readBody(event);

    const {error, value} = await schema.validate(body)
    

    //if we get an error in input we throw this error
    if(error){
        throw createError({
            statusCode:412,
            statusMessage: error.message,
        })
    }

    //we destructure body (received from form)
    const{     
        image,        
        name, 
        numberOfSeats,
        features,     
        description, 
        miles,        
        price,    
        listerId,
        city,
        make,  
        model,      
    } = body

    //create car 1 car
    const car = await prisma.car.create({
        data:{
            image,        
            name, 
            numberOfSeats,
            features,     
            description, 
            miles,        
            price,    
            listerId,
            city: city.toLowerCase(),
            make,  
            model,   
        }

    })

    return car;
})
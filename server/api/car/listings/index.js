import Joi from "joi";
import { PrismaClient } from "@prisma/client";

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
    //gives us all data within the body
    const body = await readBody(event);

    const {error, value} = await schema.validate(body)
    console.log(value)

    //if we get an error in input
    if(error){
        throw createError({
            statusCode:412,
            statusMessage: error.message,
        })
    }

    const{     
        image   ,        
        name , 
        numberOfSeats  ,
        miles   ,        
        price   ,        
        features  ,     
        description  ,   
        city  ,          
        make ,           
        model     ,      
        listerId         
    } = body

    const car = await prisma.car.create({
        data:{
            image   ,        
            name , 
            numberOfSeats  ,
            miles   ,        
            price   ,        
            features  ,     
            description  ,   
            city: city.toLowerCase()  ,          
            make ,           
            model     ,      
            listerId  
        }

    })

    return car;
})
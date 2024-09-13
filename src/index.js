// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"


dotenv.config({
    path: './env',
})


connectDB()
.than(() => {
    app.on("error",(error) => {
        console.log(`Event error !! ${error}`)
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT || 8000}`)
    })
})
.catch((err) => {
    console.error("MONGODB CONNECTION FAILED !!!",err)
})

// import express from "express"
// const app = express()
// (async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error) => {
//             console.error(error)
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);

//         })

//     }catch(error) {
//         console.error(error)
//         throw error;
//     }
// })() 
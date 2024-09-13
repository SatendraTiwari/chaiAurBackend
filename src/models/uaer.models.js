import mongoose, {schema} from "mongoose"
import jwt from "jsonwebtoken" // it wil gunrate a token 
import bcrypt from "bcrypt" // bcrypt is a cryption the data 


const userSchema = new schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            
        },

        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avater: {
            type: String, //cludenary url
            required: true,

        },
        coverImage: {
            type: String, 
        },
        watchHistory: {
            type: schema.Type.ObjectId,
            ref: "video"
        },
        password: {
            type: String,
            required: [true, 'password is required']
        },
        refreshToken: {
            type: String,
        }
    }
)

userSchema.pre("save", async function(next) { //Pre middleware functions are executed one after another, when each middleware calls next.

    if(!this.isModified("password")) return next(); // chack the password was modifiel are not 

    this.password = bcrypt.hash(this.password,10)
    next()
})



userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User",userSchema);
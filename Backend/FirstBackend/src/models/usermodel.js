import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
    fullName: {
        type : String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    
    password: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },

},
{
    timestamps: true,
},

);

const User = mongoose.model(userSchema,"User");

export default User;
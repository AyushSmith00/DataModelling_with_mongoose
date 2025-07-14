import mongoose from "mongoose";

const userData = new mongoose.Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: [true, "You hvae to write your username in lower case"]
    },
    gmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: [true,"You have to write your gmail in lower case"]
    },
    password: {
        type: String,
        required: true,
        unique: true,
        min: [6, "minimum 6 letters"],
        max: [12, "maximum is 12 letters"],
    }
    }, {timestamps: true}
)

export const User = mongoose.model("User", userData)
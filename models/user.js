import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    occupation: {
        type: String,
        trim: true,
        default: "Student"
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate: function (value) {
            if(!validator.isEmail(value)){
                return new Error(`${value} is not a valid email`);
            }
        }
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    phone: {
        type: String,
        required: true,
        validate: function (value) {
            if(!validator.isMobilePhone(value)){
                return new Error(`${value} is not a valid phone`);
            }
        }
    },
    image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'USER',
        enum: ['ADMIN', 'MANAGER', 'USER']
    }
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

const User = mongoose.model("User", userSchema);

export default User;
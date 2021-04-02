import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

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
        unique: true,
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
        type: String
    },
    role: {
        type: String,
        default: 'USER',
        enum: ['ADMIN', 'MANAGER', 'USER']
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'DELETED', 'BLOCKED'],
        default: 'ACTIVE'
    }
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

userSchema.pre('save', async function (next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
    }
   next();
});

const User = mongoose.model("User", userSchema);

export default User;
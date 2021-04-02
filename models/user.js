import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
            if (!validator.isEmail(value)) {
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
            if (!validator.isMobilePhone(value)) {
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
        enum: ['ADMIN', 'MANAGER', 'USER', 'SUPER_ADMIN']
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'DELETED', 'BLOCKED'],
        default: 'ACTIVE'
    },
    logins: {
        type: [{
            token: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now()
            },
        }]
    }
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.generateToken = async function () {
    const token = jwt.sign({_id: this._id.toString()}, process.env.JWT_SECRET, {expiresIn: '1d'});
    this.logins = this.logins.concat({token});
    await this.save();
    return token;
}

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;
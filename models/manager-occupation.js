import mongoose from "mongoose";
const Schema = mongoose.Schema;

const managerOccupationSchema = new Schema({
    hostel: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Hostel"
    },
    duration: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['EMPLOYED', 'FIRED', 'ENDED']
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

const ManagerOccupation = mongoose.model("ManagerOccupation", managerOccupationSchema);

export default ManagerOccupation;
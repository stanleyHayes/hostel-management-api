import mongoose from "mongoose";

const Schema = mongoose.Schema;

const managerOccupationSchema = new Schema({
    hostel: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Hostel"
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['EMPLOYED', 'FIRED', 'ENDED', 'DELETED'],
        default: 'EMPLOYED'
    },
    manager: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    assignedBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

const ManagerOccupation = mongoose.model("ManagerOccupation", managerOccupationSchema);

export default ManagerOccupation;
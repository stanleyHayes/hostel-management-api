import mongoose from "mongoose";

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    block: {
        type: String,
        required: true
    },
    bed_count: {
        type: Number,
        required: true
    },
    hostel: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Hostel"
    },
    facilities: {
        type: [{
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }]
    },
    gallery: {
        type: [String]
    },
    main_image: {
        type: String
    }
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});


const Room = mongoose.model('Room', roomSchema);

export default Room;
import mongoose from "mongoose";
import Room from "./room.js";
import RoomOccupation from "./room-occupation.js";

const Schema = mongoose.Schema;

const hostelSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: "User"
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
            },
            image: {
                type: String
            }
        }]
    },
    gallery: {
        type: [String]
    },
    main_image: {
        type: String
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: "Point",
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    address: {
        country: {
            type: String
        },
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        },
        countryCode: {
            type: String
        },
        city: {
            type: String
        },
        zipcode: {
            type: String
        },
        streetName: {
            type: String
        }
    },
    status: {
        type: String,
        enum: ['VACANT', 'DELETED', 'FULL'],
        default: 'VACANT'
    },
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

hostelSchema.post('remove', async function (next) {
    await Room.deleteMany({hostel: this._id});
    await RoomOccupation.deleteMany({hostel: this._id});
    next();
});

hostelSchema.virtual('room_count', {
    localField: '_id',
    foreignField: 'hostel',
    ref: "Room",
    count: true,
    justOne: false
});

hostelSchema.virtual('rooms', {
    localField: '_id',
    foreignField: 'hostel',
    ref: "Room",
    justOne: false
});

const Hostel = mongoose.model('Hostel', hostelSchema);

export default Hostel;
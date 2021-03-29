import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hostelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    block_count: {
        type: String,
        required: true
    },
    manager: {
        type: Schema.Types.ObjectId,
        required: true,
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
        type: "Point",
        coordinates: [Number]
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
    }
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

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
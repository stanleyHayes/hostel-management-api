import Hostel from "../models/hostel.js";
import geocoder from "../utils/geocoder.js";

export const createHostel = async (req, res) => {
    try {
        const {name, facilities, country, city, address} = req.body;

        const decodedAddress = await geocoder.geocode({country, city, address});

        let hostel = await Hostel.create({
            name,
            facilities,
            address: {...decodedAddress[0], country, city},
            location: {coordinates: [decodedAddress[0].longitude, decodedAddress[0].latitude]}
        });

        res.status(201).json({
            message: `${name} created successfully`,
            data: hostel
        });
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}


export const getHostels = async (req, res) => {
    try {
        const match = {};
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const skip = (Number(page) - 1) * Number(limit);
        const hostels = await Hostel.find(match).skip(Number(skip)).limit(Number(limit));
        res.status(200).json({data: hostels, count: hostels.length, message: `Retrieved ${hostels.length} hostels`});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}


export const getHostel = async (req, res) => {
    try {
        let hostel = await Hostel.findById(req.params.id);
        if(!hostel){
            return res.status(404).json({data: null, message: 'Hostel not found'});
        }
        res.status(200).json({data: hostel, message: 'Hostel retrieved'});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}


export const updateHostel = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['name', 'facilities', 'address'];
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}


export const deleteHostel = async (req, res) => {
    try {
        let hostel = await Hostel.findById(req.params.id);
        if(!hostel){
            return res.status(404).json({data: null, message: 'Hostel not found'});
        }
        await hostel.remove();
        res.status(200).json({data: hostel, message: 'Hostel removed'});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}
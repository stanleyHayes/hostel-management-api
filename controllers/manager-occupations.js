import ManagerOccupation from "../models/manager-occupation";

export const createManagerOccupation = async (req, res) => {
    try {
        req.body.assignedBy = req.user;
        const {hostel, startDate, endDate, assignedBy, manager} = req.body;
        const managerOccupation = await ManagerOccupation.create({hostel, startDate, endDate, assignedBy, manager});
        res.status(201).json({data: managerOccupation, message: `Successfully assigned a manager`});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getManagerOccupation = async (req, res) => {
    try {
        const managerOccupation = await ManagerOccupation.findById(req.params.id);
        if (!managerOccupation) {
            return res.status(404).json({data: null, message: `manager role not found`});
        }
        res.status(200).json({data: managerOccupation, message: `Successfully created a review`});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getManagerOccupations = async (req, res) => {
    try {
        const match = {};
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.size) || 10;
        const skip = (page - 1) * limit;
        if (req.params.hostelID) {
            match["hostel"] = req.params.hostelID;
        }
        if (req.params.userID) {
            match["manager"] = req.params.userID;
        }
        const managerOccupations = await ManagerOccupation.find(match).skip(skip).limit(limit);
        res.status(200).json({
            data: managerOccupations,
            message: `Successfully retrieved ${managerOccupations.length} managerial assignments`
        });
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const updateManagerOccupation = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['hostel', 'startDate', 'endDate', 'status', 'manager'];
        const isAllowed = updates.every(update => allowedUpdates.includes(update));
        if (!isAllowed) {
            return res.status(400).json({message: 'Updates not allowed', data: null});
        }
        const managerOccupation = await ManagerOccupation.findById(req.params.id);
        for (let key of updates) {
            managerOccupation[key] = req.body[key];
        }
        await managerOccupation.save();
        res.status(200).json({data: managerOccupation, message: `Successfully updated`});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const deleteManagerOccupation = async (req, res) => {
    try {
        const managerOccupation = await ManagerOccupation.findById(req.params.id);
        if (!managerOccupation) {
            return res.status(404).json({data: null, message: `manager role not found`});
        }
        managerOccupation.status = 'DELETED';
        await managerOccupation.save();
        res.status(200).json({data: managerOccupation, message: `Successfully deleted a review`});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}
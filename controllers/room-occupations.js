export const createRoomOccupation = async (req, res) => {
    try {
        res.status(201).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getRoomOccupations = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getRoomOccupation = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const updateRoomOccupation = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}



export const deleteRoomOccupation = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
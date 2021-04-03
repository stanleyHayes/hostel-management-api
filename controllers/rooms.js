export const createRoom = async (req, res) => {
    try {
        res.status(201).json({message: 'Successfully created a room!!!', data: {}});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const getRooms = async (req, res) => {
    try {
        res.status(200).json({message: 'Successfully created a room!!!', data: {}});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const getRoom = async (req, res) => {
    try {
        res.status(200).json({message: 'Successfully created a room!!!', data: {}});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const updateRoom = async (req, res) => {
    try {
        res.status(200).json({message: 'Successfully created a room!!!', data: {}});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const deleteRoom = async (req, res) => {
    try {
        res.status(200).json({message: 'Successfully created a room!!!', data: {}});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
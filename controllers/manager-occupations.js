export const createManagerOccupation = async (req, res) => {
    try {
        res.status(201).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getManagerOccupations = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getManagerOccupation = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const updateManagerOccupation = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}



export const deleteManagerOccupation = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
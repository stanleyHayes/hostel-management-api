export const createComplaint = async (req, res) => {
    try {
        res.status(201).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getComplaints = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getComplaint = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const updateComplaint = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}



export const deleteComplaint = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
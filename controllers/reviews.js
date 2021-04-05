export const createReview = async (req, res) => {
    try {
        res.status(201).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getReviews = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getReview = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const updateReview = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}



export const deleteReview = async (req, res) => {
    try {
        res.status(200).json({data: {}, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}
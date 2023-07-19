import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food: {type: mongoose.Types.ObjectId,
        ref: "Foods"
    
    },
    restaurant: {type: mongoose.Types.ObjectId,
        ref: "Restaurant"
    
    },
    user: {type: mongoose.Types.ObjectId,
        ref: "User"
    
    },
    rating: {type: Number, required: true},
    reviewText: {type: String, required: true},
    isRestaurantReview: Boolean,
    isFoodReview: Boolean,
    photos: [{
        type: mongoose.Types.ObjectId,
        ref: "Images"
    }],
    
});

export const ReviewModel = mongoose.model("Review", ReviewSchema);
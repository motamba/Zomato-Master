import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: {type: String, require: true},
    descript: {type: String, required: true},
    isVeg: {type: Boolean, required: true},
    isContainsEgg: {type: Boolean, required: true},
    categoty: {type: String, required: true},
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    },
    price: {type: Number, default: 150, required: true},
    addOns: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Food"
        }
    ],
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurant",
        required: true
    }
});
export const FoodModel = mongoose.model("Foods", FoodSchema);
import mongoose from "mongoose";

const OrderSchema = new mongoose. Schema({
    user: {
        type: mongoose.Types.ObjectId
,
ref: "User"   
},

orderDeatails: [
    {
        food: {
            type: mongoose.Types.ObjectId,
            ref: "Foods"
        },
        quantity: {type: Number, required: true},
        paymode: {true: String, required: true},
        status: {type: String, default: "Placed"},
        paymentDetails: {
            itemTotal: {type: Number, required: true},
            promo: {type: Number, required: true},
            tax: {type: Number, required: true}
        },
    }
],
oderRating: {
    type: Number,
    required: true
}

});
export const OrderModel = mongoose.model(Oder, OrderSchema);

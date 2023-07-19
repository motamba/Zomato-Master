import express from "express";
import passport from "passport";


import {OrderModel} from "../../database/allModels";

const Router = express.Router();

/*
Route          /
Des            Get all orders based on id
Params         id
Access         Public
Method         GET
*/

Router.get("/: id", passport.authenticate("jwt", {session: false}), async(req, res) => {
    try{
        const { id } = req.params;
        const getOrders = await OrderModel.findOne({user: id});

        if(!getOrders) {
            return res.status(404).json({error: "user not found"});
            
        }

    } catch (error) {
        return res.status(500).json({error: error.message});
      
    }
});

/*
Route          /new
Des            Add new order
Params         id
Access         Public
Method         POST
*/

Router.post("/new/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: id
            },
            {
                $push: {orderDetails: orderDetails}
            },
            {
                new: true

            }
        );

        return res.json({order: addNewOrder});

    }catch (error) {
        return res.status(500).json({error: error.message});

    }
});

export default Router;
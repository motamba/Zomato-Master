import express from "express";


import {ReviewModel} from "../../database/allModels";

const Router = express.Router();

/*
Route          /new
Des            Add new review
Params         none
Body           Review object
Access         Public
Method         POST
*/

Router.get("/new", async(req, res) => {
    try{
        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({review: "Successfully Created Review"});

    } catch (error) {
        return res.status(500).json({error: error.message});
      
    }
});

/*
Route          /delete
Des            Delete a review
Params         id
Access         Public
Method         DELETE
*/

Router.get("/delete/: id", async(req, res) => {
    try{
        const { id } = req.params;

        await ReviewModel.findByIdAndDelete(id);

        return res.json({review: "Successfully Deleted Review"});

    } catch (error) {
        return res.status(500).json({error: error.message});
      
    }
});

export default Router;